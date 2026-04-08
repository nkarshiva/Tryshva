const SHEET_ID = "1ulECrIGzWGP5ENUnuxWAja53IOBlcR4mIc4g6nugcnU";

function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({ ok: true, message: "Apps Script is live" }),
  ).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
  const params = e.parameter || {};

  if (params.website) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: true, spam: true }),
    ).setMimeType(ContentService.MimeType.JSON);
  }

  const nextRow = sheet.getLastRow() + 1;
  const values = [[
    new Date(),
    params.name || "",
    params.businessName || "",
    params.email || "",
    String(params.phone || ""),
    params.message || "",
  ]];

  sheet.getRange(nextRow, 1, 1, values[0].length).setValues(values);
  sheet.getRange(nextRow, 5).setNumberFormat("@");

  return ContentService.createTextOutput(
    JSON.stringify({ ok: true }),
  ).setMimeType(ContentService.MimeType.JSON);
}
