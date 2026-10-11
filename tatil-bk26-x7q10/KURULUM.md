# 💸 Expense — Ahmed & Buket ortak masraf defteri

Tatil, düğün, ev... her şey için ortak masraf takibi. iPhone ve Android'de aynı anda, kendi ikonuyla tam ekran uygulama olarak çalışır.

---

## Güncelleme yapıyorsanız (mevcut kurulum var)

Bu güncellemede (💍 Nişan sürümü) **sadece `index.html`** değişti. GitHub'da `tatil-bk26-x7q10/index.html`'in üzerine yazın, telefonlarda uygulamayı kapatıp açın (gerekirse iki kez).

Verileriniz Firebase'de, hiçbiri kaybolmaz. Eski defterler olduğu gibi kalır.

---

## Sıfırdan kurulum

### Adım 1 — Dosyaları siteye koy

1. Repoda tahmin edilemez isimli bir klasör aç (örn. `tatil-bk26-x7q10`)
2. İçine 6 dosyayı koy: `index.html`, `sw.js`, `manifest.json`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`
3. Push → adres: `https://subclean.app/<klasör-adı>/`

**Gizlilik:** sayfada `noindex` var, arama motorları listelemez. Ana sayfadan link vermeyin, `robots.txt`/`sitemap.xml`'e eklemeyin. Uygulama linkini ikiniz dışında kimseyle paylaşmayın.

### Adım 2 — Firebase güvenliği

Firebase bağlantısı uygulamanın içinde gömülü, config yapıştırmaya gerek yok. Sadece iki ayar:

1. **Build → Authentication** → Get started → **Sign-in method** → **Anonymous** → Enable → Save
2. **Realtime Database → Rules** → şunu yapıştırıp **Publish**:

```json
{ "rules": { ".read": "auth != null", ".write": "auth != null" } }
```

### Adım 3 — Telefonlara kur

1. Linki telefonda aç — üstte **"senkron ✓"** yazmalı
2. Çıkan banner'dan:
   - **Android (Buket):** "📲 Yükle" → onayla → uygulama listesine eklenir
   - **iPhone (Ahmed):** Safari → **Paylaş** → **"Ana Ekrana Ekle"** (Apple tek tuşla kuruluma izin vermiyor)
3. Test: biriniz masraf girsin, saniyeler içinde diğerinde belirmeli 🎉

---

## Kullanım

### Defterler 📒

Sağ üstteki **📒** düğmesi tüm defterleri listeler. **＋ Yeni defter ekle** ile tür seçersiniz:

| Tür | Kategoriler |
|---|---|
| 🏖️ **Tatil** | Yemek, Ulaşım, Konaklama, Eğlence, Market, Diğer |
| 💍 **Nişan & Nikah** | Takı, Kıyafet, Mekan, İkram, Çikolata & tepsi, Çiçek & süs, Fotoğraf, Müzik, Davetiye, Diğer |
| 🏠 **Ev kurulumu** | Mobilya, Beyaz eşya, Elektronik, Mutfak, Tekstil, Dekorasyon, Tadilat, Diğer |
| 📒 **Genel** | Yemek, Market, Ulaşım, Fatura, Ev, Sağlık, Eğlence, Diğer |

Tür sonradan Ayarlar'dan değiştirilebilir; masraflarınız etkilenmez. Defter seçince ikinizde de o defter açılır.

### 💍 Nişan özellikleri

