var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  method1: function () {
    console.log('method 1');
  },
  method2: function () {
    console.log('method 2');
  },
  promptName: function () {
    var done = this.async();
    this.prompt({
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname
    }, function (answers) {
      this.log(answers.name);
      done();
    }.bind(this));
  }
});
