import axios from 'axios';

// const baseUrl = 'https://cat-finder-backend.herokuapp.com';

const fetchUrl = async ( endpoint, data: {}) =>{
    let url;

    // const url = `${baseUrl}${endpoint}`;
    switch (endpoint) {
        case 'api/cat':
            url = 'https://cat-finder-backend.herokuapp.com/api/cats'
            // const data = {
            //     params: {
            //         from: 0,
            //         limit: 50
            //     }
            // }
            // const response = await fetchUrl('api/cat', data);
            // console.log(response.data)

                let {params} = data
                return axios.get(url, {
                    params
                });
        case 'api/auth':
                url = 'https://cat-finder-backend.herokuapp.com/api/auth'
                return axios.post(url, {
                    email: data.body.email,
                    password: data.body.password
                })
        case 'api/auth/google/login':
                // console.log(data.body, 'fetch')
                url = 'https://cat-finder-backend.herokuapp.com/api/auth/google/login';
                return axios.post(url, {
                    givenName: data.body.givenName,
                    familyName: data.body.familyName,
                    email: data.body.email,
                    googleId: data.body.googleId
                });
        case 'api/auth/register':
                url = 'https://cat-finder-backend.herokuapp.com/api/auth/register';
                return axios.post(url, {
                    givenName: data.body.givenName,
                    familyName: data.body.familyName,
                    email: data.body.email,
                    password: data.body.password
                });
        default:
            break;
    }
}

export default fetchUrl;