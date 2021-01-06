# Scroll to today in Google sheets

Given a certain spreadsheet structure in google sheets, scroll or jump to the cell corresponding to today's date by focusing or selecting that cell.

Note:  In the code, tou will likely need to change two things:
1. The cell reference to obtain the correct year, it won't probably be cell "h1" for you.
2. The column number to start with.  For some reason, we had a bunch of collapsed columns that I wanted to skip, so I set the starting column number accordingly.  You'll probably want to start with column number `2`, so you'll need to change that variable's value accordingly.

Example Spreadsheet:

![example](https://github.com/dennishall/scroll-to-today-google-sheets/blob/main/OOO-Calendar-Google-Sheets.png?raw=true)
