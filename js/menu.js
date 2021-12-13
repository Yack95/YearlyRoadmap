function onOpen(){
    loadMenu_();
}
function loadMenu_(){
    var ui = SpreadsheetApp.getUi();
    var menu = ui.createMenu("Actions");
    menu.addItem("Send Yearly Roadmap", "sendTableByEmail")
    menu.addItem("Preview", "doGet")
    .addToUi()
}