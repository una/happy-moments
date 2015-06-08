// Date Formatting
function formatDate(d) {
  var months = {
    '01' : 'Jan',
    '02' : 'Feb',
    '03' : 'Mar',
    '04' : 'Apr',
    '05' : 'May',
    '06' : 'Jun',
    '07' : 'Jul',
    '08' : 'Aug',
    '09' : 'Sept',
    '10' : 'Oct',
    '11' : 'Nov',
    '12' : 'Dec'};
  var monthNum = d.slice(0,2);
  var dateNum = d.slice(3,5);

  return (months[monthNum] + ' ' + dateNum);
}

function getHashNum(hash) {
    return hash.split('#')[1];
}

//polyfill for includes
if (!String.prototype.includes) {
  String.prototype.includes = function() {'use strict';
    return String.prototype.indexOf.apply(this, arguments) !== -1;
  };
}