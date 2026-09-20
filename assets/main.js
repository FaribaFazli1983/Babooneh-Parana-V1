/**
 * Iranian Botanical Editorial System
 * Zagros Botanicals - گیاه‌خانه زاگرس
 * Deployment-ready Vanilla JavaScript (Zero Build, Zero Dependency)
 */

// Global Configuration
const TELEGRAM_CONFIG = {
  username: "zagros_botanicals", // Telegram Handle
  phone: "+989123456789",
  channel: "https://t.me/zagros_botanicals",
};

// Persian Digits Formatter
function toPersianDigits(n) {
  if (n === null || n === undefined) return "";
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return n
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, "،")
    .replace(/\d/g, (x) => farsiDigits[x]);
}

// 12 Authentic Iranian Botanical Products
const BOTANICAL_PRODUCTS = [
  {
    id: "chamomile-zagros",
    title: "بابونه وحشی زاگرس",
    subtitle: "Wild Mountain Chamomile",
    category: "tea",
    categoryLabel: "دمنوش‌های کوهی",
    price: 185000,
    weight: "بسته‌بندی دست‌چین ۱۰۰ گرمی",
    origin: "ارتفاعات ۲۲۰۰ متری دنا و کهگیلویه",
    vintage: "برداشت بهاره ۱۴۰۳",
    badge: "برداشت وحشی",
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=700&q=80",
    description: "گل‌های خالص و دست‌چین بابونه کوهی خشک‌شده در سایه، سرشار از آپی‌ژنین طبیعی برای تسکین اعصاب، بهبود خواب عمیق و رفع التهاب‌های گوارشی.",
    benefits: ["آرام‌بخش عمیق سیستم عصبی", "تسکین دردهای گوارشی و نفخ معده", "ضدالتهاب طبیعی پوست و مخاط"],
    brewing: "یک قاشق غذاخوری در آب ۸۵ درجه به مدت ۸ الی ۱۰ دقیقه دم بکشد."
  },
  {
    id: "saffron-ghohestan",
    title: "زعفران سوپر نگین اعلای قائنات",
    subtitle: "Royal Super Negin Saffron",
    category: "saffron",
    categoryLabel: "زعفران و ادویه",
    price: 640000,
    weight: "مثقال خالص (۴.۶۰۸ گرم) در قوطی کریستال",
    origin: "قائنات، خراسان جنوبی - مزارع ارگانیک",
    vintage: "نوبرانه پاییز ۱۴۰۳",
    badge: "نشان زرین اصالت",
    image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=700&q=80",
    description: "رشته‌های درشت و یکدست سرگل سوپر نگین با بالاترین درصد کروسین و پیکروکروسین آزمایشگاهی. بدون شکستگی، معطر به عطر اصیل خاورمیانه.",
    benefits: ["شادی‌بخش و تقویت‌کننده قلب", "بهبود خلق و خو و تمرکز ذهنی", "سرشار از آنتی‌اکسیدان‌های کمیاب"],
    brewing: "سایش آرام با یخ یا دم‌آوری در قوری چینی با حرارت ملایم."
  },
  {
    id: "rosewater-ghamsar",
    title: "گلاب سنتی دوآتشه قمصر کاشان",
    subtitle: "Double-Distilled Rosewater",
    category: "rosewater",
    categoryLabel: "عرقیات و عصاره‌ها",
    price: 240000,
    weight: "بطری شیشه‌ای تیره ۷۵۰ میلی‌لیتر",
    origin: "روستای قمصر، کاشان - دیگ‌های سنتی مسی",
    vintage: "اردیبهشت ۱۴۰۳",
    badge: "تقطیر دوآتشه خالص",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=700&q=80",
    description: "حاصل تقطیر مجدد گلاب سنگین بر روی گل‌های تازه محمدی دست‌چین سحرگاهی؛ دارای لایه‌ای غنی از اسانس روغنی معطر با خلوص صددرصدی.",
    benefits: ["تقویت قلب و آرامش‌بخش روان", "تونر طبیعی و آب‌رسان عمیق پوست", "تعدیل حرارت کبد و نشاط‌بخش"],
    brewing: "افزودن چند قاشق به چای، شربت زعفران یا مصرف به عنوان تونر طبیعی صورت."
  },
  {
    id: "lavender-dena",
    title: "اسطوخودوس کوهپایه‌ای دنا",
    subtitle: "Highland Wild Lavender",
    category: "tea",
    categoryLabel: "دمنوش‌های کوهی",
    price: 195000,
    weight: "بسته‌بندی تنفسی ۱۲۰ گرمی",
    origin: "دامنه‌های صخره‌ای زاگرس جنوبی",
    vintage: "برداشت تابستان ۱۴۰۳",
    badge: "اسانس‌سنجی عالی",
    image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=700&q=80",
    description: "خوشه‌های مخملی لاوندر کوهی با عطر نافذ و تلخی دلنشین؛ جاروب‌کننده مغز (معروف در طب سینوی به جاروب فضولات فکری) و رفع خستگی مفرط.",
    benefits: ["درمان سردردهای عصبی و میگرن", "تسکین استرس و تنش عضلانی", "پاکسازی مجاری تنفسی"],
    brewing: "یک قاشق مرباخوری همراه با کمی عسل طبیعی در فنجان آب جوش."
  },
  {
    id: "thyme-shiraz",
    title: "آویشن باریک کوهی شیراز",
    subtitle: "Shirazi Mountain Wild Thyme",
    category: "tea",
    categoryLabel: "دمنوش‌های کوهی",
    price: 170000,
    weight: "بسته‌بندی پاکت کرافت ۱۵۰ گرمی",
    origin: "ارتفاعات کوه‌سفید فارس",
    vintage: "برداشت بهار ۱۴۰۳",
    badge: "تیمول بالای ۴.۵٪",
    image: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&w=700&q=80",
    description: "برگ‌های پرزدار و معطر آویشن شیرازی وحشی، حاوی بالاترین مقدار ترکیبات فنلی تیمول جهت محافظت در برابر سرماخوردگی و تقویت تنفس.",
    benefits: ["ضدعفونی‌کننده قوی ریه و گلو", "تقویت هاضمه و رفع سردی معده", "مسکن طبیعی سرفه و خلط‌آور"],
    brewing: "دم‌کردن یک قاشق غذاخوری به مدت ۱۰ دقیقه همراه با لیموعمانی یا عسل."
  },
  {
    id: "malva-flower",
    title: "گل پنیرک وحشی (خطمی بنفش)",
    subtitle: "Purple Wild Malva Blossoms",
    category: "tea",
    categoryLabel: "دمنوش‌های کوهی",
    price: 160000,
    weight: "بسته‌بندی ۸۰ گرمی در پاکت محافظ نور",
    origin: "دشت‌های سرسبز لرستان",
    vintage: "برداشت اردیبهشت ۱۴۰۳",
    badge: "موسیلاژ صددرصد",
    image: "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=700&q=80",
    description: "گلبرگ‌های نیلی رنگ پنیرک وحشی سرشار از لعاب گیاهی محافظ؛ نرم‌کننده سینه و گلودرد و دارای خواص شگفت‌انگیز خنک‌کننده کبد.",
    benefits: ["نرم‌کننده مخاط گلو و تسکین تارهای صوتی", "بهبود عفونت‌های ادراری و کلیه", "آرام‌بخش سرفه‌های خشک"],
    brewing: "خیساندن در آب سرد یا نیمه‌گرم برای حفظ رنگ شگفت‌انگیز فیروزه‌ای."
  },
  {
    id: "bitter-almond-oil",
    title: "روغن بادام تلخ وحشی دست‌فشار",
    subtitle: "Cold-Pressed Bitter Almond Oil",
    category: "oil",
    categoryLabel: "روغن‌ها و ضمادها",
    price: 280000,
    weight: "شیشه قطره‌چکانی ۶۰ میلی‌لیتر",
    origin: "بادام‌زار‌های دیم سمیرم",
    vintage: "پرس سرد شهریور ۱۴۰۳",
    badge: "روغن‌گیری سنتی سنگی",
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=700&q=80",
    description: "استخراج شده به روش پرس سرد از مغز بادام‌های تلخ کوهی بدون افزودنی یا حرارت‌دهی؛ اکسیر باستانی برای رفع لکه‌های پوستی و تقویت ریشه مو.",
    benefits: ["رفع چین‌وچروک و لکه‌های تیره صورت", "درمان دردهای مفصلی و رماتیسمی", "تقویت ابرو و جلوگیری از ریزش مو"],
    brewing: "مصرف موضعی چند قطره روی موضع ماساژ داده شود (غیر خوراکی)."
  },
  {
    id: "borage-alamut",
    title: "گل گاوزبان اعلای الموت قزوین",
    subtitle: "Alamut Persian Borage Blossoms",
    category: "tea",
    categoryLabel: "دمنوش‌های کوهی",
    price: 215000,
    weight: "بسته ۱۰۰ گرمی گل‌های یکدست بنفش",
    origin: "کوه‌های مه‌آلود الموت و اشکورات",
    vintage: "برداشت خرداد ۱۴۰۳",
    badge: "گل‌های بدون چوب",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=80",
    description: "گلبرگ‌های درشت بنفش تیره گل گاوزبان اصل ایرانی؛ مقوی قلب، دفع‌کننده سودا و غم، و آرامش‌بخش شبانه با لیموعمانی.",
    benefits: ["تصفیه خون و نشاط قلب", "کاهش اضطراب و تپش قلب عصبی", "تقویت کلیه‌ها و آرامش اعصاب"],
    brewing: "دم‌کردن ۵ گرم گل گاوزبان همراه با یک پر لیموعمانی در آب جوش به مدت ۱۵ دقیقه."
  },
  {
    id: "frankincense-resin",
    title: "صمغ کندر طبیعی نر (خوراکی)",
    subtitle: "Premium Edible Frankincense Resin",
    category: "resin",
    categoryLabel: "صمغ و بذرها",
    price: 190000,
    weight: "بسته شیشه‌ای ۱۰۰ گرمی دانه‌های بلورین",
    origin: "رویشگاه‌های اصیل صمغی",
    vintage: "واردات مستقیم آزمایش‌شده ۱۴۰۳",
    badge: "خلوص گرید دارویی",
    image: "https://images.unsplash.com/photo-1546554137-f86b9593a222?auto=format&fit=crop&w=700&q=80",
    description: "اشک‌های صمغی بلورین و شفاف کندر طبیعی، معروف به تقویت حافظه، استحکام دندان‌ها و کاهش التهاب‌های مزمن دستگاه گوارش.",
    benefits: ["تقویت فوق‌العاده حافظه و تمرکز", "ضدالتهاب گوارشی و مفاصل", "خوشبوکننده دهان و ضدباکتری لثه"],
    brewing: "جویدن مانند آدامس یا خیساندن یک دانه در آب شب تا صبح ناشتا."
  },
  {
    id: "chahar-bagh-blend",
    title: "دمنوش سلطنتی چهارباغ زاگرس",
    subtitle: "Chahar Bagh Royal Botanical Blend",
    category: "tea",
    categoryLabel: "دمنوش‌های کوهی",
    price: 260000,
    weight: "بسته‌بندی هدیه ۱۵۰ گرمی مخملین",
    origin: "ترکیب تخصصی گیاه‌خانه زاگرس",
    vintage: "فرمول انحصاری عطاری",
    badge: "فرمول اختصاصی آرامش",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=700&q=80",
    description: "هارمونی کم‌نظیر از برگ‌های بادرنجبویه لیمویی، شکوفه بهارنارنج شیراز، اسطوخودوس زاگرس و رشته‌های زعفران اصیل. رایحه‌ای بهشتی و آرامشی سلطنتی.",
    benefits: ["خواب عمیق و بدون بیداری شبانه", "تسکین کامل تنش‌های فکری کاری", "تقویت انرژی مثبت و سلامت گوارش"],
    brewing: "یک قاشق در فرنچ‌پرس یا قوری دمنوش با آب ۸۰ درجه به مدت ۷ دقیقه."
  },
  {
    id: "orange-blossom",
    title: "بهارنارنج معطر باغ‌های شیراز",
    subtitle: "Fragrant Shiraz Bitter Orange Blossoms",
    category: "rosewater",
    categoryLabel: "عرقیات و عصاره‌ها",
    price: 175000,
    weight: "بسته ۱۰۰ گرمی غنچه‌های خشک‌شده در سایه",
    origin: "باغ‌های دلگشا و ارم، شیراز",
    vintage: "برداشت فروردین ۱۴۰۳",
    badge: "عطر پایدار و اصیل",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=700&q=80",
    description: "شکوفه‌های معطر درخت نارنج، چیده شده در طلوع آفتاب شیراز و خشک‌شده در کوران باد خنک سایه؛ آرام‌بخش مقوی قلب و تسکین بی‌خوابی.",
    benefits: ["آرامش اعصاب و رفع تپش نامنظم قلب", "خواب‌آور ملایم و نشاط‌آور", "بهبود اسپاسم‌های عصبی شکم"],
    brewing: "افزودن چند پر شکوفه به چای سیاه یا دم‌آوری مستقل با کمی عسل."
  },
  {
    id: "peppermint-hydrosol",
    title: "عرق نعناع فلفلی سنتی دوآتشه",
    subtitle: "Organic Peppermint Hydrosol",
    category: "rosewater",
    categoryLabel: "عرقیات و عصاره‌ها",
    price: 155000,
    weight: "بطری ۱ لیتری سنتی با پلمپ مومی",
    origin: "مزارع گیاهان معطر قمصر",
    vintage: "برداشت تابستان ۱۴۰۳",
    badge: "غلظت فوق‌العاده بالا",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=700&q=80",
    description: "تقطیر سنتی برگ‌های تازه نعناع فلفلی ایرانی؛ هاضم فوری غذاهای سنگین، دفع‌کننده گاز روده و نشاط‌بخش خنکای گلو و معده.",
    benefits: ["رفع فوری نفخ، سنگینی و ترش کردن معده", "ضدتهوع و تسکین دل‌پیچه", "خنک‌کننده کبد در روزهای گرم"],
    brewing: "نصف استکان بعد از وعده‌های غذایی یا مخلوط با آب و سکنجبین."
  }
];

