var POST_URL = "WEBHOOKURL"

function onEdit(event){
  var sheet_name = event.range.getSheet().getName();
  var rangeNotation = event.range.getA1Notation();
  var oldValue = event.oldValue;
  var value = event.value;
  var items = [];

  // If you only want to watch a certain column
  var column_id = 3
  // If not the column you want to watch
  if (column_id < event.range.getColumn() || column_id > event.range.getLastColumn ){
      // Do nothing
      return;
  }

  if (value == undefined && oldValue == undefined){
    if (rangeNotation.includes(':')){
      reason = "Multiple Cells edited";
    }
    else{
      reason = "Cell value deleted";
    }
  }
  else{
    if (oldValue == undefined){
      oldValue = "Empty cell";
    }

    if (value == undefined){
        value = "Empty cell";
    }
    reason = oldValue + " -> " + value
  }

  items.push({
      "name": "An edit was made",
      "value": "Edited sheet: "+ sheet_name +"\nEdited range: " + rangeNotation + "\nEdit made: "+ reason,
      "inline": false
  });

  var date = Utilities.formatDate(new Date(), SpreadsheetApp.getActive().getSpreadsheetTimeZone(), "EEE, d MMM yyyy HH:mm:ss Z")



  var options = {
        "method": "post",
        "headers": {
            "Content-Type": "application/json",
        },
        "payload": JSON.stringify({
            "content": "‌",
            "embeds": [{
                "title": "Title Goes here",
                "color": 33023,
                "fields": items,
                "footer": {
                    "text": "Timestamp (UTC): "+date
                }
            }]
        })
    };

    UrlFetchApp.fetch(POST_URL, options);
}
