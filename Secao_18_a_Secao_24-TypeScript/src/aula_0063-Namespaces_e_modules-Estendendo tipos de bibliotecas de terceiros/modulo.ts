import _ from 'lodash';

_.mul = function (array: number[]): number {
  return array.reduce((total, valueActual) => total * valueActual, 1);
};

// global.MYGLOBAL = "VALOR DA 'MYGLOBAL'";
global.MYGLOBAL = "VALOR DA 'MYGLOBAL'";

export default _;
