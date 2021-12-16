var currentDate = moment().format('dddd, MMMM Do');
var currentTime = moment().format('H');
$('#currentDay').text(currentDate);
console.log(currentTime)

var rows = $('.row')
console.log(rows)
var row1 = rows[0]
console.log(row1.dataset.hour)

Array.from(rows).forEach(row => {
  var rowHour = row.dataset.hour;
  var rowChildren = row.children
  var rowInput = rowChildren[1];

  if (currentTime > rowHour) {
    rowInput.style.backgroundColor = 'rgb(255, 255, 255)';
  }

  if (currentTime == rowHour) {
    rowInput.style.backgroundColor = 'rgb(255, 117, 117)';
  }

  if (currentTime < rowHour) {
    rowInput.style.backgroundColor = 'rgb(127, 255, 123)';
  }
})
