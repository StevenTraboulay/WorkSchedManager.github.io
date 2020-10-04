$(document).ready(function () {
  //watching save buttonc licks
  $(".saveBtn").on("click", function () {
    //get nearby values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    //local storage
    localStorage.setItem(time, value);
  });

  function hourUpdater() {
    //current hours  numbers
    var currentHour = moment().hours();

    //time blocks looped in
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      //verifying time moving
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  hourUpdater();

  //interval for time to update
  var interval = setInterval(hourUpdater, 13000);

  //load in save data loop

  $(".time-block").each(function () {
    var blockHour = $(this).attr("id");
    $("hour" + blockHour + ".description").val(localStorage.getItem(blockHour));
  });

  //display day
  $("#currentDay").text(moment().format("dddd, MMM Do"));
});
