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
  vus: 2000,
  //duration: "1s",
  iterations: 2000,
};
  
export default function () {

    const URL = 'https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/Patient?given=Theodore&family=Mychart&birthdate=1948-07-07'

    const HEADERS = {
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ1cm46b2lkOmZoaXIiLCJjbGllbnRfaWQiOiI3N2M1YWYwNy0yNzg1LTQzODMtOGU4Yi0yN2U2MTgzZWI0YzYiLCJlcGljLmVjaSI6InVybjplcGljOk9wZW4uRXBpYy1jdXJyZW50IiwiZXBpYy5tZXRhZGF0YSI6Im44azlQbFJmMF9PRnhHaV9WbjZwMm5iWkxBejlUUkVFZU9iYnJvQUtpSE5hRlRsMi1QaUtYRzRpWFIwanhiZll6VjVIdGNVMHFBU1JUWVdNbU1hbTQ1S3VhVmJXWl9TZlI5U01sREZ1VkFfOGRTU0lfTmlVWXUwd3h2QnlGUm0xIiwiZXBpYy50b2tlbnR5cGUiOiJhY2Nlc3MiLCJleHAiOjE3MDI5ODI0OTEsImlhdCI6MTcwMjk3ODg5MSwiaXNzIjoidXJuOm9pZDpmaGlyIiwianRpIjoiZDlhYTA2M2YtNTAxYi00MTI4LWFmMTEtMGE5ZWM5YmQyMjdjIiwibmJmIjoxNzAyOTc4ODkxLCJzdWIiOiJlNmF3Ni1SSnVLTzJtYnFqbGVLdmdWUTMifQ.a25QYRcvh3d26pjCTR5SwDWzuTYhGixxE39sASXJKOQiHOopVB3nzVTJL4bAqCCaxLk0UC3LIOdml3CgaRIRRCOJVTnqL96yEQ6n3ly8QoCnuPmqFuIigxI1VpsjStqg_jRrb51LRp7PnIsPvmKx9DSq3rsrJcXui6950tnZeEFHcRKQThSv7-q8qzmhrIMgzrBmKyx6YjNxiJU1DgWNNrf3eKiYuFJOc2A-LVMMwl8EArj02_foOenhermK0XB0DEA5NSjyHWugHHKTdYIR-XotbLBUAhB-ERXiOoFF4_n7CZMqTjn3KF0k_vEWVsIQfiiYU9CIUqqJ3uQjWrHwog'
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
