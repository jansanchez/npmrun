#!/usr/bin/env node

var program = require('commander');

program
    .version(require('./package.json').version)
    .command('nr <task_name> [tasks...]')
    .action(function (task, otherTasks) {
        console.log('nr %s', task); 
        if (otherTasks){
            otherTasks.forEach(function (oTasks){
            })
        }
    });

program.parse(process.argv);

// console.log("hola amigos");
