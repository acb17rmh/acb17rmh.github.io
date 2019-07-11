var DiatonicMajorChords = [
  {
      "key": "C",
      "value": ["C", "Dm", "Em", "F", "G", "Am", "Bdim"]
  },
  {
      "key": "G",
      "value": ["G", "Am", "Bm", "C", "D", "Em", "F#dim"]
  },
  {
      "key": "D",
      "value": ["D", "Em", "F#m", "G", "A", "Bm", "C#dim"]
  },
  {
      "key": "A",
      "value": ["A", "Bm", "C#m", "D", "E", "F#m", "G#dim"]
  },
  {
      "key": "E",
      "value": ["E", "F#m", "G#m", "A", "B", "C#m", "D#dim"]
  },
  {
      "key": "B",
      "value": ["B", "C#m", "D#m", "E", "F#", "G#m", "A#dim"]
  },
  {
      "key": "F#",
      "value": ["F#", "G#m", "A#m", "B", "C#", "D#m", "E#dim"]
  },
  {
      "key": "C#",
      "value": ["C#", "D#m", "E#m", "F#", "G#", "A#m", "B#dim"]
  },
  {
      "key": "F",
      "value": ["F", "Gm", "Am", "B♭", "C", "D", "Edim"]
  },
  {
      "key": "B♭",
      "value": ["B♭", "Cm", "Dm", "E♭", "F", "G", "Adim"]
  },
  {
      "key": "E♭",
      "value": ["E♭", "Fm", "Gm", "A♭", "B♭", "Cm", "Ddim"]
  },
  {
      "key": "A♭",
      "value": ["A♭", "B♭m", "Cm", "D♭", "E♭", "Fm", "Gdim"]
  },
  {
      "key": "D♭",
      "value": ["D♭", "E♭m", "Fm", "G♭", "A♭", "B♭m", "Cdim"]
  },
  {
      "key": "G♭",
      "value": ["G♭", "A♭m", "B♭m", "C♭", "D♭", "E♭m", "Fdim"]
  },
  {
      "key": "C♭",
      "value": ["C♭", "D♭m", "E♭m", "F♭", "G♭", "A♭m", "Bdim"]
  },
];


document.addEventListener('DOMContentLoaded', function() {
  var tbody = document.getElementById('tbody');

  for (var i = 0; i < DiatonicMajorChords.length; i++) {
      var tr = "<tr>";

      /* Must not forget the $ sign */
      tr += "<td>" + DiatonicMajorChords[i].key + "</td>" + "<td>" + (DiatonicMajorChords[i].value).join(', ') + "</td></tr>";

      /* We add the table row to the table body */
      tbody.innerHTML += tr;
  }
}, false);
