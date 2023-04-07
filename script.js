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
    if(transcript.includes('unicorn' || 'unicorns')) {
      words.innerHTML = '🦄';
    } else if(transcript.includes('dark mode')) {
      toggleDarkAndLightMode();
    } else if(transcript.includes('light mode')) {
      !toggleDarkAndLightMode();
    } 
});

recognition.addEventListener('end', recognition.start);

recognition.start();

// Dark and Light Mode
const toggleDarkAndLightMode = () => {
  let element = document.body;
  element.classList.toggle("dark-mode");
}



