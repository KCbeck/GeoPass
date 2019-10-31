console.log ("keys loaded");
// const dotenv = require('dotenv');
// const env = dotenv.config().parsed;


// exports.apiweather = {
//     key: process.env.APIkeyWeather
// };
//  exports.holiday = {
//      key: process.env.apikey_holidays
//  };

 export default {
     apiweather: process.env.REACT_APP_APIkeyWeather,
     holiday: process.env.REACT_APP_apikey_holiday
 }