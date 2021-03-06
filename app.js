/** 전역설정 *******************************/
const express = require('express');
const app = express();
const path = require('path');

const books = [
	{id: 1, title: '별주부전', writer: '겁없는 토끼', content: '용왕의 사주를 받은 거북이가 나를.', src: '/img/byul.jpg'},
	{id: 2, title: '심청전', writer: '심청이 아빠', content: '내딸이 가출을...', src: '/img/sim.jpg'},
	{id: 3, title: '춘향전', writer: '변사또', content: '춘향이와 이몽룡이 눈이 맞아...', src: '/img/byun.png'},
];

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

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/** 라우터 *******************************/
app.use('/', express.static(path.join(__dirname, './public')));
app.get(['/book', '/book/list'], (req, res) => {
	const pug = {
		css: 'index',
		js: 'index',
		title: {
			head: '도서 리스트',
			body: '고전소설 도서 목록',
			small: '작자 미상의 고전 소설'
		},
		lists: [...books]
	};
	res.render('book/list', pug);
});

app.get('/book/view/:id', (req, res) => {
	const book = books.filter(v => v.id == req.params.id);
	const pug = {
		css: 'index',
		js: 'index',
		title: {
			head: '도서 상세보기',
			body: book[0].title,
			small: book[0].writer
		},
		book: book[0]
	};
	res.render('book/view', pug);
});

app.get('/book/create', (req, res) => {
	const pug = {
		css: 'index',
		js: 'index',
		title: {
			head: '도서 리스트 생성',
			body: '도서 등록',
			small: '리스트에 등록할 도서'
		},
	}
	res.render('book/create', pug);
});

app.post('/book/save', (req, res) => {
	const { title, writer, content } = req.body;
	const id = books[books.length - 1].id + 1;
	books.push({ id, title, writer, content });
	res.redirect('/book');
});








app.get('/test', (req, res) => {
	const pug = {
		css: 'default',
		js: 'default'
	}
	res.render('test/list.pug', pug);
});