require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = () => {
  return mongoose.connect("mongodb+srv://MegaMind:GZijvlaDPFZ5P85R@task-manager.x7crt.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }).then(()=>{console.log('CONNECTED TO MONGODB SUCCESSFUL')})
}

module.exports = connectDB