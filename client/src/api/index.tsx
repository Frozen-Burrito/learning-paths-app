import axios from 'axios';

const baseUrl = '/api';
const pathsUrl = baseUrl + '/paths';
const resourcesUrl = baseUrl + '/resources';

const defaultHeaders = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const getPaths = () => axios.get(pathsUrl);
export const createPath = (newPath: any) => axios.post(pathsUrl, newPath, defaultHeaders);

export const getResources = () => axios.get(resourcesUrl);
export const getResourceById = (id: number) => axios.get(resourcesUrl + `/${id}`);
export const addResource = (newResource: any) => axios.post(resourcesUrl, newResource, defaultHeaders);
export const editResource = (id: number) => axios.put(resourcesUrl + `/${id}`);
export const deleteResource = (id: number) => axios.delete(resourcesUrl + `/${id}`);