- **⏳ Canlı geri sayım**: ana ekranın en üstünde 14 Kasım'a gün/saat/dk/sn. Nişan günü "Bugün büyük gün!", sonrasında "Nişanlandık · X gün oldu"
- **🗓️ Önemli tarihler**: sayaçtaki "Tarihler" düğmesi (veya Ayarlar). Nikah tarihi belli olunca girin, sayaç nişandan sonra otomatik nikaha geçer. Saat isteğe bağlı
- **💳 Ödeme planı**: kapora + kalan + vade. Örn. mekan 180.000, 50.000 kapora → kapora hemen masraf olur, 130.000 vadesine planlanır. 7 gün kala turuncu, gecikince kırmızı. "✓ Ödendi" → kim ödediğini seçin, masrafa dönüşür ve %50-%50 bölünür
- **🎯 Kategori bütçesi**: Kategoriler kartındaki düğme. Her kategoriye ayrı bütçe; çubukta düz kısım harcanan, çizgili kısım planlı ödeme, aşınca kırmızı
- **📊 Nişana kadar**: kalan süre, kalan bütçe (bütçe − harcanan − planlı), günlük harcanabilir tutar, yaklaşan ödemeler
- **✅ Hazırlık listesi**: ortak yapılacaklar, önerilere dokunarak hızlı ekleme, iki telefonda senkron
- **🎁 Bohça · alınacaklar**: iki sekme: 👰 Buket'e (gelin bohçası) ve 🤵 Ahmed'e (damat bohçası). Para/tutar yok, sadece alınacak / alındı. "📋 Standart listeyi ekle" ile hazır liste gelir (14'er kalem); istemediğinizi ✕ ile çıkarın, kendi kaleminizi yazıp ekleyin, yazıya dokunarak düzenleyin. Alınanlar üstü çizili olarak "Alındı ✓" bölümüne iner. Liste iki telefonda ortak
- **💞 Ödeşme kutlaması**: "Ödeştik" deyince iki yüzük birleşir, "Tamamlandı ✅", kalp konfeti (iki telefonda da)
- **✨ Nişan rewind'i**: 14 Kasım'da açılır. Hazırlık süreci, zaman tüneli (ilk masraf → en büyük adım → en yoğun gün → nişan günü), kategoriler, liste, analizler
- **🌸 Nişan teması**: güncellemeyle otomatik açılır, Ayarlar'dan değiştirilebilir
- İsimler her yerde **Buket, Ahmed** sırasıyla; "Kim ödedi?" her telefonda en son seçileni hatırlar

### Masraf girme

- **＋ Masraf Ekle** → tutar, açıklama, tarih, kim ödedi, kategori
- **📷 Fişi tara**: fişin fotoğrafını çek — tutar, mekan adı ve kategori otomatik dolar (internet gerekir, ilk taramada 15-30 sn)
- **📅 Tarih**: varsayılan bugün; "Dün" düğmesi veya takvimden geçmiş bir gün seçilebilir
- **⚡ Hızlı ekle**: aynı masrafı 2. kez girdiğinizde tek dokunuşluk şablon olur, en son fiyatı getirir
- **✏️ Düzenleme**: listede masrafa dokun → düzelt → Güncelle
- Silmek için ✕

### Hesap ve borç

- Her masraf ikiye bölünür; fazla ödeyen alacaklı olur
- 🟠 turuncu = bekleyen borç, 🟢 yeşil = kapatılmış
- **💸 Ödeştik**: parayı elden verince borcu kapatır (toplam harcama değişmez), kayıt geri alınabilir
- **🧮 Hesabı göster**: toplam → kişi başı pay → kim ne ödedi → fark → farkın yarısı → kalan borç, en altta `✓ Kontrol` satırı
- Kişi renkleri sabit: Ahmed ● teal, Buket ● amber
- Masraf listesinde her günün toplamı tarih başlığında yazar

### Görünüm ve raporlar

- **💍 Bütçe halkası**: yüzde kaçı harcandı (%80 turuncu, aşınca kırmızı)
- **📅 Günlük harcama** + "bu hızla bütçe ~N gün yeter" tahmini
- **📈 Genel özet**: birikimli eğri, en yüklü gün, zirve kategori
- **📆 Takvim**: ay görünümü ısı haritası
- **🔎 Masraf analizi**: açıklamaları okuyup tekrar edenleri gruplar, tema çıkarır (☕ kahve, 💍 takı, 🏛️ mekan, 📸 fotoğraf...), sık geçen kelimeleri sayar. Tamamen telefonda çalışır
- **🏅 Karne**: defterin şık özet kartı, ekran görüntüsü alıp saklayın
- **✨ Rewind**: başlıktaki ✨ → kaydırmalı hikâye (toplam, günlük ritim, en yüklü gün, kategori şampiyonu, ortak kasa, en pahalı an, tekrar edenler, temalar, kelimeler, rozetler). Son kartta **🌍 Tüm zamanlar** — bütün defterler birleşik
- **🎨 Tema**: 🌊 Deniz, 🌅 Gün batımı, 💜 Lavanta, 🌙 Gece (her telefon kendi seçer)

### Güvenlik ve yedek

- **📴 Çevrimdışı**: internet yokken girilenler kuyruğa alınır, bağlantı gelince otomatik gönderilir
- **💾 Yedekle**: tüm defterleri JSON olarak indirir — her önemli dönem sonunda bir yedek alın
- **📥 Geri yükle**: yedek dosyasını seçin, özet + çift onay sonrası yüklenir

İyi kullanımlar 💸
