// ======================
// KATA BENDA
// ======================
const nouns = [
  {
    id: "atap",
    topic: "bangunan",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "سَقْفٌ",
      dual: "سَقْفَانِ",
      plural: "سُقُوْفٌ"
    }
  },

  {
    id: "jam",
    topic: "waktu",
    gender: "f",
    type: "object",
    pluralType: "salim",
    ar: {
      singular: "سَاعَةٌ",
      dual: "سَاعَتَانِ",
      plural: "سَاعَاتٌ"
    }
  },

  {
    id: "pintu",
    topic: "bangunan",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "بَابٌ",
      dual: "بَابَانِ",
      plural: "أَبْوَابٌ"
    }
  },
  
  {
    id: "jendela",
    topic: "bangunan",
    gender: "f",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "نَافِذَةٌ",
      dual: "نَافِذَتَانِ",
      plural: "نَوَافِذُ"
    }
  },
  
  {
    id: "lantai",
    topic: "bangunan",
    gender: "f",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "بِلَاطَةٌ",
      dual: "بِلَاطَتَانِ",
      plural: "بِلَاطٌ"
    }
  },
  
  {
    id: "lampu",
    topic: "peralatan_rumah",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "مِصْبَاحٌ",
      dual: "مِصْبَاحَانِ",
      plural: "مَصَابِيحُ"
    }
  },
  
  {
    id: "kunci",
    topic: "peralatan_rumah",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "مِفْتَاحٌ",
      dual: "مِفْتَاحَانِ",
      plural: "مَفَاتِيحُ"
    }
  },
  
  {
    id: "cermin",
    topic: "peralatan_rumah",
    gender: "f",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "مِرْآةٌ",
      dual: "مِرْآتَانِ",
      plural: "مَرَاءٍ"
    }
  },
  
  {
    id: "kaca",
    topic: "material_alam",
    gender: "f",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "زُجَاجَةٌ",
      dual: "زُجَاجَتَانِ",
      plural: "زُجَاجٌ"
    }
  },
  
  {
    id: "korden",
    topic: "peralatan_rumah",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "سِتَارٌ",
      dual: "سِتَارَانِ",
      plural: "سُتُرٌ"
    }
  },

  {
    id: "lemari",
    topic: "perabot",
    gender: "f",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "خِزَانَةٌ",
      dual: "خِزَانَتَانِ",
      plural: "خَزَائِنُ"
    }
  },
  
  {
    id: "kasur",
    topic: "perabot",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "فِرَاشٌ",
      dual: "فِرَاشَانِ",
      plural: "فُرُشٌ"
    }
  },
  
  {
    id: "ranjang",
    topic: "perabot",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "سَرِيرٌ",
      dual: "سَرِيرَانِ",
      plural: "سُرُرٌ"
    }
  },
  
  {
    id: "ventilasi",
    topic: "bangunan",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "شُبَّاكٌ",
      dual: "شُبَّاكَانِ",
      plural: "شَبَابِيكُ"
    }
  },
  
  {
    id: "sapu",
    topic: "alat_kebersihan",
    gender: "f",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "مِكْنَسَةٌ",
      dual: "مِكْنَسَتَانِ",
      plural: "مَكَانِسُ"
    }
  },
  
  {
    id: "alat pel",
    topic: "alat_kebersihan",
    gender: "f",
    type: "object",
    ar: {
      singular: "مِمْسَحَةُ الْبِلَاطِ"
    }
  },
  
  {
    id: "bantal",
    topic: "perabot",
    gender: "f",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "وِسَادَةٌ",
      dual: "وِسَادَتَانِ",
      plural: "وَسَائِدُ"
    }
  },
  
  {
    id: "guling",
    topic: "perabot",
    gender: "f",
    type: "object",
    ar: {
      singular: "وِسَادَةٌ مُسْتَطِيلَةٌ"
    }
  },
  
  {
    id: "keset",
    topic: "peralatan_rumah",
    gender: "f",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "وَطَّايَةٌ",
      dual: "وَطَّايَتَانِ",
      plural: "وَطَّايَاتٌ"
    }
  },

  {
    id: "sisir",
    topic: "kebersihan_diri",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "مِشْطٌ",
      dual: "مِشْطَانِ",
      plural: "أَمْشَاطٌ"
    }
  },
  
  {
    id: "sampah",
    topic: "material_alam",
    gender: "f",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "زُبَالَةٌ",
      dual: "زُبَالَتَانِ",
      plural: "زَبَائِلُ"
    }
  },
  
  {
    id: "tempat sampah",
    topic: "peralatan_rumah",
    gender: "f",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "مَزْبَلَةٌ",
      dual: "مَزْبَلَتَانِ",
      plural: "مَزَابِلُ"
    }
  },
  
  {
    id: "selimut",
    topic: "perabot",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "لِحَافٌ",
      dual: "لِحَافَانِ",
      plural: "لُحُفٌ"
    }
  },
  
  {
    id: "seprai",
    topic: "perabot",
    gender: "m",
    type: "object",
    ar: {
      singular: "غِطَاءُ السَّرِيرِ"
    }
  },
  
  {
    id: "jam beker",
    topic: "peralatan_rumah",
    gender: "f",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "مُنَبِّهٌ",
      dual: "مُنَبِّهانِ",
      plural: "مُنَبِّهَاتٌ"
    }
  },
  
  {
    id: "koper",
    topic: "penyimpanan",
    gender: "f",
    type: "object",
    ar: {
      singular: "شَنْطَةٌ"
    }
  },
  
  {
    id: "rak",
    topic: "perabot",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "رَفٌّ",
      dual: "رَفَّانِ",
      plural: "رُفُوفٌ"
    }
  },
  
  {
    id: "sandal",
    topic: "pakaian",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "نَعْلٌ",
      dual: "نَعْلَانِ",
      plural: "نِعَالٌ"
    }
  },
  
  {
    id: "hanger",
    topic: "penyimpanan",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "مِعْلَاقٌ",
      dual: "مِعْلَاقَانِ",
      plural: "مَعَالِيقُ"
    }
  },

  {
    id: "gunting kuku",
    topic: "kebersihan_diri",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "مِقْلَامٌ",
      dual: "مِقْلَامَانِ",
      plural: "مَقَالِيمُ"
    }
  },
  
  {
    id: "serokan",
    topic: "alat_kebersihan",
    gender: "f",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "مِجْرَفَةٌ",
      dual: "مِجْرَفَتَانِ",
      plural: "مَجَارِفُ"
    }
  },
  
  {
    id: "jadwal piket",
    topic: "sistem",
    gender: "m",
    type: "object",
    ar: {
      singular: "جَدْوَلُ التَّنَاوُبِ"
    }
  },
  
  {
    id: "tingkat/lantai",
    topic: "bangunan",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "دَوْرٌ",
      dual: "دَوْرَانِ",
      plural: "أَدْوَارٌ"
    }
  },
  
  {
    id: "gantungan kunci",
    topic: "aksesoris",
    gender: "f",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "مِيدَالِيَّةٌ",
      dual: "مِيدَالِيَّتَانِ",
      plural: "مَيَادِلُ"
    }
  },
  
  {
    id: "kardus",
    topic: "penyimpanan",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "كَرْتُونٌ",
      dual: "كَرْتُونَانِ",
      plural: "كَرَاتِينُ"
    }
  },
  
  {
    id: "kalender",
    topic: "waktu",
    gender: "m",
    type: "object",
    ar: {
      singular: "تَقْوِيمٌ"
    }
  },
  
  {
    id: "tangga",
    topic: "bangunan",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "سُلَّمٌ",
      dual: "سُلَّمَانِ",
      plural: "سَلَالِمُ"
    }
  },
  
  {
    id: "lingkungan",
    topic: "area",
    gender: "f",
    type: "object",
    ar: {
      singular: "بِيئَةٌ"
    }
  },
  
  {
    id: "gembok",
    topic: "peralatan_rumah",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "قُفْلٌ",
      dual: "قُفْلَانِ",
      plural: "أَقْفَالٌ"
    }
  },

  {
    id: "tamu",
    topic: "status",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "ضَيْفٌ",
      dual: "ضَيْفَانِ",
      plural: "ضُيُوفٌ"
    }
  },
  
  {
    id: "tisu",
    topic: "kebersihan_diri",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "مِنْدِيلٌ",
      dual: "مِنْدِيلَانِ",
      plural: "مَنَادِيلُ"
    }
  },
  
  {
    id: "korek kuping",
    topic: "kebersihan_diri",
    gender: "m",
    type: "object",
    ar: {
      singular: "مُنَظِّفُ الْأُذُنِ"
    }
  },
  
  {
    id: "uang",
    topic: "nilai",
    gender: "f",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "نَقْدٌ",
      dual: "نَقْدَانِ",
      plural: "نُقُودٌ"
    }
  },
  
  {
    id: "dompet",
    topic: "aksesoris",
    gender: "f",
    type: "object",
    ar: {
      singular: "مِحْفَظَةُ الْفُلُوسِ"
    }
  },
  
  {
    id: "jadwal",
    topic: "sistem",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "جَدْوَلٌ",
      dual: "جَدْوَلَانِ",
      plural: "جَدَاوِلُ"
    }
  },
  
  {
    id: "peniti",
    topic: "aksesoris",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "مِشْبَكٌ",
      dual: "مِشْبَكَانِ",
      plural: "مَشَابِكُ"
    }
  },
  
  {
    id: "pewangi ruangan",
    topic: "peralatan_rumah",
    gender: "m",
    type: "object",
    ar: {
      singular: "مُعَطِّرُ الْغُرْفَةِ"
    }
  },
  
  {
    id: "ulas bantal",
    topic: "perabot",
    gender: "m",
    type: "object",
    ar: {
      singular: "غِطَاءُ الْوِسَادَةِ"
    }
  },
  
  {
    id: "perpisahan",
    topic: "kejadian",
    gender: "m",
    type: "object",
    ar: {
      singular: "فِرَاقٌ"
    }
  },

  {
    id: "cucian",
    topic: "status",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "غَسَلٌ",
      dual: "غَسَلَانِ",
      plural: "غَسِيلٌ"
    }
  },
  
  {
    id: "jam dinding",
    topic: "peralatan_rumah",
    gender: "f",
    type: "object",
    ar: {
      singular: "السَّاعَةُ الْحَائِطِيَّةُ"
    }
  },
  
  {
    id: "oleh-oleh",
    topic: "aksesoris",
    gender: "f",
    type: "object",
    ar: {
      singular: "هَدِيَّةُ السَّفَرِ"
    }
  },
  
  {
    id: "blok",
    topic: "area",
    gender: "f",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "شُقَّةٌ",
      dual: "شُقَّتَانِ",
      plural: "شُقَقٌ"
    }
  },
  
  {
    id: "hadiah",
    topic: "nilai",
    gender: "f",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "هَدِيَّةٌ",
      dual: "هَدِيَّتَانِ",
      plural: "هَدَايَا"
    }
  },
  
  {
    id: "hukuman",
    topic: "kejadian",
    gender: "f",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "عُقُوبَةٌ",
      dual: "عُقُوبَتَانِ",
      plural: "عُقُوبَاتٌ"
    }
  },
  
  {
    id: "kotak",
    topic: "penyimpanan",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "صُنْدُوقٌ",
      dual: "صُنْدُوقَانِ",
      plural: "صَنَادِيقُ"
    }
  },
  
  {
    id: "solasi",
    topic: "peralatan_rumah",
    gender: "f",
    type: "object",
    pluralType: "salim",
    ar: {
      singular: "لَاصِقَةٌ",
      dual: "لَاصِقَتَانِ",
      plural: "لَاصِقَاتٌ"
    }
  },
  
  {
    id: "lem",
    topic: "peralatan_rumah",
    gender: "m",
    type: "object",
    ar: {
      singular: "غِرَاءٌ"
    }
  },
  
  {
    id: "gunting",
    topic: "peralatan_rumah",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "مِقَصٌّ",
      dual: "مِقَصَّانِ",
      plural: "مَقَاصٌّ"
    }
  },
];
