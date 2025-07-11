const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://res.cloudinary.com/dtjjgiitl/image/upload/q_auto:good,f_auto,fl_progressive/v1752221911/ygjvefkwa055biwyirnk.jpg", 
ALIVE_MSG: process.env.ALIVE_MSG || "HELLOW THIS IS DEW CYBER AREA..! im alive now💀",
};
