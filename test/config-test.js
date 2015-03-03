
  require.config({
    //baseUrl: './',
    paths: {
      'jasmine': '../test/lib/jasmine-2.1.3/jasmine',
      'jasmine-html': '../test/lib/jasmine-2.1.3/jasmine-html',
      'boot': '../test/lib/jasmine-2.1.3/boot'
    },
    shim: {
      'jasmine': {
        exports: 'window.jasmineRequire'
      },
      'jasmine-html': {
        deps: ['jasmine'],
        exports: 'window.jasmineRequire'
      },
      'boot': {
        deps: ['jasmine', 'jasmine-html'],
        exports: 'window.jasmineRequire'
      }
    }
  });