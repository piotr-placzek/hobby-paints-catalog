'use strict';

function tasks(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        eslint: require('./grunt/tasks/eslint')(__dirname),
        run: require('./grunt/tasks/jest')
    });

    grunt.registerTask('test', 'Run ESLint and Unit Tests', ['eslint', 'run']);
}

module.exports = tasks;
