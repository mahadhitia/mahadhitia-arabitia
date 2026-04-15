let selectedTopics = ["all"];
const modes = ["madhi", "mudhari", "amr", "nahyi"];
let mode = null;
let current = "";
let pool = [];
let index = 0;

// ======================
// SUBJECT
// ======================
const subjects = [
  { key: "ana", ar: "أَنَا", id: "Saya", label: "tunggal" },
  { key: "nahnu", ar: "نَحْنُ", id: "Kami", label: "jamak" },

  { key: "anta", ar: "أَنْتَ", id: "Kamu", label: "tunggal pria" },
  { key: "anti", ar: "أَنْتِ", id: "Kamu", label: "tunggal wanita" },
  { key: "antuma_m", ar: "أَنْتُمَا", id: "Kalian", label: "ganda pria" },
  { key: "antuma_f", ar: "أَنْتُمَا", id: "Kalian", label: "ganda wanita" },
  { key: "antum", ar: "أَنْتُمْ", id: "Kalian", label: "jamak pria" },
  { key: "antunna", ar: "أَنْتُنَّ", id: "Kalian", label: "jamak wanita" },

  { key: "huwa", ar: "هُوَ", id: "Dia", label: "tunggal pria" },
  { key: "hiya", ar: "هِيَ", id: "Dia", label: "tunggal wanita" },
  { key: "huma_m", ar: "هُمَا", id: "Mereka", label: "ganda pria" },
  { key: "huma_f", ar: "هُمَا", id: "Mereka", label: "ganda wanita" },
  { key: "hum", ar: "هُمْ", id: "Mereka", label: "jamak pria" },
  { key: "hunna", ar: "هُنَّ", id: "Mereka", label: "jamak wanita" }
];

// ======================
// RANDOM
// ======================
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

let currentQuestion = "";
let currentLabel = "";

