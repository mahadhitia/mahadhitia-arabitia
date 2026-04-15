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
      plural: "أَسَاتِيذُ"
    }
  },
  
  {
    id: "matahari",
    gender: "f",
    type: "object",
    ar: {
      singular: "شَمْسٌ"
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

  {
    id: "tangan",
    gender: "f",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "يَدٌ",
      dual: "يَدَانِ",
      plural: "أَيْدٍ"
    }
  },

  {
    id: "kelas",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "فَصْلٌ",
      dual: "فَصْلَانِ",
      plural: "فُصُولٌ"
    }
  },

  {
    id: "tas",
    gender: "f",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "حَقِيبَةٌ",
      dual: "حَقِيبَتَانِ",
      plural: "حَقَائِبُ"
    }
  },

  {
    id: "jaket",
    gender: "f",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "جَاكِيتَةٌ",
      dual: "جَاكِيتَتَانِ",
      plural: "جَاكِيتَاتٌ"
    }
  },

  {
    id: "pakaian",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "لِبَاسٌ",
      dual: "لِبَاسَانِ",
      plural: "أَلْبِسَةٌ"
    }
  },

  {
    id: "atap",
    topic: "kamar",
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
    topic: "kamar",
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
    topic: "kamar",
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
    topic: "kamar",
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
    topic: "kamar",
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
    topic: "kamar",
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
    topic: "kamar",
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
    topic: "kamar",
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
    topic: "kamar",
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
    topic: "kamar",
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
    topic: "kamar",
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
    topic: "kamar",
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
    topic: "kamar",
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
    topic: "kamar",
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
    topic: "kamar",
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
    topic: "kamar",
    gender: "f",
    type: "object",
    ar: {
      singular: "مِمْسَحَةُ الْبِلَاطِ"
    }
  },
  
  {
    id: "bantal",
    topic: "kamar",
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
    topic: "kamar",
    gender: "f",
    type: "object",
    ar: {
      singular: "وِسَادَةٌ مُسْتَطِيلَةٌ"
    }
  },
  
  {
    id: "keset",
    topic: "kamar",
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
    topic: "kamar",
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
    topic: "kamar",
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
    topic: "kamar",
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
    topic: "kamar",
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
    topic: "kamar",
    gender: "m",
    type: "object",
    ar: {
      singular: "غِطَاءُ السَّرِيرِ"
    }
  },
  
  {
    id: "jam beker",
    topic: "kamar",
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
    topic: "kamar",
    gender: "f",
    type: "object",
    ar: {
      singular: "شَنْطَةٌ"
    }
  },
  
  {
    id: "rak",
    topic: "kamar",
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
    topic: "kamar",
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
    topic: "kamar",
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
    topic: "kamar",
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
    topic: "kamar",
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
    topic: "kamar",
    gender: "m",
    type: "object",
    ar: {
      singular: "جَدْوَلُ التَّنَاوُبِ"
    }
  },
  
  {
    id: "tingkat/lantai",
    topic: "kamar",
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
    topic: "kamar",
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
    topic: "kamar",
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
    topic: "kamar",
    gender: "m",
    type: "object",
    ar: {
      singular: "تَقْوِيمٌ"
    }
  },
  
  {
    id: "tangga",
    topic: "kamar",
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
    topic: "kamar",
    gender: "f",
    type: "object",
    ar: {
      singular: "بِيئَةٌ"
    }
  },
  
  {
    id: "gembok",
    topic: "kamar",
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
    topic: "kamar",
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
    topic: "kamar",
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
    topic: "kamar",
    gender: "m",
    type: "object",
    ar: {
      singular: "مُنَظِّفُ الْأُذُنِ"
    }
  },
  
  {
    id: "uang",
    topic: "kamar",
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
    topic: "kamar",
    gender: "f",
    type: "object",
    ar: {
      singular: "مِحْفَظَةُ الْفُلُوسِ"
    }
  },
  
  {
    id: "jadwal",
    topic: "kamar",
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
    topic: "kamar",
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
    topic: "kamar",
    gender: "m",
    type: "object",
    ar: {
      singular: "مُعَطِّرُ الْغُرْفَةِ"
    }
  },
  
  {
    id: "ulas bantal",
    topic: "kamar",
    gender: "m",
    type: "object",
    ar: {
      singular: "غِطَاءُ الْوِسَادَةِ"
    }
  },
  
  {
    id: "perpisahan",
    topic: "kamar",
    gender: "m",
    type: "object",
    ar: {
      singular: "فِرَاقٌ"
    }
  },

  {
    id: "cucian",
    topic: "kamar",
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
    topic: "kamar",
    gender: "f",
    type: "object",
    ar: {
      singular: "السَّاعَةُ الْحَائِطِيَّةُ"
    }
  },
  
  {
    id: "oleh-oleh",
    topic: "kamar",
    gender: "f",
    type: "object",
    ar: {
      singular: "هَدِيَّةُ السَّفَرِ"
    }
  },
  
  {
    id: "blok",
    topic: "kamar",
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
    topic: "kamar",
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
    topic: "kamar",
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
    topic: "kamar",
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
    topic: "kamar",
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
    topic: "kamar",
    gender: "m",
    type: "object",
    ar: {
      singular: "غِرَاءٌ"
    }
  },
  
  {
    id: "gunting",
    topic: "kamar",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "مِقَصٌّ",
      dual: "مِقَصَّانِ",
      plural: "مَقَاصٌّ"
    }
  },

  {
    id: "tembok",
    topic: "kamar",
    gender: "m",
    type: "object",
    pluralType: "taksir",
    ar: {
      singular: "جِدَارٌ",
      dual: "جِدَارَانِ",
      plural: "جُدُرٌ"
    }
  },
];
