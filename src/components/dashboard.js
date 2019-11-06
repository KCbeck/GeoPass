import React,{ Component } from 'react';
// import { Route } from 'react-router-dom';
import WeatherApp from '../WeatherApp';



class dashboard extends Component {
render(){
    return(
        <container>
        <div>Dashboard</div>
        <WeatherApp />
          {/* <holiday /> */}
      {/* <Route path="/weatherApp" exact component={WeatherApp} /> */}
     </container>










    )
}

};
export default dashboard;