"use strict"

function sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time)
    });
}

module.exports = exports = sleep;
