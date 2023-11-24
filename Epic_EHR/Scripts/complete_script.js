import http from 'k6/http';
import {check} from 'k6';

//import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
    vus: 1000,
    duration: "10m",
    //iterations: 50,
  };

export default function () {

    const BASE_URL = 'https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4'

    const HEADERS = {
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer '
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
//     "MultiReq_SoakTestReportnew.html": htmlReport(data),
//   };

// }
