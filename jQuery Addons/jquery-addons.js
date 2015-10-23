if(jQuery) {
	jQuery.expr[':'].icontains = function(a, i, m) {
		return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
	};

	jQuery.expr[':'].fuzzyContains = function(a, i, m) {

	}
}