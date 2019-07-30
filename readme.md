# Resilio Sync NodeJS abstraction

[![NPM Version](https://img.shields.io/npm/v/resilio-sync.svg)](https://www.npmjs.com/package/resilio-sync)
[![node](https://img.shields.io/node/v/resilio-sync.svg)](https://www.npmjs.com/package/resilio-sync)
[![Build Status](https://travis-ci.com/EdJoPaTo/resilio-sync-nodejs-abstraction.svg?branch=master)](https://travis-ci.com/EdJoPaTo/resilio-sync-nodejs-abstraction)
[![Dependency Status](https://david-dm.org/edjopato/resilio-sync-nodejs-abstraction/status.svg)](https://david-dm.org/edjopato/resilio-sync-nodejs-abstraction)
[![Dev Dependency Status](https://david-dm.org/edjopato/resilio-sync-nodejs-abstraction/dev-status.svg)](https://david-dm.org/edjopato/resilio-sync-nodejs-abstraction?type=dev)

> Resilio Sync Abstraction

This abstraction was created to support the [Resilio Sync Home](//www.resilio.com/individuals/) software on headless devices.

## Install

```
$ npm install resilio-sync
```


## Usage

```js
const ResilioSync = require('resilio-sync');

const resilio = new ResilioSync('/usr/bin/rslsync');

resilio.syncConfig({
	device_name: 'bob',
	storage_path: '/tmp/test',
	...
})

// enjoy

await resilio.stop()
```

See TypeScript types for more info
