let nounPool = [];
let nounIndex = 0;

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function buildNounPool() {
  nounPool = [];

  nouns.forEach(noun => {
    ["near", "far"].forEach(distance => {
      nounPool.push({
        noun,
        distance
      });
    });
  });

  shuffle(nounPool);
  nounIndex = 0;
}

function getIsimIsyarah(gender, distance, form) {

  // MUFRAD
  if (form === "singular") {
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

  // MUTSANNA
  if (form === "dual") {
    if (gender === "m") {
      return distance === "near"
        ? { id: "Ini", ar: "هَذَانِ" }
        : { id: "Itu", ar: "ذَانِكَ" };
    } else {
      return distance === "near"
        ? { id: "Ini", ar: "هَاتَانِ" }
        : { id: "Itu", ar: "تَانِكَ" };
    }
  }

  // JAMAK
  if (form === "plural") {
    return distance === "near"
      ? { id: "Ini", ar: "هَؤُلَاءِ" }
      : { id: "Itu", ar: "أُولَٰئِكَ" };
  }
}

function getRandomForm() {
  const forms = ["singular", "dual", "plural"];
  return forms[Math.floor(Math.random() * forms.length)];
}

function generateSentence() {
  if (nounPool.length === 0) buildNounPool();

  if (nounIndex >= nounPool.length) {
    shuffle(nounPool);
    nounIndex = 0;
  }

  const item = nounPool[nounIndex++];
  const noun = item.noun;
  const form = getRandomForm();
  const isyarah = getIsimIsyarah(noun.gender, item.distance, form);

  let nounAr = "";
  let sentenceId = "";
  let label = "";

  if (form === "singular") {
    nounAr = noun.ar.singular;
    sentenceId = `${isyarah.id} ${noun.id}`;
    label = "mufrad";
  
  } else if (form === "dual") {
    nounAr = noun.ar.dual;
    sentenceId = `${isyarah.id} ${noun.id}`;
    label = "mutsanna";
  
  } else {
    nounAr = noun.ar.plural;
    sentenceId = `${isyarah.id} ${noun.id}`;
    label = noun.pluralType === "taksir" ? "jamak taksir" : "jamak";
  }

  const sentenceAr = isyarah.ar + " " + nounAr;

  document.getElementById("question").innerText = sentenceId;
  document.getElementById("answer").innerText = sentenceAr;
  document.getElementById("label").innerText = label;

  document.getElementById("answerWrap").style.display = "none";
}

function showAnswer() {
  document.getElementById("answerWrap").style.display = "block";
}
