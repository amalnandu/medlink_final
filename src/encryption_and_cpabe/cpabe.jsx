import axios from "axios";
import {getData, setData} from "../storage/session"
import { decryptUsingPassword, encryptUsingPassword } from "./encryption";

export function generateKey(attributes){
 
  const ip='http://127.0.0.1:8000/generatekey';

  //axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
  let password=getData('password');

  //check if input password is null then encrypt with default "password"
  if(password==null){
    password='password'
  }

  //calls a post request to cpabe server running on the 8000 port
  axios.post(ip, {"attributes":attributes}, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(function (response) {
      
      const json=JSON.stringify(response.data)

      //session stores the cpabe data
      setData('cpabe',encryptUsingPassword( json,password))
      
    })
    .catch(function (error) {
      console.log(error);
  });
}