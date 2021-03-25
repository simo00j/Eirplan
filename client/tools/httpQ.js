const axios = require('axios').default;
const burl = "http://localhost:3000";

let getData =  async function() {
    const output =  await axios.get(burl + "/send");
    console.log('data', output);
    return output;
};

module.exports = getData;