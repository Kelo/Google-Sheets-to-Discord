var POST_URL = "WEBHOOKURL"

function onEdit(event){
  var sheet_name = event.range.getSheet().getName();
  var rangeNotation = event.range.getA1Notation();
  var oldValue = event.oldValue;
  var value = event.value;
  var items = [];

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
                "title": "TOP TEXT CHANGE THIS IN SCRIPT",
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
