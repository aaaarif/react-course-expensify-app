const path = require('path');
const express = require('express');
const app = express();
const pubilcPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(pubilcPath));

app.get('*',(req, res) => {
    res.sendFile(path.join(pubilcPath, 'index.html'))
});

app.listen(port, ()=> {
    console.log('server is up!!');
});