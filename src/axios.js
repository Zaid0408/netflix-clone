import axios from "axios";

const instance=axios.create({
    baseURL:"https://api.themoviedb.org/3"
});
// Creating an ainstance of axios
//combine this with requests.js data for api calls
// instance.get(/foobar); will combine base url with foobar
// example: https://api.themoviedb.org/3/foobar
export default instance;
// oly one deafult export allowed
// makes an alias of axios so axios can directly be used