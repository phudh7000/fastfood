const siteRouter = require('./site')
const menuRouter = require('./menu')
const adminRouter = require('./admin')
const billRouter = require('./bill')
function route(app){
    app.use('/', siteRouter)
    app.use('/admin',adminRouter)
    app.use('/menu',menuRouter)
    app.use('/bill',billRouter)
    app.use('/cart',(req,res)=>{
        res.render('cart');
    })
}

module.exports = route;