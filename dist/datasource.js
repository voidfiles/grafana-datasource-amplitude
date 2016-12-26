'use strict';

System.register(['lodash'], function (_export, _context) {
  "use strict";

  var _, _createClass, AmplitudeDatasource;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_lodash) {
      _ = _lodash.default;
    }],
    execute: function () {
      _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      _export('AmplitudeDatasource', AmplitudeDatasource = function () {
        function AmplitudeDatasource(instanceSettings, $q, backendSrv, templateSrv) {
          _classCallCheck(this, AmplitudeDatasource);

          this.type = instanceSettings.type;
          this.url = instanceSettings.url;
          this.name = instanceSettings.name;
          this.api_key = instanceSettings.jsonData.api_key;
          this.secret_key = instanceSettings.jsonData.secret_key;
          this.authdata = btoa(this.api_key + ':' + this.secret_key);

          this.supportMetrics = true;
          this.q = $q;
          this.backendSrv = backendSrv;
          this.templateSrv = templateSrv;
          this._cached_metrics = false;

          this._cached_props = {};
          this._fetching_props = {};
        }

        // Function to check Datasource health


        _createClass(AmplitudeDatasource, [{
          key: 'testDatasource',
          value: function testDatasource() {
            return this.backendSrv.datasourceRequest({
              url: this.url + '/events/list',
              method: 'GET',
              headers: {
                'Authorization': 'Basic ' + this.authdata
              }
            }).then(function (response) {
              if (response.status === 200) {
                return {
                  status: "success",
                  message: "Data source is working",
                  title: "Success"
                };
              }
            });
          }
        }, {
          key: 'metricFindProps',
          value: function metricFindProps(eventName) {
            if (this._cached_props[eventName]) {
              return this.q.when(this._cached_tags[eventName]);
            }

            if (this._fetching_props[eventName]) {
              return this._fetching_props[eventName];
            }

            var self = this;
            this.fetching_props[eventName] = this.backendSrv.datasourceRequest({
              url: self.url + '/events/list',
              method: 'GET',
              headers: {
                'Authorization': 'Basic ' + this.authdata
              }
            }).then(function (response) {
              self._cached_tags = _.map(response.data.data, function (event) {
                return {
                  text: event.name,
                  value: event.name
                };
              });

              return self._cached_tags;
            });

            return this.fetching_tags;
          }
        }, {
          key: 'metricFindQuery',
          value: function metricFindQuery() {
            if (this._cached_tags) {
              return this.q.when(this._cached_tags);
            }

            if (this.fetching_tags) {
              return this.fetching_tags;
            }
            var self = this;
            this.fetching_tags = this.backendSrv.datasourceRequest({
              url: self.url + '/events/list',
              method: 'GET',
              headers: {
                'Authorization': 'Basic ' + this.authdata
              }
            }).then(function (response) {
              self._cached_tags = _.map(response.data.data, function (event) {
                return {
                  text: event.name,
                  value: event.name
                };
              });

              return self._cached_tags;
            });

            return this.fetching_tags;
          }
        }, {
          key: 'formatDate',
          value: function formatDate(myDate) {
            return myDate.format('YYYYMMDD');
          }
        }, {
          key: 'getTarget',
          value: function getTarget(from, to, target) {
            var numDays = to.diff(from, 'days');
            var i = "-3600000";

            if (numDays >= 6) {
              i = '1';
            } else if (numDays >= 60) {
              i = '30';
            }
            var from = this.formatDate(from);
            var to = this.formatDate(to);
            var e = { "event_type": target.event };
            if (target.uniquePropCount) {
              e["group_by"] = [{
                "type": "event",
                "value": target.uniquePropCount
              }];
            }
            var query = {
              'e': e,
              'm': 'totals',
              'start': from,
              'end': to,
              'i': i
            };

            return this.backendSrv.datasourceRequest({
              url: this.url + '/events/segmentation',
              params: query,
              method: 'GET',
              headers: {
                'Authorization': 'Basic ' + this.authdata
              }
            }).then(function (response) {
              var points;
              if (target.uniquePropCount) {
                points = [];
                _.each(response.data.data.series, function (row, i) {
                  _.each(row, function (val, x) {
                    if (!points[x]) {
                      points[x] = 0;
                    }
                    if (val) {
                      points[x] += 1;
                    }
                  });
                });
              } else {
                points = response.data.data.series[0];
              }
              var dates = _.map(response.data.data.xValues, function (dateString) {
                return new Date(dateString).getTime();
              });

              return {
                "target": target.alias || target.refId,
                "datapoints": _.zip(points, dates)
              };
            });
          }
        }, {
          key: 'query',
          value: function query(options) {
            var targets = options.targets.filter(function (t) {
              return !t.hide;
            });
            var self = this;
            return this.q.all(_.map(targets, function (target) {
              return self.getTarget(options.range.from, options.range.to, target);
            })).then(function (targetData) {
              console.log(targetData);
              return {
                'data': targetData
              };
            });
          }
        }]);

        return AmplitudeDatasource;
      }());

      _export('AmplitudeDatasource', AmplitudeDatasource);
    }
  };
});
//# sourceMappingURL=datasource.js.map
