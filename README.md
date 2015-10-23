# JavascriptUtilities

Simple JavaScript functions and stuff. 

## isPageLoaded(page, timeout, callback);
- page = a function that returns the readyState of the page.
- timeout = amount of time to wait before canceling the wait and returning anyway.
- callback = function to call once the wait is done.

## Jquery Addons
### Case insensitive contains
extention for jQuery to add icontains as an expression (case insensitive).

### fuzzyContains
extention for jQuery that incorporated fuzzyset (https://github.com/Glench/fuzzyset.js) into a fuzzyContains expression.