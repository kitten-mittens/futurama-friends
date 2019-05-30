const URL = 'http://futuramaapi.herokuapp.com/api/quotes';

const api = {
    getFriends(search) {
        let url = URL;

        if(search) {
            const searchParams = new URLSearchParams();
            searchParams.set('search', search);
            const query = searchParams.toString();
            url = `${URL}?${query}`;
        }
        console.log(url);
        return fetch(url)
            .then(response => response.json());
    }
};

export default api;