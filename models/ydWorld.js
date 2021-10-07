const axios = require('axios');
const YDWorldModel = async () => {
    return await axios.get('https://dict.youdao.com/infoline/style/cardList?style=daily&apiversion=3.0&client=mobile')
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}

module.exports = {YDWorldModel}