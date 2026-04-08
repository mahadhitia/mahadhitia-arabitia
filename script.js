const modes = ["madhi", "mudhari", "noun"];
let modeIndex = 0;
let mode = modes[modeIndex];
let current = "";
let pool = [];
let index = 0;
let nounPool = [];
let nounIndex = 0;

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
// KATA KERJA
// ======================
const verbs = [
  {
    key: "jalasa",
    id_present: "duduk",
    id_past: "telah duduk",
  
    past: {
      ana: "جَلَسْتُ",
      nahnu: "جَلَسْنَا",
      anta: "جَلَسْتَ",
      anti: "جَلَسْتِ",
      antuma_m: "جَلَسْتُمَا",
      antuma_f: "جَلَسْتُمَا",
      antum: "جَلَسْتُمْ",
      antunna: "جَلَسْتُنَّ",
      huwa: "جَلَسَ",
      hiya: "جَلَسَتْ",
      huma_m: "جَلَسَا",
      huma_f: "جَلَسَتَا",
      hum: "جَلَسُوا",
      hunna: "جَلَسْنَ"
    },
  
    present: {
      ana: "أَجْلِسُ",
      nahnu: "نَجْلِسُ",
      anta: "تَجْلِسُ",
      anti: "تَجْلِسِينَ",
      antuma_m: "تَجْلِسَانِ",
      antuma_f: "تَجْلِسَانِ",
      antum: "تَجْلِسُونَ",
      antunna: "تَجْلِسْنَ",
      huwa: "يَجْلِسُ",
      hiya: "تَجْلِسُ",
      huma_m: "يَجْلِسَانِ",
      huma_f: "تَجْلِسَانِ",
      hum: "يَجْلِسُونَ",
      hunna: "يَجْلِسْنَ"
    }
  },

  {
    key: "nasara",
    id_present: "menolong",
    id_past: "telah menolong",
  
    past: {
      ana: "نَصَرْتُ",
      nahnu: "نَصَرْنَا",
      anta: "نَصَرْتَ",
      anti: "نَصَرْتِ",
      antuma_m: "نَصَرْتُمَا",
      antuma_f: "نَصَرْتُمَا",
      antum: "نَصَرْتُمْ",
      antunna: "نَصَرْتُنَّ",
      huwa: "نَصَرَ",
      hiya: "نَصَرَتْ",
      huma_m: "نَصَرَا",
      huma_f: "نَصَرَتَا",
      hum: "نَصَرُوا",
      hunna: "نَصَرْنَ"
    },
  
    present: {
      ana: "أَنْصُرُ",
      nahnu: "نَنْصُرُ",
      anta: "تَنْصُرُ",
      anti: "تَنْصُرِينَ",
      antuma_m: "تَنْصُرَانِ",
      antuma_f: "تَنْصُرَانِ",
      antum: "تَنْصُرُونَ",
      antunna: "تَنْصُرْنَ",
      huwa: "يَنْصُرُ",
      hiya: "تَنْصُرُ",
      huma_m: "يَنْصُرَانِ",
      huma_f: "تَنْصُرَانِ",
      hum: "يَنْصُرُونَ",
      hunna: "يَنْصُرْنَ"
    }
  },

  {
    key: "daraba",
    id_present: "memukul",
    id_past: "telah memukul",
  
    past: {
      ana: "ضَرَبْتُ",
      nahnu: "ضَرَبْنَا",
      anta: "ضَرَبْتَ",
      anti: "ضَرَبْتِ",
      antuma_m: "ضَرَبْتُمَا",
      antuma_f: "ضَرَبْتُمَا",
      antum: "ضَرَبْتُمْ",
      antunna: "ضَرَبْتُنَّ",
      huwa: "ضَرَبَ",
      hiya: "ضَرَبَتْ",
      huma_m: "ضَرَبَا",
      huma_f: "ضَرَبَتَا",
      hum: "ضَرَبُوا",
      hunna: "ضَرَبْنَ"
    },
  
    present: {
      ana: "أَضْرِبُ",
      nahnu: "نَضْرِبُ",
      anta: "تَضْرِبُ",
      anti: "تَضْرِبِينَ",
      antuma_m: "تَضْرِبَانِ",
      antuma_f: "تَضْرِبَانِ",
      antum: "تَضْرِبُونَ",
      antunna: "تَضْرِبْنَ",
      huwa: "يَضْرِبُ",
      hiya: "تَضْرِبُ",
      huma_m: "يَضْرِبَانِ",
      huma_f: "تَضْرِبَانِ",
      hum: "يَضْرِبُونَ",
      hunna: "يَضْرِبْنَ"
    }
  },

  {
    key: "fataha",
    id_present: "membuka",
    id_past: "telah membuka",
  
    past: {
      ana: "فَتَحْتُ",
      nahnu: "فَتَحْنَا",
      anta: "فَتَحْتَ",
      anti: "فَتَحْتِ",
      antuma_m: "فَتَحْتُمَا",
      antuma_f: "فَتَحْتُمَا",
      antum: "فَتَحْتُمْ",
      antunna: "فَتَحْتُنَّ",
      huwa: "فَتَحَ",
      hiya: "فَتَحَتْ",
      huma_m: "فَتَحَا",
      huma_f: "فَتَحَتَا",
      hum: "فَتَحُوا",
      hunna: "فَتَحْنَ"
    },
  
    present: {
      ana: "أَفْتَحُ",
      nahnu: "نَفْتَحُ",
      anta: "تَفْتَحُ",
      anti: "تَفْتَحِينَ",
      antuma_m: "تَفْتَحَانِ",
      antuma_f: "تَفْتَحَانِ",
      antum: "تَفْتَحُونَ",
      antunna: "تَفْتَحْنَ",
      huwa: "يَفْتَحُ",
      hiya: "تَفْتَحُ",
      huma_m: "يَفْتَحَانِ",
      huma_f: "تَفْتَحَانِ",
      hum: "يَفْتَحُونَ",
      hunna: "يَفْتَحْنَ"
    }
  },

  {
    key: "akala",
    id_present: "makan",
    id_past: "telah makan",
  
    past: {
      ana: "أَكَلْتُ",
      nahnu: "أَكَلْنَا",
      anta: "أَكَلْتَ",
      anti: "أَكَلْتِ",
      antuma_m: "أَكَلْتُمَا",
      antuma_f: "أَكَلْتُمَا",
      antum: "أَكَلْتُمْ",
      antunna: "أَكَلْتُنَّ",
      huwa: "أَكَلَ",
      hiya: "أَكَلَتْ",
      huma_m: "أَكَلَا",
      huma_f: "أَكَلَتَا",
      hum: "أَكَلُوا",
      hunna: "أَكَلْنَ"
    },
  
    present: {
      ana: "آكُلُ",
      nahnu: "نَأْكُلُ",
      anta: "تَأْكُلُ",
      anti: "تَأْكُلِينَ",
      antuma_m: "تَأْكُلَانِ",
      antuma_f: "تَأْكُلَانِ",
      antum: "تَأْكُلُونَ",
      antunna: "تَأْكُلْنَ",
      huwa: "يَأْكُلُ",
      hiya: "تَأْكُلُ",
      huma_m: "يَأْكُلَانِ",
      huma_f: "تَأْكُلَانِ",
      hum: "يَأْكُلُونَ",
      hunna: "يَأْكُلْنَ"
    }
  },

  {
    key: "dzahaba",
    id_present: "pergi",
    id_past: "telah pergi",
  
    past: {
      ana: "ذَهَبْتُ",
      nahnu: "ذَهَبْنَا",
      anta: "ذَهَبْتَ",
      anti: "ذَهَبْتِ",
      antuma_m: "ذَهَبْتُمَا",
      antuma_f: "ذَهَبْتُمَا",
      antum: "ذَهَبْتُمْ",
      antunna: "ذَهَبْتُنَّ",
      huwa: "ذَهَبَ",
      hiya: "ذَهَبَتْ",
      huma_m: "ذَهَبَا",
      huma_f: "ذَهَبَتَا",
      hum: "ذَهَبُوا",
      hunna: "ذَهَبْنَ"
    },
  
    present: {
      ana: "أَذْهَبُ",
      nahnu: "نَذْهَبُ",
      anta: "تَذْهَبُ",
      anti: "تَذْهَبِينَ",
      antuma_m: "تَذْهَبَانِ",
      antuma_f: "تَذْهَبَانِ",
      antum: "تَذْهَبُونَ",
      antunna: "تَذْهَبْنَ",
      huwa: "يَذْهَبُ",
      hiya: "تَذْهَبُ",
      huma_m: "يَذْهَبَانِ",
      huma_f: "تَذْهَبَانِ",
      hum: "يَذْهَبُونَ",
      hunna: "يَذْهَبْنَ"
    }
  },
  
  {
    key: "ghadhiba",
    id_present: "marah",
    id_past: "telah marah",
  
    past: {
      ana: "غَضِبْتُ",
      nahnu: "غَضِبْنَا",
      anta: "غَضِبْتَ",
      anti: "غَضِبْتِ",
      antuma_m: "غَضِبْتُمَا",
      antuma_f: "غَضِبْتُمَا",
      antum: "غَضِبْتُمْ",
      antunna: "غَضِبْتُنَّ",
      huwa: "غَضِبَ",
      hiya: "غَضِبَتْ",
      huma_m: "غَضِبَا",
      huma_f: "غَضِبَتَا",
      hum: "غَضِبُوا",
      hunna: "غَضِبْنَ"
    },
  
    present: {
      ana: "أَغْضَبُ",
      nahnu: "نَغْضَبُ",
      anta: "تَغْضَبُ",
      anti: "تَغْضَبِينَ",
      antuma_m: "تَغْضَبَانِ",
      antuma_f: "تَغْضَبَانِ",
      antum: "تَغْضَبُونَ",
      antunna: "تَغْضَبْنَ",
      huwa: "يَغْضَبُ",
      hiya: "تَغْضَبُ",
      huma_m: "يَغْضَبَانِ",
      huma_f: "تَغْضَبَانِ",
      hum: "يَغْضَبُونَ",
      hunna: "يَغْضَبْنَ"
    }
  },

  {
    key: "shabara",
    id_present: "sabar",
    id_past: "telah sabar",
  
    past: {
      ana: "صَبَرْتُ",
      nahnu: "صَبَرْنَا",
      anta: "صَبَرْتَ",
      anti: "صَبَرْتِ",
      antuma_m: "صَبَرْتُمَا",
      antuma_f: "صَبَرْتُمَا",
      antum: "صَبَرْتُمْ",
      antunna: "صَبَرْتُنَّ",
      huwa: "صَبَرَ",
      hiya: "صَبَرَتْ",
      huma_m: "صَبَرَا",
      huma_f: "صَبَرَتَا",
      hum: "صَبَرُوا",
      hunna: "صَبَرْنَ"
    },
  
    present: {
      ana: "أَصْبِرُ",
      nahnu: "نَصْبِرُ",
      anta: "تَصْبِرُ",
      anti: "تَصْبِرِينَ",
      antuma_m: "تَصْبِرَانِ",
      antuma_f: "تَصْبِرَانِ",
      antum: "تَصْبِرُونَ",
      antunna: "تَصْبِرْنَ",
      huwa: "يَصْبِرُ",
      hiya: "تَصْبِرُ",
      huma_m: "يَصْبِرَانِ",
      huma_f: "تَصْبِرَانِ",
      hum: "يَصْبِرُونَ",
      hunna: "يَصْبِرْنَ"
    }
  },

  {
    key: "rafasya",
    id_present: "menendang",
    id_past: "telah menendang",
  
    past: {
      ana: "رَفَشْتُ",
      nahnu: "رَفَشْنَا",
      anta: "رَفَشْتَ",
      anti: "رَفَشْتِ",
      antuma_m: "رَفَشْتُمَا",
      antuma_f: "رَفَشْتُمَا",
      antum: "رَفَشْتُمْ",
      antunna: "رَفَشْتُنَّ",
      huwa: "رَفَشَ",
      hiya: "رَفَشَتْ",
      huma_m: "رَفَشَا",
      huma_f: "رَفَشَتَا",
      hum: "رَفَشُوا",
      hunna: "رَفَشْنَ"
    },
  
    present: {
      ana: "أَرْفِشُ",
      nahnu: "نَرْفِشُ",
      anta: "تَرْفِشُ",
      anti: "تَرْفِشِينَ",
      antuma_m: "تَرْفِشَانِ",
      antuma_f: "تَرْفِشَانِ",
      antum: "تَرْفِشُونَ",
      antunna: "تَرْفِشْنَ",
      huwa: "يَرْفِشُ",
      hiya: "تَرْفِشُ",
      huma_m: "يَرْفِشَانِ",
      huma_f: "تَرْفِشَانِ",
      hum: "يَرْفِشُونَ",
      hunna: "يَرْفِشْنَ"
    }
  },
  
  {
    key: "masaka",
    id_present: "memegang",
    id_past: "telah memegang",
  
    past: {
      ana: "مَسَكْتُ",
      nahnu: "مَسَكْنَا",
      anta: "مَسَكْتَ",
      anti: "مَسَكْتِ",
      antuma_m: "مَسَكْتُمَا",
      antuma_f: "مَسَكْتُمَا",
      antum: "مَسَكْتُمْ",
      antunna: "مَسَكْتُنَّ",
      huwa: "مَسَكَ",
      hiya: "مَسَكَتْ",
      huma_m: "مَسَكَا",
      huma_f: "مَسَكَتَا",
      hum: "مَسَكُوا",
      hunna: "مَسَكْنَ"
    },
  
    present: {
      ana: "أُمْسِكُ",
      nahnu: "نُمْسِكُ",
      anta: "تُمْسِكُ",
      anti: "تُمْسِكِينَ",
      antuma_m: "تُمْسِكَانِ",
      antuma_f: "تُمْسِكَانِ",
      antum: "تُمْسِكُونَ",
      antunna: "تُمْسِكْنَ",
      huwa: "يُمْسِكُ",
      hiya: "تُمْسِكُ",
      huma_m: "يُمْسِكَانِ",
      huma_f: "تُمْسِكَانِ",
      hum: "يُمْسِكُونَ",
      hunna: "يُمْسِكْنَ"
    }
  },

  {
    key: "sakana",
    id_present: "diam",
    id_past: "telah diam",
  
    past: {
      ana: "سَكَنْتُ",
      nahnu: "سَكَنْنَا",
      anta: "سَكَنْتَ",
      anti: "سَكَنْتِ",
      antuma_m: "سَكَنْتُمَا",
      antuma_f: "سَكَنْتُمَا",
      antum: "سَكَنْتُمْ",
      antunna: "سَكَنْتُنَّ",
      huwa: "سَكَنَ",
      hiya: "سَكَنَتْ",
      huma_m: "سَكَنَا",
      huma_f: "سَكَنَتَا",
      hum: "سَكَنُوا",
      hunna: "سَكَنْنَ"
    },
  
    present: {
      ana: "أَسْكُنُ",
      nahnu: "نَسْكُنُ",
      anta: "تَسْكُنُ",
      anti: "تَسْكُنِينَ",
      antuma_m: "تَسْكُنَانِ",
      antuma_f: "تَسْكُنَانِ",
      antum: "تَسْكُنُونَ",
      antunna: "تَسْكُنْنَ",
      huwa: "يَسْكُنُ",
      hiya: "تَسْكُنُ",
      huma_m: "يَسْكُنَانِ",
      huma_f: "تَسْكُنَانِ",
      hum: "يَسْكُنُونَ",
      hunna: "يَسْكُنْنَ"
    }
  },
];

