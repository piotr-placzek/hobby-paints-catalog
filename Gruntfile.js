'use strict';

function tasks(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        eslint: require('./grunt/tasks/eslint')(__dirname),
        run: require('./grunt/tasks/jest')
    });

    grunt.registerTask('test', 'Run ESLint and Unit Tests', ['eslint', 'run']);
}

module.exports = tasks;
