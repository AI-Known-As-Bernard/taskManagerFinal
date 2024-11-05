require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = () => {
  return mongoose.connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }).then(()=>{console.log('CONNECTED TO MONGODB SUCCESSFUL')})
}

module.exports = connectDB