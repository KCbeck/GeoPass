import axios from 'axios';

export default {
    getHolidayInfo: function() {
        console.log('made it into get holiday info')
        return axios.get('https://calendarific.com/api/v2/holidays?&api_key=e109786119f75a638812ddfabaa96bf150902d3d&country=US&year=2019')
    }
 }