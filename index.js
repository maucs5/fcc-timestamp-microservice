var express = require('express');
var app = express();

app.get('/:date', (req, res) => {
    var natural = req.params.date;
    var unix = Date.parse(natural);
    if (isNaN(unix)) {
	// param is unix timezone
	var d = new Date(+natural*1000);
	unix = +natural;
	natural = d.toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric'});
    } else
	unix /= 1000;
    if (isNaN(unix)) res.send({unix: null, natural: null})
    else res.send({unix: unix, natural: natural});
});

app.listen(process.env.PORT || 8000);
