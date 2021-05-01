const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser=require('body-parser')

mongoose.connect('mongodb://localhost:27017/Uts-19421056-rofikhusnullatifah',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(() =>{
    console.log('berhasil connect kedatabase')
}).catch((err) => {
    console.log('gagal connect kedatabase')
})

app.use(cors())

app.use(bodyParser.json({
    extends: true, 
    limit: '20mb'
}))
app.use(bodyParser.urlencoded({
    extends: true, 
    limit: '20mb'
}))

app.use('/managemen', require('./routes/managemen'))

app.listen(3000, function () {
    console.log('Server telah dijalankan diport 3000')
})