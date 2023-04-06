window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition(); //create a new instance of SpeechRecognition
recognition.interimResults = true; // show results as you start speaking

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
  console.log(e.results);
  const transcript = Array.from(e.results) //convert it into an array 
    .map(result => result[0]) // grab the first thing in the array
    .map(result => result.transcript) 
    .join(''); // to get one big string
    
    p.textContent = transcript; 
    // check if result is final and create a new paragraph
    if(e.results[0].isFinal) {
      p = document.createElement('p');
      words.appendChild(p);
    }
    if(transcript.includes('get the weather')) {
      console.log('getting the weather');
    }
    console.log(transcript)
});

recognition.addEventListener('end', recognition.start);

recognition.start();