// ======================
// KATA BENDA
// ======================
const nouns = [
  { id: "buku", ar: "كِتَابٌ", gender: "m", type: "object" },
  { id: "mobil", ar: "سَيَّارَةٌ", gender: "f", type: "object" },
  { id: "papan tulis", ar: "سَبُّورَةٌ", gender: "f", type: "object" },
  { id: "karpet", ar: "بِسَاطٌ", gender: "m", type: "object" },
  { id: "guru", ar: "مُدَرِّسٌ", gender: "m", type: "profession" },
  { id: "dokter", ar: "طَبِيبٌ", gender: "m", type: "profession" },
  { id: "insinyur", ar: "مُهَنْدِسٌ", gender: "m", type: "profession" },
  { id: "murid", ar: "طَالِبٌ", gender: "m", type: "profession" },
  { id: "ustadz", ar: "أُسْتَاذٌ", gender: "m", type: "profession" },
  { id: "matahari", ar: "شَمْسٌ", gender: "m", type: "object" },
  { id: "masjid", ar: "مَسْجِدٌ", gender: "m", type: "object" }
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
  if (mode === "noun") {
    if (nounIndex >= nounPool.length) {
      shuffle(nounPool);
      nounIndex = 0;
    }
  
    const item = nounPool[nounIndex];
    nounIndex++;
  
    const noun = item.noun;
    const isyarah = getIsimIsyarahFixed(noun.gender, item.type);
  
    const sentenceId = isyarah.id + " " + noun.id;
    const sentenceAr = isyarah.ar + " " + noun.ar;
  
    current = sentenceAr;
  
    document.getElementById("question").innerText = sentenceId;
  
    const labelText = noun.gender === "m" ? "mudzakkar" : "muannats";

    currentQuestion = sentenceId;
    currentLabel = labelText;
    document.getElementById("label").innerText = labelText;
  
    document.getElementById("answer").innerText = "";
    document.getElementById("answerWrap").style.display = "none";

    setTimeout(() => playQuestion(), 100);
  
    return;
  }
  
  if (index >= pool.length) {
    shuffle(pool);
    index = 0;
  }

  const item = pool[index];
  index++;

  const subject = item.subject;
  const verb = item.verb;

  let verbAr;
  let verbId;

  if (mode === "madhi") {
    verbAr = verb.past[subject.key];
    verbId = verb.id_past;
  } else {
    verbAr = verb.present[subject.key];
    verbId = verb.id_present;
  }

  const sentenceId = subject.id + " " + verbId;
  const sentenceAr = subject.ar + " " + verbAr;

  current = sentenceAr;

  currentQuestion = sentenceId;
  currentLabel = subject.label;

  document.getElementById("question").innerText = sentenceId;
  document.getElementById("label").innerText = subject.label;

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
    verbs.forEach(verb => {
      pool.push({
        subject,
        verb
      });
    });
  });

  shuffle(pool);
  index = 0;
}

