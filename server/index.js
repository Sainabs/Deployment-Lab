const express = require('express');
const cors = require('cors');
const path = require('path')

const app= express()

app.use(express.static(path.join(__dirname, "../public")));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname, '../public/index.html'))
})


const port = process.env.PORT || 4000

app.listen(port, () => {console.log(`listening on port ${port}`)})