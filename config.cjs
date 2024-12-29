// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU5tdHBOeFZKN085emc3OHdpdXlUK1VLOHgyNzJuejhlaVc1QXg5Y2Exaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQTAzMGk0amFkYlV0QnA4a0Uwa3plRUpsUnlIMzIvYzVyZ3l1Y2lZS1l4MD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSjc0ckh0WW1QaVRBUmk4NDZIRzZwejVUZWF2MmlJYlRTTmhJNFZOZzJ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQY0FoZ3NMMFdKei9wdGsvWVpyMTkwcmdKYlJXakhKd2E1OTZnUnJoVWh3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdDaDZiZnFpYUF1MnpEZFdQNVQzTWI0SWZPRXEvblFRcWNKWHBna2FxVTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNUS0ZrRGFLYnlwUy9zTWNVWlhIb2M5dWNiVzNpNjFjaXhIWDNwQ0J4WFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0ZjYmxnSng1Y1BrdS9RSWtIeU43SkJOT3B0ZzNHUWZvOVk0ZnN6WlBGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUThvOFM2Nk9UWDM4eDFvYmFkUDlCeVMwM2xZaWhSL3JSdEtXQVk5bXUxTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNMT2tCcE0vZ256MDZUb2VPZEFCNzJON1hUWkt5MENmZytkclBYM3BHaFErTFFrV1c4TzJjYlhwK2YraENjaHllOHVKSXhvUURnVm81dktSSS9BVGlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg1LCJhZHZTZWNyZXRLZXkiOiJRNWFWSEYramhrZm5yTEE0bHhQa240ZkN3bHhITVZTSDBYS1J1Q0JtUENJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NjcwODg1NTYwOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBODczNTIzMEY3OEY5Q0ZDMDMyM0UzQjM3NEJFRkVDMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM1NDcxMDUwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIyX1piTGxwRVNNcUZKLWVILTVnc2NRIiwicGhvbmVJZCI6IjJlMWE3NGRiLTEyYTEtNDk0Zi04YTQ3LTlmZTRlMDU0MjU2OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnbGZraFJzcmZPOVF6bFMraDQyeklQTndpVkk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYTZETlBCNURjQTlDM1dyZzFVcDA3WmNHOHB3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNaTllaTlJRIiwibWUiOnsiaWQiOiIyNTY3MDg4NTU2MDg6MThAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09lSGc0WUJFTG5meExzR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlVJU1I3bGJCU3hRNDZhQnZmSHM3NDdpeUljeWN5dHZ2NWVLVkhOVDkrUlU9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImcwbTYzVWJFZ2YzcGRKNjFDNWxuc01QSnJiMXJaL3N2UWFxL2tuemVWaXlaQitmRVltaitKYWFIUklTalpaaURqTERtUFFUdXdkbWwvbmpVcWlXZEJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ5MGEyMHNSd1Bya0I1NytyMFg5WGRTajZ6dFcyS3lSTTBEaHhJT2oxQmNZVDd6WDZZOHRnckUzUGR6N1BwREU5UXZwOW1IaUFveHovcThaeDFkMXZoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NjcwODg1NTYwODoxOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWQ0VrZTVXd1VzVU9PbWdiM3g3TytPNHNpSE1uTXJiNytYaWxSelUvZmtWIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1NDcxMDQ3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNNYiJ9",
  PREFIX: process.env.PREFIX || '.',
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY !== undefined ? process.env.AUTO_STATUS_REPLY === 'true' : true,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || '',
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "✪⏤͟͞★⃝ꪶ‎FrediEzra𖥘✪͜͡➺",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "256708855608",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};


module.exports = config;
