# Auto scroll to today in Google Sheets

When you open a spreadsheet in Google Sheets, this Google AppsScript will automatically scroll or jump to the cell corresponding to today's date by focusing or selecting that cell.

## Note:
In the code, you will likely need to change two things:
1. The cell reference to obtain the correct year, it won't probably be cell "h1" for you.
2. The column number to start with.  For some reason, we had a bunch of collapsed columns that I wanted to skip, so I set the starting column number accordingly.  You'll probably want to start with column number `2`, so you'll need to change that variable's value accordingly.
3. If your month names are not on row 1, you will need to change that value.
4. If your day numbers are not on row 2, you will need to change that value.

### Google AppsScript is SLOW!  *After* the spreadsheet *fully loads*, it will still be *several seconds* before today's date cell will be selected and scrolled into view.

<br/>

Example Spreadsheet:

![example](https://github.com/dennishall/scroll-to-today-google-sheets/blob/main/OOO-Calendar-Google-Sheets.png?raw=true)
