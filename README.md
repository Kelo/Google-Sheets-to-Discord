# Google-Sheets-to-Discord
This script will notify you of changes to your google sheet through discord, using a customizable discord embed.

<img src="https://user-images.githubusercontent.com/32295800/105560255-36c78180-5d0b-11eb-8042-c4325676fead.png" width="250"/>

## Setup
1. Go to the script editor on your google sheet
2. Paste the contents of the ```main.gs``` file into the script editor
3. Open Discord, go to 'Server Settings' > 'Integrations' > 'Webhooks'
4. Create a 'New Webhook' & fill in all the fields necessary. 
5. Copy the webhook link & paste this link into the "WEBHOOKURL".
6. In the google sheet script editor, using the left hand side menu, navigate to 'Triggers' and add a new trigger as shown in the image below

<img src="https://user-images.githubusercontent.com/32295800/105559782-f9aebf80-5d09-11eb-8933-e51837ddf3b7.png" width="400"/>

Make sure to edit a range to test it.

# Additional Options
This section will showcase different options that you can implement to customize your embeds and program behaviour.

## Program Behaviour

#### Only watch a certain column
This addition will allow you to only be notified if edits are made in the specified column. This code should be pasted after the `var items = [];` line.
```javascript
  // If you only want to watch a certain column
  var column_id = 3
  // If not the column you want to watch
  if (column_id < event.range.getColumn() || column_id > event.range.getLastColumn ){
      // Do nothing
      return;
  }

```

## Cosmetic
In this section, we will outline the multiple different cosmetic customizations that you can add to your webhook. You can use any combination of the options displayed below.

#### Colour
This option will allow you to set a colour to your embed. The colour option requires a numerical input instead of hexadecimal.
E.g. Red in Hexadecimal is #FF0000. As a decimal, this would be translated into 16711680.
```javascript
{
  "embeds" :[{
    "title": "TOP TEXT CHANGE THIS IN SCRIPT",
    "fields" : items,
    "color": 16711680
  }]
}
```

### Author
This option adds an author block to the embed. The author block (object) includes three values:
  * name - the name field.
  * url - allows for a hyperlink to be attached to the name.
  * icon_url - avatar displayed.
```javascript
{
  "embeds" :[{
    "title": "TOP TEXT CHANGE THIS IN SCRIPT",
    "fields": items,
    "author": {
      "name": "AUTHOR NAME CHANGE THIS IN SCRIPT",
      "url": "URL CHANGE THIS IN SCRIPT",
      "icon_url": "ICON URL CHANGE THIS IN SCRIPT"
    }
  }]
}
```

### URL
This option binds a url link to the title of your embed.
```javascript
{
  "embeds" :[{
    "title": "TOP TEXT CHANGE THIS IN SCRIPT",
    "fields": items,
    "url": "URL CHANGE THIS IN SCRIPT"
  }]
}
```

### Description
Displays a description for the embed.
```javascript
{
  "embeds" :[{
    "title": "TOP TEXT CHANGE THIS IN SCRIPT",
    "fields": items,
    "description": "DESCRIPTION CHANGE THIS IN SCRIPT"
  }]
}
```

### Image
Displays an image inside of the embed.
```javascript
{
  "embeds" :[{
    "title": "TOP TEXT CHANGE THIS IN SCRIPT",
    "fields": items,
    "image": {
      "url": "URL CHANGE THIS IN SCRIPT"
    }
  }]
}
```

### Thumbnail
Allows for a thumbnail to be displayed in the embed.
```javascript
{
  "embeds" :[{
    "title": "TOP TEXT CHANGE THIS IN SCRIPT",
    "fields": items,
    "thumbnail": {
      "url": "URL CHANGE THIS IN SCRIPT"
    }
  }]
}
```

### Footer icon
An optional customization you can make to footer text, is to add an icon image which will be displayed next to it.
```javascript
{
  "embeds" :[{
    "title": "TOP TEXT CHANGE THIS IN SCRIPT",
    "fields": items,
    "footer": {
      "text": "BOTTOM TEXT CHANGE THIS IN SCRIPT",
      "icon_url": "URL CHANGE THIS IN SCRIPT"
    }
  }]
}
```
