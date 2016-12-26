'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QueryOptionsCtrl = exports.ConfigCtrl = exports.QueryCtrl = exports.Datasource = undefined;

var _datasource = require('./datasource');

var _query_ctrl = require('./query_ctrl');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AmplitudeConfigCtrl = function AmplitudeConfigCtrl() {
  _classCallCheck(this, AmplitudeConfigCtrl);
};

;
AmplitudeConfigCtrl.templateUrl = "partials/config.html";

var AmplitudeOptionsCtrl = function AmplitudeOptionsCtrl() {
  _classCallCheck(this, AmplitudeOptionsCtrl);
};

;
AmplitudeOptionsCtrl.templateUrl = "partials/query.options.html";

exports.Datasource = _datasource.AmplitudeDatasource;
exports.QueryCtrl = _query_ctrl.AmplitudeQueryCtrl;
exports.ConfigCtrl = AmplitudeConfigCtrl;
exports.QueryOptionsCtrl = AmplitudeOptionsCtrl;
//# sourceMappingURL=module.js.map
