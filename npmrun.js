#!/usr/bin/env node

var program = require('commander');
var exec = require('child_process').exec;
var color = require('chalk');

var execute = function (task){
	exec("npm run " + task, function (error, stdout, stderr) {
		console.log(color.magenta(stdout));
	});
}

program
.version(require('./package.json').version)
.action(function (task, otherTasks) {
	execute(task);
	// console.log(otherTasks);
	// if (otherTasks){
	//     otherTasks.forEach(function (oTask){
	//         execute(task);
	// 	});
	// }
});

program.parse(process.argv);

