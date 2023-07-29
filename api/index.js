import axios from "axios";

export const BASE_URL = 'https://mysterious-stole-foal.cyclic.app';

export const getProjects = async() => {
    const res = await axios.get(BASE_URL+'/projects');
    return res.data.data;
};
