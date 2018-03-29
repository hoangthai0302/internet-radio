var express = require("express");
var app = express();
var http = require('follow-redirects').http;
var bodyParser = require('body-parser')

app.use(function (err, req, res, next) {
    if(error){
        console.log("error",error)
        res.json({
            url:'error'
        })
    }else {
        return next();
    }
  })
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    
        return next();
});

app.use(bodyParser.json());
  

app.post('/getRedirectUrl', (req, res) => {
    let url = req.body.url;
    http.get(url, function (response) {
        if(response && response.responseUrl) {

            res.json({
                url:response.responseUrl
            })
        } else {
            res.json({
                url:null
            })
        }

    });
      

});

app.listen(8000);