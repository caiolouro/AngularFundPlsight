var express = require('express'),
	path = require('path');

var app = express();

//__dirname é a pasta atual
var rootPath = path.normalize(__dirname + '/../');

//.static não interpreta as páginas, apenas as serve de forma estática
app.use(express.static(rootPath + '/app'));
app.listen(8000);
console.log('Listening on port 8000...');