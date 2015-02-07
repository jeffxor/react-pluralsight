var express = require('express');
var app = express();

app.use("/components", express.static(__dirname + '/app/components'));
app.use(express.static(__dirname + '/src'));

app.listen(process.env.PORT || 3000);