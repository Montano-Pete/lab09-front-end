import request from 'superagent';

const URL = 'https://shielded-castle-33534.herokuapp.com';

export async function getAllFruits() {
    const { body } = await request.get(`${URL}/fruits`);

    return body;
}

export async function getOneFruit(id) {
    const { body } = await request.get(`${URL}/fruits/${id}`);

    return body;
}

export async function updateFruit(id, fruitData) {
    const { body } = await request
        .put(`${URL}/fruits/${id}`)
        .send(fruitData);

    return body;
}

export async function createFruit(fruitData) {
    const { body } = await request
        .post(`${URL}/fruits/`)
        .send(fruitData);

    return body;
}

export async function getAllCategories() {
    const { body } = await request.get(`${URL}/categories`);

    return body;
}

export async function deleteFruit(id) {
    const { body } = await request.delete(`${URL}/fruits/${id}`);

    return body;
}