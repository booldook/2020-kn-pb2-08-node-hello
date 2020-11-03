const express = require('express');	// node_modules의 express를 불러온다.
const app = express();
const path = require('path');

app.listen(3000, () => {
	console.log("=====================");
	console.log("Server Start!");
	console.log("---------------------");
	console.log("http://127.0.0.1:3000");
	console.log("=====================");
});

app.use('/', express.static(path.join(__dirname, './public')));

const header = `
<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>SHOP</title>
	<link rel="stylesheet" href="/css/all.min.css">
	<link rel="stylesheet" href="/css/bootstrap.min.css">
	<link rel="stylesheet" href="/css/swiper-bundle.min.css">
	<link rel="stylesheet" href="/css/index.css">
	<script src="/js/jquery-3.5.1.min.js"></script>
	<script src="/js/jquery.touchSwipe.min.js"></script>
	<script src="/js/imagesloaded.pkgd.min.js"></script>
	<script src="/js/moment.min.js"></script>
	<script src="/js/swiper-bundle.min.js"></script>
</head>
<body>
`;

const footer = `
</body>
</html>
`;

app.get('/', function(req, res) {
	res.send('<h1>Hello World</h1>');
});

app.get('/search', function(req, res) {
	// http://127.0.0.1:3000/search?q=node&qdate=2020-11-03
	var q = req.query.q;
	var qdate = req.query.qdate;
	//검색 알고리즘
	res.send('<h1>당신이 '+qdate+'에 검색한 '+q+' 에 대한 검색 결과 입니다.</h1>');
});

app.get('/search2', function(req, res) {
	// http://127.0.0.1:3000/search2?q=node&qdate=2020-11-03
	const { q, qdate } = req.query;
	
	var html = `
	${header}
	<div class="container">
		<div class="jumbotron">
			<h1>
				검색일자: ${qdate}
				<small>당신의 검색어는 ${q}입니다.</small>
			</h1>
		</div>
	</div>
	${footer}`;
	res.send(html);
});