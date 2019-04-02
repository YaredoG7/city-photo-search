const jwt = require('jsonwebtoken');

// hardcoded becasue there will not be any database call for auth

const APP_SECRET = "liligoapp";
const USERNAME = "Yared";
const PASSWORD = "liligo";

module.exports = function(req, res, next) {
    if (req.url == "/login" && req.method == "POST"){
        if (req.body != null && req.body.username == USERNAME && req.body.password == PASSWORD){
            let token = jwt.sign({data: USERNAME}, APP_SECRET, {expiresIn: "1h"});
            console.log(token);
            res.json({success: true, token: token});
        } else {
            console.log(req.body.username, req.body.password )
            res.json({success: false});
        }
        res.end();
        return;
    } else if (req.url.startsWith("/search") && req.method == "GET"){
        let token = req.headers.authorization;

        if (token != null && token.startsWith("Bearer<")){
            token = token.substring(7, token.length - 1);

            try {
                jwt.verify(token, APP_SECRET);
                next();
                return; 
            } catch (err) {}
        }

        res.statusCode = 401;
        res.end();
        return;
    }
         next();
}
