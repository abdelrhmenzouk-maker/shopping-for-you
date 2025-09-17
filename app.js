// Lightweight JS for language detection, bilingual texts, and simple interactions.
// Default language is detected from browser (navigator.language). User can toggle via button.

const texts = {
  en: {
    siteTitle: 'Shopping for you',
    tagline: 'Curated home products',
    kicker: "TODAY'S PICKS",
    heroTitle: 'Handpicked items to brighten your home',
    heroSub: 'High-quality home goods with fast delivery and elegant design.',
    shopNow: 'Shop Now',
    offers: 'Offers',
    features: ['Free shipping','Easy Returns','24/7 Support'],
    productsTitle: 'Products',
    emptyText: 'No products yet — add your products to this section.',
    emptyHelp: 'Edit the site files to add products.',
    contact: 'Contact: 01555366643',
    contactBtn: 'Contact'
  },
  ar: {
    siteTitle: 'منتجاتنا لأجلك',
    tagline: 'متجر إلكتروني مبهِر',
    kicker: 'عروض اليوم',
    heroTitle: 'منتجات مميزة لتجميل منزلك',
    heroSub: 'منتجات منزلية عالية الجودة مع توصيل سريع وإطلالة فاخرة.',
    shopNow: 'تسوّق الآن',
    offers: 'العروض',
    features: ['شحن مجاني','إرجاع سهل','دعم 24/7'],
    productsTitle: 'المنتجات',
    emptyText: 'لا توجد منتجات بعد — أضف منتجاتك في هذا القسم.',
    emptyHelp: 'حرِّر الملفات على GitHub لإضافة المنتجات.',
    contact: 'التواصل: 01555366643',
    contactBtn: 'تواصل'
  }
};

function detectLanguage(){
  try{
    const lang = navigator.language || navigator.userLanguage || 'en';
    if(lang.startsWith('ar')) return 'ar';
    return 'en';
  }catch(e){return 'en'}
}

let lang = detectLanguage();

function setDir(){
  document.documentElement.lang = (lang==='ar' ? 'ar' : 'en');
  document.documentElement.dir = (lang==='ar' ? 'rtl' : 'ltr');
}

function applyTexts(){
  const t = texts[lang];
  document.getElementById('site-title').textContent = t.siteTitle;
  document.getElementById('tagline').textContent = t.tagline;
  document.getElementById('kicker').textContent = t.kicker;
  document.getElementById('hero-title').textContent = t.heroTitle;
  document.getElementById('hero-sub').textContent = t.heroSub;
  document.getElementById('shop-now').textContent = t.shopNow;
  document.getElementById('offers-btn').textContent = t.offers;
  document.getElementById('products-title').textContent = t.productsTitle;
  document.getElementById('empty-text').textContent = t.emptyText;
  document.getElementById('empty-help').textContent = t.emptyHelp;
  document.getElementById('footer-title').textContent = t.siteTitle;
  document.getElementById('footer-contact').textContent = t.contact;
  document.getElementById('contact-btn').textContent = t.contactBtn;
  // features
  document.getElementById('f1-title').textContent = t.features[0];
  document.getElementById('f1-sub').textContent = lang==='ar' ? 'للطلبات فوق 2000 جنيه' : 'Orders over 2000 EGP';
  document.getElementById('f2-title').textContent = t.features[1];
  document.getElementById('f3-title').textContent = t.features[2];
  // lang toggle label
  document.getElementById('lang-toggle').textContent = (lang==='en' ? 'العربية' : 'English');
}

function init(){
  setDir();
  applyTexts();

  document.getElementById('lang-toggle').addEventListener('click', ()=>{
    lang = (lang==='en' ? 'ar' : 'en');
    setDir();
    applyTexts();
    // small animation for transition
    document.querySelector('.hero-inner').classList.remove('appear');
    void document.querySelector('.hero-inner').offsetWidth;
    document.querySelector('.hero-inner').classList.add('appear');
  });

  document.getElementById('shop-now').addEventListener('click', ()=>{
    const el = document.getElementById('products');
    if(el) el.scrollIntoView({behavior:'smooth'});
  });

  document.getElementById('contact-btn').addEventListener('click', ()=>{
    alert(texts[lang].contact);
  });
}

document.addEventListener('DOMContentLoaded', init);
