import {
  GET_SITE_INFO,
  UPDATE_SITE_DATA,
  GET_FEATURED,
  UPDATE_FEATURED,
  GET_FEATURED_DETAIL
} from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_SITE_INFO:
      return { ...state, siteData: action.payload };
    case UPDATE_SITE_DATA:
      return { ...state, siteData: action.payload.siteInfo };
    case GET_FEATURED:
      return { ...state, featured: action.payload };
    case UPDATE_FEATURED:
      return { ...state, featuredUpdate: action.payload };
    case GET_FEATURED_DETAIL:
      return { ...state, featuredDetail: action.payload };
    default:
      return state;
  }
}
