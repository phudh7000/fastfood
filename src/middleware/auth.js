const admin = require('../models/admin')
const jwt = require('jsonwebtoken')


var listToken = [];


class auth {
    // get admin

    checkLogin(req, res, next) {
        let user = {
            username: req.body.username,
            password: req.body.password
        }

        admin.findOne(user)
            .then((data) => {
                if (data) {

                    let token = jwt.sign(user, 'secret-sign');
                    res.cookie('token', token)
                    listToken.push(token);
                    next();
                } else {
                    res.render('login/login')
                }
            })
    }

    isAuth(req, res, next) {
        let accessToken = null;
        if (req.headers.cookie)
            accessToken = req.headers.cookie.split('=')[1];
        jwt.verify(accessToken, 'secret-sign', (err, data) => {
            if (!err && listToken.includes(accessToken)) {
                next();
            } else {
                res.render('login/login')
            }

        })

    }

    logout(req, res, next) {
        let accessToken = req.headers.cookie.split('=')[1];
        if (listToken.includes(accessToken)) {
            listToken.splice(listToken.indexOf(accessToken), 1);
        }
        res.clearCookie('token');
        res.render('login/login')
    }
}

module.exports = new auth;