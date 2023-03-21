const axios = require('axios')

const instanciaAxios = axios.create({
    baseURL: 'https://companyenrichment.abstractapi.com/v1/',
    params: {
        api_key: '0594ae431f04414fb0080e82f146c543'
    }
})

module.exports = instanciaAxios