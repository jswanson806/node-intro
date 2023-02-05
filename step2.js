const fs = require('fs');
const axios = require('axios');
const argv = process.argv;

function cat(path){
    fs.readFile(`${path}`, 'utf8', (err, data) => {
        if(err){
            console.log("ERROR: ", err);
            process.kill(1);
        }
        console.log(data);
    })
}

function webCat(url) {
    axios.get(url)
        .then(({data}) => console.log(data))
        .catch(err => console.log(`Error fetching ${url}`, err))
}

if(argv[2].includes("http")){
    console.log("URL")
    webCat(argv[2]);
} else {
    cat(argv[2]);
}
