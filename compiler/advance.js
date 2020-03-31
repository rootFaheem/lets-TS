"use strict";
function controlMe(isTrue, somethingElse) {
    var result;
    somethingElse = "Hi";
    if (isTrue) {
        result = 12;
    }
    // following line will show warning bcoz nullcehck is true
    result = 20;
    return { result: result, somethingElse: somethingElse };
}
