/** 전역설정 *******************************/
const express = require('express');
const app = express();
const path = require('path');

/** 서버구동 *******************************/
app.listen(3000, () => {
	console.log("=====================");
	console.log("Server Start!");
	console.log("---------------------");
	console.log("http://127.0.0.1:3000");
	console.log("=====================");
});

/** 라우터 *******************************/
console.log(__dirname + '\\public');
console.log(	path.join(__dirname, './public')	);
console.log(__filename);

app.use('/', express.static(path.join(__dirname, './public')));
app.get('/', (req, res) => {
	var q = req.query.q;
	res.send(`응답: ${q}`);
});