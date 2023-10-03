const express = require('express');
const path = require('path');
const app = express();
PORT = 3030;

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req, resp) => resp.sendFile(path.join(__dirname,'views', 'index.html')));
app.get('/babbage',(req, resp) => resp.sendFile(path.join(__dirname,'views', 'babbage.html')));
app.get('/berners-lee',(req, resp) => resp.sendFile(path.join(__dirname,'views', 'berners-lee.html')));
app.get('/clarke',(req, resp) => resp.sendFile(path.join(__dirname,'views', 'clarke.html')));
app.get('/hamilton',(req, resp) => resp.sendFile(path.join(__dirname,'views', 'hamilton.html')));
app.get('/hopper',(req, resp) => resp.sendFile(path.join(__dirname,'views', 'hopper.html')));
app.get('/lovelace',(req, resp) => resp.sendFile(path.join(__dirname,'views', 'lovelace.html')));
app.get('/turing',(req, resp) => resp.sendFile(path.join(__dirname,'views', 'turing.html')));

app.listen(PORT, () => console.log(`SErver running in http://localhost:${PORT}` ))
