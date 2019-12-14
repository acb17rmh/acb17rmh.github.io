document.addEventListener('DOMContentLoaded', function() {
  var majorScalesTable = document.getElementById('tbody_majorscales');
  var minorScalesTable = document.getElementById('tbody_minorscales');

  for (var i = 0; i < majorScales.length; i++) {
      var tr = "<tr>";
      var chords = majorScales[i].value;
      //Must not forget the $ sign
      tr += "<td>" + majorScales[i].key + "</td>" + "<td>" + chords.join(', ') + "</td></tr>";

      // We add the table row to the table body
      majorScalesTable.innerHTML += tr;
  }

  for (var i = 0; i < minorScales.length; i++) {
      var tr = "<tr>";
      var chords = minorScales[i].value;
      //Must not forget the $ sign
      tr += "<td>" + minorScales[i].key + "</td>" + "<td>" + chords.join(', ') + "</td></tr>";

      // We add the table row to the table body
      minorScalesTable.innerHTML += tr;
  }
}, false);
