import http from 'k6/http';
import {check} from 'k6';

//import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'per-vu-iterations',
      vus: 100,
      iterations: 2,
      //maxDuration: '10m',
    },
  },
};

export default function () {

    const BASE_URL = 'https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4'

    const HEADERS = {
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ1cm46b2lkOmZoaXIiLCJjbGllbnRfaWQiOiI3N2M1YWYwNy0yNzg1LTQzODMtOGU4Yi0yN2U2MTgzZWI0YzYiLCJlcGljLmVjaSI6InVybjplcGljOk9wZW4uRXBpYy1jdXJyZW50IiwiZXBpYy5tZXRhZGF0YSI6IkNZUzlnSGdNSFBhSG9UOUhyY2RmUTl0QWhQRjFKekRfWnVnZl9UNnhieG1yeXQ1X05tVnB0TE1vQW5xUlBhc1RYNF9MZ0pmdy1FcjZ6d1dQT1UwdDdmelAtZHVoa1RwdU1yeld3R2dpdEVWRHJyZUxCaE5JemNOeXhnNjdEdHVTIiwiZXBpYy50b2tlbnR5cGUiOiJhY2Nlc3MiLCJleHAiOjE3MDEyNjUwOTMsImlhdCI6MTcwMTI2MTQ5MywiaXNzIjoidXJuOm9pZDpmaGlyIiwianRpIjoiODRhMDljZDEtYmUxOS00ODQxLWE0MTEtZThjY2E2OGZiOThkIiwibmJmIjoxNzAxMjYxNDkzLCJzdWIiOiJlNmF3Ni1SSnVLTzJtYnFqbGVLdmdWUTMifQ.T9e92GT5TEFGjQWbcKNWMND3zEItp7EEps51bN5H492dp9egUIl1OAC5JqbfTBgkWfcwpzpjRzJ5qP2oASAbO_vz6fhfYhThDf2V3CJA1xpb8o7SI4maVHR5cZ-DTTMBtC5G-LlTPUm9TPymSfX5uQU6i2C7q-zieeDyU0_wLAE0-C-4wBBNio1Es9_gYK7VA7qQEePHiOm-kBWdijhfzQvTPPhUFLBxfHiDWEfmtKyqi7A7wyRYaNB_EEYmqq2P7TPuaQHD1_kV7_-essVnhgJ-TSuIQ3U8ILFrWkYp-cRlfxrg69IaPKYVXy3X-Gc_7rakteHyHpVWuhTQdXJtvQ'
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
//     "complete11_Report.html": htmlReport(data),
//   };

// }
