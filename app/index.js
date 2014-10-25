var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  prompting: {
    promptName: function () {
      var done = this.async();
      this.prompt({
        type: 'input',
        name: 'projectName',
        message: 'Your project name'
      }, function (answers) {
        this.projectName = answers.projectName;
        done();
      }.bind(this));
    }
  },
  configuring: {
    copyFiles: function () {
      this.template('_package.json', 'package.json', {
        projectName: this.projectName
      });
    }
  }
});