// Shopping Cart State Handler
class CartManager {
  constructor() {
    this.storageKey = "zagros_botanical_cart_v1";
    this.cart = this.loadCart();
    this.initListeners();
    this.updateUI();
  }

  loadCart() {
    try {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Failed to parse cart storage:", e);
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.cart));
    } catch (e) {
      console.error("Failed to save cart storage:", e);
    }
    this.updateUI();
  }

  addItem(product, qty = 1) {
    const existing = this.cart.find((item) => item.id === product.id);
    if (existing) {
      existing.quantity += qty;
    } else {
      this.cart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        weight: product.weight,
        image: product.image,
        origin: product.origin,
        quantity: qty
      });
    }
    this.saveCart();
    showToast(`«${product.title}» به سبد سفارش اضافه شد.`);
    this.openDrawer();
  }

  updateQuantity(id, delta) {
    const item = this.cart.find((i) => i.id === id);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) {
      this.cart = this.cart.filter((i) => i.id !== id);
    }
    this.saveCart();
  }

  removeItem(id) {
    this.cart = this.cart.filter((i) => i.id !== id);
    this.saveCart();
    showToast("محصول از سبد خرید حذف شد.");
  }

  clear() {
    this.cart = [];
    this.saveCart();
  }

  getTotalCount() {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  getTotalPrice() {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  updateUI() {
    const badges = document.querySelectorAll(".nav-cart-badge, .cart-counter-badge");
    const count = this.getTotalCount();
    badges.forEach((badge) => {
      badge.textContent = toPersianDigits(count);
      badge.style.display = count > 0 ? "inline-flex" : "none";
    });

    const itemsContainer = document.getElementById("cartItemsContainer");
    const subtotalEl = document.getElementById("cartSubtotalAmount");
    const checkoutBtn = document.getElementById("cartTelegramCheckoutBtn");

    if (subtotalEl) {
      subtotalEl.textContent = toPersianDigits(this.getTotalPrice()) + " تومان";
    }

    if (itemsContainer) {
      if (this.cart.length === 0) {
        itemsContainer.innerHTML = `
          <div style="text-align: center; padding: 3rem 1rem; color: var(--on-surface-variant);">
            <div style="font-size: 2.5rem; margin-bottom: 0.75rem; opacity: 0.6;">🌿</div>
            <p style="font-weight: 600; font-size: 1rem; margin-bottom: 0.25rem;">سبد سفارش شما خالی است</p>
            <p style="font-size: 0.8125rem;">گیاهان دارویی و دمنوش‌های اصیل زاگرس را به سبد خود اضافه کنید.</p>
          </div>
        `;
        if (checkoutBtn) checkoutBtn.style.display = "none";
      } else {
        if (checkoutBtn) checkoutBtn.style.display = "inline-flex";
        itemsContainer.innerHTML = this.cart
          .map(
            (item) => `
          <div class="cart-item">
            <img src="${item.image}" alt="${item.title}" loading="lazy" />
            <div class="cart-item-details">
              <h5>${item.title}</h5>
              <div class="cart-item-price">${toPersianDigits(item.price)} تومان</div>
              <div style="font-size: 0.7rem; color: var(--olive); margin-top: 2px;">${item.weight}</div>
            </div>
            <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 0.35rem;">
              <div class="cart-item-qty">
                <button type="button" class="qty-btn" onclick="window.appCart.updateQuantity('${item.id}', 1)" title="افزایش">+</button>
                <span class="qty-count">${toPersianDigits(item.quantity)}</span>
                <button type="button" class="qty-btn" onclick="window.appCart.updateQuantity('${item.id}', -1)" title="کاهش">-</button>
              </div>
              <button type="button" onclick="window.appCart.removeItem('${item.id}')" style="background:none; border:none; color: #ba1a1a; font-size: 0.72rem; cursor:pointer; font-family: inherit;">حذف</button>
            </div>
          </div>
        `
          )
          .join("");
      }
    }
  }

  openDrawer() {
    const drawer = document.getElementById("cartDrawer");
    const overlay = document.getElementById("cartDrawerOverlay");
    if (drawer && overlay) {
      drawer.classList.add("active");
      overlay.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  closeDrawer() {
    const drawer = document.getElementById("cartDrawer");
    const overlay = document.getElementById("cartDrawerOverlay");
    if (drawer && overlay) {
      drawer.classList.remove("active");
      overlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  generateTelegramOrderText(customerName = "", customerCity = "", customerPhone = "") {
    if (this.cart.length === 0) return "";
    let message = `سلام و درود بر گیاه‌خانه زاگرس 🌱\n`;
    message += `درخواست ثبت سفارش محصولات گیاهی و ارگانیک دارم:\n\n`;
    message += `📋 لیست اقلام درخواستی:\n`;
    this.cart.forEach((item, index) => {
      message += `${index + 1}. ${item.title} (${item.weight})\n`;
      message += `   تعداد: ${item.quantity} عدد | فی: ${item.price.toLocaleString("fa-IR")} تومان\n`;
    });
    message += `\n💰 جمع کل اقلام: ${this.getTotalPrice().toLocaleString("fa-IR")} تومان\n`;
    if (customerName || customerCity || customerPhone) {
      message += `\n👤 مشخصات تحویل‌گیرنده:\n`;
      if (customerName) message += `نام: ${customerName}\n`;
      if (customerCity) message += `شهر / نشانی: ${customerCity}\n`;
      if (customerPhone) message += `تماس: ${customerPhone}\n`;
    }
    message += `\nلطفاً شماره کارت و هزینه ارسال پیشتاز را جهت پرداخت نهایی ارسال بفرمایید. سپاسگزارم.`;
    return encodeURIComponent(message);
  }

  checkoutToTelegram() {
    if (this.cart.length === 0) {
      showToast("سبد سفارش شما خالی است!");
      return;
    }
    const text = this.generateTelegramOrderText();
    const url = `https://t.me/${TELEGRAM_CONFIG.username}?text=${text}`;
    window.open(url, "_blank");
  }

  initListeners() {
    const openBtns = document.querySelectorAll(".open-cart-btn");
    openBtns.forEach((btn) => {
      btn.addEventListener("click", () => this.openDrawer());
    });

    const closeBtn = document.getElementById("cartCloseBtn");
    const overlay = document.getElementById("cartDrawerOverlay");
    if (closeBtn) closeBtn.addEventListener("click", () => this.closeDrawer());
    if (overlay) overlay.addEventListener("click", () => this.closeDrawer());

    const checkoutBtn = document.getElementById("cartTelegramCheckoutBtn");
    if (checkoutBtn) {
      checkoutBtn.addEventListener("click", () => this.checkoutToTelegram());
    }
  }
}

// Single Product Direct Telegram Link
function orderProductOnTelegram(productId) {
  const prod = BOTANICAL_PRODUCTS.find((p) => p.id === productId);
  if (!prod) return;
  const msg = `سلام و احترام،\nمتقاضی خرید این محصول از گیاه‌خانه زاگرس هستم:\n🌿 ${prod.title}\n📦 ${prod.weight}\n💰 مبلغ: ${prod.price.toLocaleString("fa-IR")} تومان\n📍 خاستگاه: ${prod.origin}\n\nلطفاً اطلاعات شماره کارت و شرایط ارسال را اعلام فرمایید. سپاسگزارم.`;
  const url = `https://t.me/${TELEGRAM_CONFIG.username}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

// Toast Notification System
function showToast(message) {
  let container = document.getElementById("toastContainer");
  if (!container) {
    container = document.createElement("div");
    container.id = "toastContainer";
    container.className = "toast-container";
    document.body.appendChild(container);
  }
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>🌱</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Product Details Modal
function openProductModal(productId) {
  const p = BOTANICAL_PRODUCTS.find((prod) => prod.id === productId);
  if (!p) return;

  let modalOverlay = document.getElementById("productModalOverlay");
  if (!modalOverlay) {
    modalOverlay = document.createElement("div");
    modalOverlay.id = "productModalOverlay";
    modalOverlay.className = "modal-overlay";
    document.body.appendChild(modalOverlay);
  }

  modalOverlay.innerHTML = `
    <div class="modal-box">
      <button class="modal-close-btn" onclick="closeProductModal()" aria-label="بستن">✕</button>
      <div class="modal-body">
        <div style="display:flex; flex-direction:column; gap:1rem;">
          <div style="border-radius: var(--radius-xl); overflow:hidden; aspect-ratio:1/1; background:#e0ded9;">
            <img src="${p.image}" alt="${p.title}" style="width:100%; height:100%; object-fit:cover;" />
          </div>
          <div style="display:flex; flex-wrap:wrap; gap:0.5rem;">
            <span class="origin-seal">${p.vintage}</span>
            <span class="origin-seal origin-seal-olive">${p.badge}</span>
          </div>
        </div>
        <div style="display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <div style="font-size:0.75rem; color:var(--olive); font-weight:600; margin-bottom:0.25rem;">
              خاستگاه: ${p.origin}
            </div>
            <h2 style="font-size:1.5rem; color:var(--primary); margin-bottom:0.25rem;">${p.title}</h2>
            <div style="font-family: var(--font-latin); font-size:0.8rem; color:var(--on-surface-variant); margin-bottom:1rem;">
              ${p.subtitle}
            </div>
            <p style="font-size:0.925rem; color:var(--on-surface); line-height:1.8; margin-bottom:1.25rem;">
              ${p.description}
            </p>

            <div style="background:var(--surface-low); border:1px solid var(--border-hairline); border-radius:var(--radius-lg); padding:1rem; margin-bottom:1.25rem;">
              <h5 style="font-size:0.85rem; color:var(--primary); margin-bottom:0.5rem; font-weight:700;">خواص و کاربردهای سنتی:</h5>
              <ul style="list-style:none; display:flex; flex-direction:column; gap:0.35rem; font-size:0.8125rem; color:var(--on-surface-variant);">
                ${p.benefits.map((b) => `<li>• ${b}</li>`).join("")}
              </ul>
            </div>

            <div style="font-size:0.8125rem; color:var(--on-surface-variant); margin-bottom:1.5rem;">
              <strong>دستور مصرف / دم‌آوری:</strong> ${p.brewing}
            </div>
          </div>

          <div style="padding-top:1rem; border-top:1px solid var(--border-hairline); display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:1rem;">
            <div>
              <span style="font-size:0.75rem; color:var(--on-surface-variant); display:block;">بسته‌بندی: ${p.weight}</span>
              <span style="font-size:1.35rem; font-weight:800; color:var(--primary);">${toPersianDigits(p.price)} تومان</span>
            </div>
            <div style="display:flex; gap:0.5rem;">
              <button type="button" class="btn btn-secondary btn-sm" onclick="window.appCart.addItem(BOTANICAL_PRODUCTS.find(x => x.id === '${p.id}')); closeProductModal();">
                افزودن به سبد
              </button>
              <button type="button" class="btn btn-telegram btn-sm" onclick="orderProductOnTelegram('${p.id}')">
                سفارش تلگرام
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeProductModal();
  });
}

function closeProductModal() {
  const modalOverlay = document.getElementById("productModalOverlay");
  if (modalOverlay) {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Render Product Cards Helper
function renderProductCard(p) {
  return `
    <article class="product-card" data-category="${p.category}" id="product-${p.id}">
      <div class="product-badge-group">
        <span class="badge-tag">${p.vintage}</span>
        <span class="badge-tag badge-saffron">${p.badge}</span>
      </div>
      <div class="product-image-box" onclick="openProductModal('${p.id}')" style="cursor:pointer;" title="مشاهده جزئیات">
        <img src="${p.image}" alt="${p.title}" loading="lazy" />
      </div>
      <div class="product-info-box">
        <div class="product-origin-label">
          <span>📍</span>
          <span>${p.origin}</span>
        </div>
        <h3 class="product-title" onclick="openProductModal('${p.id}')" style="cursor:pointer;">${p.title}</h3>
        <p class="product-desc">${p.description}</p>
        
        <div class="product-meta-row">
          <div class="product-price-box">
            <span class="price-unit">${p.weight}</span>
            <span class="price-amount">${toPersianDigits(p.price)} تومان</span>
          </div>
        </div>

        <div class="product-actions-row">
          <button type="button" class="btn-add-cart" onclick="window.appCart.addItem(BOTANICAL_PRODUCTS.find(x => x.id === '${p.id}'))">
            <span>+</span>
            <span>افزودن به سبد</span>
          </button>
          <button type="button" class="btn-telegram-icon" onclick="orderProductOnTelegram('${p.id}')" title="سفارش مستقیم در تلگرام">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
            </svg>
          </button>
        </div>
      </div>
    </article>
  `;
}

// Catalog Filtering & Search
function initCatalogPage() {
  const container = document.getElementById("catalogProductsGrid");
  const searchInput = document.getElementById("catalogSearchInput");
  const sortSelect = document.getElementById("catalogSortSelect");
  const filterChips = document.querySelectorAll(".filter-chip");
  const countIndicator = document.getElementById("catalogResultCount");

  if (!container) return;

  let currentCategory = "all";
  let searchQuery = "";
  let currentSort = "featured";

  function updateCatalog() {
    let filtered = BOTANICAL_PRODUCTS.filter((p) => {
      const matchCat = currentCategory === "all" || p.category === currentCategory;
      const matchSearch =
        !searchQuery ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.origin.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchSearch;
    });

    if (currentSort === "price-asc") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === "price-desc") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (currentSort === "name") {
      filtered.sort((a, b) => a.title.localeCompare(b.title, "fa"));
    }

    if (countIndicator) {
      countIndicator.textContent = `نمایش ${toPersianDigits(filtered.length)} گیاه دارویی`;
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: var(--surface-low); border-radius: var(--radius-xl); border: 1px dashed var(--border-hairline);">
          <div style="font-size: 3rem; margin-bottom: 0.5rem; opacity: 0.7;">🔍</div>
          <h4 style="color: var(--primary); margin-bottom: 0.5rem;">محصولی با این مشخصات یافت نشد</h4>
          <p style="font-size: 0.875rem; color: var(--on-surface-variant);">لطفاً کلمات کلیدی دیگری را جستجو کرده یا فیلتر دسته‌بندی را تغییر دهید.</p>
        </div>
      `;
    } else {
      container.innerHTML = filtered.map(renderProductCard).join("");
    }
  }

  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      filterChips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      currentCategory = chip.dataset.category || "all";
      updateCatalog();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      updateCatalog();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      updateCatalog();
    });
  }

  // Initial render
  updateCatalog();
}

// Contact Page Telegram Consultation Wizard
function initContactPage() {
  const wizardForm = document.getElementById("telegramConsultationForm");
  if (!wizardForm) return;

  wizardForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("consultName")?.value.trim() || "";
    const phone = document.getElementById("consultPhone")?.value.trim() || "";
    const goalChecked = document.querySelectorAll('input[name="consultGoal"]:checked');
    const notes = document.getElementById("consultNotes")?.value.trim() || "";

    const selectedGoals = Array.from(goalChecked).map((el) => el.value);

    let text = `سلام و درود بر کارشناس گیاه‌پزشکی زاگرس 🌱\n`;
    text += `درخواست مشاوره تخصصی گیاهی و تجویز دمنوش دارم:\n\n`;
    if (name) text += `👤 نام و نام‌خانوادگی: ${name}\n`;
    if (phone) text += `📱 شماره تماس: ${phone}\n`;
    if (selectedGoals.length > 0) {
      text += `🎯 اهداف و نیازهای گیاهی:\n`;
      selectedGoals.forEach((g) => (text += `• ${g}\n`));
    }
    if (notes) {
      text += `\n📝 شرح علائم یا درخواست ویژه:\n${notes}\n`;
    }
    text += `\nلطفاً در خصوص بهترین ترکیب دارویی و طریقه سفارش راهنمایی بفرمایید. با تشکر.`;

    const url = `https://t.me/${TELEGRAM_CONFIG.username}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    showToast("در حال انتقال به تلگرام جهت ارسال پیام مشاوره...");
  });
}

// Mobile Menu Toggle
function initMobileMenu() {
  const toggleBtn = document.getElementById("mobileMenuToggle");
  const drawer = document.getElementById("mobileNavDrawer");
  if (toggleBtn && drawer) {
    toggleBtn.addEventListener("click", () => {
      drawer.classList.toggle("active");
    });
  }
}

// DOM Ready Initialization
document.addEventListener("DOMContentLoaded", () => {
  window.appCart = new CartManager();
  initCatalogPage();
  initContactPage();
  initMobileMenu();

  // Highlight active link in navigation
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach((link) => {
    const href = link.getAttribute("href") || "";
    if (href === currentPath || (currentPath === "" && href === "index.html")) {
      link.classList.add("active");
    }
  });
});
