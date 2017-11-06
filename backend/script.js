var config = {
  apiKey: "AIzaSyBmtVAM9UgjScxzZvs6f1vpWxR0ym6YEFI",
  authDomain: "ace-mile-133504.firebaseapp.com",
  databaseURL: "https://ace-mile-133504.firebaseio.com",
  projectId: "ace-mile-133504",
  storageBucket: "ace-mile-133504.appspot.com",
  messagingSenderId: "963964433776"
};
firebase.initializeApp(config);

 var database = firebase.database();

 // add agenda
 function addAgenda(title, speaker, location, position, ontime) {
  firebase.database().ref('agendas').push({
    title: title,
    speaker: speaker,
    position: position,
    location: location,
    ontime: ontime
  })
 }

 function getAgenda()
 {

    var ref = firebase.database().ref('agendas');
    ref.orderByChild('position').on('value', function(snapshot) {
      $("#data-sym3").html('');
      snapshot.forEach(function(data) {
        var val = data.val();
        var html = '<tr class="ag" data-key="' + data.key + '">';
        html +='<td>' + val.title + '<br>';
        if (val.speaker !== '') {
          html += 'ผู้พูด <span>' + val.speaker + '</span>';
        }
        html += '</td>';

         html +='<td>' + val.ontime + '</td>';

        html +='</tr>';


        if (val.location == 'SYMPHOSIUM 1') {
          $("#data-sym1").append(html);
        }

        if (val.location == 'SYMPHOSIUM 2') {
          $("#data-sym2").append(html);
        }

        if (val.location == 'ADMAN NIGHT') {
          $("#data-sym3").append(html);
        }

      });
    })
 }


 $(function() {
    $("#addagenda").on('submit', function(e) {
      e.preventDefault();
      addAgenda($('#title').val(), $('#speaker').val(), $("#location").val(), $("#position").val(), $("#ontime").val());
      top.location.href = 'index.html';
    });
 })