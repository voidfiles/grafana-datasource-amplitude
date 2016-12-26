import {AmplitudeDatasource} from './datasource';
import {AmplitudeQueryCtrl} from './query_ctrl';

class AmplitudeConfigCtrl {};
AmplitudeConfigCtrl.templateUrl = "partials/config.html";

class AmplitudeOptionsCtrl {};
AmplitudeOptionsCtrl.templateUrl = "partials/query.options.html";


export {
  AmplitudeDatasource as Datasource,
  AmplitudeQueryCtrl as QueryCtrl,
  AmplitudeConfigCtrl as ConfigCtrl,
  AmplitudeOptionsCtrl as QueryOptionsCtrl,
}
