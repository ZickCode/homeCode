$(function(){
	Reveal.initialize({
		transition: 'slide',
		mouseWheel: true
	});

	hljs.initHighlightingOnLoad();

	var vm = new Vue({
		el: '#demo',
		data: {
			msg: 'Hello World'
		}
	});
});