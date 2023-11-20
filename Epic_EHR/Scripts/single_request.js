import http from 'k6/http';
import {check} from 'k6';
import {BASE_URL, HEADERS} from '../TestData/Constants/const.js';
import {SINGLE_REQUEST} from '../TestData/Configurations/conf.js';

// import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = SINGLE_REQUEST;

export default function () {

const URL = BASE_URL + '/AllergyIntolerance?patient=e63wRTbPfr1p8UW81d8Seiw3'

const RES = http.get(URL, HEADERS);

  check(RES, {

    'Is status 200': (r) => r.status == 200,

  });


}

// export function handleSummary(data) {

//     return {
//       "../Reports/SingleReq_LoadTestReport.html": htmlReport(data),
//     };

// }
