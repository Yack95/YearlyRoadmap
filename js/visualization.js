function doGet() {
  //connection with list of names/emails
  var sheetInvitees = SpreadsheetApp.getActiveSpreadsheet()
  var receivers = sheetInvitees.getSheetByName("SendInvitation");
  var receiverRange = receivers.getRange(2,1, receivers.getLastRow()-1, 1).getValues();
 
  var receiverName = 0 
 
  
  var subject = "The last update_Yearly Roadmap"
  
  var activeRange = receivers.getActiveCell();
  var rowNumber = activeRange.getRow()-2;
  
  var row = receiverRange[rowNumber]//receiverRange[0]
  
  
  //conection HTML
  var htmlOutput = HtmlService.createTemplateFromFile("html/table")
  var categories = loadCategories()
  htmlOutput.categories = categories
  var subject = ['Hello'," ",row[receiverName]].join("");
  
  htmlOutput.fn = row[receiverName];
  

  var htmlMessage = htmlOutput.evaluate();
 
  htmlMessage.setWidth(1800)
  htmlMessage.setHeight(1000)
  SpreadsheetApp.getUi()
  .showModalDialog(htmlMessage, subject)
}

function sendTableByEmail(){
  var receivers = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("SendInvitation");
  var receiverRange = receivers.getRange(2,1, receivers.getLastRow()-1, receivers.getLastColumn()).getValues();
  
  var receiverName = 0 
  var receiverEmail = 1
  
  var subject = "The last update_Yearly Roadmap"

  receiverRange.forEach((row) => {
    
    var htmlOutput = HtmlService.createTemplateFromFile("html/table")
    var categories = loadCategories()
    htmlOutput.categories = categories
    htmlOutput.fn = row[receiverName];
    const emailTemplate = htmlOutput.evaluate().getContent();
    GmailApp.sendEmail(
      row[receiverEmail],
      subject,
      "Your email does not support HTML",
      {
        htmlBody:emailTemplate
      }
    )
  })
}



