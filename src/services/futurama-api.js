const URL = 'http://futuramaapi.herokuapp.com/api/quotes/12';

const api = {
    getFriends() {
        return fetch(URL)
            .then(response => response.json());
    }
};

export default api;