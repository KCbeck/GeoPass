console.log ("keys loaded");
const dotenv = require('dotenv');
const env = dotenv.config().parsed;


// exports.apiweather = {
//     key: process.env.APIkeyWeather
// };
//  exports.holiday = {
//      key: process.env.apikey_holidays
//  };

 export default {
     apiweather: process.env.APIkeyWeather,
     holiday: process.env.apikey_holidays
 }