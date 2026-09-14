# Fit İkili — Kurulum (yaklaşık 15 dakika, bir kez)

Bu klasördeki dosyalar uygulamanın tamamıdır. Üç adım var: **Firebase** (veriler), **subclean.app** (barındırma), **telefonlar** (kurulum). Yapay zekâ yok; anahtar, üyelik, ek maliyet yok.

---

## 1) Firebase — verilerin senkron olduğu yer (≈7 dk)

1. **console.firebase.google.com** → *Proje ekle* → ad: `fit-ikili` → Google Analytics'i **kapat** → *Proje oluştur*.
2. Proje açılınca ortadaki **`</>`** (Web) simgesine tıkla → uygulama adı `fit-ikili` → *Uygulamayı kaydet*.
   Ekranda `const firebaseConfig = { apiKey: "...", ... }` diye bir kutu çıkar. **Süslü parantezin içini kopyala.**
3. Bu klasördeki **`firebase-config.js`** dosyasını Not Defteri ile aç, `window.FIREBASE_CONFIG = { ... }` içindekileri kopyaladığınla değiştir, kaydet.
   *(Bu değerler gizli değildir; güvenlik bir sonraki adımdaki kurallarla sağlanır.)*
4. Sol menü → **Build → Firestore Database** → *Veritabanı oluştur* → konum **eur3 (europe-west)** → **Üretim modunda başlat** → *Oluştur*.
5. Aynı ekranda üstte **Kurallar (Rules)** sekmesi → içeriği sil → **`firestore.rules`** dosyasının içeriğini yapıştır → **Yayınla**.
6. Sol menü → **Build → Authentication** → *Başlayın* → **Sign-in method** → **Anonim (Anonymous)** → Etkinleştir → Kaydet.
7. Authentication → **Settings** → **Authorized domains** → *Add domain* → `subclean.app`.

## 2) subclean.app'e yükleme (≈3 dk, komut yok)

Uygulama **`https://subclean.app/k7m2x/`** adresinde yaşayacak (rastgele bir klasör adı; isteyen bulamaz, sadece linki bilen girer).

1. Sitenin dosyalarının durduğu yere (hosting panelindeki *public_html* / *www*, ya da projede *public* klasörü — sitende hangisi varsa) **`k7m2x`** adında bir klasör aç.
2. Bu zip'teki **tüm dosyaları** o klasörün içine at (README dahil, zararı yok).
3. Tarayıcıda `https://subclean.app/k7m2x/` aç → uygulama gelmeli.
4. Firebase'e dön: Authentication → Settings → **Authorized domains** → `subclean.app` ekle *(1.7 adımını bu şekilde yap)*.

> Sitende bir "her adresi ana sayfaya yönlendir" kuralı (SPA rewrite) varsa `k7m2x/` klasörünü bu kuraldan hariç tut; aksi halde uygulama yerine site ana sayfası açılır.
> Güncelleme gelince: sadece `index.html` dosyasını değiştir, `sw.js` içindeki `fit-ikili-v1` yazısını `v2` yap. O kadar.

## 3) Telefonlar (≈2 dk)

**Senin telefonun**
1. Adresi aç → profilini kur.
2. Ayarlar → **🟢 Bulut bağlı** kartında **"👫 Davet linkini gönder"** → WhatsApp'tan ona at.

**Onun telefonu**
1. Linke dokunur → otomatik eve katılır → profilini kurar. Bitti; hesap yok, giriş yok.

**Ana ekrana yükleme**
- **Android:** Uygulama içinde **"📲 Uygulamayı yükle"** düğmesi çıkar → tek dokunuş.
- **iPhone:** Safari'de aç → alttaki **Paylaş** → **Ana Ekrana Ekle** (uygulama içinde adım adım gösteriyor). Apple başka yol vermiyor.

**Bildirimler**
Ayarlar → 🔔 → **Takvimime ekle**. İnen dosyaya dokun → takvime eklenir → öğlen 12:00 motivasyon, Pazar tartı günü, su saatleri gerçek bildirim olarak gelir.

**Adım (iPhone, otomatik)**
Ayarlar → 👟 Otomatik adım kurulumu → Kısayol tarifi. Adımlar her gece kendiliğinden yazılır.

---

## Dosyalar

| Dosya | Ne işe yarar |
|---|---|
| `index.html` | Uygulamanın tamamı |
| `firebase-config.js` | **Senin dolduracağın** Firebase ayarı |
| `firestore.rules` | Firebase konsoluna yapıştırılacak güvenlik kuralları |
| `manifest.json` | Telefona kurulabilmesi için uygulama kimliği |
| `sw.js` | Çevrimdışı çalışma ve hız |
| `icon-*.png` | Ana ekran simgeleri |

## Sık sorulanlar

- **Ayarlar'da "🟡 Yerel mod" yazıyor** → `firebase-config.js` doldurulmamış ya da Anonim giriş açılmamış (adım 1.3 ve 1.6).
- **Partnerim linke dokundu ama beni görmüyor** → İkinizin de aynı ev kodunda olması gerekir; Ayarlar'daki kod ikinizde de aynı olmalı. Değilse davet linkini tekrar gönder.
- **Veri kaybetmek istemiyorum** → Ayarlar → 💾 Yedek indir. Ayda bir yeter.
- **Claude'daki eski sürüm ne olacak?** → Olduğu gibi duruyor; yeni adres oturunca onu kullanmayı bırakırsınız. Eski verileri taşımak istersen orada Ayarlar → yedek yoktu; ilk günden temiz başlamak en kolayı.
