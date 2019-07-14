/* for each key, populate the dropdown list with an option to select that key */
document.addEventListener('DOMContentLoaded', function() {
  var dropdown = document.getElementById("dropdown");
  for (var i = 0; i < majorScales.length; i++) {
    var key = majorScales[i];
    var el = document.createElement("button");
    el.textContent = (key.value)[0] + " major";
    el.value = key.value;
    el.className = "dropdown-item";
    dropdown.appendChild(el);
    }

    //add onClick events for each button to populate table with chord progressions
    $('.dropdown-menu button').click(function(){
        //get value from dropdown
        $("#tbody").empty();
        var tbody = document.getElementById('tbody');
        var asArray = (this.value).split(",");
        majorChordProgressions = (shuffle(majorChordProgressions));
        for (var i = 0; i < majorChordProgressions.length; i++) {
          var tr = "<tr>"
          var output = convertProgToChords(majorChordProgressions[i], getChordsFromScale(asArray));
          console.log(output);
          tr += "<td>" + asArray[0] + "</td>" + "<td>" + output.join(", ") + "</td></tr>";
          tbody.innerHTML += tr;
          }
    });
}, false);
