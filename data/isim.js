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
