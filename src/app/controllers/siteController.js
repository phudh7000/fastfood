class SiteControllers{

    index(req,res){
      
          res.render('home')  
        
        
    }

    async type(){
        return await
        product.distinct('type');
        // .then((data)=>{
        //     let result;
        //     data = JSON.parse(JSON.stringify(data))
        //     result =data;
        //     return result;
        // })
        // .catch((err)=>
        //     console.log(err)
        // )
        // console.log(result);

        // return [ '123', '1233', '1235', '13', 'green' ];
    }
}

module.exports = new SiteControllers;