import http from 'k6/http';
import {check} from 'k6';

//import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
    vus: 1000,
    duration: "30m",
    //iterations: 50,
  };

export default function () {

    const BASE_URL = 'https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4'

    const HEADERS = {
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ1cm46b2lkOmZoaXIiLCJjbGllbnRfaWQiOiI3N2M1YWYwNy0yNzg1LTQzODMtOGU4Yi0yN2U2MTgzZWI0YzYiLCJlcGljLmVjaSI6InVybjplcGljOk9wZW4uRXBpYy1jdXJyZW50IiwiZXBpYy5tZXRhZGF0YSI6InZpTVUtOHY1UG5pQW1sNGcyQWc0aU5QdnRwS2d6QTh6SWpkUTJiMVJyZnZnbWdoYkJRTG56Y0ZWS195SlJDQkZSanhnOXRqTnFaWm1rNDBFVmZnbkNTamJaeFBud0NyeFJRWExKN1haNVVZcmVhVXJoQjlSSE1HWmEwVUEwTWo0IiwiZXBpYy50b2tlbnR5cGUiOiJhY2Nlc3MiLCJleHAiOjE3MDEyNDk3MTYsImlhdCI6MTcwMTI0NjExNiwiaXNzIjoidXJuOm9pZDpmaGlyIiwianRpIjoiZTJmNjg2NDgtMzQ2My00Njk2LThmMjQtYTRjOWM0NmY2N2JkIiwibmJmIjoxNzAxMjQ2MTE2LCJzdWIiOiJlNmF3Ni1SSnVLTzJtYnFqbGVLdmdWUTMifQ.FzQDUOjKM9Jd2KgDz1LPMqb5zQ2S95XgoW5mokNGDGHYqRaarFv7eDMvJon7XtceYJDGa0LuEcooyJr9EN4rSAn-mrA_XRjor70mAe1BPgphVoh0zBwoasFIArFO77Nn9s2Sv3_DOYAPW5BGP5KuN1L--JPfRPBazKOTcQoYUyVfmHY3QjDUbWBrb6sWV0l9KF8j1i8-XSwa6XbEwqnCGj4--d-IMLDRBlv88P6H7IlrQXk0cQU020ApuxEntbFtM3dxPofr4zLVlUF3J3ha898oFD3YNYt0PM-SDr6sIAZRdOTHrj-dWJwMbPYyihVRtu_pKIaZ-cfhFvodMtVLyA'
    }
  
    const REQ1 = {
    method: 'GET',
    url: BASE_URL +'/Patient?given=Theodore&family=Mychart&birthdate=1948-07-07',
    params: HEADERS
  };

  const REQ2= {
    method: 'GET',
    url: BASE_URL +'/Encounter?patient=e63wRTbPfr1p8UW81d8Seiw3&date=ge2006-02-15',
    params: HEADERS
  };

  const REQ3 = {
    method: 'GET',
    url: BASE_URL +'/Encounter?_id=elDUvqzSoSGPzvnZLeKScnQ3',
    params: HEADERS
  };

  const REQ4 = {
    method: 'GET',
    url: BASE_URL +'/Condition?patient=e63wRTbPfr1p8UW81d8Seiw3&encounter=e8Po2lWscZLfVWqUPguA9bQ3',
    params: HEADERS
  };

  const REQ5 = {
    method: 'GET',
    url: BASE_URL +'/CarePlan?patient=eTRO.ZVFuhUxXw6HzTAjtfg3&category=409073007',
    params: HEADERS
  };
  
  
const RESPONSES = http.batch([REQ1, REQ2, REQ3, REQ4, REQ5]);

  

  check(RESPONSES[0], {
    'Is status 200 of req 1' : (r) => r.status == 200,
  });

  check(RESPONSES[1], {
    'Is status 200 of req 2' : (r) => r.status == 200,
  });

  check(RESPONSES[2], {
    'Is status 200 of req 3' : (r) => r.status == 200,
  });

  check(RESPONSES[3], {
    'Is status 200 of req 4' : (r) => r.status == 200,
  });

  check(RESPONSES[4], {
    'Is status 200 of req 5' : (r) => r.status == 200,
  });
}


// export function handleSummary(data) {
//   console.log("creating html report*****************")
//   return {
//     "complete_Report.html": htmlReport(data),
//   };

// }
