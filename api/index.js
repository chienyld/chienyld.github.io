import axios from "axios";

export const BASE_URL = 'https://mysterious-stole-foal.cyclic.app';

export const apiTest = async() => await axios.get(BASE_URL);
