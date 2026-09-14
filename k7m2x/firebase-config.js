/* ============================================================
   Fit İkili — Firebase ayarı
   Firebase konsolu → Proje ayarları → "Web uygulaması" → "SDK kurulumu ve yapılandırması"
   Orada gördüğün firebaseConfig nesnesinin içini aşağıya yapıştır.
   (Bu değerler gizli değildir; güvenlik Firestore kurallarıyla sağlanır.)
   ============================================================ */
window.FIREBASE_CONFIG = {
  apiKey: "BURAYA_YAPISTIR",
  authDomain: "PROJE-ADI.firebaseapp.com",
  projectId: "PROJE-ADI",
  storageBucket: "PROJE-ADI.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:0000000000000000"
};
