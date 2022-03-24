const path = require("path");
const fs = require("fs");
const rp = require("request-promise");

const dataPath = path.join(__dirname, "./directory");

rp("https://reddit.com/r/popular.json")
    .then(data => JSON.parse(data))
    .then(articles => {
        articles.data.children.forEach(articles => {
            if (
                path.extname(articles.data.url) == ".jpg" ||
                path.extname(articles.data.url) == ".png" ||
                path.extname(articles.data.url) == ".gif"
            ) {
                rp(articles.data.url, { encoding: "base64" })
                    .then(img => {
                        const imgPath = `./downloads${articles.data.id}${path.extname(articles.data.url)}`;
                        fs.writeFileSync(imgPath, img, { encoding: "base64" });
                    })
                    .catch(err => console.log(err))
            }
        });
    });
