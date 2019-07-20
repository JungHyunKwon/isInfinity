/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
(function() {
	'use strict';
	
	/**
	 * @name isInfinity
	 * @since 2017-12-06
	 * @param {*} value
	 * @return {boolean}
	 */
	window.isInfinity = function(value) {
		return typeof value === 'number' && !isNaN(value) && !isFinite(value);
	};
})();