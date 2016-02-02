# es7-sleep

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads][downloads-image]][downloads-url]

ES7 sleep function with async/await

## Install

```
npm install es7-sleep
```

## Usage

```
import sleep from "es7-sleep";

async () => {
    ...

    while(!result) {
        await sleep(1000);
        result = redis.get(key);
    }

    ...
}
```

## License

MIT


[npm-image]: https://img.shields.io/npm/v/es7-sleep.svg?style=flat-square
[npm-url]: https://npmjs.org/package/es7-sleep
[downloads-image]: http://img.shields.io/npm/dm/es7-sleep.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/es7-sleep
[travis-image]: https://img.shields.io/travis/Secbone/es7-sleep.svg?style=flat-square
[travis-url]: https://travis-ci.org/Secbone/es7-sleep
