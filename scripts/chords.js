document.addEventListener('DOMContentLoaded', function() {
  var tbody = document.getElementById('tbody');

  for (var i = 0; i < majorScales.length; i++) {
      var tr = "<tr>";
      var chords = getChordsFromScale(majorScales[i].value);
      //Must not forget the $ sign
      tr += "<td>" + majorScales[i].key + "</td>" + "<td>" + chords.join(', ') + "</td>" + "<td>"
      + chords[0] + ", " + chords[3] + ", " + chords[4] + "</td></tr>";

      // We add the table row to the table body
      tbody.innerHTML += tr;
  }
}, false);