// ======================
// GENERATE
// ======================
function generateSentence() {

  // ======================
  // MODE FI'IL
  // ======================
  if (pool.length === 0) {
    buildPool();
  }
  
  if (index >= pool.length) {
    shuffle(pool);
    index = 0;
  }
  
  const { subject, verb } = pool[index++];
  if (pool.length === 0) {
    buildPool();
  }
  
  if (pool.length === 0) {
    alert("Belum ada data untuk topik ini");
    return;
  }

  let verbAr = "";
  let verbId = "";

  // ======================
  // PILIH BENTUK FI'IL
  // ======================
  if (mode === "madhi") {
    verbAr = verb.past[subject.key];
    verbId = verb.id_past;

  } else if (mode === "mudhari") {
    verbAr = verb.present[subject.key];
    verbId = verb.id_present;

  } else if (mode === "amr") {
    verbAr = verb.amr[subject.key];
    verbId = verb.id_command + "!";

  } else if (mode === "nahyi") {
    verbAr = verb.nahyi[subject.key];
    verbId = "jangan " + verb.id_command + "!";
  }

  // ======================
  // SUSUN KALIMAT
  // ======================
  let sentenceAr = "";
  let sentenceId = "";

  if (mode === "amr" || mode === "nahyi") {
    sentenceAr = verbAr;
    sentenceId = verbId;
    currentLabel = subject.label;

  } else {
    sentenceAr = subject.ar + " " + verbAr;
    sentenceId = subject.id + " " + verbId;
    currentLabel = subject.label;
  }

  // ======================
  // OUTPUT
  // ======================
  current = sentenceAr;
  currentQuestion = sentenceId;

  document.getElementById("question").innerText = sentenceId;
  document.getElementById("label").innerText = currentLabel;

  document.getElementById("answer").innerText = "";
  document.getElementById("answerWrap").style.display = "none";

  setTimeout(() => playQuestion(), 100);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function buildPool() {
  pool = [];

  subjects.forEach(subject => {
    if ((mode === "amr" || mode === "nahyi") && !subject.key.includes("ant")) {
      return;
    }
  
    verbs.forEach(verb => {

      if (
        !selectedTopics.includes("all") &&
        verb.topic &&
        !selectedTopics.includes(verb.topic)
      ) {
        return;
      }
    
      if (mode === "amr") {
        if (!verb.amr || !verb.amr[subject.key]) return;
      }
      
      if (mode === "nahyi") {
        if (!verb.nahyi || !verb.nahyi[subject.key]) return;
      }
    
      pool.push({
        subject,
        verb
      });
    
    });

  shuffle(pool);
  index = 0;
}

function toggleTopic(topic) {

  if (topic === "all") {
    selectedTopics = ["all"];
  } else {

    // hapus "all" kalau ada
    selectedTopics = selectedTopics.filter(t => t !== "all");

    if (selectedTopics.includes(topic)) {
      // kalau sudah ada → hapus
      selectedTopics = selectedTopics.filter(t => t !== topic);
    } else {
      // kalau belum → tambah
      selectedTopics.push(topic);
    }

    // kalau kosong → balik ke all
    if (selectedTopics.length === 0) {
      selectedTopics = ["all"];
    }
  }

  pool = [];
  index = 0;

  buildPool();
  generateSentence();

  updateActiveTopic();
}
                
// ======================
// SHOW ANSWER
// ======================
function showAnswer() {
  document.getElementById("answer").innerText = current;
  document.getElementById("answerWrap").style.display = "block";

  setTimeout(() => playAnswer(), 100);
}

// ======================
// TOGGLE MODE
// ======================
function toggleMode() {
  modeIndex = (modeIndex + 1) % modes.length;
  mode = modes[modeIndex];

  const btn = document.getElementById("modeBtn");

  // ======================
  // SET LABEL BUTTON
  // ======================
  if (mode === "madhi") {
    btn.innerText = "Fi'il Madhi";

  } else if (mode === "mudhari") {
    btn.innerText = "Fi'il Mudhari'";

  } else if (mode === "amr") {
    btn.innerText = "Fi'il Amr";

  } else if (mode === "nahyi") {
    btn.innerText = "Fi'il Nahyi";
  } 

  buildPool();
}

// ======================
// AUDIO
// ======================
function speakQuestion(text, label) {
  const utter = new SpeechSynthesisUtterance(
    text + ". " + label
  );
  utter.lang = "id-ID";

  speechSynthesis.cancel();
  speechSynthesis.speak(utter);
}

let voices = [];

speechSynthesis.onvoiceschanged = () => {
  voices = speechSynthesis.getVoices();
};

function speakArabic(text) {
  const utter = new SpeechSynthesisUtterance(text);

  const voices = speechSynthesis.getVoices();
  const arabVoice = voices.find(v => v.lang.includes("ar"));

  if (arabVoice) {
    utter.voice = arabVoice;
  }

  utter.lang = "ar-SA";
  utter.rate = 0.9;

  speechSynthesis.cancel();
  speechSynthesis.speak(utter);
}

function playQuestion() {
  if (!currentQuestion) return;
  speakQuestion(currentQuestion, currentLabel);
}

function playAnswer() {
  if (!current) return;
  speakArabic(current);
}

function playClickSound() {
  const sound = document.getElementById("clickSound");

  if (!sound) return;

  sound.currentTime = 0; // reset ke awal
  sound.volume = 0.6;

  sound.play().catch(err => {
    console.log("Audio gagal:", err);
  });
}

function handleClick(el) {
  playClickSound();

  el.classList.add("clicked");

  setTimeout(() => {
    el.classList.remove("clicked");
  }, 200);
}

document.body.addEventListener("click", () => {
  const sound = document.getElementById("clickSound");
  if (sound) {
    sound.play().then(() => {
      sound.pause();
      sound.currentTime = 0;
    }).catch(() => {});
  }
}, { once: true });

function activatePage(pageId) {
  const page = document.getElementById(pageId);
  if (!page) return;

  page.classList.add("loaded");
}

function initPage() {
  const path = window.location.pathname;

  if (path.endsWith("madhi.html")) {
    setMode("madhi");

  } else if (path.endsWith("mudhari.html")) {
    setMode("mudhari");

  } else if (path.endsWith("amr.html")) {
    setMode("amr");

  } else if (path.endsWith("nahyi.html")) {
    setMode("nahyi");
  }
}

function updateActiveTopic() {
  const el = document.getElementById("activeTopic");

  if (selectedTopics.includes("all")) {
    el.innerText = "Topik: Semua";
  } else {
    el.innerText = "Topik: " + selectedTopics.join(", ");
  }
}

initPage();
updateActiveTopic();

window.generateSentence = generateSentence;
window.showAnswer = showAnswer;
window.playQuestion = playQuestion;
window.playAnswer = playAnswer;
window.buildPool = buildPool;
window.setMode = function(newMode) {
  console.log("SET MODE:", newMode);

  mode = newMode;

  pool = [];
  index = 0;
  buildPool();
};
