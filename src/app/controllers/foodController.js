const food = require('../../models/food')

class foodController{
    get(req,res){
        let id = req.params.slug;
        food.findOne({_id: id})
        .then((x)=>{
        res.json(x);
        });
        
    }
    delete(req,res){
        let data = req.body;
        food.deleteOne(data)
        .then((x)=>console.log(x));
        res.end();
    }

    create(req,res){
        let data = req.body;
        data.status = true;
        food.create(data)
        .then((x)=>{
            res.end();
        })
        .catch(()=>{
            console.log('err')
        })

        res.end();
        
    }

    update(req, res){
        let data = req.body;
        let {_id, ...value} = data;
        food.updateOne({_id: data._id}, value)
        .then((ok)=>{
            console.log(ok);
        })
    }

    search(req,res){
        let data = req.body;
        food.find({data})
        .then(()=>{
            
        })
    }

    showOne(req,res){
        food.findOne({slug: req.params.slug})
        .then((data)=>{
            data = JSON.parse(JSON.stringify(data));
            res.render('foods/food',{data});
            
        })
    }
}


module.exports = new foodController;