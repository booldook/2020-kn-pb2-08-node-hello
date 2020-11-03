/** 전역설정 *******************************/
const express = require('express');
const app = express();
const path = require('path');

/** 서버구동 *******************************/
app.listen(3000, () => {
	console.log("=====================");
	console.log("http://127.0.0.1:3000");
	console.log("=====================");
});

/** 라우터 *******************************/
app.use('/', express.static(path.join(__dirname, './public')));

app.get('/', (req, res) => {
	var q = req.query.q;
	res.send(`응답: ${q}`);
});

app.get('/:userID/:listID', (req, res) => {
	const content = ['[홍길동전] 아버지를 아버지라... ', '[별주부전] 용왕이 거북이의 간을...']
	var html = `
		<h1>${req.params.userID} 블로그 입니다.</h1>
		<h2>${req.params.listID}번글 입니다.</h2>
		<p>${content[req.params.listID]}</p>`;
	res.send(html);
});