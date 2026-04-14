const modes = ["madhi", "mudhari", "amr", "nahyi", "noun"];
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
    id_command: "duduk",
  
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
    },
  
    amr: {
      anta: "اِجْلِسْ",
      anti: "اِجْلِسِي",
      antuma_m: "اِجْلِسَا",
      antuma_f: "اِجْلِسَا",
      antum: "اِجْلِسُوا",
      antunna: "اِجْلِسْنَ"
    },
  
    nahyi: {
      anta: "لَا تَجْلِسْ",
      anti: "لَا تَجْلِسِي",
      antuma_m: "لَا تَجْلِسَا",
      antuma_f: "لَا تَجْلِسَا",
      antum: "لَا تَجْلِسُوا",
      antunna: "لَا تَجْلِسْنَ"
    }
  },

  {
    key: "nasara",
    id_present: "menolong",
    id_past: "telah menolong",
    id_command: "tolong",
  
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
    },
  
    amr: {
      anta: "اُنْصُرْ",
      anti: "اُنْصُرِي",
      antuma_m: "اُنْصُرَا",
      antuma_f: "اُنْصُرَا",
      antum: "اُنْصُرُوا",
      antunna: "اُنْصُرْنَ"
    },
  
    nahyi: {
      anta: "لَا تَنْصُرْ",
      anti: "لَا تَنْصُرِي",
      antuma_m: "لَا تَنْصُرَا",
      antuma_f: "لَا تَنْصُرَا",
      antum: "لَا تَنْصُرُوا",
      antunna: "لَا تَنْصُرْنَ"
    }
  },
  
  {
    key: "daraba",
    id_present: "memukul",
    id_past: "telah memukul",
    id_command: "pukul",
  
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
    },
  
    amr: {
      anta: "اِضْرِبْ",
      anti: "اِضْرِبِي",
      antuma_m: "اِضْرِبَا",
      antuma_f: "اِضْرِبَا",
      antum: "اِضْرِبُوا",
      antunna: "اِضْرِبْنَ"
    },
  
    nahyi: {
      anta: "لَا تَضْرِبْ",
      anti: "لَا تَضْرِبِي",
      antuma_m: "لَا تَضْرِبَا",
      antuma_f: "لَا تَضْرِبَا",
      antum: "لَا تَضْرِبُوا",
      antunna: "لَا تَضْرِبْنَ"
    }
  },
  
  {
    key: "fataha",
    id_present: "membuka",
    id_past: "telah membuka",
    id_command: "buka",
  
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
      hunna: "تَفْتَحْنَ"
    },
  
    amr: {
      anta: "اِفْتَحْ",
      anti: "اِفْتَحِي",
      antuma_m: "اِفْتَحَا",
      antuma_f: "اِفْتَحَا",
      antum: "اِفْتَحُوا",
      antunna: "اِفْتَحْنَ"
    },
  
    nahyi: {
      anta: "لَا تَفْتَحْ",
      anti: "لَا تَفْتَحِي",
      antuma_m: "لَا تَفْتَحَا",
      antuma_f: "لَا تَفْتَحَا",
      antum: "لَا تَفْتَحُوا",
      antunna: "لَا تَفْتَحْنَ"
    }
  },
  
  {
    key: "akala",
    id_present: "makan",
    id_past: "telah makan",
    id_command: "makan",
  
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
      hunna: "تَأْكُلْنَ"
    },
  
    amr: {
      anta: "كُلْ",
      anti: "كُلِي",
      antuma_m: "كُلَا",
      antuma_f: "كُلَا",
      antum: "كُلُوا",
      antunna: "كُلْنَ"
    },
  
    nahyi: {
      anta: "لَا تَأْكُلْ",
      anti: "لَا تَأْكُلِي",
      antuma_m: "لَا تَأْكُلَا",
      antuma_f: "لَا تَأْكُلَا",
      antum: "لَا تَأْكُلُوا",
      antunna: "لَا تَأْكُلْنَ"
    }
  },
  
  {
    key: "dzahaba",
    id_present: "pergi",
    id_past: "telah pergi",
    id_command: "pergi",
  
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
    },
  
    amr: {
      anta: "اِذْهَبْ",
      anti: "اِذْهَبِي",
      antuma_m: "اِذْهَبَا",
      antuma_f: "اِذْهَبَا",
      antum: "اِذْهَبُوا",
      antunna: "اِذْهَبْنَ"
    },
  
    nahyi: {
      anta: "لَا تَذْهَبْ",
      anti: "لَا تَذْهَبِي",
      antuma_m: "لَا تَذْهَبَا",
      antuma_f: "لَا تَذْهَبَا",
      antum: "لَا تَذْهَبُوا",
      antunna: "لَا تَذْهَبْنَ"
    }
  },
  
  {
    key: "ghadhiba",
    id_present: "marah",
    id_past: "telah marah",
    id_command: "marah",
  
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
    },
  
    amr: {
      anta: "اِغْضَبْ",
      anti: "اِغْضَبِي",
      antuma_m: "اِغْضَبَا",
      antuma_f: "اِغْضَبَا",
      antum: "اِغْضَبُوا",
      antunna: "اِغْضَبْنَ"
    },
  
    nahyi: {
      anta: "لَا تَغْضَبْ",
      anti: "لَا تَغْضَبِي",
      antuma_m: "لَا تَغْضَبَا",
      antuma_f: "لَا تَغْضَبَا",
      antum: "لَا تَغْضَبُوا",
      antunna: "لَا تَغْضَبْنَ"
    }
  },
  
  {
    key: "shabara",
    id_present: "sabar",
    id_past: "telah sabar",
    id_command: "sabar",
  
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
    },
  
    amr: {
      anta: "اِصْبِرْ",
      anti: "اِصْبِرِي",
      antuma_m: "اِصْبِرَا",
      antuma_f: "اِصْبِرَا",
      antum: "اِصْبِرُوا",
      antunna: "اِصْبِرْنَ"
    },
  
    nahyi: {
      anta: "لَا تَصْبِرْ",
      anti: "لَا تَصْبِرِي",
      antuma_m: "لَا تَصْبِرَا",
      antuma_f: "لَا تَصْبِرَا",
      antum: "لَا تَصْبِرُوا",
      antunna: "لَا تَصْبِرْنَ"
    }
  },
  
  {
    key: "rafasya",
    id_present: "menendang",
    id_past: "telah menendang",
    id_command: "tendang",
  
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
      ana: "أَرْفُشُ",
      nahnu: "نَرْفُشُ",
      anta: "تَرْفُشُ",
      anti: "تَرْفُشِينَ",
      antuma_m: "تَرْفُشَانِ",
      antuma_f: "تَرْفُشَانِ",
      antum: "تَرْفُشُونَ",
      antunna: "تَرْفُشْنَ",
      huwa: "يَرْفُشُ",
      hiya: "تَرْفُشُ",
      huma_m: "يَرْفُشَانِ",
      huma_f: "تَرْفُشَانِ",
      hum: "يَرْفُشُونَ",
      hunna: "يَرْفُشْنَ"
    },
  
    amr: {
      anta: "اُرْفُشْ",
      anti: "اُرْفُشِي",
      antuma_m: "اُرْفُشَا",
      antuma_f: "اُرْفُشَا",
      antum: "اُرْفُشُوا",
      antunna: "اُرْفُشْنَ"
    },
  
    nahyi: {
      anta: "لَا تَرْفُشْ",
      anti: "لَا تَرْفُشِي",
      antuma_m: "لَا تَرْفُشَا",
      antuma_f: "لَا تَرْفُشَا",
      antum: "لَا تَرْفُشُوا",
      antunna: "لَا تَرْفُشْنَ"
    }
  },
  
  {
    key: "masaka",
    id_present: "memegang",
    id_past: "telah memegang",
    id_command: "pegang",
  
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
    },
  
    amr: {
      anta: "أَمْسِكْ",
      anti: "أَمْسِكِي",
      antuma_m: "أَمْسِكَا",
      antuma_f: "أَمْسِكَا",
      antum: "أَمْسِكُوا",
      antunna: "أَمْسِكْنَ"
    },
  
    nahyi: {
      anta: "لَا تُمْسِكْ",
      anti: "لَا تُمْسِكِي",
      antuma_m: "لَا تُمْسِكَا",
      antuma_f: "لَا تُمْسِكَا",
      antum: "لَا تُمْسِكُوا",
      antunna: "لَا تُمْسِكْنَ"
    }
  },
  
  {
    key: "sakana",
    id_present: "tinggal",
    id_past: "telah tinggal",
    id_command: "tinggal",
  
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
    },
  
    amr: {
      anta: "اُسْكُنْ",
      anti: "اُسْكُنِي",
      antuma_m: "اُسْكُنَا",
      antuma_f: "اُسْكُنَا",
      antum: "اُسْكُنُوا",
      antunna: "اُسْكُنْنَ"
    },
  
    nahyi: {
      anta: "لَا تَسْكُنْ",
      anti: "لَا تَسْكُنِي",
      antuma_m: "لَا تَسْكُنَا",
      antuma_f: "لَا تَسْكُنَا",
      antum: "لَا تَسْكُنُوا",
      antunna: "لَا تَسْكُنْنَ"
    }
  },

  {
    key: "raja'a",
    id_present: "kembali",
    id_past: "telah kembali",
    id_command: "kembali",
  
    past: {
      ana: "رَجَعْتُ",
      nahnu: "رَجَعْنَا",
      anta: "رَجَعْتَ",
      anti: "رَجَعْتِ",
      antuma_m: "رَجَعْتُمَا",
      antuma_f: "رَجَعْتُمَا",
      antum: "رَجَعْتُمْ",
      antunna: "رَجَعْتُنَّ",
      huwa: "رَجَعَ",
      hiya: "رَجَعَتْ",
      huma_m: "رَجَعَا",
      huma_f: "رَجَعَتَا",
      hum: "رَجَعُوا",
      hunna: "رَجَعْنَ"
    },
  
    present: {
      ana: "أَرْجِعُ",
      nahnu: "نَرْجِعُ",
      anta: "تَرْجِعُ",
      anti: "تَرْجِعِينَ",
      antuma_m: "تَرْجِعَانِ",
      antuma_f: "تَرْجِعَانِ",
      antum: "تَرْجِعُونَ",
      antunna: "تَرْجِعْنَ",
      huwa: "يَرْجِعُ",
      hiya: "تَرْجِعُ",
      huma_m: "يَرْجِعَانِ",
      huma_f: "تَرْجِعَانِ",
      hum: "يَرْجِعُونَ",
      hunna: "يَرْجِعْنَ"
    },
  
    amr: {
      anta: "اِرْجِعْ",
      anti: "اِرْجِعِي",
      antuma_m: "اِرْجِعَا",
      antuma_f: "اِرْجِعَا",
      antum: "اِرْجِعُوا",
      antunna: "اِرْجِعْنَ"
    },
  
    nahyi: {
      anta: "لَا تَرْجِعْ",
      anti: "لَا تَرْجِعِي",
      antuma_m: "لَا تَرْجِعَا",
      antuma_f: "لَا تَرْجِعَا",
      antum: "لَا تَرْجِعُوا",
      antunna: "لَا تَرْجِعْنَ"
    }
  },

  {
    key: "kataba",
    id_present: "menulis",
    id_past: "telah menulis",
    id_command: "tulis",
  
    past: {
      ana: "كَتَبْتُ",
      nahnu: "كَتَبْنَا",
      anta: "كَتَبْتَ",
      anti: "كَتَبْتِ",
      antuma_m: "كَتَبْتُمَا",
      antuma_f: "كَتَبْتُمَا",
      antum: "كَتَبْتُمْ",
      antunna: "كَتَبْتُنَّ",
      huwa: "كَتَبَ",
      hiya: "كَتَبَتْ",
      huma_m: "كَتَبَا",
      huma_f: "كَتَبَتَا",
      hum: "كَتَبُوا",
      hunna: "كَتَبْنَ"
    },
  
    present: {
      ana: "أَكْتُبُ",
      nahnu: "نَكْتُبُ",
      anta: "تَكْتُبُ",
      anti: "تَكْتُبِينَ",
      antuma_m: "تَكْتُبَانِ",
      antuma_f: "تَكْتُبَانِ",
      antum: "تَكْتُبُونَ",
      antunna: "تَكْتُبْنَ",
      huwa: "يَكْتُبُ",
      hiya: "تَكْتُبُ",
      huma_m: "يَكْتُبَانِ",
      huma_f: "تَكْتُبَانِ",
      hum: "يَكْتُبُونَ",
      hunna: "يَكْتُبْنَ"
    },
  
    amr: {
      anta: "اُكْتُبْ",
      anti: "اُكْتُبِي",
      antuma_m: "اُكْتُبَا",
      antuma_f: "اُكْتُبَا",
      antum: "اُكْتُبُوا",
      antunna: "اُكْتُبْنَ"
    },
  
    nahyi: {
      anta: "لَا تَكْتُبْ",
      anti: "لَا تَكْتُبِي",
      antuma_m: "لَا تَكْتُبَا",
      antuma_f: "لَا تَكْتُبَا",
      antum: "لَا تَكْتُبُوا",
      antunna: "لَا تَكْتُبْنَ"
    }
  },

  {
    key: "sakata",
    id_present: "diam",
    id_past: "telah diam",
    id_command: "diam",
  
    past: {
      ana: "سَكَتُّ",
      nahnu: "سَكَتْنَا",
      anta: "سَكَتَّ",
      anti: "سَكَتِّ",
      antuma_m: "سَكَتُّمَا",
      antuma_f: "سَكَتُّمَا",
      antum: "سَكَتُّمْ",
      antunna: "سَكَتْنَ",
      huwa: "سَكَتَ",
      hiya: "سَكَتَتْ",
      huma_m: "سَكَتَا",
      huma_f: "سَكَتَتَا",
      hum: "سَكَتُوا",
      hunna: "سَكَتْنَ"
    },
  
    present: {
      ana: "أَسْكُتُ",
      nahnu: "نَسْكُتُ",
      anta: "تَسْكُتُ",
      anti: "تَسْكُتِينَ",
      antuma_m: "تَسْكُتَانِ",
      antuma_f: "تَسْكُتَانِ",
      antum: "تَسْكُتُونَ",
      antunna: "تَسْكُتْنَ",
      huwa: "يَسْكُتُ",
      hiya: "تَسْكُتُ",
      huma_m: "يَسْكُتَانِ",
      huma_f: "تَسْكُتَانِ",
      hum: "يَسْكُتُونَ",
      hunna: "يَسْكُتْنَ"
    },
  
    amr: {
      anta: "اُسْكُتْ",
      anti: "اُسْكُتِي",
      antuma_m: "اُسْكُتَا",
      antuma_f: "اُسْكُتَا",
      antum: "اُسْكُتُوا",
      antunna: "اُسْكُتْنَ"
    },
  
    nahyi: {
      anta: "لَا تَسْكُتْ",
      anti: "لَا تَسْكُتِي",
      antuma_m: "لَا تَسْكُتَا",
      antuma_f: "لَا تَسْكُتَا",
      antum: "لَا تَسْكُتُوا",
      antunna: "لَا تَسْكُتْنَ"
    }
  },

  {
    key: "nazhara",
    id_present: "melihat",
    id_past: "telah melihat",
    id_command: "lihat",
  
    past: {
      ana: "نَظَرْتُ",
      nahnu: "نَظَرْنَا",
      anta: "نَظَرْتَ",
      anti: "نَظَرْتِ",
      antuma_m: "نَظَرْتُمَا",
      antuma_f: "نَظَرْتُمَا",
      antum: "نَظَرْتُمْ",
      antunna: "نَظَرْتُنَّ",
      huwa: "نَظَرَ",
      hiya: "نَظَرَتْ",
      huma_m: "نَظَرَا",
      huma_f: "نَظَرَتَا",
      hum: "نَظَرُوا",
      hunna: "نَظَرْنَ"
    },
  
    present: {
      ana: "أَنْظُرُ",
      nahnu: "نَنْظُرُ",
      anta: "تَنْظُرُ",
      anti: "تَنْظُرِينَ",
      antuma_m: "تَنْظُرَانِ",
      antuma_f: "تَنْظُرَانِ",
      antum: "تَنْظُرُونَ",
      antunna: "تَنْظُرْنَ",
      huwa: "يَنْظُرُ",
      hiya: "تَنْظُرُ",
      huma_m: "يَنْظُرَانِ",
      huma_f: "تَنْظُرَانِ",
      hum: "يَنْظُرُونَ",
      hunna: "يَنْظُرْنَ"
    },
  
    amr: {
      anta: "اُنْظُرْ",
      anti: "اُنْظُرِي",
      antuma_m: "اُنْظُرَا",
      antuma_f: "اُنْظُرَا",
      antum: "اُنْظُرُوا",
      antunna: "اُنْظُرْنَ"
    },
  
    nahyi: {
      anta: "لَا تَنْظُرْ",
      anti: "لَا تَنْظُرِي",
      antuma_m: "لَا تَنْظُرَا",
      antuma_f: "لَا تَنْظُرَا",
      antum: "لَا تَنْظُرُوا",
      antunna: "لَا تَنْظُرْنَ"
    }
  },

  {
    key: "jaa",
    id_present: "datang",
    id_past: "telah datang",
    id_command: "datang",
  
    past: {
      ana: "جِئْتُ",
      nahnu: "جِئْنَا",
      anta: "جِئْتَ",
      anti: "جِئْتِ",
      antuma_m: "جِئْتُمَا",
      antuma_f: "جِئْتُمَا",
      antum: "جِئْتُمْ",
      antunna: "جِئْتُنَّ",
      huwa: "جَاءَ",
      hiya: "جَاءَتْ",
      huma_m: "جَاءَا",
      huma_f: "جَاءَتَا",
      hum: "جَاءُوا",
      hunna: "جِئْنَ"
    },
  
    present: {
      ana: "أَجِيءُ",
      nahnu: "نَجِيءُ",
      anta: "تَجِيءُ",
      anti: "تَجِيئِينَ",
      antuma_m: "تَجِيئَانِ",
      antuma_f: "تَجِيئَانِ",
      antum: "تَجِيئُونَ",
      antunna: "تَجِئْنَ",
      huwa: "يَجِيءُ",
      hiya: "تَجِيءُ",
      huma_m: "يَجِيئَانِ",
      huma_f: "تَجِيئَانِ",
      hum: "يَجِيئُونَ",
      hunna: "يَجِئْنَ"
    },
  
    amr: {
      anta: "جِئْ",
      anti: "جِئِي",
      antuma_m: "جِئَا",
      antuma_f: "جِئَا",
      antum: "جِئُوا",
      antunna: "جِئْنَ"
    },
  
    nahyi: {
      anta: "لَا تَجِئْ",
      anti: "لَا تَجِئِي",
      antuma_m: "لَا تَجِئَا",
      antuma_f: "لَا تَجِئَا",
      antum: "لَا تَجِئُوا",
      antunna: "لَا تَجِئْنَ"
    }
  },

  {
    key: "tawaddha",
    id_present: "berwudhu",
    id_past: "telah berwudhu",
    id_command: "wudhu",
  
    past: {
      ana: "تَوَضَّأْتُ",
      nahnu: "تَوَضَّأْنَا",
      anta: "تَوَضَّأْتَ",
      anti: "تَوَضَّأْتِ",
      antuma_m: "تَوَضَّأْتُمَا",
      antuma_f: "تَوَضَّأْتُمَا",
      antum: "تَوَضَّأْتُمْ",
      antunna: "تَوَضَّأْتُنَّ",
      huwa: "تَوَضَّأَ",
      hiya: "تَوَضَّأَتْ",
      huma_m: "تَوَضَّأَا",
      huma_f: "تَوَضَّأَتَا",
      hum: "تَوَضَّأُوا",
      hunna: "تَوَضَّأْنَ"
    },
  
    present: {
      ana: "أَتَوَضَّأُ",
      nahnu: "نَتَوَضَّأُ",
      anta: "تَتَوَضَّأُ",
      anti: "تَتَوَضَّئِينَ",
      antuma_m: "تَتَوَضَّئَانِ",
      antuma_f: "تَتَوَضَّئَانِ",
      antum: "تَتَوَضَّئُونَ",
      antunna: "تَتَوَضَّأْنَ",
      huwa: "يَتَوَضَّأُ",
      hiya: "تَتَوَضَّأُ",
      huma_m: "يَتَوَضَّئَانِ",
      huma_f: "تَتَوَضَّئَانِ",
      hum: "يَتَوَضَّئُونَ",
      hunna: "يَتَوَضَّأْنَ"
    },
  
    amr: {
      anta: "تَوَضَّأْ",
      anti: "تَوَضَّئِي",
      antuma_m: "تَوَضَّئَا",
      antuma_f: "تَوَضَّئَا",
      antum: "تَوَضَّئُوا",
      antunna: "تَوَضَّأْنَ"
    },
  
    nahyi: {
      anta: "لَا تَتَوَضَّأْ",
      anti: "لَا تَتَوَضَّئِي",
      antuma_m: "لَا تَتَوَضَّئَا",
      antuma_f: "لَا تَتَوَضَّئَا",
      antum: "لَا تَتَوَضَّئُوا",
      antunna: "لَا تَتَوَضَّأْنَ"
    }
  },

  {
    key: "shalla",
    id_present: "shalat",
    id_past: "telah shalat",
    id_command: "shalat",
  
    past: {
      ana: "صَلَّيْتُ",
      nahnu: "صَلَّيْنَا",
      anta: "صَلَّيْتَ",
      anti: "صَلَّيْتِ",
      antuma_m: "صَلَّيْتُمَا",
      antuma_f: "صَلَّيْتُمَا",
      antum: "صَلَّيْتُمْ",
      antunna: "صَلَّيْتُنَّ",
      huwa: "صَلَّى",
      hiya: "صَلَّتْ",
      huma_m: "صَلَّيَا",
      huma_f: "صَلَّتَا",
      hum: "صَلَّوْا",
      hunna: "صَلَّيْنَ"
    },
  
    present: {
      ana: "أُصَلِّي",
      nahnu: "نُصَلِّي",
      anta: "تُصَلِّي",
      anti: "تُصَلِّينَ",
      antuma_m: "تُصَلِّيَانِ",
      antuma_f: "تُصَلِّيَانِ",
      antum: "تُصَلُّونَ",
      antunna: "تُصَلِّينَ",
      huwa: "يُصَلِّي",
      hiya: "تُصَلِّي",
      huma_m: "يُصَلِّيَانِ",
      huma_f: "تُصَلِّيَانِ",
      hum: "يُصَلُّونَ",
      hunna: "يُصَلِّينَ"
    },
  
    amr: {
      anta: "صَلِّ",
      anti: "صَلِّي",
      antuma_m: "صَلِّيَا",
      antuma_f: "صَلِّيَا",
      antum: "صَلُّوا",
      antunna: "صَلِّينَ"
    },
  
    nahyi: {
      anta: "لَا تُصَلِّ",
      anti: "لَا تُصَلِّي",
      antuma_m: "لَا تُصَلِّيَا",
      antuma_f: "لَا تُصَلِّيَا",
      antum: "لَا تُصَلُّوا",
      antunna: "لَا تُصَلِّينَ"
    }
  },

  {
    key: "qara'a",
    id_present: "membaca",
    id_past: "telah membaca",
    id_command: "baca",

    past: {
      ana: "قَرَأْتُ",
      nahnu: "قَرَأْنَا",
      anta: "قَرَأْتَ",
      anti: "قَرَأْتِ",
      antuma_m: "قَرَأْتُمَا",
      antuma_f: "قَرَأْتُمَا",
      antum: "قَرَأْتُمْ",
      antunna: "قَرَأْتُنَّ",
      huwa: "قَرَأَ",
      hiya: "قَرَأَتْ",
      huma_m: "قَرَأَا",
      huma_f: "قَرَأَتَا",
      hum: "قَرَأُوا",
      hunna: "قَرَأْنَ"
    },

    present: {
      ana: "أَقْرَأُ",
      nahnu: "نَقْرَأُ",
      anta: "تَقْرَأُ",
      anti: "تَقْرَئِينَ",
      antuma_m: "تَقْرَئَانِ",
      antuma_f: "تَقْرَئَانِ",
      antum: "تَقْرَئُونَ",
      antunna: "تَقْرَأْنَ",
      huwa: "يَقْرَأُ",
      hiya: "تَقْرَأُ",
      huma_m: "يَقْرَئَانِ",
      huma_f: "تَقْرَئَانِ",
      hum: "يَقْرَئُونَ",
      hunna: "يَقْرَأْنَ"
    },

    amr: {
      anta: "اِقْرَأْ",
      anti: "اِقْرَئِي",
      antuma_m: "اِقْرَئَا",
      antuma_f: "اِقْرَئَا",
      antum: "اِقْرَئُوا",
      antunna: "اِقْرَأْنَ"
    },

    nahyi: {
      anta: "لَا تَقْرَأْ",
      anti: "لَا تَقْرَئِي",
      antuma_m: "لَا تَقْرَئَا",
      antuma_f: "لَا تَقْرَئَا",
      antum: "لَا تَقْرَئُوا",
      antunna: "لَا تَقْرَأْنَ"
    }
  },

  {
    key: "takallama",
    id_present: "berbicara",
    id_past: "telah berbicara",
    id_command: "bicara",

    past: {
      ana: "تَكَلَّمْتُ",
      nahnu: "تَكَلَّمْنَا",
      anta: "تَكَلَّمْتَ",
      anti: "تَكَلَّمْتِ",
      antuma_m: "تَكَلَّمْتُمَا",
      antuma_f: "تَكَلَّمْتُمَا",
      antum: "تَكَلَّمْتُمْ",
      antunna: "تَكَلَّمْتُنَّ",
      huwa: "تَكَلَّمَ",
      hiya: "تَكَلَّمَتْ",
      huma_m: "تَكَلَّمَا",
      huma_f: "تَكَلَّمَتَا",
      hum: "تَكَلَّمُوا",
      hunna: "تَكَلَّمْنَ"
    },

    present: {
      ana: "أَتَكَلَّمُ",
      nahnu: "نَتَكَلَّمُ",
      anta: "تَتَكَلَّمُ",
      anti: "تَتَكَلَّمِينَ",
      antuma_m: "تَتَكَلَّمَانِ",
      antuma_f: "تَتَكَلَّمَانِ",
      antum: "تَتَكَلَّمُونَ",
      antunna: "تَتَكَلَّمْنَ",
      huwa: "يَتَكَلَّمُ",
      hiya: "تَتَكَلَّمُ",
      huma_m: "يَتَكَلَّمَانِ",
      huma_f: "تَتَكَلَّمَانِ",
      hum: "يَتَكَلَّمُونَ",
      hunna: "تَتَكَلَّمْنَ"
    },

    amr: {
      anta: "تَكَلَّمْ",
      anti: "تَكَلَّمِي",
      antuma_m: "تَكَلَّمَا",
      antuma_f: "تَكَلَّمَا",
      antum: "تَكَلَّمُوا",
      antunna: "تَكَلَّمْنَ"
    },

    nahyi: {
      anta: "لَا تَتَكَلَّمْ",
      anti: "لَا تَتَكَلَّمِي",
      antuma_m: "لَا تَتَكَلَّمَا",
      antuma_f: "لَا تَتَكَلَّمَا",
      antum: "لَا تَتَكَلَّمُوا",
      antunna: "لَا تَتَكَلَّمْنَ"
    }
  },

  {
    key: "arafa",
    id_present: "mengetahui",
    id_past: "telah mengetahui",
    id_command: "ketahui",
  
    past: {
      ana: "عَرَفْتُ",
      nahnu: "عَرَفْنَا",
      anta: "عَرَفْتَ",
      anti: "عَرَفْتِ",
      antuma_m: "عَرَفْتُمَا",
      antuma_f: "عَرَفْتُمَا",
      antum: "عَرَفْتُمْ",
      antunna: "عَرَفْتُنَّ",
      huwa: "عَرَفَ",
      hiya: "عَرَفَتْ",
      huma_m: "عَرَفَا",
      huma_f: "عَرَفَتَا",
      hum: "عَرَفُوا",
      hunna: "عَرَفْنَ"
    },
  
    present: {
      ana: "أَعْرِفُ",
      nahnu: "نَعْرِفُ",
      anta: "تَعْرِفُ",
      anti: "تَعْرِفِينَ",
      antuma_m: "تَعْرِفَانِ",
      antuma_f: "تَعْرِفَانِ",
      antum: "تَعْرِفُونَ",
      antunna: "تَعْرِفْنَ",
      huwa: "يَعْرِفُ",
      hiya: "تَعْرِفُ",
      huma_m: "يَعْرِفَانِ",
      huma_f: "تَعْرِفَانِ",
      hum: "يَعْرِفُونَ",
      hunna: "يَعْرِفْنَ"
    },
  
    amr: {
      anta: "اِعْرِفْ",
      anti: "اِعْرِفِي",
      antuma_m: "اِعْرِفَا",
      antuma_f: "اِعْرِفَا",
      antum: "اِعْرِفُوا",
      antunna: "اِعْرِفْنَ"
    },
  
    nahyi: {
      anta: "لَا تَعْرِفْ",
      anti: "لَا تَعْرِفِي",
      antuma_m: "لَا تَعْرِفَا",
      antuma_f: "لَا تَعْرِفَا",
      antum: "لَا تَعْرِفُوا",
      antunna: "لَا تَعْرِفْنَ"
    }
  },
];

