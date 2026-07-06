import axios from 'axios';

const API_URL = 'https://wedev-api.sky.pro/api/kanban';

export async function fetchCard({ token }) {
  try {
    const data = await axios.get(API_URL, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    return data.data.tasks;
  } catch (error) {
    throw new Error(
      error.response?.data?.error ||
        error.response?.data?.message ||
        'Ошибка сервера',
    );
  }
}

export async function postCard({ token, card }) {
  try {
    const data = await axios.post(API_URL, card, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': '',
      },
    });
    return data.data.tasks;
  } catch (error) {
    throw new Error(
      error.response?.data?.error ||
        error.response?.data?.message ||
        'Ошибка сервера',
    );
  }
}

export async function getCard({ token, id }) {
  try {
    const data = await axios.get(`${API_URL}/${id}`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    return data.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.error ||
        error.response?.data?.message ||
        'Ошибка сервера',
    );
  }
}

export async function editCard({ token, id, card }) {
  try {
    const data = await axios.put(`${API_URL}/${id}`, card, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': '',
      },
    });
    return data.data.tasks;
  } catch (error) {
    throw new Error(
      error.response?.data?.error ||
        error.response?.data?.message ||
        'Ошибка сервера',
    );
  }
}

export async function deleteCard({ token, id }) {
  try {
    const data = await axios.delete(`${API_URL}/${id}`, {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
    return data.data.tasks;
  } catch (error) {
    throw new Error(
      error.response?.data?.error ||
        error.response?.data?.message ||
        'Ошибка сервера',
    );
  }
}
