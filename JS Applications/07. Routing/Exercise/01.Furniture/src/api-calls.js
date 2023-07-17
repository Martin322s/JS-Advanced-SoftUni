const baseUrl = 'http://localhost:3030/data/catalog';
const userUrl = 'http://localhost:3030/users';

export const getAll = () => fetch(baseUrl).then(res => res.json());
export const getOne = (offerId) => fetch(`${baseUrl}/${offerId}`).then(res => res.json());

export const registerUser = async (data) => {
    const res = await fetch(`${userUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return await res.json();
};

export const loginUser = async (data) => {
    const res = await fetch(`${userUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return await res.json();
};

export const createRecipe = async (data, token) => {
    const res = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(data)
    });

    return res.json();
};

export const editRecipe = async (data, token, offerId) => {
    const res = await fetch(`${baseUrl}/${offerId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(data)
    });

    return await res.json();
}

export const getAllOwned = async (userId) => 
    fetch(`http://localhost:3030/data/catalog?where=_ownerId%3D%22${userId}%22`)
        .then(res => res.json());