define([
  './datasource',
],
function (InfluxDatasource) {
  'use strict';

  function influxMetricsQueryEditor() {
    return {controller: 'InfluxQueryCtrl', templateUrl: 'public/app/plugins/datasource/influxdb/partials/query.editor.html'};
  }

  function influxMetricsQueryOptions() {
    return {templateUrl: 'public/app/plugins/datasource/influxdb/partials/query.options.html'};
  }

  function influxAnnotationsQueryEditor() {
    return {templateUrl: 'public/app/plugins/datasource/influxdb/partials/annotations.editor.html'};
  }

  function influxConfigView() {
    return {templateUrl: 'public/app/plugins/datasource/influxdb/partials/config.html'};
  }

  return {
    Datasource:               InfluxDatasource,
    metricsQueryEditor:       influxMetricsQueryEditor,
    metricsQueryOptions:      influxMetricsQueryOptions,
    annotationsQueryEditor:   influxAnnotationsQueryEditor,
    configView:               influxConfigView,
  };
});
