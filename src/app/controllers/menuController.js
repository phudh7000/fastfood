const food = require('../../models/food');
const product = require('../../models/food')


class menuController {

    show(req,res){
        let type = req.params.slug;
        let url =  `/menu/${req.params.slug}`;
        food.find({type: type})
        .then((data)=>{
            data = data.map((item)=>item.toObject());
            res.render('menu',{data, url})
        })
    }
    async showAll(req,res){
        let pageQuantity = await food.countDocuments();
        let page = req.params.page;
        let limit = 15;
        let skip = (page-1)*limit;
        let pages = [];
        pageQuantity = parseInt(pageQuantity/limit +1);
        for(let i =1; i<=pageQuantity; i++){
            pages.push(i);
        }
        food.find({}).skip(skip).limit(limit)
        .then((data)=>{
            data = data.map((item)=>item.toObject());
            data.sort((a,b)=>{
                return a.price - b.price;
            });
            
            res.render('menu',{data,pages});
        })
    }

    async getFood(req, res){
        var id = req.params.id;
        food.findOne({_id: id})
        .then(data=>{
            res.json(data);
        })
    }

}

module.exports = new menuController;