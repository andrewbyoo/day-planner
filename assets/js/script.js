var currentDate = moment().format('dddd, MMMM Do');
var currentTime = moment().format('h A')
console.log(currentTime)
$('#currentDay').text(currentDate);
