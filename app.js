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

/** 설정 *******************************/
app.set('view engine', 'pug');
app.set('views', './views');
app.locals.pretty = true;

/** 라우터 *******************************/
app.use('/', express.static(path.join(__dirname, './public')));
app.get('/sample', (req, res) => {
	const pug = {
		title: {
			head: 'PUG 연습',
			body: 'PUG를 연습해 보자',
			small: 'PUG 첫시간'
		},
	};
	res.render('sample');
});

