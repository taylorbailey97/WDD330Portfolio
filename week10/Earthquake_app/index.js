import { getJSON, getLocation } from './utilities.js';

const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

// &latitude=43.814540699999995&longitude=-111.78491029999999&maxradiuskm=100
const location = getLocation().then(result => {return result});

console.log(location.getCurrentLocation());

const fullUrl = baseUrl + '&latitude=' + location.coords.latitude + '&longitude=' + location.coords.longitude + '&maxradiuskm=100';
