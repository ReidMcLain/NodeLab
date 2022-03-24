const path = require('path');
fs = require('fs');
const rp = require('request-promise');

const articlesPath = path.join(__dirname, "../popular-articles.json");

rp('https://reddit.com/r/popular.json')
    .then(data => JSON.parse(data))
    .then(articles => {
        let articleArr = [];

        console.log(articles.data.children.forEach(article => {
            const articleObj = {
                title: article.data.title,
                author: article.data.author,
                url: article.data.url
            }
            articleArr.push(articleObj);
        }));
        fs.writeFileSync(articlesPath, JSON.stringify(articleArr));
    })
    .catch((err) => console.log(err + "test"));