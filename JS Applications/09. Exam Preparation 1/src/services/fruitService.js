const baseUrl = 'http://localhost:3030/data';

export const getAll = () => fetch(`${baseUrl}/fruits?sortBy=_createdOn%20desc`).then(res => res.json());