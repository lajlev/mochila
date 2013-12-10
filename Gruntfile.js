module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    sass: {
      dist: {
        files: {
          'static/css/app.css': 'sass/app.scss'
        }
      }
    },

    jade: {
      options: {
        pretty: true
      },
      compile: {
        files: [{
          expand: true,
          cwd: 'views',
          src: ['*.jade'],
          dest: 'static/',
          ext: '.html'
        }]
      }
    },

    connect: {
      server: {
        options: {
          port: 9001,
          base: 'static/'
        }
      }
    },

    watch: {
      sass: {
        files: ['sass/**/*.scss','sass/_partials/**/*.scss'],
        tasks: ['sass:dist']
      },
      jade: {
        files: ['views/**/*.jade'],
        tasks: ['jade']
      },
      livereload: {
        files: ['*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['sass', 'jade', 'connect', 'watch']);
};