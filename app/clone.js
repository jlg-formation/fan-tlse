(function() {
	'use strict';

	var clone = function(o) {
		var result = {};
		for (var p in o) {
			result[p] = o[p];
		}
		return result;
	};

	var a = {
		x: 45,
		y: 52
	};
	console.log('a.x', a.x);
	var b = clone(a);
	console.log('b.x', b.x);
	a.x = 31;
	console.log('a.x', a.x);
	console.log('b.x', b.x);
})();
