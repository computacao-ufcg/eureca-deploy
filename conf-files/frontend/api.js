import axios from 'axios';

// Starting points
const START_POINT = 'https://service_host_FQDN/';
const EURECA_AS = `${START_POINT}/as/`;
const EURECA_BACKEND = `${START_POINT}/eureca/`;
const ALUMNI_AS = `${START_POINT}/alumni/`;

// Default for tests
const api = axios.create({
  baseURL: EURECA_BACKEND,
});

// for Eureca Backend
const api_EB = axios.create({
  baseURL: EURECA_BACKEND,
  headers: {
    'Content-type': 'application/json',
  },
});

// for Eureca Authentication Service
const api_EAS = axios.create({
  baseURL: EURECA_AS,
  headers: {
    'Content-type': 'application/json',
  },
});

// For Alumnus Service API
const api_AS = axios.create({
  baseURL: ALUMNI_AS,
  headers: {
    'Content-type': 'application/json',
  },
});

export default api;
export { api_EB, api_EAS, api_AS };
