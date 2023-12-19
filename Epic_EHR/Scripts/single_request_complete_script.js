import http from 'k6/http';
import {check} from 'k6';

//import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

// export const options = {
//   discardResponseBodies: true,
//   scenarios: {
//     contacts: {
//       executor: 'per-vu-iterations',
//       vus: 100,
//       iterations: 100,
//       //maxDuration: '10m',
//     },
//   },
// };

export const options = {
  vus: 1000,
  //duration: "1s",
  iterations: 1000,
};
  
export default function () {

    const URL = 'https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Patient?given=Theodore&family=Mychart&birthdate=1948-07-07'

    const HEADERS = {
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ1cm46b2lkOmZoaXIiLCJjbGllbnRfaWQiOiI3N2M1YWYwNy0yNzg1LTQzODMtOGU4Yi0yN2U2MTgzZWI0YzYiLCJlcGljLmVjaSI6InVybjplcGljOk9wZW4uRXBpYy1jdXJyZW50IiwiZXBpYy5tZXRhZGF0YSI6IlAtS0RicERZRDNvUTNHTkZzall4X0dRLTBqNmNOVk5WcE0yLTYyRjcwQTFlRVowSWM0aW9PUkFxdk9pSnI5RU9ScGg4RWIybnVqblNucXRRb25EOHM1TEdtbS1oUmVrOVEwNjZrYjlXa0VhMGdqZE03ZlZHSzM5eGhpdnRxdzdOIiwiZXBpYy50b2tlbnR5cGUiOiJhY2Nlc3MiLCJleHAiOjE3MDEyNTU0OTMsImlhdCI6MTcwMTI1MTg5MywiaXNzIjoidXJuOm9pZDpmaGlyIiwianRpIjoiYzEyZGY3MzEtNDZkZS00OTE1LTk0ODktNjQ2YTdhNTFmNTQ2IiwibmJmIjoxNzAxMjUxODkzLCJzdWIiOiJlNmF3Ni1SSnVLTzJtYnFqbGVLdmdWUTMifQ.iwKMXj5kaRAOfb48RThJQBdwu469ANvCGlALz6BjekdBVZWdv451lW2YKtYkDMKKZFe6E82kq00S2lCoD2wSMAtVBX2kA53KVwBjUA9meGYUUg9EC3Mr2Zb_8Lh_ULrx00A7XNACzP1Ua2gMo-C9_JIImdLx2_UGOT7WB14YwHOs-su_INRQVXoH46kgXiqYrounsUYs1-m9kJ8DK9jIHYr2GA5s_YZAmnI0YpykaPmaUrp1skfgxAVn6826GMFAVXzGGI9bNGtu7mc_Mo7TQ-CvYqS9VXq-UI1bOQq48cqarJFlaEOZs6LMYxAOrTMDPA8rZgKULA97NgoBghry_w'
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
