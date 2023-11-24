import http from 'k6/http';
import {check} from 'k6';

//import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
    vus: 1000,
    duration: "10m",
    //iterations: 50,
  };

export default function () {

    const URL = 'https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Patient?given=Theodore&family=Mychart&birthdate=1948-07-07'

    const HEADERS = {
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer '
    }
  
  const RES = http.get(URL, HEADERS);

  check(RES, {

    'Is status 200': (r) => r.status == 200,

  });
  

}


// export function handleSummary(data) {
//   console.log("creating html report*****************")
//   return {
//     "single_requests_complete_report.html": htmlReport(data),
//   };

// }
