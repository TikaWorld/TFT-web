import axios from 'axios';

const url = 'http://127.0.0.1:5000/';

export async function postField(field){
  const header = {"Access-Control-Allow-Origin": "*"};
  let r
  await axios.post(url+'field', {field: field}, {headers: header})
  .then(function (response) {
    r = response.data
  }).catch(function (error) {
  }).then(function() {
  });
  return r
}

export async function getLog(field){
  const header = {"Access-Control-Allow-Origin": "*"};
  let r
  await axios.post(url+'field/log', {field: field}, {headers: header})
  .then(function (response) {
    r = response.data
  }).catch(function (error) {
  }).then(function() {
  });
  return r
}