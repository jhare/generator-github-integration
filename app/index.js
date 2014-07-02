"use strict";
var util = require("util");
var path = require("path");
var yeoman = require("yeoman-generator");
var chalk = require("chalk");

// TODO: Make this a subgenerator
var GeneratorBrowserifyGulpjsGenerator = yeoman.generators.Base.extend({
  init: function () {

    this.pkg = require("../package.json");

    this.on("end", function () {
      if (!this.options["skip-install"]) {
        this.installDependencies();
      }
    });

	// TODO: Get all the available licenses from Github
	
	// TODO: Get list of the possible ignore files (Is there a way to do this?)
		
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta("You\"re using the super-duper GeneratorBrowserifyGulpjs generator."));
    this.log(chalk.green("Every good day starts with a new Github repository."));

    var prompts = [
		{
			"name": "userName",
			"type": "input",
			"message": "What is your Github username?"
		},
		{
			"name": "password",
			"type": "password",
			"message": "Enter your Github password",
		},
		{
			"name":	"storeUserName",
			"type": "confirm",
			"message": "Would you me to remember your user name?"
		},
		{
			"name":	"storePassword",
			"type": "confirm",
			"message": "Would you me to remember your password? (at your own risk)"
		},
		{
			"name": "learnLicense",
			"type": "confirm",
			"message": "I might be able to figure out your license. Should I?"
		}
	];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir("app");
    this.mkdir("app/templates");

    this.copy("_package.json", "package.json");
    this.copy("gulpfuile.js", "gulpfile.js");
  },

  projectfiles: function () {
    this.copy("editorconfig", ".editorconfig");
    this.copy("jshintrc", ".jshintrc");
  }
});

module.exports = GeneratorBrowserifyGulpjsGenerator;
