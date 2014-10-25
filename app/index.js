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
      this.template('_bower.json', 'bower.json', {
        projectName: this.projectName
      });
      this.copy('_Gruntfile.js', 'Gruntfile.js');
      this.copy('_.gitignore', '.gitignore');

      this.mkdir('src');
      this.template('src/_index.html', 'src/index.html', {
        projectName: this.projectName
      });
      this.mkdir('src/css');
      this.copy('src/css/_style.css', 'src/css/style.css');
      this.mkdir('src/js');
      this.copy('src/js/_script.js', 'src/js/script.js');
    }
  },
  install: function () {
    this.installDependencies();
  }
});
