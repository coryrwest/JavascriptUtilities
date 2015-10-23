var isPageFullyLoaded = function(page, timeout, callback) {
	// State
	var stop = false;
	
	// Default the timeout
	if(!timeout) { timeout = 2000; }

	function check() {
		// This is the function that will return ready state
		readyState = page();

		var result;
		if(!stop && readyState !== 'complete') {
			// Set timeout for recursive check
			console.log('run check()');
			setTimeout(function () {
				check();
			}, 1);
		} else {
			console.log('We are loaded');
			callback(true);
		}
	}

	// Set up the kill switch
	setTimeout(function () {
		console.log('Timeout kill');
		stop = true;
	}, timeout);
	
	// Start check run
	console.log('start check run');
	return check();
}

	// CODE FOR THE TEST - REMOVE IN PROD
	// Set up the test page load wait
	setTimeout(function () {
		console.log('Set page loaded');
		state = 'complete';
	}, 50);
	// ----------------------------------

function theCallback(loaded) {
	console.log('Callback called');
}

var state = function() { return 'interactive'; };
isPageFullyLoaded(state, 1000, theCallback);

