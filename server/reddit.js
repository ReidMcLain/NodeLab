const path = require('path')
const fs = require('fs')
const rp = require('request-promise')

rp('https://reddit.com/r/popular.json')
    .then((res) => {
        let articlesArray = []

        JSON.parse(res).data.children.map((article) => {
            let object = {
                title: article.data.title,
                url: article.data.url,
                author: article.data.author
            }

            articlesArray.push(object)
            fs.writeFile("../popular-articles.json", JSON.stringify(articlesArray), (err) => {
                if (err) {
                    console.log(err);
                }
            })
        })
    })
    .catch((err) => {
        if (err) { console.log(err) }


    })