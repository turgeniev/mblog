var express = require('express');
var router = express.Router();
var fs = require('fs');
var md = require('jstransformer-markdown-it');

// GET articles/ 
router.get('/', function(req, res, next) {

    // put metadata into article as a comment at the first line
    var articlesPath = "public/articles/2017";
    var articles = [];

    // todo: cache this
    fs.readdirSync(articlesPath)
        
        // loop over list of all files
        .forEach(function (fileName) {
        
            // check if it is .json file with metadata
            if (fileName.endsWith(".json")) {
        
                // read article metadata
                var articleJson = fs.readFileSync(articlesPath + '/' + fileName, "utf8");
        
                // create article metadata object
                var article = JSON.parse(articleJson);
        
                // build link to the article 
                // - 'public/articles' will be added by express
                // - remove .json
                article.link = '2017/' + fileName.slice(0, -5);
                articles.push(article);
            }
        });
    
    // pass articles variable to articles.pug template
    res.render('articles', { articles: articles });
});

// GET articles/year/name
// 1. read file
// 2. apply markdown to html transformation
// 3. render pug template
router.get('/:year/:artName', function(req, res, next) {
    var mdText = fs.readFileSync('public/articles/' + req.params.year + '/' + req.params.artName + '.md', 'utf8');
    var html = md.render(mdText);
    res.render('article', {html: html});
});

module.exports = router;
