var express = require("express");
var app = express();
var http = require('follow-redirects').http;
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
        return res.send(200);
    } else {
        return next();
    }
});
app.use(bodyParser.json());
  

app.post('/getRedirectUrl', (req, res) => {
    let url = req.body.url;
    http.get(url, function (response) {
        res.json({
            url:response.responseUrl
        });

    });
      

});

app.listen(8000);