// ======================
// KATA BENDA
// ======================
const nouns = [
  {
    id: "buku",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "كِتَابٌ",
      dual: "كِتَابَانِ",
      plural: "كُتُبٌ"
    }
  },
  
  {
    id: "mobil",
    gender: "f",
    type: "object",
    pluralType: "salim",
    ar: {
      singular: "سَيَّارَةٌ",
      dual: "سَيَّارَتَانِ",
      plural: "سَيَّارَاتٌ"
    }
  },
  
  {
    id: "papan tulis",
    gender: "f",
    type: "object",
    pluralType: "salim",
    ar: {
      singular: "سَبُّورَةٌ",
      dual: "سَبُّورَتَانِ",
      plural: "سَبُّورَاتٌ"
    }
  },
  
  {
    id: "karpet",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "بِسَاطٌ",
      dual: "بِسَاطَانِ",
      plural: "بُسُطٌ"
    }
  },
  
  {
    id: "guru",
    gender: "m",
    type: "profession",
    pluralType: "salim",
    ar: {
      singular: "مُدَرِّسٌ",
      dual: "مُدَرِّسَانِ",
      plural: "مُدَرِّسُونَ"
    }
  },
  
  {
    id: "dokter",
    gender: "m",
    type: "profession",
    pluralType: "taksir",
    ar: {
      singular: "طَبِيبٌ",
      dual: "طَبِيبَانِ",
      plural: "أَطِبَّاءُ"
    }
  },

  {
    id: "insinyur",
    gender: "m",
    type: "profession",
    pluralType: "salim",
    ar: {
      singular: "مُهَنْدِسٌ",
      dual: "مُهَنْدِسَانِ",
      plural: "مُهَنْدِسُونَ"
    }
  },
  
  {
    id: "murid",
    gender: "m",
    type: "profession",
    pluralType: "taksir",
    ar: {
      singular: "طَالِبٌ",
      dual: "طَالِبَانِ",
      plural: "طُلَّابٌ"
    }
  },
  
  {
    id: "ustadz",
    gender: "m",
    type: "profession",
    pluralType: "taksir",
    ar: {
      singular: "أُسْتَاذٌ",
      dual: "أُسْتَاذَانِ",
      plural: "أَسَاتِذَةٌ"
    }
  },
  
  {
    id: "matahari",
    gender: "f",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "شَمْسٌ",
      dual: "شَمْسَانِ",
      plural: "شُمُوسٌ"
    }
  },
  
  {
    id: "masjid",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "مَسْجِدٌ",
      dual: "مَسْجِدَانِ",
      plural: "مَسَاجِدُ"
    }
  },
  
  {
    id: "nasi",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "رُزٌّ",
      dual: "رُزَّانِ",
      plural: "رُزٌّ"
    }
  },

  {
    id: "pena",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "قَلَمٌ",
      dual: "قَلَمَانِ",
      plural: "أَقْلَامٌ"
    }
  },
  
  {
    id: "pelajaran",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "دَرْسٌ",
      dual: "دَرْسَانِ",
      plural: "دُرُوسٌ"
    }
  },
  
  {
    id: "muslim",
    gender: "m",
    type: "profession",
    pluralType: "salim",
    ar: {
      singular: "مُسْلِمٌ",
      dual: "مُسْلِمَانِ",
      plural: "مُسْلِمُونَ"
    }
  },
  
  {
    id: "muslimah",
    gender: "f",
    type: "profession",
    pluralType: "salim",
    ar: {
      singular: "مُسْلِمَةٌ",
      dual: "مُسْلِمَتَانِ",
      plural: "مُسْلِمَاتٌ"
    }
  },
  
  {
    id: "tembok",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "جِدَارٌ",
      dual: "جِدَارَانِ",
      plural: "جُدُرٌ"
    }
  },
  
  {
    id: "keluarga",
    gender: "f",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "أُسْرَةٌ",
      dual: "أُسْرَتَانِ",
      plural: "أُسَرٌ"
    }
  },

  {
    id: "pohon",
    gender: "f",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "شَجَرَةٌ",
      dual: "شَجَرَتَانِ",
      plural: "أَشْجَارٌ"
    }
  },
  
  {
    id: "ayah",
    gender: "m",
    type: "object",
    pluralType: "salim",
    ar: {
      singular: "وَالِدٌ",
      dual: "وَالِدَانِ",
      plural: "وَالِدُونَ"
    }
  },
  
  {
    id: "ibu",
    gender: "f",
    type: "object",
    pluralType: "salim",
    ar: {
      singular: "وَالِدَةٌ",
      dual: "وَالِدَتَانِ",
      plural: "وَالِدَاتٌ"
    }
  },
  
  {
    id: "gambar",
    gender: "f",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "صُورَةٌ",
      dual: "صُورَتَانِ",
      plural: "صُوَرٌ"
    }
  },
  
  {
    id: "saudara laki-laki",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "أَخٌ",
      dual: "أَخَوَانِ",
      plural: "إِخْوَةٌ"
    }
  },
  
  {
    id: "saudara perempuan",
    gender: "f",
    type: "object",
    pluralType: "salim",
    ar: {
      singular: "أُخْتٌ",
      dual: "أُخْتَانِ",
      plural: "أَخَوَاتٌ"
    }
  },
  
  {
    id: "guru perempuan",
    gender: "f",
    type: "profession",
    pluralType: "salim",
    ar: {
      singular: "مُعَلِّمَةٌ",
      dual: "مُعَلِّمَتَانِ",
      plural: "مُعَلِّمَاتٌ"
    }
  },
  
  {
    id: "kakek",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "جَدٌّ",
      dual: "جَدَّانِ",
      plural: "أَجْدَادٌ"
    }
  },
  
  {
    id: "nenek",
    gender: "f",
    type: "object",
    pluralType: "salim",
    ar: {
      singular: "جَدَّةٌ",
      dual: "جَدَّتَانِ",
      plural: "جَدَّاتٌ"
    }
  },
  
  {
    id: "paman",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "عَمٌّ",
      dual: "عَمَّانِ",
      plural: "أَعْمَامٌ"
    }
  },
  
  {
    id: "bibi",
    gender: "f",
    type: "object",
    pluralType: "salim",
    ar: {
      singular: "عَمَّةٌ",
      dual: "عَمَّتَانِ",
      plural: "عَمَّاتٌ"
    }
  },
  
  {
    id: "anak laki-laki",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "اِبْنٌ",
      dual: "اِبْنَانِ",
      plural: "أَبْنَاءُ"
    }
  },
  
  {
    id: "anak perempuan",
    gender: "f",
    type: "object",
    pluralType: "salim",
    ar: {
      singular: "بِنْتٌ",
      dual: "بِنْتَانِ",
      plural: "بَنَاتٌ"
    }
  },
  
  {
    id: "kamar mandi",
    gender: "m",
    type: "object",
    pluralType: "salim",
    ar: {
      singular: "حَمَّامٌ",
      dual: "حَمَّامَانِ",
      plural: "حَمَّامَاتٌ"
    }
  },
  
  {
    id: "ruangan",
    gender: "f",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "غُرْفَةٌ",
      dual: "غُرْفَتَانِ",
      plural: "غُرَفٌ"
    }
  },
  
  {
    id: "mushola",
    gender: "m",
    type: "object",
    pluralType: "salim",
    ar: {
      singular: "مُصَلًّى",
      dual: "مُصَلَّيَانِ",
      plural: "مُصَلَّيَاتٌ"
    }
  },
  
  {
    id: "mantel",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "مِعْطَفٌ",
      dual: "مِعْطَفَانِ",
      plural: "مَعَاطِفُ"
    }
  },
  
  {
    id: "kacamata",
    gender: "f",
    type: "object",
    pluralType: "salim",
    ar: {
      singular: "نَظَّارَةٌ",
      dual: "نَظَّارَتَانِ",
      plural: "نَظَّارَاتٌ"
    }
  },
  
  {
    id: "anak",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "وَلَدٌ",
      dual: "وَلَدَانِ",
      plural: "أَوْلَادٌ"
    }
  },
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
  // MODE ISIM
  // ======================
  if (mode === "noun") {
    if (nounIndex >= nounPool.length) {
      shuffle(nounPool);
      nounIndex = 0;
    }

    const item = pick(nounPool);
    const noun = item.noun;
    const isyarah = getIsimIsyarahFixed(noun.gender, item.type);
    const form = getRandomForm();

    let nounAr = "";
    let sentenceId = "";
    let labelJumlah = "";
    
    // ======================
    // PILIH BENTUK
    // ======================
    if (form === "singular") {
      nounAr = noun.ar.singular;
      sentenceId = isyarah.id + " " + noun.id;
      labelJumlah = "mufrad";
    
    } else if (form === "dual") {
      nounAr = noun.ar.dual;
      sentenceId = isyarah.id + " dua " + noun.id;
      labelJumlah = "mutsanna";
    
    } else {
      nounAr = noun.ar.plural;
      sentenceId = isyarah.id + " banyak " + noun.id;
    
      if (noun.pluralType === "taksir") {
        labelJumlah = "jamak taksir";
      } else {
        labelJumlah = "jamak";
      }
    }
    
    // ======================
    // FINAL
    // ======================
    const sentenceAr = isyarah.ar + " " + nounAr;
    
    current = sentenceAr;
    currentQuestion = sentenceId;
    if (labelJumlah === "jamak taksir") {
      currentLabel = "jamak taksir";
    } else {
      const genderLabel = noun.gender === "m" ? "mudzakkar" : "muannats";
      currentLabel = labelJumlah + " " + genderLabel;
    }

    current = sentenceAr;
    currentQuestion = sentenceId;

    document.getElementById("question").innerText = sentenceId;
    document.getElementById("label").innerText = currentLabel;

    document.getElementById("answer").innerText = "";
    document.getElementById("answerWrap").style.display = "none";

    setTimeout(() => playQuestion(), 100);
    return;
  }

  // ======================
  // MODE FI'IL
  // ======================
  if (index >= pool.length) {
    shuffle(pool);
    index = 0;
  }

  const { subject, verb } = pool[index++];

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
    verbId = verb.id_command + "lah!";

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
  });

  shuffle(pool);
  index = 0;
}

function buildNounPool() {
  nounPool = [];

  nouns.forEach(noun => {
    ["near", "far"].forEach(type => {
      nounPool.push({
        noun: noun,
        type
      });
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

  } else if (mode === "noun") {
    btn.innerText = "Isim";
  }

  // ======================
  // BUILD DATA
  // ======================
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

function getRandomForm() {
  const forms = ["singular", "dual", "plural"];
  return forms[Math.floor(Math.random() * forms.length)];
}
  
buildPool();
buildNounPool();
