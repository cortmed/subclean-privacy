# Denge — Kurulum (yaklaşık 15 dakika, bir kez)

Bu klasördeki dosyalar uygulamanın tamamıdır. Üç adım var: **Firebase** (veriler), **subclean.app** (barındırma), **telefonlar** (kurulum). Yapay zekâ yok; anahtar, üyelik, ek maliyet yok.

---

## 1) Firebase — verilerin senkron olduğu yer (≈7 dk)

1. **console.firebase.google.com** → *Proje ekle* → ad: `fit-ikili` → Google Analytics'i **kapat** → *Proje oluştur*.
2. ~~Web uygulaması ve ayar~~ — **yapıldı**, uygulamanın içine gömülü.
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
> Güncelleme gelince: yeni zip'teki dosyaları eskilerin üstüne at. O kadar.

## 3) Telefonlar (≈2 dk)

**Senin telefonun**
1. Adresi aç → profilini kur.
2. Ayarlar → **🟢 Bulut bağlı** kartında **"👫 Davet linkini gönder"** → WhatsApp'tan ona at.

**Onun telefonu**
1. Linke dokunur → otomatik eve katılır → profilini kurar. Bitti; hesap yok, giriş yok.

**Ana ekrana yükleme**
- **Android:** Uygulama içinde **"📲 Uygulamayı yükle"** düğmesi çıkar → tek dokunuş.
- **iPhone:** Safari'de aç → alttaki **Paylaş** → **Ana Ekrana Ekle** (uygulama içinde adım adım gösteriyor). Apple başka yol vermiyor.

**Pazar = tartı günü**
Pazar günü uygulamayı açtığında tam ekran bir "⚖️ Tartı günü" ekranı karşılıyor: son ölçüm, hedefe kalan, haftalık gerçek eğilim ve doğru ölçüm kuralları. İki seçenek var — *Tartıldım, kilomu gireyim* ya da *Sonra ekleyeceğim*. "Sonra" dersen ana ekrandaki tartı kartı, İlerleme'deki kilo düğmesi ve alt menüdeki Bugün sekmesi sen kiloyu girene kadar yanıp söner.

**Bildirimler**
Uygulama bildirim göndermiyor; kurulacak, takvime eklenecek hiçbir şey yok. Uygulamayı günün ilk kez açtığında **dünün raporu tam ekran karşılıyor**; sonra istediğin zaman ana ekrandaki "📊 Dünün raporu" düğmesinden tekrar açabilirsin.

**Adımlar kendiliğinden gelsin**
Uygulama → Ayarlar → **👟 Adımlar kendiliğinden gelsin → Nasıl yapılır**.
- **iPhone:** 3 eylemlik Kısayol otomasyonu (Sağlık Örneklerini Bul → İstatistikleri Hesapla → URL'yi Aç). Tek yapıştırma, başlık/gövde ayarı yok. Her akşam 22:00'de uygulama bir an açılıp adımı yazar. Uygulamanın hiç açılmasını istemeyenler için aynı ekranda "uzman" yöntem de var (o, Firestore kurallarının güncel olmasını gerektirir).
- **Android:** Sistem otomasyonu yok; **Google Health** widget'ına bakıp **Hareket → ✏️ Adım gir** (10 sn) ya da yürüyüşte canlı sayaç. Adım girilmemişse uygulama akşam 18:00'den sonra ana ekranda, ertesi sabah da raporda hatırlatıyor.

---

## Dosyalar

| Dosya | Ne işe yarar |
|---|---|
| `index.html` | Uygulamanın tamamı |
| `firestore.rules` | Firebase konsoluna yapıştırılacak güvenlik kuralları (adım otomasyonu için güncel olmalı) |
| `manifest.json` | Telefona kurulabilmesi için uygulama kimliği |
| `sw.js` | Çevrimdışı çalışma ve hız |
| `icon-*.png` | Ana ekran simgeleri |

## Sık sorulanlar

- **Ayarlar'da "🟡 senkron kapalı" yazıyor** → Altında sebebi yazar (Anonim giriş kapalı / Firestore yok / kurallar yayınlanmamış). O adımı yap, sayfayı yenile.
- **Partnerim linke dokundu ama beni görmüyor** → İkinizin de aynı ev kodunda olması gerekir; Ayarlar'daki kod ikinizde de aynı olmalı. Değilse davet linkini tekrar gönder.
- **Veri kaybetmek istemiyorum** → Ayarlar → 💾 Yedek indir. Ayda bir yeter.
- **Claude'daki eski sürüm ne olacak?** → Olduğu gibi duruyor; yeni adres oturunca onu kullanmayı bırakırsınız. Eski verileri taşımak istersen orada Ayarlar → yedek yoktu; ilk günden temiz başlamak en kolayı.
