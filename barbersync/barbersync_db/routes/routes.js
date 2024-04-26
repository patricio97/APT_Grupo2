const express = require('express');
const app = express();

app.set('port', 3000);
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.listen(app.get('port'),()=>{
    console.log("server status 200 on port 3000")
});