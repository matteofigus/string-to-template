string-to-template
==================
ES6 template literal starting from a string. Common scenario when working from json config files.

### Install

```js
npm i string-to-template --save
```

### Usage

```js
const execute = require('string-to-template')

const result = execute("hello ${name}", { name: 'John'})
const another = execute("extension is \"${filename.split('.')[1]}\"", { filename: 'hi.json' })
```

### License
MIT