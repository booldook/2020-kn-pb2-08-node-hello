const zeroPlus = n => n < 10 ? '0'+n : n;
const getNowDate = () => {
	return new Date().getDate();
}

module.exports = { zeroPlus, getNowDate }