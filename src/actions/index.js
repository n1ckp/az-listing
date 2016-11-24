import axios from 'axios';

export const GET_PROGRAMMES = "GET_PROGRAMMES";

const BASE_URI = "https://ibl.api.bbci.co.uk"

export function getProgrammes(letter, page) {
  const request = axios.get(`${BASE_URI}/ibl/v1/atoz/${letter.toLowerCase()}/programmes?page=${page}`);
  return {
    type: GET_PROGRAMMES,
    payload: request
  };
}
