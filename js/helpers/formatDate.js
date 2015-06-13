module.exports = function(d) {
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
};