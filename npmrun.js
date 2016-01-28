#!/usr/bin/env node

var program = require('commander');
var exec = require('child_process').exec;
var color = require('chalk');

var execute = function (task){
    exec("npm run " + task, function (error, stdout, stderr) {
        console.log(color.magenta(stdout));
        if (error !== null) {
            // console.log(color.red('exec error: ' + error));
        }
    });
}

program
.version(require('./package.json').version)
.command('nr <task_name> [tasks...]')
.action(function (task, otherTasks) {
    execute(task);         
    if (otherTasks){
        otherTasks.forEach(function (oTask){
            execute(task);         
        });
    }
});

program.parse(process.argv);
