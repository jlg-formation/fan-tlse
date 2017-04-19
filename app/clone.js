(function() {
	'use strict';

	var clone = function(o) {
		var result = {};
		for (var p in o) {
			if (o[p] !== null && typeof o[p] === 'object') {
				result[p] = clone(o[p]);
			} else {
				result[p] = o[p];
			}

		}
		return result;
	};

	var a = {
		x: {
			z: 45
		},
		y: 52
	};
	console.log('a.x.z', a.x.z);
	var b = clone(a);
	console.log('b.x.z', b.x.z);
	a.x.z = 31;
	console.log('a.x.z', a.x.z);
	console.log('b.x.z', b.x.z);
})();
