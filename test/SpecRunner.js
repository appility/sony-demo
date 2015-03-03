(function() {
  'use strict';
  require(['config-test'],
    function() {
      var specs = [
        '../../test/spec/playerSpec'
      ];

      require(['boot'], function() {
        require(['../src/js/config'], function() {
          require(specs, function() {
            // Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
            window.onload();
          });
        });
      });
    });
})();