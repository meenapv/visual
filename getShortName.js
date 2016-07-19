/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define([], function () {
  var shortNames = {
    'Major cardiovascular diseases': 'Cardiovascular diseases',
    'Symptoms, signs, and abnormal clinical and laboratory findings, not elsewhere classified': 'Unclassified conditions',
    'Chronic lower respiratory diseases': 'Respiratory diseases',
    'Pneumonitis due to solids and liquids': 'Pneumonitis',
    'Chronic liver disease and cirrhosis': 'Liver disease',
    'Complications of medical and surgical care': 'Complications of care',
    'Benign/other neoplasms': 'Neoplasms'
  };

  // Gets a short version of a given cause of disease
  // for use as labels.
  return function getShortName(name) {
    var shortName = shortNames[name];
    return shortName ? shortName : name;
  };
});

