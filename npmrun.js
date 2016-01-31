#!/usr/bin/env node

'use strict';

const program = require('commander');
const color = require('chalk');
const shell = require('execa').shell;

const execute = function (task) {
	shell(`npm run ${task}`).then(result => {
		console.log(color.magenta(result.stdout));
		console.log(color.red.bold(result.stderr));
		console.log(color.white.underline(Array(26).join('  ')));
		console.log(Array(26).join('  '));
	});
};

let tasks = false;

program
.version(require('./package.json').version)
.arguments('<task> [otherTasks...]')
.action((task, otherTasks) => {
	tasks = true;
	execute(task);
	if (otherTasks.length !== 0) {
		otherTasks.forEach(oTask => {
			execute(oTask);
		});
	}
});

program.parse(process.argv);

if (tasks === false) {
	console.error(color.red.bold('no command given!'));
	process.exit(1);
}

