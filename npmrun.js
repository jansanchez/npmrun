#!/usr/bin/env node

var program = require('commander');

program
    .version(require('./package.json').version)
    .command('nr task_name')
    .action(function (task) {
        console.log("entro");
        console.log('nr %s', task); 
    });

program.parse(process.argv);

