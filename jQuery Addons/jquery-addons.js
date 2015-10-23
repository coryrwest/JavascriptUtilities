if(jQuery) {
	jQuery.expr[':'].icontains = function(a, i, m) {
		return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
	};

	jQuery.expr[':'].fuzzyContains = function(a, i, m) {
		var fuzzy = new FuzzySet();
		// a - element in question
		// m - [fuzzyContains, fuzzyContains, '', search text]
		var elemText = jQuery(a).text().trim();
		if(elemText) {
			// If we have text then add to the set
			fuzzy.add(elemText);
			var result = fuzzy.get(m[3]);
			// If we have any match, check the confidence
			return !!(result && result[0][0] > 0.50);
		}
		return false;
	}
}