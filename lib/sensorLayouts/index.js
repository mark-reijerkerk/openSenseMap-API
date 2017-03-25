'use strict';

const senseboxhome = require('./sensebox.home'),
  luftdaten_sds011_dht11 = require('./luftdaten/sds011.dht11'),
  luftdaten_sds011_dht22 = require('./luftdaten/sds011.dht22'),
  luftdaten_sds011_bmp180 = require('./luftdaten/sds011.bmp180'),
  luftdaten_sds011_bme280 = require('./luftdaten/sds011.bme280');

const getSensorsForModel = function getSensorsForModel (model) {
  switch (model) {
  case 'homeEthernet':
  case 'homeWifi':
    return senseboxhome;
  case 'luftdaten_sds011_dht11':
    return luftdaten_sds011_dht11;
  case 'luftdaten_sds011_dht22':
    return luftdaten_sds011_dht22;
  case 'luftdaten_sds011_bmp180':
    return luftdaten_sds011_bmp180;
  case 'luftdaten_sds011_bme280':
    return luftdaten_sds011_bme280;
  }
};

module.exports = {
  getSensorsForModel
};