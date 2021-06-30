import request from 'superagent';

const URL = 'https://shielded-castle-33534.herokuapp.com/';

export async function getAllFruits() {
    const data = await request.get(`${URL}/fruits`);

    return data.body;
}

export async function getOneFruit(id) {
    const data = await request.get(`${URL}/fruits/${id}`);

    return data.body;
}

export async function updateFruit(id, fruitData) {
    const data = await request
        .put(`${URL}/fruits/${id}`)
        .send(fruitData);

    return data.body;
}

export async function createFruit(fruitData) {
    const data = await request
        .post(`${URL}/fruits/`)
        .send(fruitData);

    return data.body;
}

export async function getAllCategories() {
    const data = await request.get(`${URL}/categories`);

    return data.body;
}

export async function deleteFruit(id) {
    const data = await request.delete(`${URL}/fruits/${id}`);

    return data.body;
}