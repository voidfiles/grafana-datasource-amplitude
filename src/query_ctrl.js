//import _ from 'lodash';
import {QueryCtrl} from 'app/plugins/sdk';

export class AmplitudeQueryCtrl extends QueryCtrl {

    constructor($scope, $injector, $q, uiSegmentSrv)  {
      super($scope, $injector);
      this.uiSegmentSrv = uiSegmentSrv;
      if (this.target.event) {
        this.eventSegment = new uiSegmentSrv.newSegment(
          this.target.event
        );
      } else {
        this.eventSegment = new uiSegmentSrv.newSegment({
          value: 'Select Event',
          fake: true,
          custom: false,
        });
      }

    }

    getEvents() {
      return this.datasource.metricFindQuery();
    }

    getProps() {
      return this.datasource.metricFindProps(
        this.target.event
      );
    }

    eventChanged() {
      this.target.event = this.eventSegment.value;
      this.panelCtrl.refresh();
    }

    uniquePropCountChanged() {
      this.target.uniquePropCount = this.uniquePropCountSegment.value;
      this.panelCtrl.refresh();
    }
}

AmplitudeQueryCtrl.templateUrl = 'partials/query.editor.html';
