'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AmplitudeQueryCtrl = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sdk = require('app/plugins/sdk');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //import _ from 'lodash';


var AmplitudeQueryCtrl = exports.AmplitudeQueryCtrl = function (_QueryCtrl) {
  _inherits(AmplitudeQueryCtrl, _QueryCtrl);

  function AmplitudeQueryCtrl($scope, $injector, $q, uiSegmentSrv) {
    _classCallCheck(this, AmplitudeQueryCtrl);

    var _this = _possibleConstructorReturn(this, (AmplitudeQueryCtrl.__proto__ || Object.getPrototypeOf(AmplitudeQueryCtrl)).call(this, $scope, $injector));

    _this.uiSegmentSrv = uiSegmentSrv;
    if (_this.target.event) {
      _this.eventSegment = new uiSegmentSrv.newSegment(_this.target.event);
    } else {
      _this.eventSegment = new uiSegmentSrv.newSegment({
        value: 'Select Event',
        fake: true,
        custom: false
      });
    }

    return _this;
  }

  _createClass(AmplitudeQueryCtrl, [{
    key: 'getEvents',
    value: function getEvents() {
      return this.datasource.metricFindQuery();
    }
  }, {
    key: 'getProps',
    value: function getProps() {
      return this.datasource.metricFindProps(this.target.event);
    }
  }, {
    key: 'eventChanged',
    value: function eventChanged() {
      this.target.event = this.eventSegment.value;
      this.panelCtrl.refresh();
    }
  }, {
    key: 'uniquePropCountChanged',
    value: function uniquePropCountChanged() {
      this.target.uniquePropCount = this.uniquePropCountSegment.value;
      this.panelCtrl.refresh();
    }
  }]);

  return AmplitudeQueryCtrl;
}(_sdk.QueryCtrl);

AmplitudeQueryCtrl.templateUrl = 'partials/query.editor.html';
//# sourceMappingURL=query_ctrl.js.map
