import axios from "axios";

export const BASE_URL = 'https://mysterious-stole-foal.cyclic.app';

export const getProjects = async() => {
    const res = await axios.get(BASE_URL+'/projects');
    return res.data.data;
};

export const getProject = async(id) => {
    const res = await axios.get(BASE_URL+'/projects/search/'+id);
    return res.data.data;
};

export const putProject = async(id,data) => {
    const res = await axios.put(BASE_URL+'/projects/search/' + id , data);
    return res.data.data;
};

