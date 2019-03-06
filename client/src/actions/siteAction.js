import axios from "axios";

import {
  GET_SITE_INFO,
  UPDATE_SITE_DATA,
  GET_FEATURED,
  UPDATE_FEATURED,
  GET_FEATURED_DETAIL
} from "./types";
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

export function updateSiteData(dataToSubmit) {
  const request = axios
    .post(`${SITE_SERVER}/site_data`, dataToSubmit)
    .then(response => response.data);

  return {
    type: UPDATE_SITE_DATA,
    payload: request
  }; 
}

export function getFeatured() {
  const request = axios
    .get(`${SITE_SERVER}/featured`)
    .then(response => response.data);

  return {
    type: GET_FEATURED,
    payload: request
  };
}

export function getFeaturedDetail(id){
  const request = axios
    .get(`${SITE_SERVER}/featured_detail?id=${id}`)
    .then(response => {
      return response.data[0];
    });

  return {
    type: GET_FEATURED_DETAIL,
    payload: request
  };
}

export function updateFeatured(dataToSubmit, id) {
  const request = axios
    .post(`${SITE_SERVER}/featured?id=${id}`, dataToSubmit)
    .then(response => response.data);

  return {
    type: UPDATE_FEATURED,
    payload: request
  };
}
