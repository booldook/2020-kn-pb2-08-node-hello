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
			head: '도서 리스트',
			body: '고전소설 도서 목록',
			small: '작자 미상의 고전 소설'
		},
		lists: [
			{id: 1, title: '별주부전', writer: '겁없는 토끼', content: '용왕의 사주를 받은 거북이가 나를.'},
			{id: 2, title: '심청전', writer: '심청이 아빠', content: '내딸이 가출을...'},
			{id: 3, title: '춘향전', writer: '변사또', content: '춘향이와 이몽룡이 눈이 맞아...'},
		]
	};
	res.render('sample', pug);
});

