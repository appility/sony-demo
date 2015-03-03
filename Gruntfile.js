var modRewrite = require('connect-modrewrite')
module.exports = function(grunt) {

  var globalConfig = {
    src: 'src',
    dest: 'build'
  };

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    globalConfig: globalConfig,
    srcDir: 'src',
    buildDir: 'build',
    testDir: 'tests',

    sass: {
      dist: {
        options: {
          style: 'compressed',
          trace: true
        },
        files: {
          '<%= globalConfig.dest %>/css/style.css': 'src/sass/style.scss'
        }
      }
    },

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
      src: [
        '<%= globalConfig.src %>/js/*.js',
        '<%= globalConfig.src %>/js/views/**/*.js',
        '<%= globalConfig.src %>/js/models/**/*.js',
        '<%= globalConfig.src %>/js/collections/**/*.js'
      ]
    },


    jasmine: {
      pivotal: {
        tasks: 'jasmine:pivotal:build',
        src: [
          '<%= globalConfig.src %>/js/*.js',
          '<%= globalConfig.src %>/js/views/**/*.js',
          '<%= globalConfig.src %>/js/models/**/*.js',
          '<%= globalConfig.src %>/js/collections/**/*.js'
        ],
        options: {
          specs: 'test/spec/*Spec.js',
          helpers: 'test/spec/*Helper.js',
          host: 'http://0.0.0.0:8000',
          keepalive: true,
          template: require('grunt-template-jasmine-requirejs'),
          templateOptions: {
            requireConfigFile: ['test/config-test.js', 'src/js/config.js']
          },
          requireConfig: {
            baseUrl: 'src/js/'
          },
          keepRunner: true,
          screenshot: true
        }
      }
    },

    requirejs: {
      compile: {
        options: {
          baseUrl: "<%= globalConfig.src %>/js/",
          findNestedDependencies: true,
          mainConfigFile: '<%= globalConfig.src %>/js/config.js',
          name: 'init',
          uglify: {
            mangle: true,
            report: 'gzip'
          },
          out: "<%= globalConfig.dest %>/js/optimized.js",
          preserveLicenseComments: false,
          include: ['libs/require.js']
        }
      }
    },

    handlebars: {
      compile: {
        options: {
          namespace: "Appility.Templates",
          processName: function(filePath) {
            var pieces = filePath.split("/");
            return pieces[pieces.length - 1];
          }
        },
        files: {
          "<%= globalConfig.dest %>/js/templates/all.js": "src/templates/*.html",
        }
      }
    },


    copy: {
      main: {
        files: [{
          src: ['<%= globalConfig.src %>/index.html'],
          dest: '<%= globalConfig.dest %>/index.html'
        }]
      }
    },

    connect: {
      test: {
        server: {
          options: {
            hostname: '127.0.0.1',
            port: 9999,
            keepalive: true
          }
        }
      },
      server: {
        options: {
          port: 8001,
          hostname: 'localhost',
          keepalive: true,
          base: 'build',
          open: true,
          middleware: function(connect, options) {
            var proxy = require('grunt-connect-proxy/lib/utils').proxyRequest;
            var rewrite = modRewrite(['^[^\\.]*$ /index.html [L]']);
            return [
              proxy,
              rewrite,
              connect.static('build')
            ];
          }
        },

        proxies: [{
          context: '/api',
          host: '217.18.25.29',
          port: 10070,
          changeOrigin: true,
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          rewrite: {
            '^/api': '/'
          }
        }]
      }
    },

    watch: {
      files: '<%= globalConfig.src %>/js/**/*.js',
      tasks: ['jasmine']
    }
  });



  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.loadNpmTasks('grunt-preprocess');

  grunt.loadNpmTasks('grunt-contrib-handlebars');

  grunt.loadNpmTasks('grunt-contrib-requirejs');

  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.loadNpmTasks('grunt-connect-proxy');

  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('test', ['jshint', 'connect:test', 'jasmine']);

  grunt.registerTask('build', ['jshint', 'sass', 'handlebars', 'requirejs', 'copy']);

  grunt.registerTask('default', ['sass', 'handlebars', 'requirejs', 'copy', 'configureProxies:server', 'connect:server']);

};