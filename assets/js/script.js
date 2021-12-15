var currentDate = moment().format('dddd, MMMM Do');
var currentTime = moment().format('H');
$('#currentDay').text(currentDate);

var rows = $('.row')
console.log(rows)
var row1 = rows[0]
console.log(row1.dataset.hour)

Array.from(rows).forEach(row => {
  var rowHour = row.dataset.hour;
console.log(rowHour)


// Not working, seems i can't target individual row
  if(currentTime > rowHour) {
    row.children(1).css('background-color', '#dddddd')
  }

  if (currentTime = rowHour) {
    row.children(1).css('background-color', '#FF7575')
  }
})
