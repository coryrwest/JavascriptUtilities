// var loadState = 'interactive';
// var isPageFullyLoadedEX = function (timeout) {
	// // State
	// var readyState = 'not started';
	// console.log('check:' + readyState);
	// var stop = false;
	// var loaded = false;
	
	// // Default the timeout
	// if(!timeout) { timeout = 2000; }

	// function check() {
		// // This is the function that will return ready state
		// readyState = loadState;

		// var result;
		// if(!stop && readyState !== 'complete') {
			// // Set timeout for recursive check
			// console.log('run check()');
			// setTimeout(function () {
				// result = check();
			// }, 1);
			// return result;
		// } else {
			// console.log('We are loaded');
			// return true;
		// }
	// }

	// // Set up the kill switch
	// setTimeout(function () {
		// console.log('Timeout kill');
		// stop = true;
	// }, timeout);

	// // CODE FOR THE TEST - REMOVE IN PROD
	// // Set up the test page load wait
	// setTimeout(function () {
		// console.log('Set page loaded');
		// loadState = 'complete';
	// }, 50);
	// // ----------------------------------
	
	// // Start check run
	// console.log('start check run');
	// return check();
// };

function tco(f) {
    var value;
    var active = false;
    var accumulated = [];

    return function accumulator() {
        accumulated.push(arguments);

        if (!active) {
            active = true;

            while (accumulated.length) {
                value = f.apply(this, accumulated.shift());
            }

            active = false;

            return value;
        }
    }
}

var loaded = false;
var sum = tco(function(page) {
	page++;
	if (!stop && page < 10000000) {
		return sum(page);
	}
	else {
		return page;
	}
});

// var test = sum(1);
// console.log(test);



var state = 'interactive';
var isPageFullyLoaded = function(page, timeout, callback) {
	// State
	var stop = false;
	
	// Default the timeout
	if(!timeout) { timeout = 2000; }

	function check() {
		// This is the function that will return ready state
		readyState = page;

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

isPageFullyLoaded(state, 1000, theCallback);

