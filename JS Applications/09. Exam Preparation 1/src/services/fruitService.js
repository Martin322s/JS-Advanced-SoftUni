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