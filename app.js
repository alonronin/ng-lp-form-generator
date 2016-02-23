var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 80, function () {
    console.log('server started at port %s. http://localhost:%s', this.address().port, this.address().port);
});
