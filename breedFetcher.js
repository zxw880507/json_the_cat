const request = require('request');
const breed = process.argv[2];
request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
        throw error;
    } else {
        const data = JSON.parse(body);
        if (data.length > 0 && data[0]['description'] !== undefined) {
            console.log(data[0]['description']);
        } else {
            console.log(`${breed} not found`);
        }
    }
});