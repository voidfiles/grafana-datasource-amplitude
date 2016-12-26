'use strict';

System.register(['./datasource', './query_ctrl'], function (_export, _context) {
  "use strict";

  var AmplitudeDatasource, AmplitudeQueryCtrl, AmplitudeConfigCtrl, AmplitudeOptionsCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_datasource) {
      AmplitudeDatasource = _datasource.AmplitudeDatasource;
    }, function (_query_ctrl) {
      AmplitudeQueryCtrl = _query_ctrl.AmplitudeQueryCtrl;
    }],
    execute: function () {
      _export('ConfigCtrl', AmplitudeConfigCtrl = function AmplitudeConfigCtrl() {
        _classCallCheck(this, AmplitudeConfigCtrl);
      });

      ;
      AmplitudeConfigCtrl.templateUrl = "partials/config.html";

      _export('QueryOptionsCtrl', AmplitudeOptionsCtrl = function AmplitudeOptionsCtrl() {
        _classCallCheck(this, AmplitudeOptionsCtrl);
      });

      ;
      AmplitudeOptionsCtrl.templateUrl = "partials/query.options.html";

      _export('Datasource', AmplitudeDatasource);

      _export('QueryCtrl', AmplitudeQueryCtrl);

      _export('ConfigCtrl', AmplitudeConfigCtrl);

      _export('QueryOptionsCtrl', AmplitudeOptionsCtrl);
    }
  };
});
//# sourceMappingURL=module.js.map
