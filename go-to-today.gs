// based loosely on
// https://stackoverflow.com/questions/62937016/scroll-through-the-spreadsheet-to-todays-date-using-google-app-scripts

function goToToday() {
  const ss = SpreadsheetApp.getActive();
  const sh = ss.getSheets()[0];

  // NOTE: you will probably need to change yearCell.
  
  const yearCell = 'h1'
  const shYear = sh.getRange(yearCell).getValues()[0][0];
  const today = new Date();
  const todaysMonthName = Utilities.formatDate(today, Session.getScriptTimeZone(), 'MMMM');
  const todaysDayOfMonth = today.getDate();

  // console.log('today is', todaysMonthName, todaysDayOfMonth);

  if (shYear !== today.getFullYear()) {
    console.log(`wrong year, exiting.  expected ${today.getFullYear()}, got ${shYear}`);
    return;
  }

  const monthRow = 1;
  const dayRow = 2;
  
  // NOTE: you will probably need to change startColumn to a much lower number.
  
  const startColumn = 376;
  const endColumn = sh.getLastColumn();
  let isInMonth = false;
  let monthCellValue;
  let dayCellValue;
  let monthName;

  for (let column = startColumn; column < endColumn; column++) {
    monthCellValue = sh.getRange(monthRow, column).getValues()[0][0];
    if (monthCellValue.constructor === Date) {
      monthName = Utilities.formatDate(monthCellValue, Session.getScriptTimeZone(), 'M');
    } else {
      monthName = String(monthCellValue).trim();
    }
    if (monthName) {
      // console.log('month name', monthName);
      isInMonth = monthName === todaysMonthName;
      // if (isInMonth) {
      //   console.log('found today\'s month');
      // }
    }
    if (isInMonth) {
      dayCellValue = sh.getRange(dayRow, column).getValues()[0][0];
      // console.log('day of month', dayCellValue, `(${todaysDayOfMonth})`);
      if (dayCellValue === todaysDayOfMonth) {
        // scroll to today's date.
        sh.getRange(dayRow, column).activate();
        return;
      }
    }
  }

}

function isTrigger(funcName) {
  if (funcName) {
    var allTriggers = ScriptApp.getProjectTriggers();
    for (let i = 0; i < allTriggers.length; i++) {
      if (funcName == allTriggers[i].getHandlerFunction()) {
        return true;
      }
    }
  }
  return false;
}

function createOnOpenTrigger() {
  const ss = SpreadsheetApp.getActive();
  if (!isTrigger('goToToday')) {
    ScriptApp.newTrigger('goToToday').forSpreadsheet(ss.getId()).onOpen().create();
  }
}

createOnOpenTrigger();
