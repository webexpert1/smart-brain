const express = require('express');

const app = express();
const port = 4000; 

app.get('/', (req, res)=> {
    res.send('this is working');
});

app.listen(port, () => {
    console.log(`app is runing on port ${port}`);
});