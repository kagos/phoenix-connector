const express = require('express');

var app = express();
var staticRoot = __dirname;

app.set('port', (process.env.PORT || 3000));

app.use(express.static(staticRoot));

app.get('/', (req, res) => res.sendFile('index.html'));

app.get('/api?:searchParam', (req, res) => {
    console.log(req.query);

    // Connect and send query params
});

app.listen(app.get('port'), () => console.log('Connected on port ', app.get('port')));
