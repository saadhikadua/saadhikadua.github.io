const TRACKER_SHEET_NAME = 'Sheet1'; // name of the sheet
const WATCHED_COLUMNS = [2, 3, 4, 5]; // columns that need the guardrails (A-1, B-2, C-3)
const NOTIFICATION_EMAIL = '*****'; // email 
const NOTE_LOG_SHEET_NAME = '_note_log_fast';

function sendEmailOnEdit(e) {
  if (!e) return;

  const range = e.range;
  const sheet = range.getSheet();
  if (sheet.getName() !== TRACKER_SHEET_NAME) return;

  const col = range.getColumn();
  const row = range.getRow();
  if (!WATCHED_COLUMNS.includes(col)) return;

  const currentNote = range.getNote();

  if (!currentNote) {
    const oldValue = e.oldValue !== undefined ? e.oldValue : '';
    range.setValue(oldValue);
    SpreadsheetApp.getActive().toast(
      'Please add a Note to this cell explaining the change, then edit again.'
    );
    return;
  }

  const logSheet = getOrCreateNoteLogSheetFast_();
  const logRowIndex = getOrCreateLogRowForRow_(logSheet, row);
  const logColIndex = 1 + WATCHED_COLUMNS.indexOf(col) + 1; // row number in col1, notes start at col2

  const prevNote = logSheet.getRange(logRowIndex, logColIndex).getValue();

  if (prevNote && prevNote === currentNote) {
    const oldValue = e.oldValue !== undefined ? e.oldValue : '';
    range.setValue(oldValue);
    SpreadsheetApp.getActive().toast(
      'Please update the Note (change its text) for this new edit.'
    );
    return;
  }

  const newValue = range.getValue();
  const oldValue = e.oldValue !== undefined ? e.oldValue : '(blank)';

  const now = new Date();
  const ts = Utilities.formatDate(
    now,
    Session.getScriptTimeZone(),
    'yyyy-MM-dd HH:mm'
  );
  const stampedNote = `[${ts}] ${currentNote}`;
  range.setNote(stampedNote);

  logSheet.getRange(logRowIndex, logColIndex).setValue(stampedNote);

  const columnHeader = sheet.getRange(1, col).getValue();
  const team = sheet.getRange(row, 1).getValue();
  const deliverable = sheet.getRange(row, 2).getValue();

  sendNoteChangeEmailFast_({
    to: NOTIFICATION_EMAIL,
    sheetName: sheet.getName(),
    row,
    columnHeader,
    team,
    deliverable,
    oldValue,
    newValue,
    note: stampedNote
  });
}

function getOrCreateNoteLogSheetFast_() {
  const ss = SpreadsheetApp.getActive();
  let sheet = ss.getSheetByName(NOTE_LOG_SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(NOTE_LOG_SHEET_NAME);
    const headers = ['tracker_row'];
    WATCHED_COLUMNS.forEach(c => headers.push('col' + c + '_note'));
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.hideSheet();
  }
  return sheet;
}

// ensure there is one log row per Tracker row, and return its row index
function getOrCreateLogRowForRow_(logSheet, trackerRow) {
  const lastRow = logSheet.getLastRow();
  if (lastRow < 2) {
    // no data yet
    logSheet.getRange(2, 1).setValue(trackerRow);
    return 2;
  }

  const range = logSheet.getRange(2, 1, lastRow - 1, 1);
  const values = range.getValues();

  for (let i = 0; i < values.length; i++) {
    if (values[i][0] === trackerRow) {
      return 2 + i;
    }
  }

  const newRowIndex = lastRow + 1;
  logSheet.getRange(newRowIndex, 1).setValue(trackerRow);
  return newRowIndex;
}

function sendNoteChangeEmailFast_(data) {
  const subject =
    `[Sheet Change] ${data.team || 'Unknown Team'} – ${data.deliverable || 'Unknown Deliverable'}`;

  const bodyLines = [
    `A governed field was changed in the tracker sheet "${data.sheetName}".`,
    ``,
    `Team: ${data.team || '(not set)'}`,
    `Deliverable: ${data.deliverable || '(not set)'}`,
    `Row: ${data.row}`,
    `Field: ${data.columnHeader}`,
    `Old value: ${data.oldValue}`,
    `New value: ${data.newValue}`,
    ``,
    `Current note on the cell (latest change first):`,
    `${data.note}`,
    ``,
    `This notification was sent automatically from the dependency tracker.`
  ];

  MailApp.sendEmail({
    to: data.to,
    subject,
    body: bodyLines.join('\n')
  });
}