function buildNounPool() {
  nounPool = [];

  nouns.forEach(noun => {
    ["near", "far"].forEach(type => {

      if (noun.type === "profession") {
        // pria
        nounPool.push({
          noun: {
            id: noun.id,
            ar: noun.ar,
            gender: "m"
          },
          type
        });

        // wanita
        nounPool.push({
          noun: {
            id: noun.id + " wanita",
            ar: toFeminine(noun.ar),
            gender: "f"
          },
          type
        });

      } else {
        // benda biasa
        nounPool.push({
          noun,
          type
        });
      }

    });
  });

  shuffle(nounPool);
  nounIndex = 0;
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

  if (mode === "madhi") {
    btn.innerText = "Fi'il Madhi";
  } else if (mode === "mudhari") {
    btn.innerText = "Fi'il Mudhari'";
  } else {
    btn.innerText = "Kata Benda";
  }

  if (mode === "noun") {
    buildNounPool();
  } else {
    buildPool();
  }
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

// ======================
// FUNGSI LAIN
// ======================

function getIsimIsyarahFixed(gender, distance) {
  if (gender === "m") {
    return distance === "near"
      ? { id: "Ini", ar: "هَذَا" }
      : { id: "Itu", ar: "ذَٰلِكَ" };
  } else {
    return distance === "near"
      ? { id: "Ini", ar: "هَذِهِ" }
      : { id: "Itu", ar: "تِلْكَ" };
  }
}

function toFeminine(ar) {
  const base = ar.replace("ٌ", "");
  return base + "ةٌ";
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

buildPool();
buildNounPool();
