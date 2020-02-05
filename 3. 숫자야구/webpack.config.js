module.exports = {
	entry: {
		app: './main.js',
	},
	module: { // module이 webpack의 핵심
		rules: [{

		}],
	},
	plugins: [],
	output: {
		// filename: 'app.js' // 종합해서 app.js라는 이름으로 파일을 합쳐줌.
		filename: '[name].js', // 이렇게 해도 entry의 app을 보고 위와 같이 만들어줌.
		path: './dist',
	},

}