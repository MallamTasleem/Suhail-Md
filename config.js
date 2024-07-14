const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349117635043";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_13_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODgsXG4gICAgICAgIDg1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzksXG4gICAgICAgIDk2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOCxcbiAgICAgICAgMjE5LFxuICAgICAgICA2NixcbiAgICAgICAgMjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzAsXG4gICAgICAgIDcyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDM1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE3LFxuICAgICAgICA4MyxcbiAgICAgICAgOTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDg5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTUyLFxuICAgICAgICA2NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMixcbiAgICAgICAgMTIzLFxuICAgICAgICA4NixcbiAgICAgICAgNjUsXG4gICAgICAgIDUxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjE4LFxuICAgICAgICA2NixcbiAgICAgICAgNzgsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTksXG4gICAgICAgIDgxLFxuICAgICAgICAxODksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIzLFxuICAgICAgICA2MixcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjIyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDkzLFxuICAgICAgICAzLFxuICAgICAgICAxNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTI1LFxuICAgICAgICA4NixcbiAgICAgICAgMzgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDksXG4gICAgICAgIDI2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY5LFxuICAgICAgICA2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk2LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTMsXG4gICAgICAgIDI4LFxuICAgICAgICA1OSxcbiAgICAgICAgODgsXG4gICAgICAgIDUzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTU5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM1LFxuICAgICAgICA5NyxcbiAgICAgICAgMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDk3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDQyLFxuICAgICAgICAxNixcbiAgICAgICAgMTI2LFxuICAgICAgICA5MixcbiAgICAgICAgMTEsXG4gICAgICAgIDExLFxuICAgICAgICAyMixcbiAgICAgICAgMTkxLFxuICAgICAgICAyNixcbiAgICAgICAgODYsXG4gICAgICAgIDMzLFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDczLFxuICAgICAgICAxNjAsXG4gICAgICAgIDcsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUzLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSU5rTTBSdkFFNk1GZVduY2hWZ2pJcmppWktvT1JRNkRKc1ZneG44TXY5TT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNXRUSVp4WEJURGlKaFRTSG01N0d1UVwiLFxuICBcInBob25lSWRcIjogXCI5NjE0NjBjNy02ZTM1LTQ3ZWQtYjM3NC0wM2M0YmE0MjE0ZTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU0LFxuICAgICAgNDAsXG4gICAgICAyMTQsXG4gICAgICAyMDMsXG4gICAgICAxMzgsXG4gICAgICAxMDYsXG4gICAgICA1NyxcbiAgICAgIDI1MixcbiAgICAgIDU5LFxuICAgICAgNDcsXG4gICAgICA5MyxcbiAgICAgIDU3LFxuICAgICAgMTc0LFxuICAgICAgNDMsXG4gICAgICA4OSxcbiAgICAgIDM0LFxuICAgICAgNjgsXG4gICAgICAxMyxcbiAgICAgIDgzLFxuICAgICAgMTA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MSxcbiAgICAgIDE5NSxcbiAgICAgIDIyMSxcbiAgICAgIDgzLFxuICAgICAgMjMsXG4gICAgICAxMjAsXG4gICAgICAxMjcsXG4gICAgICA5MyxcbiAgICAgIDg0LFxuICAgICAgNzEsXG4gICAgICAyMjAsXG4gICAgICA0MixcbiAgICAgIDIxMCxcbiAgICAgIDU2LFxuICAgICAgMTIwLFxuICAgICAgMjI5LFxuICAgICAgMTcxLFxuICAgICAgMTUsXG4gICAgICA1MCxcbiAgICAgIDE3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxWDVERERXQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTExNzYzNTA0MzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTWFsbGFtIFRhc2xlZW1cIixcbiAgICBcImxpZFwiOiBcIjcxMjQ1MzAzNDE5MTA5OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEQ3L1kwQ0VLYjF6YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJmOW4zakREZ25ITmMvNHFkUDg4RlpFVUMxQkNpUk5tOTNJcHcwZFhjc1gwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm5valVoS1hERnh0cEI4bDJTZWZxVi95SUxzd2JrNVozbWg2R0MwM3ZNWmZWUGtyQTJSQlM1QWphSEJ2MDFkM1dDY2RGUU1JdnpOb1Z1VEdyMmdPY0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVjUCtjUC9XMzlOSFZxQi9PN0RremVDTms2T3FTc0w0dUplL1hDbDdzZUJXTHJrNDcyamZUd1dlVUZCcWFweHJCckdyQ3A3VjY2VGhnUFVYazVQSUNRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMTc2MzUwNDM6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwOTQxMjI3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
