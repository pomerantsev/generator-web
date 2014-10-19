var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  method1: function () {
    console.log('method 1');
  },
  method2: function () {
    console.log('method 2');
  }
});
