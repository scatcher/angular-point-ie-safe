'use strict';

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    config: {
      // configurable paths
      src: 'src',
      dist: 'dist'
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [
          {
            dot: true,
            src: [
              '.tmp',
              '<%= config.dist %>/*'
            ]
          }
        ]
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: [
          '<%= config.src %>/*.js',
          'bower_components/ExplorerCanvas/excanvas.js',
          'bower_components/es5-shim/es5-shim.js',
          'bower_components/json3/lib/json3.js',
          'bower_components/respond/dest/respond.src.js'
        ],
        dest: '<%= config.dist %>/angular-point-ie-safe.js'
      }
    },

    uglify: {
      js: {
        src: ['<%= config.dist %>/angular-point-ie-safe.js'],
        dest: '<%= config.dist %>/angular-point-ie-safe.min.js'
      }
    },

    'bump': {
      options: {
        files: ['package.json', 'bower.json'],
        commit: false,
        createTag: false,
        push: false
      }
    }
  });

  grunt.registerTask('build', [
    'clean:dist',
    'concat',
    'uglify'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};