/* initialise.js contains global variables which are referenced in other files
   this script must always be loaded before other scripts to ensure those scripts
   have access to the data in this file */

var majorScales = [
  {
      "key": "C",
      "value": ["C", "D", "E", "F", "G", "A", "B"]
  },
  {
      "key": "G",
      "value": ["G", "A", "B", "C", "D", "E", "F#"]
  },
  {
      "key": "D",
      "value": ["D", "E", "F#", "G", "A", "B", "C#"]
  },
  {
      "key": "A",
      "value": ["A", "B", "C#", "D", "E", "F#", "G#"]
  },
  {
      "key": "E",
      "value": ["E", "F#", "G#", "A", "B", "C#", "D#"]
  },
  {
      "key": "B",
      "value": ["B", "C#", "D#", "E", "F#", "G#", "A#"]
  },
  {
      "key": "F#",
      "value": ["F#", "G#", "A#", "B", "C#", "D#", "E#"]
  },
  {
      "key": "C#",
      "value": ["C#", "D#", "E#", "F#", "G#", "A#", "B#"]
  },
  {
      "key": "F",
      "value": ["F", "G", "A", "B♭", "C", "D", "E"]
  },
  {
      "key": "B♭",
      "value": ["B♭", "C", "D", "E♭", "F", "G", "A"]
  },
  {
      "key": "E♭",
      "value": ["E♭", "F", "G", "A♭", "B♭", "C", "D"]
  },
  {
      "key": "A♭",
      "value": ["A♭", "B♭", "C", "D♭", "E♭", "F", "G"]
  },
  {
      "key": "D♭",
      "value": ["D♭", "E♭", "F", "G♭", "A♭", "B♭", "C"]
  },
  {
      "key": "G♭",
      "value": ["G♭", "A♭", "B♭", "C♭", "D♭", "E♭", "F"]
  },
  {
      "key": "C♭",
      "value": ["C♭", "D♭", "E♭", "F♭", "G♭", "A♭", "B"]
  },
];

var minorScales = [
  {
      "key": "A",
      "value": ["A", "B", "Caug", "D", "E", "F", "G#"]
  },
  {
      "key": "E",
      "value": ["E", "F#", "Gaug", "A", "B", "C", "D#"]
  },
  {
      "key": "B",
      "value": ["B", "C#", "Daug", "E", "F#", "G", "A#"]
  },
  {
      "key": "F",
      "value": ["F#", "G#", "Aaug", "B", "C#", "D", "E#"]
  },
  {
      "key": "C",
      "value": ["C#", "D#", "Eaug", "F#", "G#", "A", "B#"]
  },
  {
      "key": "G",
      "value": ["G#", "A#", "Baug", "C#", "D#", "E", "F#"]
  },

];

var majorChordProgressions = [
                        [1, 5, 4, 6],
                        [5, 6, 4, 1],
                        [4, 1, 5, 6],
                        [6, 4, 1, 5],
                        [3, 5, 4, 3],
                        [2, 5, 1],
                        ];
