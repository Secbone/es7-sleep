"use strict"

function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

module.exports = exports = sleep;
