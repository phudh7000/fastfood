const mongoose = require('mongoose')

async function connect(){
    try {
        // await mongoose.connect('mongodb://localhost:27017/test', {
        await mongoose.connect('mongodb+srv://hoangphu:hoangphu@cluster0.fqlac.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        // useCreateIndex: true
        autoIndex: false,
      });

      console.log('connect seccessful')
    } catch (error) {
        console.log(error);
    }
    
}


module.exports = {connect}