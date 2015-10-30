function waitFor(page, testFx, onReady, timeOut) {
	var start = new Date().getTime(),
		breakCondition = false;
	var result = page.evaluate(testFX);

	var interval = setInterval(function() {
		if ( (new Date().getTime() - start < timeOut) && !breakCondition ) {
			// If not time-out yet and condition not yet fulfilled
			breakCondition = testFx();
			console.log("'waitFor()' running function");
		} else {
			if(!breakCondition) {
				// If condition still not fulfilled (timeout but condition is 'false')
				console.log("'waitFor()' timeout");
			} else {
				// Condition fulfilled (timeout and/or condition is 'true')
				console.log("'waitFor()' finished in " + (new Date().getTime() - start) + "ms.");
				onReady(); //< Do what it's supposed to do once the condition is fulfilled
				clearInterval(interval);
			}
		}
	}, 250); //< repeat check every 250ms
}