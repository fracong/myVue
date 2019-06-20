import axios from 'axios'
import {httpIndex, httpServiceIndex} from '../../constant.js'
export var loginFunc = function (loginName,password){
  axios
  .get(httpServiceIndex+"/testuser/select/"+loginName+"/"+password)
  .then((response) => {
    //console.log(response.data);
    window.location.href= httpIndex+"/index";
  }).catch(function (error) {
    console.log(error);
  })
}
