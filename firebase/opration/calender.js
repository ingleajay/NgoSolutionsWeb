function readTask(adminId)  {
    var  adminId = firebase.auth().currentUser.uid;
    
    var task = firebase.database().ref('/user/'+ adminId + '/Event/');
      task.on("child_added",function (data){
        var taskvalue = data.val();
        console.log(taskvalue);
        document.getElementById("external-events").innerHTML+=`
        <div class="row" '>
            <div class="external-event >
                <p id="para">Event Name :  ${taskvalue.Title}</p>
                <p id="para">Description : ${taskvalue.Description}</p>
                <p id="para">Start Date : ${taskvalue.Start_Date}</p>
                <p id="para">End Date :   ${taskvalue.End_Date}</p>
            </div>   
        </div>        
     `; 
});
}

var d =  new Date();
var t = d.getTime();
var counter = t;
const Eventform = document.querySelector('#msForm');

Eventform.addEventListener('submit' , (e) =>{
  e.preventDefault();
 
var  adminId = firebase.auth().currentUser.uid;
firebase.database().ref('/user/'+ adminId + '/Event/'+counter).set({
                    Title:document.getElementById('newevent1').value,
                    Description:document.getElementById('Description').value,
                    Start_Date:document.getElementById('Start_Date').value, 
                    End_Date:document.getElementById('End_Date').value,
                    Color:document.getElementById('simple-color-picker').value,  
                    id : counter,
                    adminId : firebase.auth().currentUser.uid,
                    email : firebase.auth().currentUser.email,
                 

                });
                
                alert("Suceesfully add");
});

$(function () {

    /* initialize the external events
     -----------------------------------------------------------------*/
    function ini_events(ele) {
      ele.each(function () {

        // create an Event Object (śśś)
        // it doesn't need to have a start or end
        var eventObject = {
          title: $.trim($(this).text()) // use the element's text as the event title
        }

        // store the Event Object in the DOM element so we can get to it later
        $(this).data('eventObject', eventObject)

        // make the event draggable using jQuery UI
        $(this).draggable({
          zIndex        : 1070,
          revert        : true, // will cause the event to go back to its
          revertDuration: 0  //  original position after the drag
        })

      })
    }

    ini_events($('#external-events div.external-event'))

    /* initialize the calendar
     -----------------------------------------------------------------*/
    //Date for the calendar events (dummy data)
    var date = new Date()
    var d    = date.getDate(),
        m    = date.getMonth(),
        y    = date.getFullYear()

    var Calendar = FullCalendar.Calendar;
   
    var Draggable = FullCalendarInteraction.Draggable;
  
    var containerEl = document.getElementById('external-events');
    var checkbox = document.getElementById('drop-remove');
    var calendarEl = document.getElementById('calendar');

    // initialize the external events
    // -----------------------------------------------------------------

    new Draggable(containerEl, {
      itemSelector: '.external-event',
      eventData: function(eventEl) {
        console.log(eventEl);
        return {
          title: eventEl.innerText,
          backgroundColor: window.getComputedStyle( eventEl ,null).getPropertyValue('background-color'),
          borderColor: window.getComputedStyle( eventEl ,null).getPropertyValue('background-color'),
          textColor: window.getComputedStyle( eventEl ,null).getPropertyValue('color'),
        };
      }
    });

    var calendar = new Calendar(calendarEl, {
      plugins: [ 'bootstrap', 'interaction', 'dayGrid', 'timeGrid' ],
      header    : {
        left  : 'prev,next today',
        center: 'title',
        right : 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      'themeSystem': 'bootstrap',
      //Random default events
      events    : [
        {
          title          : 'All Day Event',
          start          : new Date(y, m, 1),
          backgroundColor: '#f56954', //red
          borderColor    : '#f56954', //red
          allDay         : true
        },   
      ],
      selectable: true,
			selectHelper: true,
			select: function() {
				$('#eventModal').modal('show');
			},
      editable  : true,
      droppable : true, // this allows things to be dropped onto the calendar !!!
      drop      : function(info) {
        // is the "remove after drop" checkbox checked?
        if (checkbox.checked) {
          // if so, remove the element from the "Draggable Events" list
          info.draggedEl.parentNode.removeChild(info.draggedEl);
        }
      }   
    });


    calendar.render();
    $('#calendar').fullCalendar()

    
    var currColor = '#3c8dbc' //Red by default
    // Color chooser button
    var colorChooser = $('#color-chooser-btn')
    $('#color-chooser > li > a').click(function (e) {
      e.preventDefault()
    //  Save color
      currColor = $(this).css('color')
    //  Add color effect to button
      $('#add-new-event1').css({
        'background-color': currColor,
        'border-color'    : currColor
      })
    })
    $('#add-new-event').click(function (e) {
      e.preventDefault()
      //Get value and make sure it is not null
      var val = $('.new-event').val()
      if (val.length == 0) {
        return
      }

    // Create events
      var event = $('<div />')
      event.css({
        'background-color': currColor,
        'border-color'    : currColor,
        'color'           : '#fff'
      }).addClass('external-event')
      event.html(val)
      $('#external-events1').prepend(event)

      // Add draggable funtionality
      ini_events(event)

      // Remove event from text input
      $('.new-event1').val('')
    })
  })