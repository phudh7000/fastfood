const bill = require('../../models/bill')
const food = require('../../models/food')

 function getPirce(id, quantity){
    return food.findOne({_id: id})
    .then((data)=>{
        return {name: data.name, quantity, price: data.price*quantity}
    })
    .catch(()=>{
        return 0;
    });
}



class NewsControllers {
    async addBill(req,res){
        let data = req.body;
        let {orders} = data;
        let total = 0;
        orders = orders.split(',');

        let promise = orders.map(async element=>{
            let [id, quantity] = element.split(':');
            return await getPirce(id,quantity);
        })

        let result = await Promise.all(promise)
        
        orders = [];
        result.forEach((i)=>{
            total+=i.price;
            orders.push(`${i.name}:${i.quantity}`);
        })

        let {name, location, phone} = data;

        bill.create({name,phone,orders: orders.join(),total,location})
        .then((rs)=>{
            res.status(200).json('ok');
        })
    }
}

module.exports = new NewsControllers;