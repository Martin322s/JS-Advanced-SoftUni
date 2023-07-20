const baseUrl = 'http://localhost:3030/data';

export const getAll = () => fetch(`${baseUrl}/fruits?sortBy=_createdOn%20desc`).then(res => res.json());

export const createFruit = async (fruitData, token) => {
    const res = await fetch(`${baseUrl}/fruits`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(fruitData)
    });

    return await res.json();
};

export const getOne = (fruitId) => fetch(`${baseUrl}/fruits/${fruitId}`).then(res => res.json());

export const editFruit = async (data, token, fruitId) => {
    const res = await fetch(`${baseUrl}/${fruitId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(data)
    });

    return await res.json();
};