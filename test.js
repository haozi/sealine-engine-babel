var babelEngine = require('./index.js');

var es6code = `
  let c = 10;
  let arr = [1, 2, 3, 4];
  for (let a of arr) {
    console.log(a);
  }
  class A {
    hello() {
      alert('hello')
    }
  }

  async function a() {
    return 'a';
  }
  async function b() {
    var a = await _async();
    alert(a);
  }
  b();
`;


babelEngine(es6code, {
  presets: ['es2015-loose', 'stage-3']
}).then(es5code => {
  console.log(es5code);
});
