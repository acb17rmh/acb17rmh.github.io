document.addEventListener('DOMContentLoaded', function() {
  var tbody = document.getElementById('tbody');

  for (var i = 0; i < DiatonicMajorChords.length; i++) {
      var tr = "<tr>";

      /* Must not forget the $ sign */
      tr += "<td>" + DiatonicMajorChords[i].key + "</td>" + "<td>" + DiatonicMajorChords[i].value.join(', ') + "</td>" + "<td>"
      + (DiatonicMajorChords[i].value)[0] + ", " + (DiatonicMajorChords[i].value)[3] + ", " + (DiatonicMajorChords[i].value)[4] + "</td></tr>";

      /* We add the table row to the table body */
      tbody.innerHTML += tr;
  }
}, false);
