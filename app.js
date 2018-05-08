const express = require('express')
const app = express()

app.use('/static', express.static(__dirname + '/public'))

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})