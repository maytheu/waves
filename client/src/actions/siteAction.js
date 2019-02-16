import axios from "axios";

import { GET_SITE_INFO, UPDATE_SITE_DATA } from "./types";
import { SITE_SERVER } from "../component/utils/urlMisc";

export function getSiteData() {
  const request = axios
    .get(`${SITE_SERVER}/site_data`)
    .then(response => response.data);

  return {
    type: GET_SITE_INFO,
    payload: request
  };
}

export function updateSiteData(dataToSubmit){

    const request = axios.post(`${SITE_SERVER}/site_data`, dataToSubmit)
        .then(response => response.data);

    return {
        type: UPDATE_SITE_DATA,
        payload: request
    }

}
