const bill = require('../../models/bill')
const food = require('../../models/food')

class adminController{

// post admin
admin(req,res){
    
    food.find({})
    .then((data)=>{
        // var x = data.toObject(); 
        // data = JSON.parse(JSON.stringify(data))

        data = data.map(item=>{
                item = item.toObject()
                return item;
            });
        res.render('login/admin',{data})
    })
    .catch((err)=>{
        throw err;
    })

}

    orderPage(req,res){
        bill.find({})
        .then((data)=>{
            data = data.map(item=>{
                item.orders = item.orders.replace(/,/g,', ');
                return item.toObject();
            });
            res.render('login/admin-order', {data})  
        })
        
    }

}

module.exports = new adminController


