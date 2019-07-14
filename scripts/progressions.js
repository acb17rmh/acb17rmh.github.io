function convertProgToChords(progression, chords) {
  var output = []
  for (var i = 0; i < progression.length; i++) {
    output.push(chords[progression[i] - 1])
  }
  return output;
}

document.addEventListener('DOMContentLoaded', function() {
  var tbody = document.getElementById('tbody');
  var chords = ["C", "Dm", "Em", "F", "G", "Am", "Bdim"];

  for (var i = 0; i < majorChordProgressions; i++) {
    tr += "<td>" + convertProgToChords(majorChordProgressions, chords) +"</td">

    tbody.innerHTML += tr;
    }
  }
}, false);
