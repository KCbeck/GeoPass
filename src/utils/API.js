import axios from 'axios';

export default {
    getHolidayInfo: function(query) {
        console.log('made it into get holiday info')
        return axios.get(query);
    }
 }