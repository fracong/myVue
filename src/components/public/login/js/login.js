import axios from 'axios'
export const httpIndex = "http://10.8.0.175:8081";
export var loginFunc = function (loginName,password){
  axios
  .get(httpIndex+"/fracongapi/testuser/select/"+loginName+"/"+password)
  .then((response) => {
    //console.log(response.data);
    window.location.href= httpIndex+"/index";
  }).catch(function (error) {
    console.log(error);
  })
}
