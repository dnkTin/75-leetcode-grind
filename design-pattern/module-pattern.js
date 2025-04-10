/**
 * The most common pattern in Javascript
 * encapsulate the logic of function and variable in the same scope
 * We can see the implementation of this by 'Import and Export' in ES6
 */

var module = (function () {
  let options = {
    color: 'red',
  }

  const setSize = function () {
    options['size'] = 12;
  }

  return {
    getOptions: function () {
      setSize();
      return options;
    }
  }
})();

console.log(module.getOptions());