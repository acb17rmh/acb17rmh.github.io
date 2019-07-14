function getChordsFromScale(scale) {
  var chords = [];
  for (var j = 1; j <= scale.length; j++) {
    var chord = "";
    if ((j == 2) || (j == 3) || (j == 6)) {
      //minor chord
      chord = scale[j-1] + "m";
      chords.push(chord);
    } else if (j == 7) {
      //diminished chord
      chord = scale[j-1] + "dim";
      chords.push(chord);
    } else {
      //major chord
      chord = scale[j-1];
      chords.push(chord);
    }
  }
  //console.log(chords);
  return chords;
}

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
