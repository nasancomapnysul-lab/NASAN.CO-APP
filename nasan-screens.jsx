/* Nasan — professional phone-repair tools & equipment store.
   Brands: Yaxun, RF4, YYD, Relife, Quick, Flycdi, Aida, Sunshine, Aifen, Yihua, Aixun.
   Palette from the Nasan logo. Product art is a placeholder silhouette — swap for
   real product photography when available. */

const LANGS = [
  ['en', 'English', 'English'],
  ['ku', 'کوردی', 'Kurdish Sorani'],
  ['ar', 'العربية', 'Arabic'],
];

const STR = {
  shop: ['Shop', 'بازاڕ', 'المتجر'],
  brands: ['Brands', 'براندەکان', 'العلامات'],
  search: ['Search', 'گەڕان', 'بحث'],
  orders: ['Orders', 'داواکارییەکان', 'الطلبات'],
  you: ['You', 'تۆ', 'حسابك'],
  lcd: ['LCD', 'شاشە', 'الشاشات'],
  lcdTitle: ['LCD compatibility', 'گونجانی شاشە', 'توافق الشاشات'],
  lcdLead: ['Type a phone model to see every model that takes the same screen.', 'ناوی مۆبایلێک بنووسە بۆ بینینی هەموو ئەو مۆدێلانەی هەمان شاشەیان هەیە.', 'اكتب موديل الهاتف لترى كل الموديلات التي تستخدم نفس الشاشة.'],
  lcdPlaceholder: ['e.g. Redmi 9A', 'بۆ نموونە Redmi 9A', 'مثال Redmi 9A'],
  lcdSameAs: ['Same screen as', 'هەمان شاشەی', 'نفس شاشة'],
  lcdModels: ['models', 'مۆدێل', 'موديلات'],
  lcdNone: ['No match yet. Ask us and we will check it for you.', 'هێشتا نەدۆزرایەوە. پرسیارمان لێ بکە بۆت دەپشکنین.', 'لا توجد نتيجة. اسألنا وسنتحقق لك.'],
  lcdAsk: ['Ask nasan for this screen', 'داوای ئەم شاشەیە لە نەسەن بکە', 'اطلب هذه الشاشة من نسان'],
  lcdAskMsg: ['Hello nasan Company, do you have this LCD screen in stock?', 'سڵاو کۆمپانیای نەسەن، ئەم شاشەیەتان هەیە؟', 'مرحباً شركة نسان، هل تتوفر لديكم هذه الشاشة؟'],
  lcdNote: ['Always check the connector and frame before fitting.', 'پێش دانان هەمیشە کۆنێکتەر و چوارچێوە بپشکنە.', 'تحقق دائماً من الموصل والإطار قبل التركيب.'],
  lcdAll: ['All', 'هەموو', 'الكل'],
  askShort: ['Ask on WhatsApp', 'پرسیار بکە', 'اسأل واتساب'],
  lcdFilter: ['Filter screens', 'فلتەری شاشە', 'تصفية الشاشات'],
  lcdBrand: ['Brand', 'براند', 'العلامة'],
  lcdType: ['Screen type', 'جۆری شاشە', 'نوع الشاشة'],
  lcdQuality: ['Quality', 'کوالیتی', 'الجودة'],
  lcdApply: ['Show results', 'پیشاندانی ئەنجام', 'عرض النتائج'],
  lcdReset: ['Show all', 'هەمووی پیشان بدە', 'عرض الكل'],
  cart: ['Cart', 'سەبەتە', 'السلة'],
  language: ['Language', 'زمان', 'اللغة'],
  aboutUs: ['About nasan Company', 'دەربارەی کۆمپانیای نەسەن', 'عن شركة نسان'],
  locations: ["nasan Company's locations", 'شوێنەکانی کۆمپانیای نەسەن', 'مواقع شركة نسان'],
  contactUs: ['Contact nasan Company', 'پەیوەندی بە نەسەن', 'اتصل بشركة نسان'],
  shopAll: ['Shop all products', 'هەموو بەرهەمەکان', 'كل المنتجات'],
  categories: ['Categories', 'جۆرەکان', 'الفئات'],
  myOrders: ['My orders', 'داواکارییەکانم', 'طلباتي'],
  messageUs: ['Message us', 'پەیام بنێرە', 'راسلنا'],
  refreshing: ['Refreshing…', 'نوێکردنەوە…', 'جارٍ التحديث…'],
  pullRefresh: ['Pull to refresh', 'ڕایبکێشە بۆ نوێکردنەوە', 'اسحب للتحديث'],
  updated: ['Updated just now', 'نوێکرایەوە', 'تم التحديث'],
  brandsWeStock: ['Brands we stock', 'براندەکانمان', 'علاماتنا'],

  /* home */
  heroTitle1: ['Tools for the', 'ئامێر بۆ', 'أدوات لـ'],
  heroTitle2: ['repair bench.', 'مێزی چاککردنەوە.', 'طاولة الإصلاح.'],
  heroLead: ['Soldering stations, microscopes and rework gear from Yaxun, RF4, Aixun and Sunshine. Genuine stock, fast delivery in Sulaymaniyah.',
    'ئامێری لەحیمکردن، مایکرۆسکۆپ و کەرەستەی چاککردنەوە لە یاخسون، RF4، ئایکسون و سەنشاین. کاڵای ڕەسەن، گەیاندنی خێرا لە سلێمانی.',
    'محطات لحام ومجاهر ومعدات إصلاح من Yaxun و RF4 و Aixun و Sunshine. بضاعة أصلية وتوصيل سريع في السليمانية.'],
  newArrival: ['New arrival', 'نوێ گەیشتوو', 'وصل حديثاً'],
  newLcd: ['New LCD', 'شاشەی نوێ', 'شاشة جديدة'],
  lcdFits: ['Fits 5 models', 'بۆ ٥ مۆدێل', 'تناسب ٥ موديلات'],
  viewLcd: ['View LCD', 'بینینی شاشە', 'عرض الشاشة'],
  shopNow: ['Shop now', 'ئێستا بکڕە', 'تسوق الآن'],
  benchEssentials: ['Bench essentials', 'پێداویستی سەرەکی', 'أساسيات الورشة'],
  seeAll: ['See all', 'هەمووی ببینە', 'عرض الكل'],
  shopByBrand: ['Shop by brand', 'بەپێی براند', 'تسوق حسب العلامة'],
  inStock: ['In stock', 'بەردەستە', 'متوفر'],
  viewDetails: ['View details', 'وردەکاری', 'التفاصيل'],
  all: ['All', 'هەموو', 'الكل'],
  All: ['All', 'هەموو', 'الكل'],
  Active: ['Active', 'چالاک', 'نشطة'],
  Past: ['Past', 'پێشوو', 'السابقة'],

  /* categories */
  Soldering: ['Soldering', 'لەحیمکردن', 'لحام'],
  Microscope: ['Microscope', 'مایکرۆسکۆپ', 'مجهر'],
  Power: ['Power supply', 'دابینکەری کارەبا', 'مزود طاقة'],
  'Hot air': ['Hot air', 'هەوای گەرم', 'هواء ساخن'],
  'Hand tools': ['Hand tools', 'ئامێری دەستی', 'أدوات يدوية'],

  /* search */
  searchPlaceholder: ['Search tools, brands, code', 'گەڕان بۆ ئامێر، براند، کۆد', 'ابحث عن أدوات، علامات، رمز'],
  recent: ['Recent', 'دواترین', 'الأخيرة'],
  popularNow: ['Popular right now', 'ئێستا بەناوبانگ', 'الأكثر رواجاً'],
  filters: ['Filters', 'پاڵاوتن', 'التصفية'],
  reset: ['Reset', 'ڕێکخستنەوە', 'إعادة'],
  category: ['Category', 'جۆر', 'الفئة'],
  brand: ['Brand', 'براند', 'العلامة'],
  inStockOnly: ['In stock only', 'تەنها بەردەست', 'المتوفر فقط'],
  showResults: ['Show results', 'ئەنجامەکان پیشان بدە', 'عرض النتائج'],
  clear: ['Clear', 'سڕینەوە', 'مسح'],
  noMatch: ['Nothing matches', 'هیچ نەدۆزرایەوە بۆ', 'لا يوجد تطابق لـ'],
  weWillSource: ['Message us on WhatsApp and we will source it.', 'لە واتساپ پەیامان بۆ بنێرە و بۆت دەهێنین.', 'راسلنا على واتساب وسنوفره لك.'],

  /* brands */
  /* {n} is substituted with BRAND_ROWS.length at render, so the count cannot
     drift when brands are added. Arabic-script languages get Arabic-Indic digits. */
  brandsTitle: ['{n} brands we stock directly.', '{n} براند ڕاستەوخۆ لەلامان.', '{n} علامة نوفرها مباشرة.'],
  brandsLead: ['Genuine equipment only. Ask us on WhatsApp for models not listed.', 'تەنها کەرەستەی ڕەسەن. بۆ مۆدێلی تر لە واتساپ بپرسە.', 'معدات أصلية فقط. اسألنا على واتساب عن الموديلات غير المدرجة.'],
  brandOfMonth: ['Brand of the month', 'براندی مانگ', 'علامة الشهر'],
  allBrands: ['All brands', 'هەموو براندەکان', 'كل العلامات'],
  items: ['items', 'دانە', 'قطعة'],
  askUs: ['Ask us', 'لێمان بپرسە', 'اسألنا'],
  rf4Lead: ['Trinocular microscopes and precision power supplies.', 'مایکرۆسکۆپی سێچاو و سەرچاوەی کارەبای ورد.', 'مجاهر ثلاثية ومصادر طاقة دقيقة.'],
  viewBrand: ['View', 'ببینە', 'عرض'],
  modelsInStock: ['models in stock', 'مۆدێل بەردەستە', 'موديل متوفر'],
  todayAt: ['Today, 10:42', 'ئەمڕۆ، ١٠:٤٢', 'اليوم، ١٠:٤٢'],
  yesterdayAt: ['Yesterday, 16:05', 'دوێنێ، ١٦:٠٥', 'أمس، ١٦:٠٥'],
  allProducts: ['All products', 'هەموو بەرهەمەکان', 'كل المنتجات'],
  products: ['products', 'بەرهەم', 'منتج'],
  product1: ['product', 'بەرهەم', 'منتج'],
  from: ['from', 'لە', 'من'],
  noProducts: ['No products yet. Message us and we will source it.', 'هێشتا بەرهەم نییە. پەیامان بۆ بنێرە و بۆت دەهێنین.', 'لا توجد منتجات بعد. راسلنا وسنوفرها.'],
  city: ['City', 'شار', 'المدينة'],
  selectCity: ['Select your city', 'شارەکەت هەڵبژێرە', 'اختر مدينتك'],
  streetAddress: ['Street address', 'ناونیشانی شەقام', 'عنوان الشارع'],
  useMyLocation: ['Use my current location', 'شوێنی ئێستام بەکاربهێنە', 'استخدم موقعي الحالي'],
  locating: ['Locating…', 'دۆزینەوەی شوێن…', 'جارٍ تحديد الموقع…'],
  locationSet: ['Location pinned', 'شوێن دیاریکرا', 'تم تحديد الموقع'],
  locationDenied: ['Permission denied — enter the address manually', 'ڕێگە نەدرا — ناونیشان بە دەست بنووسە', 'تم رفض الإذن — أدخل العنوان يدوياً'],
  required: ['Please fill in all required fields', 'تکایە هەموو خانە پێویستەکان پڕبکەرەوە', 'يرجى ملء جميع الحقول المطلوبة'],
  passMismatch: ['Passwords do not match', 'وشە نهێنییەکان وەک یەک نین', 'كلمتا المرور غير متطابقتين'],
  accSuspended: ['This account is suspended. Please contact nasan Company.', 'ئەم هەژمارە ڕاگیراوە. تکایە پەیوەندی بە کۆمپانیای نەسەن بکە.', 'هذا الحساب موقوف. يرجى التواصل مع شركة نسان.'],
  passShort: ['Password must be at least 8 characters', 'وشەی نهێنی دەبێت لانیکەم ٨ پیت بێت', 'يجب أن تكون كلمة المرور ٨ أحرف على الأقل'],
  accountCreated: ['Account created', 'هەژمار دروستکرا', 'تم إنشاء الحساب'],
  signedIn: ['Signed in', 'چوویتە ژوورەوە', 'تم تسجيل الدخول'],
  badCredentials: ['Enter your email or phone and password', 'ئیمەیڵ یان ژمارە و وشەی نهێنی بنووسە', 'أدخل البريد أو الهاتف وكلمة المرور'],
  idFullEmail: ['Type the full email, like name@gmail.com', 'ئیمەیڵی تەواو بنووسە، وەک name@gmail.com', 'اكتب البريد كاملاً، مثل name@gmail.com'],
  idFullPhone: ['Type the full 10-digit number, like 770 123 4567', 'ژمارەی تەواوی ١٠ ژمارەیی بنووسە، وەک 770 123 4567', 'اكتب الرقم كاملاً من ١٠ أرقام، مثل 770 123 4567'],
  idBadChars: ['Use an email address or a phone number', 'ئیمەیڵ یان ژمارەی تەلەفۆن بەکاربهێنە', 'استخدم بريداً إلكترونياً أو رقم هاتف'],
  accFound: ['Account found', 'هەژمار دۆزرایەوە', 'تم العثور على الحساب'],
  noAccEmail: ['No account with this email', 'هیچ هەژمارێک بەم ئیمەیڵە نییە', 'لا يوجد حساب بهذا البريد'],
  noAccPhone: ['No account with this number', 'هیچ هەژمارێک بەم ژمارەیە نییە', 'لا يوجد حساب بهذا الرقم'],
  wrongPass: ['Wrong password. Try again or reset it.', 'وشەی نهێنی هەڵەیە. دووبارە هەوڵ بدە یان نوێی بکەرەوە.', 'كلمة المرور خاطئة. حاول مجدداً أو أعد تعيينها.'],
  passNeed8: ['At least 8 characters', 'لانیکەم ٨ پیت', '٨ أحرف على الأقل'],
  passGood: ['Password length is good', 'درێژی وشەی نهێنی باشە', 'طول كلمة المرور جيد'],
  passMatch: ['Passwords match', 'وشە نهێنییەکان وەک یەکن', 'كلمتا المرور متطابقتان'],
  emailAvail: ['Email is available', 'ئیمەیڵ بەردەستە', 'البريد متاح'],
  emailTaken: ['An account with this email already exists. Sign in instead.', 'هەژمارێک بەم ئیمەیڵە هەیە. بچۆ ژوورەوە.', 'يوجد حساب بهذا البريد. سجّل الدخول بدلاً من ذلك.'],
  emailTypo: ['Did you mean', 'مەبەستت ئەمەیە', 'هل تقصد'],
  phoneTaken: ['This number is already registered', 'ئەم ژمارەیە پێشتر تۆمارکراوە', 'هذا الرقم مسجل مسبقاً'],
  emailOtpSentTo: ['We sent a 6-digit code to', 'کۆدێکی ٦ ژمارەییمان نارد بۆ', 'أرسلنا رمزاً من ٦ أرقام إلى'],
  verifyEmailFirst: ['Verify your email with the code we sent.', 'ئیمەیڵەکەت بە کۆدی نێردراو پشتڕاست بکەرەوە.', 'تحقق من بريدك بالرمز المرسل.'],
  gateTitle: ['Create an account first', 'سەرەتا هەژمارێک دروست بکە', 'أنشئ حساباً أولاً'],
  gateBody: ['You need an account to place orders. Once created, it stays signed in on this phone.', 'بۆ داواکاری پێویستت بە هەژمارە. دوای دروستکردن، لەسەر ئەم مۆبایلە دەمێنێتەوە.', 'تحتاج إلى حساب لتقديم الطلبات. بعد إنشائه يبقى مسجلاً على هذا الهاتف.'],
  gateCreate: ['Create account', 'دروستکردنی هەژمار', 'إنشاء حساب'],
  gateSignIn: ['I already have an account', 'هەژمارم هەیە', 'لدي حساب بالفعل'],
  notNow: ['Not now', 'ئێستا نا', 'ليس الآن'],
  noOrdersTitle: ['No orders yet', 'هێشتا داواکاری نییە', 'لا توجد طلبات بعد'],
  noOrdersBody: ['Orders you place will show up here with live status.', 'داواکارییەکانت لێرە بە دۆخی ڕاستەوخۆ دەردەکەون.', 'ستظهر طلباتك هنا مع حالتها المباشرة.'],
  noPastBody: ['Finished and cancelled orders will be kept here.', 'داواکارییە تەواوبوو و هەڵوەشاوەکان لێرە دەمێننەوە.', 'ستبقى الطلبات المكتملة والملغاة هنا.'],
  ordersSignedOut: ['Sign in to see your orders', 'بچۆ ژوورەوە بۆ بینینی داواکارییەکانت', 'سجّل الدخول لرؤية طلباتك'],

  /* orders */
  active: ['Active', 'چالاک', 'نشطة'],
  past: ['Past', 'پێشوو', 'السابقة'],
  waiting: ['Waiting', 'چاوەڕوانە', 'قيد الانتظار'],
  received: ['Received', 'وەرگیرا', 'تم الاستلام'],
  pickedUp: ['Picked up', 'وەرگیراوە', 'تم الاستلام'],
  myOrdersRow: ['My orders', 'داواکارییەکانم', 'طلباتي'],
  shopDetails: ['Shop details', 'زانیاری دووکان', 'تفاصيل المتجر'],
  savedAddresses: ['Saved addresses', 'ناونیشانەکان', 'العناوين المحفوظة'],
  empty: ['Empty', 'بەتاڵە', 'فارغة'],
  activeCount: ['active', 'چالاک', 'نشط'],
  editDetails: ['Edit your details', 'دەستکاری زانیارییەکانت', 'تعديل بياناتك'],
  editProfile: ['Edit profile', 'دەستکاری پرۆفایل', 'تعديل الملف الشخصي'],
  profilePhoto: ['Profile photo', 'وێنەی پرۆفایل', 'صورة الملف'],
  addPhoto: ['Add photo', 'وێنە زیاد بکە', 'أضف صورة'],
  changePhoto: ['Change photo', 'وێنە بگۆڕە', 'غيّر الصورة'],
  removePhoto: ['Remove', 'لابردن', 'إزالة'],
  photoLead: ['A clear photo of your face, so our team knows who they are talking to.', 'وێنەیەکی ڕوونی ڕووخسارت، بۆ ئەوەی تیمەکەمان بزانێت لەگەڵ کێ قسە دەکات.', 'صورة واضحة لوجهك، ليعرف فريقنا مع من يتحدث.'],
  photoRequired: ['Add a profile photo of your face.', 'وێنەیەکی ڕووخسارت بۆ پرۆفایل زیاد بکە.', 'أضف صورة لوجهك للملف الشخصي.'],
  editProfileMeta: ['Name, phone, address', 'ناو، ژمارە، ناونیشان', 'الاسم، الرقم، العنوان'],
  yourAddress: ['Your address', 'ناونیشانەکەت', 'عنوانك'],
  homeAddress: ['Street address', 'ناونیشانی شەقام', 'عنوان الشارع'],
  sendOtp: ['Send code', 'کۆد بنێرە', 'أرسل الرمز'],
  resendIn: ['Resend in', 'دووبارە ناردن لە', 'إعادة الإرسال بعد'],
  resend: ['Resend code', 'دووبارە بینێرە', 'أعد الإرسال'],
  otpTitle: ['Enter the 6-digit code', 'کۆدی ٦ ژمارەیی بنووسە', 'أدخل الرمز المكون من ٦ أرقام'],
  otpSentTo: ['We sent it by SMS to', 'بە SMS ناردمان بۆ', 'أرسلناه برسالة إلى'],
  otpVerify: ['Verify', 'پشتڕاستی بکەرەوە', 'تحقق'],
  otpWrong: ['That code is not right. Try again.', 'ئەم کۆدە هەڵەیە. دووبارە هەوڵ بدە.', 'الرمز غير صحيح. حاول مرة أخرى.'],
  otpDemo: ['Prototype: no SMS is sent. Your code is', 'نموونە: هیچ SMS نانێردرێت. کۆدەکەت', 'نموذج: لا تُرسل رسالة. رمزك هو'],
  phoneVerified: ['Verified', 'پشتڕاستکراوە', 'تم التحقق'],
  phoneShort: ['Enter the full 10-digit number first.', 'سەرەتا ژمارەی تەواوی ١٠ ژمارەیی بنووسە.', 'أدخل الرقم الكامل المكون من ١٠ أرقام أولاً.'],
  verifyPhoneFirst: ['Verify your phone number with the SMS code.', 'ژمارەکەت بە کۆدی SMS پشتڕاست بکەرەوە.', 'تحقق من رقمك برمز الرسالة.'],
  profileSaved: ['Profile saved', 'پرۆفایل پاشەکەوت کرا', 'تم حفظ الملف'],
  editDetailsLead: ['Update your name, phone, address and shop information.', 'ناو، ژمارە و زانیاری دووکانەکەت نوێ بکەرەوە.', 'حدّث اسمك ورقمك وبيانات متجرك.'],
  saveChanges: ['Save changes', 'گۆڕانکارییەکان پاشەکەوت بکە', 'حفظ التغييرات'],
  openInMaps: ['Open in Maps', 'لە نەخشە بکەرەوە', 'افتح في الخرائط'],
  officialPages: ["nasan Company's official pages", 'پەیجەکانی فەرمی نەسەن', 'صفحات نسان الرسمية'],
  contactOnWA: ['Contact us on WhatsApp', 'پەیوەندی بە واتساپ', 'اتصل بنا على واتساب'],
  ourStorySub: ['Our story since 2002', 'چیرۆکمان لە ٢٠٠٢', 'قصتنا منذ ٢٠٠٢'],
  threeShopsSub: ['3 shops in Iraq', '٣ دووکان لە عێراق', '٣ متاجر في العراق'],
  days: [
    ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    ['یەک', 'دوو', 'سێ', 'چوار', 'پێنج', 'هەینی', 'شەممە'],
    ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
  ],
  hoursRange: ['9:00 AM – 7:00 PM', '٩:٠٠ ب.ن – ٧:٠٠ ئێوارە', '٩:٠٠ ص – ٧:٠٠ م'],
  closedToday: ['Closed today', 'ئەمڕۆ داخراوە', 'مغلق اليوم'],
  satThu: ['Sat – Thu', 'شەممە – پێنجشەممە', 'السبت – الخميس'],
  hereToHelp: ['We are here to help you', 'ئێمە لێرەین بۆ یارمەتیت', 'نحن هنا لمساعدتك'],
  hereToHelpLead: [
    'Message us for bulk pricing, custom orders, or stock checks.',
    'بۆ نرخی کۆمەڵ، داواکاری تایبەت، یان پشکنینی بەردەستی پەیام بنێرە.',
    'راسلنا لأسعار الجملة أو الطلبات الخاصة أو التأكد من التوفر.',
  ],
  msgInstantly: ['Message us instantly', 'دەستبەجێ پەیام بنێرە', 'راسلنا فوراً'],
  findUs: ['Find us', 'بدۆزەرەوەمان', 'اعثر علينا'],
  todaysOpening: ["Today's opening", 'کاتژمێری ئەمڕۆ', 'ساعات اليوم'],
  friday: ['Friday', 'هەینی', 'الجمعة'],
  closed: ['Closed', 'داخراوە', 'مغلق'],
  readyStock: ['Ready to stock up?', 'ئامادەی کۆگاکردنی؟', 'جاهز للتزود؟'],
  readyStockLead: [
    'Browse the full catalog or message us on WhatsApp for bulk pricing and custom orders.',
    'کاتالۆگی تەواو ببینە یان لە واتساپ بۆ نرخی کۆمەڵ و داواکاری تایبەت پەیام بنێرە.',
    'تصفح الكتالوج الكامل أو راسلنا على واتساب لأسعار الجملة والطلبات الخاصة.',
  ],
  addToCart: ['Add to cart', 'بخە ناو سەبەتە', 'أضف إلى السلة'],
  addedToCart: ['Added to cart', 'زیادکرا', 'تمت الإضافة'],
  genuine: ['Genuine', 'ڕەسەن', 'أصلي'],
  partsOnly: ['parts only', 'تەنها کەرەستە', 'قطع فقط'],
  modelYear: ['model year', 'ساڵی مۆدێل', 'سنة الطراز'],
  productCode: ['product code', 'کۆدی بەرهەم', 'رمز المنتج'],
  workstations: ['Workstations', 'وێستگەی کار', 'محطات العمل'],
  solderRework: ['Soldering & rework', 'لەحیم و چاککردنەوە', 'اللحام والإصلاح'],
  powerDiag: ['Power & diagnostics', 'کارەبا و پشکنین', 'الطاقة والتشخيص'],
  aboutHead: ['Official mobile repair parts supplier', 'دابینکەری فەرمی کەرەستەی چاککردنەوەی مۆبایل', 'الموزع الرسمي لقطع صيانة الهواتف'],
  aboutStory: [
    'NASAN Company has been serving mobile repair technicians in Sulaymaniyah since 2002. We started with a passion for quality parts and built our reputation on trust, genuine products, and exceptional customer service. Today we are one of the most trusted suppliers in the region.',
    'کۆمپانیای نەسەن لە ساڵی ٢٠٠٢ەوە خزمەت بە پیشەسازانی چاککردنەوەی مۆبایل لە سلێمانی دەکات. بە خۆشەویستی بۆ کەرەستەی باش دەستمان پێکرد و ناوبانگمان لەسەر متمانە، بەرهەمی ڕەسەن و خزمەتگوزاری باش بنیات نا. ئەمڕۆ یەکێکین لە دابینکەرەکانی پێشەنگی ناوچەکە.',
    'تخدم شركة نسان فنيي صيانة الهواتف في السليمانية منذ عام ٢٠٠٢. بدأنا بشغف لقطع الغيار الجيدة وبنينا سمعتنا على الثقة والمنتجات الأصلية وخدمة العملاء الممتازة. اليوم نحن من أكثر الموزعين الموثوقين في المنطقة.',
  ],
  yearsBiz: ['Years in business', 'ساڵ لە کار', 'سنوات في العمل'],
  productsAvail: ['Products available', 'بەرهەمی بەردەست', 'منتجات متوفرة'],
  shopLocations: ['Shop locations', 'شوێنی دووکان', 'مواقع المتاجر'],
  techsServed: ['Technicians served', 'پیشەسازی خزمەتکراو', 'فنيون خدمناهم'],
  ourLocations: ['Our locations', 'شوێنەکانمان', 'مواقعنا'],
  genuineAllBrands: ['Genuine parts for all major brands', 'کەرەستەی ڕەسەن بۆ هەموو براندە گەورەکان', 'قطع أصلية لكل العلامات الكبرى'],
  mapLabel: ['Map', 'نەخشە', 'خريطة'],
  sulay: ['Sulaymaniyah', 'سلێمانی', 'السليمانية'],
  splashTag: ['Mobile repair parts & tools', 'کەرەستە و ئامێری چاککردنەوەی مۆبایل', 'قطع وأدوات صيانة الهواتف'],
  splashLoc: ['Sulaymaniyah, Iraq · Since 2002', 'سلێمانی، عێراق · لە ٢٠٠٢ەوە', 'السليمانية، العراق · منذ ٢٠٠٢'],
  shopTag1: ['Shop 1', 'دووکانی ١', 'المتجر ١'],
  shopTag2: ['Shop 2', 'دووکانی ٢', 'المتجر ٢'],
  shopTag3: ['Shop 3', 'دووکانی ٣', 'المتجر ٣'],
  shopName1: ['Barzar Jawazaka', 'بازاڕی جەوازەکە', 'بازار جوازكة'],
  shopName2: ['Bazar Hama Sur', 'بازاڕی حەمە سوور', 'بازار حمه سور'],
  shopName3: ['Kirkuk', 'کەرکووک', 'كركوك'],
  shopAddr1: ['Shop Number 18, Sulaymaniyah', 'دووکانی ژمارە ١٨، سلێمانی', 'محل رقم ١٨، السليمانية'],
  shopAddr2: ['Shop Number 1, Sulaymaniyah', 'دووکانی ژمارە ١، سلێمانی', 'محل رقم ١، السليمانية'],
  shopAddr3: ['Komary Street, Kirkuk', 'شەقامی کۆماری، کەرکووک', 'شارع الجمهورية، كركوك'],
  recent1: ['RF4 microscope', 'مایکرۆسکۆپی RF4', 'مجهر RF4'],
  recent2: ['power supply 30V', 'کارەبا ٣٠ ڤۆڵت', 'مصدر طاقة ٣٠ فولت'],
  recent3: ['Yaxun hot air', 'هەوای گەرمی یاخسون', 'هواء ساخن Yaxun'],
  recent4: ['tweezers', 'مووچنە', 'ملقط'],
  today: ['Today', 'ئەمڕۆ', 'اليوم'],
  yesterday: ['Yesterday', 'دوێنێ', 'أمس'],
  justNow: ['Just now', 'ئێستا', 'الآن'],
  findByCode: ['Find by product code', 'بە کۆدی بەرهەم بگەڕێ', 'ابحث برمز المنتج'],
  viewProduct: ['View product', 'بەرهەم ببینە', 'عرض المنتج'],
  waRequestMsg: [
    'Hello nasan Company, I am looking for a tool you may not have listed:',
    'سڵاو کۆمپانیای نەسەن، ئامێرێک دەگەڕێم کە لەوانەیە لە لیستەکەتان نەبێت:',
    'مرحباً شركة نسان، أبحث عن أداة قد لا تكون مدرجة في قائمتكم:',
  ],
  requestTool: ['Request a tool', 'داوای ئامێرێک بکە', 'اطلب أداة'],
  requestToolSub: ["Can't find it? We'll source it", 'نەتدۆزی؟ بۆت دەهێنین', 'لم تجده؟ سنوفره لك'],
  chooseWho: ["Choose who to message — you'll be taken straight to WhatsApp.", 'هەڵبژێرە پەیام بۆ کێ بنێرێت — ڕاستەوخۆ بۆ واتساپ دەچیت.', 'اختر من تريد مراسلته — سننقلك مباشرة إلى واتساب.'],
  preparing: ['Preparing', 'ئامادەکردن', 'قيد التجهيز'],
  ready: ['Ready', 'ئامادەیە', 'جاهز'],
  readyPickup: ['Ready for pickup', 'ئامادەیە بۆ وەرگرتن', 'جاهز للاستلام'],
  collected: ['Collected', 'وەرگیراوە', 'تم التسليم'],
  cancelOrder: ['Cancel order', 'هەڵوەشاندنەوەی داواکاری', 'إلغاء الطلب'],
  cancelSure: ['Cancel this order?', 'ئەم داواکارییە هەڵبوەشێنرێتەوە؟', 'هل تريد إلغاء هذا الطلب؟'],
  cancelNote: ['This can’t be undone. You can order again anytime.', 'ناگەڕێتەوە. هەر کاتێک دەتوانیت دووبارە داوا بکەیت.', 'لا يمكن التراجع. يمكنك الطلب مجددًا في أي وقت.'],
  keepOrder: ['Keep order', 'بیهێڵەوە', 'إبقاء الطلب'],
  yesCancel: ['Yes, cancel', 'بەڵێ، هەڵیبوەشێنەوە', 'نعم، إلغاء'],
  cancelled: ['Cancelled', 'هەڵوەشێنرایەوە', 'ملغى'],
  cancelLocked: ['Ready orders can’t be cancelled here — message us.', 'داواکاریی ئامادە لێرە هەڵناوەشێتەوە — پەیاممان بۆ بنێرە.', 'لا يمكن إلغاء الطلب الجاهز هنا — راسلنا.'],
  askAboutOrder: ['Ask about this order', 'پرسیار لەسەر ئەم داواکارییە', 'اسأل عن هذا الطلب'],
  reorder: ['Reorder', 'دووبارە داوابکە', 'إعادة الطلب'],
  getInvoice: ['Get invoice', 'وەصڵ وەربگرە', 'الفاتورة'],
  openWhatsApp: ['Open WhatsApp', 'واتساپ بکەرەوە', 'افتح واتساب'],

  /* cart */
  cartEmpty: ['Your cart is empty', 'سەبەتەکەت بەتاڵە', 'سلتك فارغة'],
  cartEmptyLead: ['Browse the catalog and add the tools you need, then ask us for a price.', 'کاتالۆگ بگەڕێ و ئامێرەکان زیاد بکە، پاشان نرخمان لێ بپرسە.', 'تصفح الكتالوج وأضف الأدوات، ثم اسألنا عن السعر.'],
  browseProducts: ['Browse products', 'بەرهەمەکان ببینە', 'تصفح المنتجات'],
  quotedOnRequest: ['Prices are quoted on request', 'نرخ بەپێی داواکاری دیاری دەکرێت', 'الأسعار عند الطلب'],
  waPriceMsg: [
    'Hello nasan Company, please send me the price for:',
    'سڵاو کۆمپانیای نەسەن، تکایە نرخی ئەمانەم بۆ بنێرە:',
    'مرحباً شركة نسان، أرجو إرسال سعر ما يلي:',
  ],
  waOrderMsg: [
    'Hello nasan Company, I have a question about order',
    'سڵاو کۆمپانیای نەسەن، پرسیارێکم هەیە دەربارەی داواکاری',
    'مرحباً شركة نسان، لدي سؤال بخصوص الطلب',
  ],
  quotedLead: ['Send your cart on WhatsApp and we reply with pricing, including bulk rates for technicians.', 'سەبەتەکەت بە واتساپ بنێرە و نرخت بۆ دەنێرین، نرخی کۆیش بۆ تەکنیشیانەکان.', 'أرسل سلتك على واتساب وسنرد بالأسعار، بما فيها أسعار الجملة للفنيين.'],
  filterBy: ['Filter', 'فلتەر', 'تصفية'],
  category: ['Category', 'جۆر', 'الفئة'],
  showAll: ['Show all', 'هەمووی پیشان بدە', 'عرض الكل'],
  showResults: ['Show', 'پیشان بدە', 'عرض'],
  specs: ['Specs', 'تایبەتمەندی', 'المواصفات'],
  specSheetLead: [
    'Confirm the exact variant with us before ordering.',
    'پێش داواکاری جۆری تەواو لەگەڵمان پشتڕاست بکە.',
    'أكد النوع بالضبط معنا قبل الطلب.',
  ],
  askAboutSpecs: ['Ask about this product', 'پرسیار لەم بەرهەمە بکە', 'اسأل عن هذا المنتج'],
  askPriceWA: ['Ask for the price on WhatsApp', 'نرخ بپرسە لە واتساپ', 'اسأل عن السعر على واتساب'],
  placeOrder: ['Place order', 'داواکاری بنێرە', 'إرسال الطلب'],
  orderPlaced: ['Order placed', 'داواکاری نێردرا', 'تم إرسال الطلب'],
  pickupNote: ['Pickup at any of our 3 shops, or delivery in Sulaymaniyah', 'وەرگرتن لە هەر یەکێک لە ٣ دووکانەکەمان، یان گەیاندن لە سلێمانی', 'الاستلام من أي من متاجرنا الثلاثة أو التوصيل في السليمانية'],

  /* account */
  welcomeBack: ['Welcome back', 'بەخێربێیتەوە', 'مرحباً بعودتك'],
  createAccount: ['Create your account', 'هەژمارەکەت دروست بکە', 'أنشئ حسابك'],
  createBtn: ['Create account', 'هەژمار دروست بکە', 'إنشاء الحساب'],
  signInLead: ['Sign in with your email or phone number.', 'بە ئیمەیڵ یان ژمارەی تەلەفۆن بچۆرە ژوورەوە.', 'سجّل الدخول بالبريد أو رقم الهاتف.'],
  signUpLead: ['Technicians and shop owners. Takes a minute.', 'تەکنیشیان و خاوەن دووکان. خاتەیەک دەخایەنێت.', 'للفنيين وأصحاب المتاجر. يستغرق دقيقة.'],
  signIn: ['Sign in', 'چوونەژوورەوە', 'تسجيل الدخول'],
  signUp: ['Sign up', 'خۆتۆمارکردن', 'إنشاء حساب'],
  forgotPassword: ['Forgot password?', 'وشەی نهێنیت لەبیرچووە؟', 'نسيت كلمة المرور؟'],
  or: ['or', 'یان', 'أو'],
  signInGoogle: ['Sign in with Google', 'بە گووگڵ بچۆ ژوورەوە', 'تسجيل الدخول بجوجل'],
  signUpGoogle: ['Sign up with Google', 'بە گووگڵ تۆمار بکە', 'إنشاء حساب بجوجل'],
  signOut: ['Sign out', 'چوونەدەرەوە', 'تسجيل الخروج'],
  resetPassword: ['Reset password', 'وشەی نهێنی نوێ بکەرەوە', 'إعادة تعيين كلمة المرور'],
  emailOrPhone: ['Email or phone number', 'ئیمەیڵ یان ژمارەی تەلەفۆن', 'البريد أو رقم الهاتف'],
  password: ['Password', 'وشەی نهێنی', 'كلمة المرور'],
  sendCode: ['Send code', 'کۆد بنێرە', 'إرسال الرمز'],
  codeSent: ['Code sent', 'کۆد نێردرا', 'تم إرسال الرمز'],
  sendAgain: ['Send code again', 'دووبارە کۆد بنێرە', 'إرسال الرمز مجدداً'],
  didNotArrive: ['Did not arrive?', 'نەگەیشت؟', 'لم يصل؟'],
  enterCode: ['Enter code', 'کۆد بنووسە', 'أدخل الرمز'],
  securityNote: ['For your security we never send passwords by message.', 'بۆ پاراستنت، هەرگیز وشەی نهێنی بە پەیام نانێرین.', 'لأمانك، لا نرسل كلمات المرور عبر الرسائل أبداً.'],
  privacyNote: ['Passwords are stored hashed, never in plain text. Sign-ins are protected by rate limiting, and your details are used only for orders and delivery.',
    'وشەی نهێنی بە شێوەی هاش هەڵدەگیرێت، نەک دەقی ئاسایی. چوونەژوورەوە پارێزراوە، و زانیارییەکانت تەنها بۆ داواکاری و گەیاندن بەکاردێت.',
    'تُخزَّن كلمات المرور مشفّرة وليست كنص عادي. تسجيل الدخول محمي، وبياناتك تُستخدم للطلبات والتوصيل فقط.'],
  cartTitle: ['Cart', 'سەبەتە', 'السلة'],
  item: ['item', 'دانە', 'قطعة'],
  yourShop: ['Your shop', 'دووکانەکەت', 'متجرك'],
  fullName: ['Full name', 'ناوی تەواو', 'الاسم الكامل'],
  phoneNumber: ['Phone number', 'ژمارەی تەلەفۆن', 'رقم الهاتف'],
  email: ['Email', 'ئیمەیڵ', 'البريد الإلكتروني'],
  confirmPassword: ['Confirm password', 'وشەی نهێنی دووبارە', 'تأكيد كلمة المرور'],
  haveShop: ['I have a shop', 'دووکانم هەیە', 'لدي متجر'],
  haveShopLead: [
    'Turn this on for trade pricing and shop delivery. Leave it off if you are buying as a customer.',
    'بۆ نرخی بازرگانی و گەیاندن بۆ دووکان ئەمە بکەرەوە. ئەگەر وەک کڕیار دەکڕیت بەجێی بهێڵە.',
    'شغّل هذا لأسعار التجار والتوصيل للمتجر. اتركه مطفأً إذا كنت تشتري كعميل.',
  ],
  shopName: ['Shop name', 'ناوی دووکان', 'اسم المتجر'],
  shopAddress: ['Shop address', 'ناونیشانی دووکان', 'عنوان المتجر'],
  shareLocation: ['Share your shop location', 'شوێنی دووکانەکەت هاوبەش بکە', 'شارك موقع متجرك'],
  shareLocationLead: ['Used once to pin your shop for delivery. We never track you in the background, and you can turn this off any time.',
    'تەنها جارێک بۆ دیاریکردنی دووکانەکەت بۆ گەیاندن. هەرگیز لە پشتەوە شوێنت ناگرین، هەر کاتێک دەتوانیت بیکوژێنیتەوە.',
    'يُستخدم مرة واحدة لتحديد متجرك للتوصيل. لا نتتبعك في الخلفية، ويمكنك إيقافه في أي وقت.'],
};

const IRAQ_CITIES = [
  'Sulaymaniyah', 'Erbil', 'Duhok', 'Zakho', 'Halabja', 'Kirkuk', 'Ranya', 'Koya', 'Soran', 'Chamchamal',
  'Baghdad', 'Basra', 'Mosul', 'Najaf', 'Karbala', 'Hillah', 'Nasiriyah', 'Amarah', 'Diwaniyah',
  'Kut', 'Samarra', 'Ramadi', 'Fallujah', 'Tikrit', 'Baqubah',
];

function todayHoursLine(li) {
  const now = new Date();
  const d = now.getDay();
  const name = STR.days[li][d];
  const closed = d === 5;
  return {
    closed,
    open: !closed && now.getHours() >= 9 && now.getHours() < 19,
    label: name + ' : ' + (closed ? STR.closedToday[li] : STR.hoursRange[li]),
  };
}

const LangCtx = React.createContext(0);
function useLang() { return React.useContext(LangCtx); }
function nsSet(section, key, fallback) {
  const st = window.NasanStore && window.NasanStore.get();
  const v = st && st.settings && st.settings[section] ? st.settings[section][key] : undefined;
  return v === undefined || v === '' ? fallback : v;
}
window.NASAN_STR = STR;
function tr(key, li) {
  const ov = window.NasanStore && window.NasanStore.get().trOverrides;
  const hit = ov && ov[li || 0] && ov[li || 0][key];
  if (hit) return hit;
  const row = STR[key];
  if (!row) return key;
  return row[li] || row[0] || key;
}

function localWhen(when, li) {
  if (!when || !li) return when;
  let out = when
    .replace(/^Today/, tr('today', li))
    .replace(/^Yesterday/, tr('yesterday', li))
    .replace(/^Just now$/, tr('justNow', li));
  const MONTHS = {
    Jan: ['کانونی دووەم', 'يناير'], Feb: ['شوبات', 'فبراير'], Mar: ['ئازار', 'مارس'],
    Apr: ['نیسان', 'أبريل'], May: ['ئایار', 'مايو'], Jun: ['حوزەیران', 'يونيو'],
    Jul: ['تەمووز', 'يوليو'], Aug: ['ئاب', 'أغسطس'], Sep: ['ئەیلوول', 'سبتمبر'],
    Oct: ['تشرینی یەکەم', 'أكتوبر'], Nov: ['تشرینی دووەم', 'نوفمبر'], Dec: ['کانونی یەکەم', 'ديسمبر'],
  };
  for (const [en, tx] of Object.entries(MONTHS)) out = out.replace(en, tx[li - 1]);
  return out.replace(/[0-9]/g, d => '٠١٢٣٤٥٦٧٨٩'[+d]);
}

function arabicNum(n) {
  return String(n).replace(/[0-9]/g, d => '٠١٢٣٤٥٦٧٨٩'[+d]);
}

function nsLang() {
  try { return (window.NasanStore && window.NasanStore.get().lang) || 0; } catch (e) { return 0; }
}

const T = {
  get teal() { return nsSet('design', 'accent', '#3FB2BD'); },
  get tealDeep() { return nsSet('design', 'accentDeep', '#2C8F99'); },
  ink: '#20262A',
  ink70: 'rgba(32,38,42,0.66)',
  ink45: 'rgba(32,38,42,0.45)',
  line: 'rgba(32,38,42,0.10)',
  paper: '#F6F5F2',
  white: '#fff',
  /* Language-aware type. The system UI face already covers Arabic script, so a
     trailing fallback never gets reached — the Arabic face has to come first when
     the app is in Kurdish Sorani or Arabic. Getters so a language switch re-reads. */
  get sans() {
    return nsLang()
      ? '"IBM Plex Sans Arabic", -apple-system, system-ui, sans-serif'
      : '-apple-system, "SF Pro Text", system-ui, sans-serif';
  },
  get roboto() {
    return nsLang()
      ? '"IBM Plex Sans Arabic", Roboto, system-ui, sans-serif'
      : 'Roboto, "Google Sans", system-ui, sans-serif';
  },
};

const LOGO = './nasan-logo.png';

function Mark({ color = T.ink, size = 19, font = T.sans }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
      <img src={LOGO} alt="" style={{ width: size + 5, height: size + 5, objectFit: 'contain', display: 'block' }} />
      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{ font: `700 ${size}px/1 ${font}`, letterSpacing: '0.01em', color }}>nasan</span>
        <span style={{ marginTop: 3, font: `500 ${Math.round(size * 0.5)}px/1 ${font}`, letterSpacing: '0.16em', textTransform: 'uppercase', color: color === '#fff' ? 'rgba(255,255,255,0.55)' : T.ink45 }}>Company</span>
      </span>
    </span>
  );
}

function MenuIcon({ color = T.ink, size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.9" strokeLinecap="round">
      <path d="M4 7h16M4 12h16M4 17h11" />
    </svg>
  );
}

/* Placeholder product art — abstract equipment silhouettes, not photography. */
function ToolShot({ w = 92, kind = 'station', dark = false }) {
  const c = dark ? 'rgba(255,255,255,0.82)' : 'rgba(32,38,42,0.72)';
  const a = dark ? 'rgba(63,178,189,0.9)' : T.tealDeep;
  const paths = {
    station: (
      <g>
        <rect x="6" y="34" width="34" height="22" rx="3" fill="none" stroke={c} strokeWidth="2.4" />
        <rect x="12" y="40" width="14" height="9" rx="1.5" fill={a} />
        <circle cx="34" cy="50" r="2.6" fill={c} />
        <path d="M44 50h10l6-24" stroke={c} strokeWidth="2.4" fill="none" strokeLinecap="round" />
        <path d="M58 27l4-12" stroke={a} strokeWidth="3.4" strokeLinecap="round" />
      </g>
    ),
    scope: (
      <g>
        <rect x="14" y="52" width="36" height="5" rx="2.5" fill="none" stroke={c} strokeWidth="2.4" />
        <path d="M32 52V22" stroke={c} strokeWidth="2.4" />
        <rect x="34" y="16" width="10" height="26" rx="3" fill="none" stroke={c} strokeWidth="2.4" />
        <path d="M39 42v8" stroke={a} strokeWidth="3" strokeLinecap="round" />
        <path d="M36 10h16" stroke={c} strokeWidth="2.4" strokeLinecap="round" />
      </g>
    ),
    supply: (
      <g>
        <rect x="8" y="20" width="48" height="32" rx="4" fill="none" stroke={c} strokeWidth="2.4" />
        <rect x="14" y="26" width="20" height="11" rx="1.5" fill={a} />
        <circle cx="45" cy="32" r="5" fill="none" stroke={c} strokeWidth="2.2" />
        <path d="M14 44h14M38 44h12" stroke={c} strokeWidth="2.2" strokeLinecap="round" />
      </g>
    ),
    hand: (
      <g>
        <path d="M12 54L44 16" stroke={c} strokeWidth="3" strokeLinecap="round" />
        <path d="M44 16l8-6 2 8-6 4z" fill={a} />
        <path d="M18 48l8 8" stroke={c} strokeWidth="2.4" strokeLinecap="round" />
      </g>
    ),
  };
  return (
    <div style={{ width: w, height: w, flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width={w} height={w} viewBox="0 0 64 64">{paths[kind] || paths.station}</svg>
    </div>
  );
}

function Pill({ label, dark }) {
  return (
    <span style={{
      font: `600 10.5px/1 ${T.sans}`, letterSpacing: '0.06em', textTransform: 'uppercase',
      padding: '5px 8px', borderRadius: 5,
      background: dark ? 'rgba(63,178,189,0.20)' : 'rgba(63,178,189,0.14)',
      color: dark ? T.teal : T.tealDeep,
    }}>{label}</span>
  );
}

function TabBar({ active = 'Shop', dark = false, onNav }) {
  const li = useLang();
  const items = [
    ['Shop', 'M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1V9.5z', 'shop'],
    ['LCD', 'M7 2.5h10a1.5 1.5 0 011.5 1.5v16a1.5 1.5 0 01-1.5 1.5H7A1.5 1.5 0 015.5 20V4A1.5 1.5 0 017 2.5zM8.5 5.5h7v10h-7zM11 18.5h2', 'lcd'],
    ['Brands', 'M4 5h16v5H4zM4 14h16v5H4z', 'brands'],
    ['Search', 'M11 4a7 7 0 105.2 11.7L21 20.5', 'search'],
    ['Orders', 'M4 6h16v14H4zM8 3v5M16 3v5', 'orders'],
    ['You', 'M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c1.6-4 14.4-4 16 0', 'you'],
  ];
  return (
    <div style={{
      display: 'flex', padding: '10px 6px 26px',
      background: dark ? 'rgba(20,24,26,0.86)' : 'rgba(255,255,255,0.88)',
      backdropFilter: 'blur(22px)', WebkitBackdropFilter: 'blur(22px)',
      borderTop: `1px solid ${dark ? 'rgba(255,255,255,0.10)' : T.line}`,
    }}>
      {items.map(([label, d, key]) => {
        const on = label === active;
        const c = on ? T.teal : (dark ? 'rgba(255,255,255,0.45)' : T.ink45);
        return (
          <div key={label} onClick={() => onNav && onNav(label)} {...press(0.9)} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, cursor: 'pointer', ...pressStyle }}>
            <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
            <span style={{ font: `${on ? 600 : 500} 10px/1 ${T.sans}`, color: c, whiteSpace: 'nowrap' }}>{tr(key, li)}</span>
          </div>
        );
      })}
    </div>
  );
}

function Passthru({ children }) { return <div style={{ height: '100%' }}>{children}</div>; }
function frame(bare, platform) {
  if (bare) return Passthru;
  return platform === 'android' ? window.AndroidDevice : window.IOSDevice;
}

/* Tap feedback: spread onto any clickable element */
function press(scale = 0.96) {
  const set = (e, v) => { if (e.currentTarget) e.currentTarget.style.transform = v; };
  return {
    onPointerDown: e => set(e, 'scale(' + scale + ')'),
    onPointerUp: e => set(e, 'scale(1)'),
    onPointerLeave: e => set(e, 'scale(1)'),
    onPointerCancel: e => set(e, 'scale(1)'),
  };
}
const pressStyle = { transition: 'transform .13s cubic-bezier(.2,.8,.25,1)' };

/* Rails: grab and drag sideways, wheel scrolls horizontally */
function dragScroll(el) {
  if (!el || el.__drag) return;
  el.__drag = true;
  el.style.cursor = 'grab';
  let down = false, x0 = 0, l0 = 0;
  el.addEventListener('pointerdown', e => { down = true; x0 = e.clientX; l0 = el.scrollLeft; el.style.cursor = 'grabbing'; });
  const end = () => { down = false; el.style.cursor = 'grab'; };
  el.addEventListener('pointerup', end);
  el.addEventListener('pointerleave', end);
  el.addEventListener('pointermove', e => { if (down) { el.scrollLeft = l0 - (e.clientX - x0); e.preventDefault(); } });
  el.addEventListener('wheel', e => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) { el.scrollLeft += e.deltaY; e.preventDefault(); }
  }, { passive: false });
}

/* Modern scroll: native bar hidden, a slim teal progress rail shows position */
function ScrollArea({ children, style, dark, onRefresh, onScroll }) {
  const ref = React.useRef(null);
  const [pull, setPull] = React.useState(0);
  const [busy, setBusy] = React.useState(false);
  const pullRef = React.useRef(null);
  const li = useLang();
  const startPull = (e) => {
    const el = ref.current;
    if (!onRefresh || busy || !el || el.scrollTop > 2) return;
    pullRef.current = { y0: e.clientY, dy: 0 };
  };
  const movePull = (e) => {
    if (!pullRef.current) return;
    const el = ref.current;
    if (el && el.scrollTop > 2) { pullRef.current = null; setPull(0); return; }
    const dy = e.clientY - pullRef.current.y0;
    if (dy <= 0) { setPull(0); return; }
    pullRef.current.dy = dy;
    setPull(Math.min(96, dy * 0.55));
  };
  const endPull = () => {
    if (!pullRef.current) return;
    const ready = pullRef.current.dy * 0.55 > 58;
    pullRef.current = null;
    if (ready) {
      setBusy(true); setPull(46);
      setTimeout(() => { onRefresh && onRefresh(); setBusy(false); setPull(0); }, 900);
    } else setPull(0);
  };
  const [p, setP] = React.useState({ h: 0, y: 0, show: false });
  const measure = () => {
    const el = ref.current;
    if (!el) return;
    const max = el.scrollHeight - el.clientHeight;
    if (max < 12) return setP({ h: 0, y: 0, show: false });
    const track = el.clientHeight - 104;
    const h = Math.max(38, track * (el.clientHeight / el.scrollHeight));
    setP({ h, y: 52 + (track - h) * (el.scrollTop / max), show: true });
  };
  React.useEffect(() => { measure(); const t = setTimeout(measure, 260); return () => clearTimeout(t); }, [children]);
  return (
    <div style={{ position: 'relative', flex: 1, minHeight: 0, display: 'flex' }}>
      {onRefresh && (pull > 0 || busy) && (
        <div style={{
          position: 'absolute', top: 52, left: 0, right: 0, zIndex: 26,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          height: pull, overflow: 'hidden', pointerEvents: 'none',
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={dark ? '#fff' : T.tealDeep} strokeWidth="2" strokeLinecap="round"
            style={{ opacity: Math.min(1, pull / 46), transform: busy ? undefined : 'rotate(' + pull * 4 + 'deg)', animation: busy ? 'nsSpin .9s linear infinite' : undefined }}>
            <path d="M21 12a9 9 0 11-3.2-6.9" /><path d="M21 4v5h-5" />
          </svg>
          <span style={{ font: `600 10.5px/1 ${T.sans}`, color: dark ? 'rgba(255,255,255,.6)' : T.ink45, opacity: Math.min(1, pull / 50) }}>
            {busy ? tr('refreshing', li) : pull > 58 ? tr('updated', li) : tr('pullRefresh', li)}
          </span>
        </div>
      )}
      <div ref={ref} onScroll={e => { measure(); onScroll && onScroll(e); }}
        onPointerDown={startPull} onPointerMove={movePull} onPointerUp={endPull} onPointerCancel={endPull}
        style={{
        flex: 1, minWidth: 0, overflowY: 'auto', overflowX: 'hidden',
        scrollbarWidth: 'none', msOverflowStyle: 'none',
        transform: pull ? 'translateY(' + pull + 'px)' : undefined,
        transition: pullRef.current ? 'none' : 'transform .25s cubic-bezier(.2,.8,.25,1)',
        ...style,
      }}>{children}</div>
      {p.show && (
        <div style={{
          position: 'absolute', right: 3, top: p.y, width: 3, height: p.h, borderRadius: 3,
          background: dark ? 'rgba(255,255,255,0.28)' : 'rgba(63,178,189,0.55)',
          pointerEvents: 'none', transition: 'top .06s linear', zIndex: 25,
        }} />
      )}
    </div>
  );
}

function TopBar({ bg, title, onMenu, onCart, onBack, cart = 0, onLang }) {
  const dark = bg === '#121618' || bg === '#141A1C';
  const ink = dark ? '#fff' : T.ink;
  const li = useLang();
  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, zIndex: 30,
      padding: '52px 20px 12px', boxSizing: 'border-box',
      display: 'flex', alignItems: 'center', gap: 14,
      background: dark ? 'rgba(18,22,24,0.92)' : 'rgba(246,245,242,0.92)',
      backdropFilter: 'blur(22px)', WebkitBackdropFilter: 'blur(22px)',
      borderBottom: `1px solid ${dark ? 'rgba(255,255,255,0.09)' : T.line}`,
    }}>
      {onBack ? (
        <span onClick={onBack} style={{ cursor: 'pointer', display: 'flex' }}>
          <svg data-flip="1" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke={ink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7" /></svg>
        </span>
      ) : (
        <span onClick={onMenu} style={{ cursor: 'pointer', display: 'flex' }}><MenuIcon color={ink} size={22} /></span>
      )}
      {title
        ? <span style={{ font: `600 16px/1 ${T.sans}`, color: ink }}>{title}</span>
        : <Mark color={ink} size={17} />}
      <span onClick={onLang} title="Language" {...press(0.88)} style={{ marginLeft: 'auto', marginRight: 0, display: 'flex', alignItems: 'center', gap: 5, cursor: 'pointer', padding: '4px 2px', ...pressStyle }}>
        <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke={ink} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.6 2.6 2.6 15 0 18M12 3c-2.6 2.6-2.6 15 0 18" />
        </svg>
        <span style={{ font: `700 9.5px/1 ${T.sans}`, letterSpacing: '0.08em', textTransform: 'uppercase', color: ink, opacity: .75 }}>{LANGS[li][0]}</span>
      </span>
      {onCart ? (
      <span onClick={onCart} {...press(0.88)} style={{ marginLeft: 2, position: 'relative', cursor: 'pointer', display: 'flex', ...pressStyle }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={ink} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8h12l-1.2 12H7.2L6 8zM9 8V6a3 3 0 016 0v2" /></svg>
        {cart > 0 && (
          <span key={cart} style={{
            animation: 'nsBadgePop .38s cubic-bezier(.2,.8,.25,1)',
            position: 'absolute', top: -5, right: -6, minWidth: 16, height: 16, borderRadius: 16, boxSizing: 'border-box',
            background: T.teal, display: 'flex', alignItems: 'center', justifyContent: 'center',
            font: `700 10px/1 ${T.sans}`, color: '#0E2124', padding: '0 4px',
          }}>{cart}</span>
        )}
      </span>
      ) : null}
    </div>
  );
}

function Screen({ children, bg, bar }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: bg, position: 'relative' }}>
      <TopBar bg={bg} {...(bar || {})} />
      {children}
    </div>
  );
}

const BRANDS = ['YAXUN', 'RF4', 'SUNSHINE', 'AIXUN', 'QUICK', 'YIHUA', 'RELIFE', 'SUGON', 'MECHANIC', 'WANLEE', 'KADA', 'SOPTOP', '2UUL', 'QIANLI', 'MA ANT', 'KAISI', 'AIDA', 'FLYCDI', 'AIFEN', 'OSS', 'JYD', 'YYD'];

/* ── 1a — Editorial ──────────────────────────────────────── */
function NasanHomeEditorial({ bare, onMenu, onNav, cartCount , onLang } = {}) {
  const D = frame(bare, 'ios');
  const li = useLang();
  const heroP = liveCatalog().find(x => x[4] === nsSet('hero', 'code', '1402')) || ['SUGON 3010PM', '30V 10A supply', 'Sugon', 'Power', '1402', 'supply'];
  /* One card per category, each from a different brand where the catalog allows it.
     Reordering alone was not enough: picking the first product of each category made
     the pool 4/5 one brand (YAXUN leads four categories), so the run of duplicates
     just moved down the row. Choose each category's representative from a brand not
     already used instead. */
  const benchPicks = React.useMemo(() => {
    const all = liveCatalog();
    const out = [];
    const usedBrands = new Set();
    const usedCodes = new Set();
    const take = (p) => {
      out.push([p[0], p[1], p[4], p[5], p[2]]);
      usedBrands.add(p[2]);
      usedCodes.add(p[4]);
    };
    const cats = [];
    for (const p of all) if (!cats.includes(p[3])) cats.push(p[3]);
    for (const c of cats) {
      const cands = all.filter(p => p[3] === c && !usedCodes.has(p[4]));
      take(cands.find(p => !usedBrands.has(p[2])) || cands[0]);
    }
    /* Fill to eight, still preferring unused brands and never repeating the
       previous card's brand. */
    while (out.length < 8) {
      const last = out[out.length - 1][4];
      const rest = all.filter(p => !usedCodes.has(p[4]));
      if (!rest.length) break;
      const pick = rest.find(p => !usedBrands.has(p[2]))
        || rest.find(p => p[2] !== last)
        || rest[0];
      take(pick);
    }
    return out;
  }, [liveCatalog().length]);
  return (
    <D>
      <Screen bg={T.paper} bar={{ onMenu, onCart: () => onNav && onNav('Cart'), cart: cartCount, onLang }}>
        <ScrollArea style={{ paddingTop: 96 }} onRefresh={() => {}}>
          <h1 style={{ margin: '4px 24px 0', font: `700 40px/1.03 ${T.sans}`, letterSpacing: '-0.035em', color: T.ink, animation: 'nsRise .42s .04s cubic-bezier(.2,.8,.25,1) both' }}>
            {tr('heroTitle1', li)}<br /><span style={{ color: T.ink45 }}>{tr('heroTitle2', li)}</span>
          </h1>
          <p style={{ margin: '12px 24px 0', font: `400 15px/1.5 ${T.sans}`, color: T.ink70, maxWidth: 300, animation: 'nsRise .42s .1s cubic-bezier(.2,.8,.25,1) both' }}>
            {tr('heroLead', li)}
          </p>

          <div onClick={() => onNav && onNav('LCD')} {...press(0.985)} style={{
            margin: '26px 16px 0', borderRadius: 26, padding: '26px 26px',
            background: 'linear-gradient(160deg, #22585E 0%, #20262A 72%)', cursor: 'pointer',
            display: 'flex', gap: 18, alignItems: 'center', overflow: 'hidden',
            animation: 'nsCardIn .46s .12s cubic-bezier(.2,.8,.25,1) both', ...pressStyle,
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ font: `600 11px/1 ${T.sans}`, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.teal }}>{tr('newLcd', li)}</div>
              <div style={{ margin: '10px 0 0', font: `700 23px/1.12 ${T.sans}`, letterSpacing: '-0.025em', color: '#fff' }}>Redmi 9A LCD<br /><span style={{ fontWeight: 500, color: 'rgba(255,255,255,0.72)' }}>{tr('lcdFits', li)}</span></div>
              <div style={{ marginTop: 14, display: 'inline-flex', padding: '9px 17px', borderRadius: 100, background: T.teal, font: `600 13.5px/1 ${T.sans}`, color: '#0E2124' }}>{tr('viewLcd', li)}</div>
            </div>
            <div style={{
              width: 58, height: 104, flex: 'none', borderRadius: 13, background: '#FFFFFF', padding: 5,
              border: '1px solid rgba(255,255,255,0.6)', boxShadow: '0 12px 26px rgba(0,0,0,0.35)', transform: 'rotate(-6deg)',
            }}>
              <div style={{
                position: 'relative', width: '100%', height: '100%', borderRadius: 9, overflow: 'hidden',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: '#3FB2BD',
              }}>
                {[0.35, 0.95, 1.55].map(d => (
                  <div key={d} style={{
                    position: 'absolute', width: 30, height: 30, borderRadius: '50%',
                    border: '1.5px solid rgba(255,255,255,0.85)',
                    animation: 'nsRing 2.6s ' + d + 's cubic-bezier(.22,.7,.3,1) infinite',
                  }} />
                ))}
                <img src={LOGO} alt="" style={{
                  width: 24, height: 24, objectFit: 'contain', position: 'relative',
                  animation: 'nsLogoIn 1.1s .3s cubic-bezier(.2,.8,.25,1) both',
                  filter: 'drop-shadow(0 3px 6px rgba(32,38,42,0.18))',
                }} />
              </div>
            </div>
          </div>

          <div style={{
            margin: '12px 16px 0', borderRadius: 26, padding: '30px 26px',
            background: 'linear-gradient(160deg, #22585E 0%, #20262A 72%)',
            display: 'flex', gap: 18, alignItems: 'center', overflow: 'hidden',
            animation: 'nsCardIn .46s .2s cubic-bezier(.2,.8,.25,1) both',
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ font: `600 11px/1 ${T.sans}`, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.teal }}>{tr('newArrival', li)}</div>
              <div style={{ margin: '10px 0 0', font: `700 25px/1.12 ${T.sans}`, letterSpacing: '-0.025em', color: '#fff' }}>{heroP[0]}<br />{localSub(heroP[1], li)}</div>
              <div onClick={() => onNav && onNav('product:' + heroP[4])} style={{ marginTop: 16, display: 'inline-flex', padding: '9px 17px', borderRadius: 100, background: T.teal, font: `600 13.5px/1 ${T.sans}`, color: '#0E2124', cursor: 'pointer' , ...pressStyle }} {...press(0.975)}>{tr('viewProduct', li)}</div>
            </div>
            <ToolShot w={86} kind="supply" dark />
          </div>

          <div style={{ display: 'flex', gap: 9, padding: '24px 16px 0', overflowX: 'auto', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }} ref={dragScroll}>
            {['All', 'Soldering', 'Microscope', 'Power', 'Hot air', 'Hand tools'].map((c, i) => (
              <div key={c} onClick={() => onNav && onNav('cat:' + c)} {...press(0.94)} style={{
                ...pressStyle,
                padding: '9px 15px', borderRadius: 100, whiteSpace: 'nowrap', cursor: 'pointer',
                background: i === 0 ? T.ink : T.white, color: i === 0 ? '#fff' : T.ink,
                border: `1px solid ${i === 0 ? T.ink : T.line}`, font: `600 13px/1 ${T.sans}`,
              }}>{tr(c, li)}</div>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', padding: '26px 24px 0' }}>
            <h2 style={{ margin: 0, font: `700 20px/1 ${T.sans}`, letterSpacing: '-0.02em', color: T.ink }}>{tr('benchEssentials', li)}</h2>
            <span onClick={() => onNav && onNav('cat:All')} style={{ font: `600 13px/1 ${T.sans}`, color: T.teal, cursor: 'pointer' }}>{tr('seeAll', li)}</span>
          </div>
          <div style={{ display: 'flex', gap: 12, padding: '14px 16px 22px', overflowX: 'auto', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }} ref={dragScroll}>
            {benchPicks.map(([n, s, p, k], ri) => (
              <div key={n} onClick={() => onNav && onNav('product:' + p)}
                onPointerDown={e => { e.currentTarget.style.transform = 'scale(.97)'; }}
                onPointerUp={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                onPointerLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                style={{ width: 168, boxSizing: 'border-box', flex: 'none', background: T.white, borderRadius: 20, border: `1px solid ${T.line}`, padding: 14, cursor: 'pointer', transition: 'transform .14s', animation: 'nsCardIn .38s cubic-bezier(.2,.8,.25,1) both', animationDelay: (0.26 + ri * 0.07) + 's' }}>
                <div style={{ display: 'flex', justifyContent: 'center', padding: '2px 0 10px' }}><ToolShot w={86} kind={k} /></div>
                <Pill label={tr('inStock', li)} />
                <div style={{ margin: '9px 0 2px', font: `600 14.5px/1.2 ${T.sans}`, color: T.ink }}>{n}</div>
                <div style={{ font: `400 12px/1.3 ${T.sans}`, color: T.ink45 }}>{s}</div>
                <div style={{ marginTop: 8, font: `600 13px/1 ${T.sans}`, color: T.teal }}>{tr('viewDetails', li)}</div>
              </div>
            ))}
          </div>

          <h2 style={{ margin: '0 24px', font: `700 20px/1 ${T.sans}`, letterSpacing: '-0.02em', color: T.ink }}>{tr('shopByBrand', li)}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, padding: '14px 20px 24px' }}>
            {BRANDS.map((b, bi) => (
              <div key={b} onClick={() => onNav && onNav('brand:' + b)} {...press(0.94)} style={{
                padding: '10px 14px', borderRadius: 12, background: T.white, cursor: 'pointer',
                border: `1px solid ${T.line}`, font: `600 13px/1 ${T.sans}`, color: T.ink,
                ...pressStyle, animation: 'nsCardIn .3s cubic-bezier(.2,.8,.25,1) both', animationDelay: (bi * 0.03) + 's',
              }}>{b}</div>
            ))}
          </div>
        </ScrollArea>
        <TabBar active="Shop" onNav={onNav} />
      </Screen>
    </D>
  );
}

/* ── 1b — Catalog grid ───────────────────────────────────── */
function NasanHomeGrid({ bare, onMenu, onNav, cartCount , onLang } = {}) {
  const D = frame(bare, 'ios');
  const li = useLang();
  const items = [
    ['YX-AK49', 'Trinocular microscope', '', 'scope'],
    ['RF4 RF-B52', 'Stereo microscope', '', 'scope'],
    ['YIHUA 3010D-IV', '30V 10A DC supply', '', 'supply'],
    ['RF-305A', '30V 5A supply, short remover', '', 'supply'],
    ['JYD-1503HD', '15V DC regulated supply', '', 'supply'],
    ['Invite 502J', 'Mini analog supply 5V 2A', '', 'supply'],
  ];
  return (
    <D>
      <Screen bg={T.white} bar={{ onMenu, onCart: () => onNav && onNav('Cart'), cart: cartCount, onLang }}>
        <ScrollArea style={{ paddingTop: 96 }} onRefresh={() => {}}>
          <div style={{
            position: 'sticky', top: 0, zIndex: 5, background: 'rgba(255,255,255,0.94)',
            backdropFilter: 'blur(18px)', padding: '12px 20px 12px', borderBottom: `1px solid ${T.line}`,
          }}>
            <div style={{ marginTop: 0, height: 38, borderRadius: 11, background: '#F0EFEC', display: 'flex', alignItems: 'center', gap: 8, padding: '0 12px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.ink45} strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="M16.2 16.2L21 21" /></svg>
              <span style={{ font: `400 14.5px/1 ${T.sans}`, color: T.ink45 }}>Search tools, brands, part no.</span>
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 12, overflowX: 'auto', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }} ref={dragScroll}>
              {['All', 'Soldering', 'Hot air', 'Microscope', 'Power'].map((c, i) => (
                <div key={c} onClick={() => onNav && onNav('cat:' + c)} style={{
                  padding: '7px 13px', borderRadius: 8, whiteSpace: 'nowrap', cursor: 'pointer',
                  background: i === 0 ? T.ink : 'transparent', color: i === 0 ? '#fff' : T.ink70,
                  border: `1px solid ${i === 0 ? T.ink : T.line}`, font: `600 12.5px/1 ${T.sans}`,
                }}>{tr(c, li)}</div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', padding: '18px 20px 0' }}>
            <span style={{ font: `600 13px/1 ${T.sans}`, color: T.ink70 }}>1,340 products</span>
            <span style={{ font: `600 13px/1 ${T.sans}`, color: T.teal }}>Sort: Newest</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, padding: '14px 20px 24px' }}>
            {items.map(([n, s, p, k]) => (
              <div key={n} onClick={() => onNav && onNav('product:' + (liveCatalog().find(x => x[0] === n) || [])[4])} style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
                <div style={{ background: '#F4F3F0', borderRadius: 16, padding: '10px 0', display: 'flex', justifyContent: 'center' }}>
                  <ToolShot w={92} kind={k} />
                </div>
                <div style={{ marginTop: 9, font: `600 14px/1.2 ${T.sans}`, color: T.ink }}>{n}</div>
                <div style={{ marginTop: 2, font: `400 12px/1.3 ${T.sans}`, color: T.ink45 }}>{s}</div>
                <div style={{ marginTop: 6, font: `600 12.5px/1 ${T.sans}`, color: T.teal }}>View details</div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <TabBar active="Shop" />
      </Screen>
    </D>
  );
}

/* ── 1c — Dark premium ───────────────────────────────────── */
function NasanHomeDark({ bare, onMenu, onNav, onBack, onAdd, cartCount, code, onLang } = {}) {
  const li = useLang();
  const [added, setAdded] = React.useState(false);
  const D = frame(bare, 'ios');
  const cat0 = liveCatalog();
  const p = cat0.find(x => x[4] === code) || cat0[0] || ['RF4 RF-6558PRO', 'Trinocular microscope', 'RF4', 'Microscope', '1642', 'scope'];
  const [pName, pSub, pBrand, pCat, pCode, pKind] = p;
  const w = 'rgba(255,255,255,';
  const [specsOpen, setSpecsOpen] = React.useState(false);
  const [waMsg, setWaMsg] = React.useState(null);
  return (
    <D dark>
      <Screen bg="#121618" bar={{ onBack, onMenu, onCart: () => onNav && onNav('Cart'), cart: cartCount, onLang }}>
        <ScrollArea style={{ paddingTop: 96 }} onRefresh={() => {}}>
          <div style={{
            marginTop: 4, padding: '30px 24px 34px', overflow: 'hidden',
            background: 'radial-gradient(120% 80% at 50% 8%, rgba(63,178,189,0.22) 0%, rgba(18,22,24,0) 62%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
          }}>
            <div style={{ font: `600 11px/1 ${T.sans}`, letterSpacing: '0.12em', textTransform: 'uppercase', color: T.teal }}>{pBrand} · {pCat}</div>
            <h1 style={{ margin: '12px 0 0', textAlign: 'center', font: `700 32px/1.08 ${T.sans}`, letterSpacing: '-0.03em', color: '#fff' }}>{pName}</h1>
            <div style={{ marginTop: 6, font: `400 14px/1 ${T.sans}`, color: `${w}0.55)` }}>{pSub}</div>
            <div style={{ marginTop: 16 }}><ToolShot w={150} kind={pKind} dark /></div>
            <div style={{ marginTop: 22, display: 'flex', gap: 10, width: '100%' }}>
                <div onClick={() => { onAdd && onAdd([pName, pSub, '[ ' + pCode + ' ]', pKind, 1]); setAdded(true); setTimeout(() => setAdded(false), 1600); }}
                style={{ flex: 1, textAlign: 'center', padding: '13px 0', borderRadius: 100, background: added ? '#2C8F99' : T.teal, font: `600 14.5px/1 ${T.sans}`, color: '#0E2124', cursor: 'pointer', transition: 'background .2s' }}>{tr(added ? 'addedToCart' : 'addToCart', li)}</div>
              <div onClick={() => setSpecsOpen(true)} {...press(0.97)} style={{ flex: 1, textAlign: 'center', padding: '13px 0', borderRadius: 100, border: `1px solid ${w}0.22)`, font: `600 14.5px/1 ${T.sans}`, color: '#fff', cursor: 'pointer' }}>{tr('specs', li)}</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 10, padding: '4px 20px 0' }}>
            {[[tr('genuine', li), tr('partsOnly', li)], ['2026', tr('modelYear', li)], ['[ ' + pCode + ' ]', tr('productCode', li)]].map(([a, b]) => (
              <div key={a} style={{ flex: 1, padding: '13px 12px', borderRadius: 14, background: `${w}0.05)`, border: `1px solid ${w}0.08)` }}>
                <div style={{ font: `700 15px/1 ${T.sans}`, color: '#fff', whiteSpace: 'nowrap' }}>{a}</div>
                <div style={{ marginTop: 4, font: `400 11.5px/1 ${T.sans}`, color: `${w}0.5)` }}>{b}</div>
              </div>
            ))}
          </div>

          <h2 style={{ margin: '28px 24px 0', font: `700 19px/1 ${T.sans}`, letterSpacing: '-0.02em', color: '#fff' }}>{tr('workstations', li)}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '14px 20px 24px' }}>
            {[[tr('solderRework', li), 'AIXUN · QUICK · YIHUA', 'station', '#2A3B3D', 'Soldering'],
              [tr('powerDiag', li), 'SUNSHINE · AIDA · AIFEN', 'supply', '#33302B', 'Power']].map(([n, s, k, bg, catKey]) => (
              <div key={n} onClick={() => onNav && onNav('cat:' + catKey)} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 14, borderRadius: 18, background: bg, border: `1px solid ${w}0.07)`, cursor: 'pointer' }}>
                <ToolShot w={54} kind={k} dark />
                <div style={{ flex: 1 }}>
                  <div style={{ font: `600 15px/1.2 ${T.sans}`, color: '#fff' }}>{n}</div>
                  <div style={{ marginTop: 3, font: `400 12.5px/1 ${T.sans}`, color: `${w}0.5)` }}>{s}</div>
                </div>
                <svg data-flip="1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={T.teal} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg>
              </div>
            ))}
          </div>
        </ScrollArea>
        <TabBar active="Shop" dark onNav={onNav} />
        {specsOpen && (
          <SpecsSheet kind={pKind} name={pName} code={pCode} brand={pBrand} cat={pCat}
            onClose={() => setSpecsOpen(false)}
            onAsk={() => { setSpecsOpen(false); setWaMsg(tr('waPriceMsg', li) + '\n· ' + pName + ' [ ' + pCode + ' ]'); }} />
        )}
        {waMsg != null && <WhatsAppSheet message={waMsg} onClose={() => setWaMsg(null)} />}
      </Screen>
    </D>
  );
}

/* ── 1d — Android (Material 3) port of 1a ────────────────── */
function NasanHomeAndroid({ bare, onMenu, onNav, cartCount , onLang } = {}) {
  const D = frame(bare, 'android');
  const li = useLang();
  const heroP = liveCatalog().find(x => x[4] === nsSet('hero', 'code', '1402')) || ['SUGON 3010PM', '30V 10A supply', 'Sugon', 'Power', '1402', 'supply'];
  return (
    <D>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: T.paper, fontFamily: T.roboto, position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 22, background: T.paper, borderBottom: `1px solid ${T.line}`, zIndex: 20, pointerEvents: 'none' }} />
        <ScrollArea>
          <div style={{ padding: '18px 16px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span onClick={onMenu} style={{ cursor: 'pointer', display: 'flex' }}><MenuIcon color={T.ink} size={22} /></span>
              <Mark size={18} font={T.roboto} />
            </div>
            <div style={{ display: 'flex', gap: 18 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T.ink} strokeWidth="1.8" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="M16.2 16.2L21 21" /></svg>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T.ink} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8h12l-1.2 12H7.2L6 8zM9 8V6a3 3 0 016 0v2" /></svg>
            </div>
          </div>

          <h1 style={{ margin: '20px 16px 0', font: `400 32px/1.1 ${T.roboto}`, color: T.ink }}>
            {tr('heroTitle1', li)}<br /><span style={{ color: T.ink45 }}>{tr('heroTitle2', li)}</span>
          </h1>

          <div style={{
            margin: '20px 16px 0', borderRadius: 28, padding: '24px 22px',
            background: 'linear-gradient(160deg, #22585E 0%, #20262A 72%)',
            display: 'flex', gap: 16, alignItems: 'center',
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ font: `500 11px/1 ${T.roboto}`, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.teal }}>{tr('newArrival', li)}</div>
              <div style={{ margin: '10px 0 0', font: `400 24px/1.15 ${T.roboto}`, color: '#fff' }}>{heroP[0]}<br />{localSub(heroP[1], li)}</div>
              <div onClick={() => onNav && onNav('product:' + heroP[4])} style={{ marginTop: 16, display: 'inline-flex', padding: '10px 20px', borderRadius: 100, background: T.teal, font: `500 14px/1 ${T.roboto}`, color: '#0E2124', cursor: 'pointer' , ...pressStyle }} {...press(0.975)}>{tr('viewProduct', li)}</div>
            </div>
            <ToolShot w={80} kind="supply" dark />
          </div>

          <div style={{ display: 'flex', gap: 8, padding: '20px 16px 0', overflowX: 'auto', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }} ref={dragScroll}>
            {['All', 'Soldering', 'Microscope', 'Power', 'Hot air', 'Hand tools'].map((c, i) => (
              <div key={c} onClick={() => onNav && onNav('cat:' + c)} style={{
                padding: '8px 16px', borderRadius: 8, whiteSpace: 'nowrap', cursor: 'pointer',
                background: i === 0 ? 'rgba(63,178,189,0.20)' : 'transparent',
                border: `1px solid ${i === 0 ? 'transparent' : 'rgba(32,38,42,0.22)'}`,
                font: `500 14px/1 ${T.roboto}`, color: i === 0 ? T.tealDeep : T.ink,
              }}>{tr(c, li)}</div>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 16px 0' }}>
            <h2 style={{ margin: 0, font: `500 18px/1 ${T.roboto}`, color: T.ink }}>{tr('benchEssentials', li)}</h2>
            <span onClick={() => onNav && onNav('cat:All')} style={{ font: `500 14px/1 ${T.roboto}`, color: T.tealDeep, cursor: 'pointer' }}>{tr('seeAll', li)}</span>
          </div>
          <div style={{ display: 'flex', gap: 12, padding: '14px 16px 20px', overflowX: 'auto', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }} ref={dragScroll}>
            {[['RF4 RF-6558PRO', 'Trinocular microscope, 6.5–58X', '1642', 'scope'],
              ['SUNSHINE P-3005D', '30V 5A regulated DC supply', '1801', 'supply']].map(([n, s, p, k]) => (
              <div key={n} onClick={() => onNav && onNav('product:' + p)} style={{ width: 166, boxSizing: 'border-box', flex: 'none', background: T.white, borderRadius: 16, padding: 14, cursor: 'pointer' }}>
                <div style={{ display: 'flex', justifyContent: 'center', padding: '2px 0 10px' }}><ToolShot w={86} kind={k} /></div>
                <span style={{ font: `500 11px/1 ${T.roboto}`, padding: '5px 8px', borderRadius: 6, background: 'rgba(63,178,189,0.16)', color: T.tealDeep }}>In stock</span>
                <div style={{ margin: '9px 0 2px', font: `500 15px/1.2 ${T.roboto}`, color: T.ink }}>{n}</div>
                <div style={{ font: `400 12.5px/1.3 ${T.roboto}`, color: T.ink45 }}>{s}</div>
                <div style={{ marginTop: 8, font: `500 13.5px/1 ${T.roboto}`, color: T.tealDeep }}>View details</div>
              </div>
            ))}
          </div>

          <h2 style={{ margin: '0 16px', font: `500 18px/1 ${T.roboto}`, color: T.ink }}>{tr('shopByBrand', li)}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, padding: '14px 16px 20px' }}>
            {BRANDS.map((b, bi) => (
              <div key={b} onClick={() => onNav && onNav('brand:' + b)} style={{ padding: '10px 14px', borderRadius: 10, background: T.white, font: `500 13px/1 ${T.roboto}`, color: T.ink, cursor: 'pointer' }}>{b}</div>
            ))}
          </div>
        </ScrollArea>

        <div style={{ display: 'flex', padding: '10px 4px 12px', background: '#EDEBE6' }}>
          {['Shop', 'Brands', 'Search', 'Orders', 'You'].map((label) => {
            const on = label === 'Shop';
            return (
              <div key={label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                <div style={{ padding: '4px 18px', borderRadius: 100, background: on ? 'rgba(63,178,189,0.28)' : 'transparent' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={on ? T.ink : T.ink70} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                    <path d={{
                      Shop: 'M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1V9.5z',
                      Brands: 'M4 5h16v5H4zM4 14h16v5H4z',
                      Search: 'M11 4a7 7 0 105.2 11.7L21 20.5',
                      Orders: 'M4 6h16v14H4zM8 3v5M16 3v5',
                      You: 'M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c1.6-4 14.4-4 16 0',
                    }[label]} />
                  </svg>
                </div>
                <span style={{ font: `${on ? 500 : 400} 12px/1 ${T.roboto}`, color: on ? T.ink : T.ink70 }}>{label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </D>
  );
}


/* ── Welcome animation ───────────────────────────────────── */
/* Keyframes are injected into document.head once, at module scope. Rendering them
   inside NasanSplash tied every animation in the app to that component's lifetime —
   unmounting the splash removed the whole stylesheet. */
const SPLASH_CSS = `
@keyframes nsRing{0%{transform:scale(.72);opacity:0}45%{opacity:.55}100%{transform:scale(1.9);opacity:0}}
@keyframes nsLogoIn{0%{transform:scale(.62);opacity:0;filter:blur(6px)}62%{transform:scale(1.06);opacity:1;filter:blur(0)}100%{transform:scale(1);opacity:1}}
@keyframes nsRise{0%{transform:translateY(16px);opacity:0}100%{transform:translateY(0);opacity:1}}
@keyframes nsBar{0%{transform:scaleX(0)}100%{transform:scaleX(1)}}
@keyframes nsGlow{0%,100%{opacity:.5}50%{opacity:1}}
@keyframes nsExit{0%{transform:scale(1);opacity:1;filter:blur(0)}100%{transform:scale(1.14);opacity:0;filter:blur(10px)}}
@keyframes nsExitLogo{0%{transform:scale(1);opacity:1}100%{transform:scale(2.6);opacity:0}}
@keyframes nsFlash{0%{opacity:0}40%{opacity:.85}100%{opacity:0}}
@keyframes nsSlideIn{from{transform:translateX(-102%)}to{transform:translateX(0)}}
@keyframes nsSheetUp{from{transform:translateY(100%)}to{transform:translateY(0)}}
@keyframes nsSheetDown{from{transform:translateY(0)}to{transform:translateY(100%)}}
@keyframes nsSpin{to{transform:rotate(360deg)}}
@keyframes nsCardOut{to{opacity:0;transform:translateX(-24px) scale(.97)}}
@keyframes nsPulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.45;transform:scale(.86)}}
@keyframes nsRiseIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
@keyframes nsPop{0%{transform:scale(.9)}60%{transform:scale(1.04)}100%{transform:scale(1)}}
[dir="rtl"] svg[data-flip]{transform:scaleX(-1)}
@keyframes nsFlow{from{background-position:120% 0}to{background-position:-120% 0}}
@keyframes nsPageIn{from{opacity:0;transform:translateX(38px) scale(.985)}to{opacity:1;transform:translateX(0) scale(1)}}
@keyframes nsPageBack{from{opacity:0;transform:translateX(-38px) scale(.985)}to{opacity:1;transform:translateX(0) scale(1)}}
@keyframes nsCardIn{from{opacity:0;transform:translateY(14px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}
@keyframes nsBadgePop{0%{transform:scale(.4)}60%{transform:scale(1.25)}100%{transform:scale(1)}}
@keyframes nsShimmer{0%{background-position:-180px 0}100%{background-position:180px 0}}
@keyframes nsFadeOut{from{opacity:1}to{opacity:0}}
`;

function NasanSplash({ platform = 'ios', bare, onDone } = {}) {
  const D = frame(bare, platform);
  const [run, setRun] = React.useState(0);
  const [leaving, setLeaving] = React.useState(false);
  const leave = React.useCallback(() => {
    if (!onDone) { setRun(r => r + 1); return; }
    setLeaving(true);
    setTimeout(onDone, 560);
  }, [onDone]);
  React.useEffect(() => { if (!onDone) return; const t = setTimeout(leave, 4440); return () => clearTimeout(t); }, [run, onDone, leave]);
  const font = platform === 'android' ? T.roboto : T.sans;
  const ring = (delay, size) => ({
    position: 'absolute', width: size, height: size, borderRadius: '50%',
    border: '1px solid rgba(63,178,189,0.55)',
    animation: `nsRing 2.6s ${delay}s cubic-bezier(.22,.7,.3,1) infinite`,
  });
  return (
    <D dark={platform !== 'android'}>
      <div key={run} onClick={leave} style={{
        animation: leaving ? 'nsExit .56s cubic-bezier(.5,0,.75,0) forwards' : undefined,
        height: '100%', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 0, cursor: 'pointer',
        background: 'radial-gradient(112% 62% at 50% 34%, #1E5A61 0%, #121618 62%, #0B0E10 100%)',
      }}>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 220, height: 220 }}>
          <div style={ring(0.35, 150)} />
          <div style={ring(0.95, 150)} />
          <div style={ring(1.55, 150)} />
          <img src={LOGO} alt="NASAN" style={{
            width: 104, height: 104, objectFit: 'contain', position: 'relative',
            animation: leaving ? 'nsExitLogo .56s cubic-bezier(.5,0,.75,0) forwards' : 'nsLogoIn 1.1s .12s cubic-bezier(.2,.8,.25,1) both',
            filter: 'drop-shadow(0 10px 30px rgba(63,178,189,0.35))',
          }} />
        </div>
        <div style={{ marginTop: 4, textAlign: 'center', animation: 'nsRise .7s 1.0s cubic-bezier(.2,.8,.25,1) both' }}>
          <div style={{ font: `700 30px/1 ${font}`, letterSpacing: '0.06em', color: '#fff' }}>NASAN</div>
          <div style={{ marginTop: 9, font: `500 11.5px/1 ${font}`, letterSpacing: '0.32em', textTransform: 'uppercase', color: T.teal }}>Company</div>
        </div>
        <div style={{ marginTop: 20, width: 44, height: 2, borderRadius: 2, background: 'rgba(63,178,189,0.9)', transformOrigin: 'left', animation: 'nsBar .7s 1.55s cubic-bezier(.2,.8,.25,1) both' }} />
        <div style={{ marginTop: 20, textAlign: 'center', animation: 'nsRise .7s 2.05s cubic-bezier(.2,.8,.25,1) both' }}>
          <div style={{ font: `400 14.5px/1.5 ${font}`, color: 'rgba(255,255,255,0.72)' }}>{tr('splashTag', nsLang())}</div>
          <div style={{ marginTop: 5, font: `400 12.5px/1.4 ${font}`, color: 'rgba(255,255,255,0.42)' }}>{tr('splashLoc', nsLang())}</div>
        </div>
        <div style={{ position: 'absolute', bottom: 54, display: 'flex', alignItems: 'center', gap: 8, animation: 'nsRise .6s 2.7s both' }}>
          <span style={{ width: 6, height: 6, borderRadius: 6, background: T.teal, animation: 'nsGlow 1.4s infinite' }} />
          <span style={{ font: `500 11.5px/1 ${font}`, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>{onDone ? 'Tap anywhere to enter' : 'Tap to replay'}</span>
        </div>
      </div>
    </D>
  );
}

/* ── Slide-out menu ──────────────────────────────────────── */
/* Official nasan Company pages, supplied by the owner. */
const SOCIALS = [
  ['TikTok', 'https://www.tiktok.com/@nasan.company', 'rgba(255,255,255,0.82)',
    'M16.2 3h-2.7v12.2a2.4 2.4 0 11-2.4-2.4c.2 0 .5 0 .7.1v-2.7a5.1 5.1 0 102.4 4.3V8.2a6 6 0 003.6 1.2V6.7a3.6 3.6 0 01-1.6-.5 3.6 3.6 0 01-1.6-3.2z', 'TikTok'],
  ['Facebook', 'https://www.facebook.com/share/1JHQbX6fyc/', 'rgba(255,255,255,0.82)',
    'M13.5 21v-8h2.7l.4-3.2h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.6V3.5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.2v2.2H7.6V13h2.7v8h3.2z', 'Facebook'],
  ['Instagram', 'https://www.instagram.com/nasan.company.iq', 'none',
    'M8 3h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5zM12 8.4a3.6 3.6 0 100 7.2 3.6 3.6 0 000-7.2zM17.3 6.6v.02', 'Instagram'],
  ['X', 'https://x.com/nasancompany', 'rgba(255,255,255,0.82)',
    'M3.4 3h4.3l4.5 6.1L17.2 3h3.4l-6.6 7.6L21 21h-4.3l-4.8-6.5L6.6 21H3.2l7-8.1L3.4 3z', 'X'],
  ['Google Maps', 'https://google.com/maps/place/HC4V%2BC4R+%D9%BE%D8%B4%D8%AA%D9%89+%D8%A8%D8%A7%D8%B2%D8%A7%D8%B1%D9%89+%D8%AC%D9%87+%D9%88%D8%A7%D8%B2%D9%87+%D9%83%D9%87+(NASAN),+Sulaymaniyah', 'none',
    'M12 21s7-6.1 7-11a7 7 0 10-14 0c0 4.9 7 11 7 11zM12 12.4a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8z', 'Maps'],
];

const WA_CONTACTS = [
  ['بەڕێوەبەری گشتی ۱ (General Contact 1)', '', '+964 750 111 3699', '۱'],
  ['بەڕێوەبەری گشتی ۲ (General Contact 2)', '', '+964 770 272 0001', '۲'],
  ['Yadgar', 'Manager', '+964 770 152 0892', 'Y'],
  ['Mohamed Yadgar', 'Employee', '+964 770 153 0892', 'M'],
  ['Ahmed', 'Employee', '+964 770 153 0893', 'A'],
  ['Barzan', 'Employee', '+964 770 153 0894', 'B'],
  ['Masode', 'Employee', '+964 770 153 0896', 'M'],
  ['Mohamed Faruq', 'Employee', '+964 770 153 0897', 'M'],
  ['Renas', 'Employee', '+964 770 414 9292', 'R'],
];

const SPEC_ROWS = {
  supply: [
    ['Output', '0–30V / 0–5A adjustable'],
    ['Display', '4-digit V + A readout'],
    ['Protection', 'Short-circuit & overload'],
    ['Input', '220V AC 50/60Hz'],
    ['Extras', 'Short remover, fine + coarse dials'],
  ],
  station: [
    ['Power', '60–1000W depending on model'],
    ['Temp range', '100–480 °C'],
    ['Warm-up', 'Under 10 seconds'],
    ['Handle', 'Anti-static, sleep on stand'],
    ['Tips', 'Standard replaceable cartridges'],
  ],
  scope: [
    ['Zoom', '6.5–58X continuous'],
    ['Head', 'Trinocular, camera port'],
    ['Working distance', '100mm standard barlow'],
    ['Stand', 'Double-arm boom, full motion'],
    ['Light', 'Adjustable LED ring'],
  ],
  hand: [
    ['Material', 'Hardened anti-static steel'],
    ['Finish', 'Non-magnetic, precision ground'],
    ['Use', 'Board-level micro components'],
    ['Set', 'Sold individually or as a kit'],
  ],
};

function SpecsSheet({ onClose, kind, name, code, brand, cat, onAsk }) {
  const li = useLang();
  const rows = SPEC_ROWS[kind] || SPEC_ROWS.station;
  const w = 'rgba(255,255,255,';
  return (
    <div onClick={onClose} style={{
      position: 'absolute', inset: 0, zIndex: 70, background: 'rgba(8,11,12,0.62)',
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      animation: 'nsFade .16s ease both',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: '#181E20', borderRadius: '24px 24px 0 0', padding: '12px 22px 26px',
        maxHeight: '82%', overflowY: 'auto', animation: 'nsSheetUp .26s cubic-bezier(.2,.8,.25,1) both',
      }}>
        <div style={{ width: 38, height: 4, borderRadius: 4, background: `${w}0.18)`, margin: '0 auto 16px' }} />
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ font: `600 10.5px/1 ${T.sans}`, letterSpacing: '0.12em', textTransform: 'uppercase', color: T.teal }}>{brand} · {tr(cat, li)}</div>
            <div style={{ marginTop: 7, font: `700 19px/1.15 ${T.sans}`, letterSpacing: '-0.02em', color: '#fff' }}>{name}</div>
            <div style={{ marginTop: 5, font: `600 12px/1 ${T.sans}`, letterSpacing: '0.06em', color: `${w}0.45)` }}>[ {code} ]</div>
          </div>
          <span onClick={onClose} {...press(0.9)} style={{ cursor: 'pointer', padding: 4, flex: 'none' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={`${w}0.5)`} strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </span>
        </div>
        <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column' }}>
          {rows.map(([k, v], i) => (
            <div key={k} style={{
              display: 'flex', gap: 14, alignItems: 'baseline', padding: '12px 0',
              borderTop: i ? `1px solid ${w}0.07)` : 'none',
              animation: 'nsRiseIn .3s cubic-bezier(.2,.8,.25,1) both', animationDelay: (0.03 * i) + 's',
            }}>
              <div style={{ width: 118, flex: 'none', font: `500 12.5px/1.3 ${T.sans}`, color: `${w}0.45)` }}>{k}</div>
              <div style={{ flex: 1, font: `500 13.5px/1.35 ${T.sans}`, color: '#fff' }}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 16, font: `400 12.5px/1.5 ${T.sans}`, color: `${w}0.42)` }}>{tr('specSheetLead', li)}</div>
        <div onClick={onAsk} {...press(0.98)} style={{
          marginTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9,
          padding: '14px 0', borderRadius: 100, background: T.teal, cursor: 'pointer',
          font: `600 14.5px/1 ${T.sans}`, color: '#0E2124',
        }}>
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#0E2124" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16v12H8l-4 4V5z" /></svg>
          {tr('askAboutSpecs', li)}
        </div>
      </div>
    </div>
  );
}

function WhatsAppSheet({ onClose, message }) {
  const li = useLang();
  const suffix = message ? '?text=' + encodeURIComponent(message) : '';
  return (
    <div onClick={onClose} style={{
      position: 'absolute', inset: 0, zIndex: 80, background: 'rgba(10,14,16,0.55)',
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      animation: 'nsFade .16s ease both',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: '#121618', borderRadius: '24px 24px 0 0',
        animation: 'nsSheetUp .28s cubic-bezier(.2,.8,.25,1) both',
        maxHeight: '84%', display: 'flex', flexDirection: 'column', overflow: 'hidden',
      }}>
        <div style={{ padding: '20px 20px 14px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: 11 }}>
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke={T.teal} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none' }}><path d="M4 5h16v12H8l-4 4V5z" /></svg>
          <span style={{ flex: 1, font: `700 17px/1.2 ${T.sans}`, letterSpacing: '-0.02em', color: '#fff' }}>{tr('contactOnWA', li)}</span>
          <span onClick={onClose} {...press(0.85)} style={{ ...pressStyle, cursor: 'pointer', display: 'flex', padding: 2 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </span>
        </div>
        <div style={{ padding: '14px 20px 4px', font: `400 12.5px/1.5 ${T.sans}`, color: 'rgba(255,255,255,0.5)' }}>
          {tr('chooseWho', li)}
        </div>
        <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '10px 14px 24px', scrollbarWidth: 'none' }}>
          {WA_CONTACTS.map(([nm, role, tel, initial], wi) => (
            <a key={tel} href={'https://wa.me/' + tel.replace(/[^0-9]/g, '') + suffix} target="_blank" rel="noopener noreferrer" {...press(0.985)} style={{
              ...pressStyle, textDecoration: 'none',
              display: 'flex', alignItems: 'center', gap: 13, padding: '13px 14px', marginBottom: 8,
              borderRadius: 14, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)',
              animation: 'nsRise .28s cubic-bezier(.2,.8,.25,1) both', animationDelay: (wi * 0.035) + 's',
            }}>
              <span style={{
                width: 38, height: 38, borderRadius: 38, flex: 'none', background: T.teal,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                font: `700 14px/1 ${T.sans}`, color: '#0E2124',
              }}>{initial}</span>
              <span style={{ flex: 1, minWidth: 0 }}>
                <span style={{ display: 'block', font: `600 14.5px/1.25 ${T.sans}`, color: '#fff' }}>{nm}</span>
                <span style={{ display: 'block', marginTop: 3, font: `400 12px/1.3 ${T.sans}`, color: 'rgba(255,255,255,0.45)' }}>
                  {role ? role + ' · ' + tel : tel}
                </span>
              </span>
              <svg data-flip="1" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={T.teal} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none' }}><path d="M9 5l7 7-7 7" /></svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

const MENU = [
  ['aboutUs', 'ourStorySub', 'M12 8v5M12 16.5v.5M12 3a9 9 0 100 18 9 9 0 000-18z'],
  ['locations', 'threeShopsSub', 'M12 21s7-6.1 7-11a7 7 0 10-14 0c0 4.9 7 11 7 11zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z'],
  ['requestTool', 'requestToolSub', 'M12 5v14M5 12h14'],
];

function NasanMenu({ bare, onClose, onNav } = {}) {
  const D = frame(bare, 'ios');
  const li = useLang();
  const [waOpen, setWaOpen] = React.useState(false);
  const [waMsg, setWaMsg] = React.useState('');
  const hrs = todayHoursLine(li);
  const closedToday = hrs.closed, todayOpen = hrs.open, todayHours = hrs.label;
  /* Drag the drawer left/right with finger or mouse. Follows the pointer 1:1,
     rubber-bands past fully open, and on release either snaps back or slides
     shut (past 35% of its width, or a quick flick). A 6px dead zone keeps taps
     on links working. */
  const W = 318;
  const [dx, setDx] = React.useState(0);
  const [dragging, setDragging] = React.useState(false);
  const [leaving, setLeaving] = React.useState(false);
  const [entered, setEntered] = React.useState(false);
  const dragRef = React.useRef(null);
  React.useEffect(() => { const t = setTimeout(() => setEntered(true), 280); return () => clearTimeout(t); }, []);
  const close = () => {
    if (leaving) return;
    setLeaving(true); setDragging(false); setDx(-W - 30);
    setTimeout(() => onClose && onClose(), 230);
  };
  const onDown = (e) => {
    if (leaving) return;
    dragRef.current = { x0: e.clientX, y0: e.clientY, t0: Date.now(), active: false, id: e.pointerId, el: e.currentTarget };
  };
  const onMove = (e) => {
    const d = dragRef.current;
    if (!d) return;
    const mx = e.clientX - d.x0, my = e.clientY - d.y0;
    if (!d.active) {
      if (Math.abs(mx) < 6 || Math.abs(mx) < Math.abs(my)) return;
      d.active = true; setDragging(true);
      try { d.el.setPointerCapture(d.id); } catch (err) {}
    }
    setDx(mx > 0 ? Math.min(28, mx * 0.25) : Math.max(-W, mx));
  };
  const onUp = (e) => {
    const d = dragRef.current;
    dragRef.current = null;
    if (!d || !d.active) return;
    const mx = e.clientX - d.x0;
    const v = mx / Math.max(1, Date.now() - d.t0);
    setDragging(false);
    if (mx < -W * 0.35 || v < -0.6) close();
    else setDx(0);
  };
  const progress = 1 - Math.min(1, Math.max(0, -dx / W));
  return (
    <D dark>
      <div style={{ height: '100%', position: 'relative', background: T.paper }}>
        {/* dimmed home behind */}
        <div onClick={close} style={{ position: 'absolute', inset: 0, background: '#20262A', opacity: 0.55 * progress, cursor: 'pointer', transition: dragging ? 'none' : 'opacity .23s ease' }} />
        <div onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}
          onClickCapture={e => { if (dragging) { e.stopPropagation(); e.preventDefault(); } }}
          style={{
          position: 'absolute', top: 0, bottom: 0, left: 0, width: W,
          background: '#141A1C', display: 'flex', flexDirection: 'column', zIndex: 2,
          animation: entered ? 'none' : 'nsSlideIn .26s cubic-bezier(.2,.8,.25,1) both',
          transform: entered ? 'translateX(' + dx + 'px)' : undefined,
          transition: dragging ? 'none' : 'transform .23s cubic-bezier(.2,.8,.25,1)',
          touchAction: 'pan-y', userSelect: dragging ? 'none' : undefined,
          cursor: dragging ? 'grabbing' : undefined,
          boxShadow: '18px 0 50px rgba(0,0,0,0.4)',
        }}>
          <div style={{ padding: '62px 24px 22px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <img src={LOGO} alt="" style={{ width: 46, height: 46, objectFit: 'contain' }} />
            <div style={{ marginTop: 14, font: `700 20px/1 ${T.sans}`, letterSpacing: '0.04em', color: '#fff' }}>NASAN</div>
            <div style={{ marginTop: 6, font: `500 10.5px/1 ${T.sans}`, letterSpacing: '0.24em', textTransform: 'uppercase', color: T.teal }}>Company</div>
            <div style={{ marginTop: 12, font: `400 12.5px/1.5 ${T.sans}`, color: 'rgba(255,255,255,0.45)' }}>Official mobile repair parts supplier</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', padding: '10px 12px' }}>
            {MENU.map(([key, sub, d], i) => (
              <div key={key} onClick={() => {
                if (i === 2) { setWaMsg(tr('waRequestMsg', li)); setWaOpen(true); return; }
                onNav && onNav('about');
              }} {...press(0.975)} style={{
                cursor: 'pointer', ...pressStyle,
                animation: 'nsRise .34s cubic-bezier(.2,.8,.25,1) both', animationDelay: (0.06 + i * 0.05) + 's',
                display: 'flex', alignItems: 'center', gap: 14, padding: '15px 14px',
                borderRadius: 14, background: i === 0 ? 'rgba(63,178,189,0.13)' : 'transparent',
              }}>
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke={i === 0 ? T.teal : 'rgba(255,255,255,0.7)'} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
                <div style={{ flex: 1 }}>
                  <div style={{ font: `600 15px/1.2 ${T.sans}`, color: '#fff' }}>{tr(key, li)}</div>
                  <div style={{ marginTop: 3, font: `400 12px/1.2 ${T.sans}`, color: 'rgba(255,255,255,0.42)' }}>{tr(sub, li)}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ height: 1, margin: '6px 26px', background: 'rgba(255,255,255,0.08)' }} />

          <div style={{ padding: '14px 26px 4px' }}>
            <div style={{ font: `500 9.5px/1.4 ${T.sans}`, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.38)' }}>
              {tr('officialPages', li)}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', gap: 7, marginTop: 12 }}>
              {SOCIALS.map(([name, href, fill, d, short], si) => (
                <a key={name} href={nsSet('social', name, href)} target="_blank" rel="noopener noreferrer" title={name} {...press(0.9)} style={{
                  ...pressStyle, borderRadius: 10, textDecoration: 'none', padding: '9px 0 7px',
                  background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5,
                  animation: 'nsRise .3s cubic-bezier(.2,.8,.25,1) both', animationDelay: (0.2 + si * 0.05) + 's',
                }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill={fill} stroke={fill === 'none' ? 'rgba(255,255,255,0.82)' : 'none'} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
                  <span style={{ font: `500 7.5px/1 ${T.sans}`, letterSpacing: 0, color: 'rgba(255,255,255,0.5)', whiteSpace: 'nowrap' }}>{short}</span>
                </a>
              ))}
            </div>
          </div>

          <div style={{ height: 1, margin: '14px 26px 6px', background: 'rgba(255,255,255,0.08)' }} />

          <div style={{ display: 'flex', flexDirection: 'column', padding: '4px 26px' }}>
            {[['shopAll', 'home'], ['categories', 'brands'], ['myOrders', 'orders'], ['findByCode', 'search']].map(([l, k]) => (
              <div key={l} onClick={() => onNav && onNav(k)} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '13px 0', cursor: 'pointer',
                font: `500 14.5px/1 ${T.sans}`, color: 'rgba(255,255,255,0.72)',
              }}>
                {tr(l, li)}
                <svg data-flip="1" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round"><path d="M9 5l7 7-7 7" /></svg>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 'auto', padding: '20px 26px 40px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <div onClick={() => { setWaMsg(''); setWaOpen(true); }} {...press(0.975)} style={{
              ...pressStyle, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9,
              padding: '13px 0', borderRadius: 100, background: T.teal,
              font: `600 14px/1 ${T.sans}`, color: '#0E2124',
            }}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#0E2124" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16v12H8l-4 4V5z" /></svg>
              {tr('messageUs', li)}
            </div>
            <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 7 }}>
              <span style={{ width: 6, height: 6, borderRadius: 6, flex: 'none', background: todayOpen ? '#4CD68A' : 'rgba(255,255,255,0.3)' }} />
              <span style={{ font: `400 11.5px/1.5 ${T.sans}`, color: 'rgba(255,255,255,0.5)' }}>{todayHours}</span>
            </div>
          </div>
        </div>
        {waOpen && <WhatsAppSheet message={waMsg} onClose={() => setWaOpen(false)} />}
      </div>
    </D>
  );
}

/* ── About us ────────────────────────────────────────────── */
const SHOPS = [
  ['Shop 1', 'Barzar Jawazaka', 'Shop Number 18, Sulaymaniyah', 'https://www.google.com/maps/search/?api=1&query=nasan+company+Barzar+Jawazaka+Sulaymaniyah'],
  ['Shop 2', 'Bazar Hama Sur', 'Shop Number 1, Sulaymaniyah', 'https://www.google.com/maps/search/?api=1&query=nasan+company+Bazar+Hama+Sur+Sulaymaniyah'],
  ['Shop 3', 'Kirkuk', 'Komary Street, Kirkuk', 'https://www.google.com/maps/search/?api=1&query=nasan+company+Komary+Street+Kirkuk'],
];

function NasanAbout({ bare, onBack, onLang, onNav } = {}) {
  const D = frame(bare, 'ios');
  const li = useLang();
  const [sect, setSect] = React.useState('aboutUs');
  const locRef = React.useRef(null);
  const brandRef = React.useRef(null);
  const onScroll = (e) => {
    const top = e.currentTarget.getBoundingClientRect().top + 120;
    const loc = locRef.current && locRef.current.getBoundingClientRect().top;
    const br = brandRef.current && brandRef.current.getBoundingClientRect().top;
    if (br != null && br < top) setSect('brandsWeStock');
    else if (loc != null && loc < top) setSect('locations');
    else setSect('aboutUs');
  };
  return (
    <D>
      <Screen bg={T.paper} bar={{ title: tr(sect, li), onBack, onLang }}>
        <ScrollArea style={{ paddingTop: 96 }} onScroll={onScroll} onRefresh={() => {}}>
          <div style={{ padding: '6px 24px 0' }}>
            <img src={LOGO} alt="" style={{ width: 56, height: 56, objectFit: 'contain' }} />
            <h1 style={{ margin: '18px 0 0', font: `700 30px/1.1 ${T.sans}`, letterSpacing: '-0.03em', color: T.ink }}>{tr('aboutHead', li)}</h1>
            <p style={{ margin: '14px 0 0', font: `400 15px/1.6 ${T.sans}`, color: T.ink70 }}>
              {tr('aboutStory', li)}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, padding: '24px 20px 0' }}>
            {[['23+', tr('yearsBiz', li)], [liveCatalog().length + '+', tr('productsAvail', li)], ['3', tr('shopLocations', li)], ['1000+', tr('techsServed', li)]].map(([a, b]) => (
              <div key={b} style={{ padding: '16px 16px', borderRadius: 16, background: T.white, border: `1px solid ${T.line}` }}>
                <div style={{ font: `700 24px/1 ${T.sans}`, letterSpacing: '-0.02em', color: T.ink }}>{a}</div>
                <div style={{ marginTop: 6, font: `400 12.5px/1.3 ${T.sans}`, color: T.ink45 }}>{b}</div>
              </div>
            ))}
          </div>

          <h2 ref={locRef} style={{ margin: '30px 24px 0', font: `700 20px/1 ${T.sans}`, letterSpacing: '-0.02em', color: T.ink }}>{tr('ourLocations', li)}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '14px 20px 0' }}>
            {SHOPS.map(([, , , href], si) => { const tag = tr('shopTag' + (si + 1), li), name = tr('shopName' + (si + 1), li), addr = tr('shopAddr' + (si + 1), li); return (
              <a key={tag} href={href} target="_blank" rel="noopener noreferrer" {...press(0.98)} style={{ animation: 'nsCardIn .3s cubic-bezier(.2,.8,.25,1) both', animationDelay: (si * 0.06) + 's', ...pressStyle, textDecoration: 'none', display: 'flex', gap: 13, padding: 16, borderRadius: 16, background: T.white, border: `1px solid ${T.line}`, cursor: 'pointer' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.teal} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 2, flex: 'none' }}><path d="M12 21s7-6.1 7-11a7 7 0 10-14 0c0 4.9 7 11 7 11z" /><circle cx="12" cy="10" r="2.4" /></svg>
                <div style={{ flex: 1 }}>
                  <div style={{ font: `500 10.5px/1 ${T.sans}`, letterSpacing: '0.14em', textTransform: 'uppercase', color: T.ink45 }}>{tag}</div>
                  <div style={{ marginTop: 7, font: `600 15px/1.2 ${T.sans}`, color: T.ink }}>{name}</div>
                  <div style={{ marginTop: 4, font: `400 13px/1.4 ${T.sans}`, color: T.ink70 }}>{addr}</div>
                </div>
                <span style={{ alignSelf: 'center', display: 'flex', alignItems: 'center', gap: 5, font: `600 12.5px/1 ${T.sans}`, color: T.teal, whiteSpace: 'nowrap' }}>
                  {tr('mapLabel', li)}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 5h5v5M19 5l-9 9M18 14v5H5V6h5" /></svg>
                </span>
              </a>
            ); })}
          </div>

          <h2 ref={brandRef} style={{ margin: '30px 24px 0', font: `700 20px/1 ${T.sans}`, letterSpacing: '-0.02em', color: T.ink }}>{tr('genuineAllBrands', li)}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, padding: '14px 20px 28px' }}>
            {['Apple', 'Samsung', 'Xiaomi', 'Huawei', 'OPPO', 'Vivo', 'Realme', 'OnePlus', 'Nokia', 'Tecno', 'Infinix', 'Honor'].map(b => (
              <div key={b} style={{ padding: '9px 13px', borderRadius: 10, background: T.white, border: `1px solid ${T.line}`, font: `500 13px/1 ${T.sans}`, color: T.ink70 }}>{b}</div>
            ))}
          </div>
        </ScrollArea>
        <TabBar active="You" onNav={onNav} />
      </Screen>
    </D>
  );
}

/* ── Contact ─────────────────────────────────────────────── */
function NasanContact({ bare, onBack, onNav, onLang } = {}) {
  const D = frame(bare, 'ios');
  const li = useLang();
  const hrs = todayHoursLine(li);
  const closedToday = hrs.closed, todayOpen = hrs.open, todayHours = hrs.label;
  const rows = [
    ['WhatsApp', '+964 770 414 9292', tr('msgInstantly', li), 'M4 5h16v12H8l-4 4V5z', '' + 'https://wa.me/' + nsSet('general', 'whatsapp', '9647704149292') + ''],
    ['Google Maps', tr('findUs', li), tr('shopName1', li) + (li ? '، ' : ', ') + tr('sulay', li), 'M12 21s7-6.1 7-11a7 7 0 10-14 0c0 4.9 7 11 7 11z', 'https://google.com/maps/place/HC4V%2BC4R+%D9%BE%D8%B4%D8%AA%D9%89+%D8%A8%D8%A7%D8%B2%D8%A7%D8%B1%D9%89+%D8%AC%D9%87+%D9%88%D8%A7%D8%B2%D9%87+%D9%83%D9%87+(NASAN),+Sulaymaniyah'],
  ];
  const [waOpen, setWaOpen] = React.useState(false);
  return (
    <D>
      <Screen bg={T.paper} bar={{ title: tr('contactUs', li), onBack, onLang }}>
        <ScrollArea style={{ paddingTop: 96 }} onRefresh={() => {}}>
          <h1 style={{ margin: '6px 24px 0', font: `700 32px/1.08 ${T.sans}`, letterSpacing: '-0.03em', color: T.ink }}>{tr('hereToHelp', li)}</h1>
          <p style={{ margin: '10px 24px 0', font: `400 14.5px/1.5 ${T.sans}`, color: T.ink70 }}>{tr('hereToHelpLead', li)}</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '22px 20px 0' }}>
            {rows.map(([name, val, sub, d, href], ci) => (
              <a key={name} href={name === 'WhatsApp' ? undefined : href} target="_blank" rel="noopener noreferrer" {...press(0.98)}
                onClick={name === 'WhatsApp' ? (e) => { e.preventDefault(); setWaOpen(true); } : undefined}
                style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 14, padding: 16, borderRadius: 16, background: T.white, border: `1px solid ${T.line}`, cursor: 'pointer',
                  animation: 'nsCardIn .3s cubic-bezier(.2,.8,.25,1) both', animationDelay: (ci * 0.055) + 's', ...pressStyle }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, flex: 'none', background: 'rgba(63,178,189,0.13)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.tealDeep} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ font: `600 15px/1.2 ${T.sans}`, color: T.ink }}>{val}</div>
                  <div style={{ marginTop: 3, font: `400 12.5px/1.3 ${T.sans}`, color: T.ink45 }}>{name} · {sub}</div>
                </div>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={T.ink45} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M14 5h5v5M19 5l-9 9M18 14v5H5V6h5" /></svg>
              </a>
            ))}
          </div>

          <div style={{ margin: '18px 20px 0', padding: 18, borderRadius: 16, background: T.ink }}>
            <div style={{ font: `500 10.5px/1 ${T.sans}`, letterSpacing: '0.16em', textTransform: 'uppercase', color: T.teal }}>{tr('todaysOpening', li)}</div>
            <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 9 }}>
              <span style={{ width: 7, height: 7, borderRadius: 7, flex: 'none', background: todayOpen ? '#4CD68A' : 'rgba(255,255,255,0.3)' }} />
              <span style={{ font: `600 16px/1 ${T.sans}`, color: '#fff' }}>{todayHours}</span>
            </div>
            <div style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid rgba(255,255,255,0.12)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ font: `400 13.5px/1 ${T.sans}`, color: 'rgba(255,255,255,0.5)' }}>{tr('satThu', li)}</span>
              <span style={{ font: `400 13.5px/1 ${T.sans}`, color: 'rgba(255,255,255,0.7)' }}>{tr('hoursRange', li)}</span>
            </div>
            <div style={{ marginTop: 7, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ font: `400 13.5px/1 ${T.sans}`, color: 'rgba(255,255,255,0.5)' }}>{tr('friday', li)}</span>
              <span style={{ font: `400 13.5px/1 ${T.sans}`, color: 'rgba(255,255,255,0.7)' }}>{tr('closed', li)}</span>
            </div>
          </div>

          <div style={{ margin: '18px 20px 28px', padding: '20px 18px', borderRadius: 16, background: T.white, border: `1px solid ${T.line}` }}>
            <div style={{ font: `600 16px/1.2 ${T.sans}`, color: T.ink }}>{tr('readyStock', li)}</div>
            <div style={{ marginTop: 6, font: `400 13.5px/1.5 ${T.sans}`, color: T.ink70 }}>{tr('readyStockLead', li)}</div>
            <div style={{ marginTop: 14, display: 'flex', gap: 10 }}>
              <a href={'https://wa.me/' + nsSet('general', 'whatsapp', '9647704149292')} target="_blank" rel="noopener noreferrer" style={{ flex: 1, textAlign: 'center', padding: '12px 0', borderRadius: 100, background: T.teal, font: `600 13.5px/1 ${T.sans}`, color: '#0E2124', textDecoration: 'none' }}>WhatsApp</a>
              <div onClick={() => onNav && onNav('cat:All')} style={{ flex: 1, textAlign: 'center', padding: '12px 0', borderRadius: 100, border: `1px solid ${T.line}`, font: `600 13.5px/1 ${T.sans}`, color: T.ink, cursor: 'pointer' , ...pressStyle }} {...press(0.975)}>{tr('browseProducts', li)}</div>
            </div>
          </div>
        </ScrollArea>
        <TabBar active="You" onNav={onNav} />

        {waOpen && <WhatsAppSheet onClose={() => setWaOpen(false)} />}
      </Screen>
    </D>
  );
}


const SEED_CATALOG = [
  ['Yaxun YX-1948D', '30V 5A dual DC supply', 'YAXUN', 'Power', '1912', 'supply'],
  ['Yaxun YX-858D+', 'Hot air rework station', 'YAXUN', 'Hot air', '1908', 'station'],
  ['Yaxun YX-AK25', 'Binocular microscope', 'YAXUN', 'Microscope', '1904', 'scope'],
  ['Yaxun YX-936B', 'Soldering station 60W', 'YAXUN', 'Soldering', '1899', 'station'],
  ['RF4 RF-B52', 'Stereo microscope', 'RF4', 'Microscope', '1877', 'scope'],
  ['Aixun T3A', 'Soldering station', 'AIXUN', 'Soldering', '1860', 'station'],
  ['Sunshine SS-227', 'Soldering iron kit', 'SUNSHINE', 'Soldering', '1844', 'station'],
  ['Quick TS1200A', 'Soldering station', 'QUICK', 'Soldering', '1830', 'station'],
  ['SUGON 3010PM', '30V 10A programmable DC supply', 'SUGON', 'Power', '1402', 'supply'],
  ['SUNSHINE P-3005D', '30V 5A regulated DC supply', 'SUNSHINE', 'Power', '1801', 'supply'],
  ['RF4 RF-6558PRO', 'Trinocular microscope 6.5–58X', 'RF4', 'Microscope', '1642', 'scope'],
  ['YX-AK49', 'Trinocular microscope', 'YAXUN', 'Microscope', '1588', 'scope'],
  ['YIHUA 3010D-IV', '30V 10A digital supply', 'YIHUA', 'Power', '1470', 'supply'],
  ['RF-305A', '30V 5A with short remover', 'RF4', 'Power', '1355', 'supply'],
  ['Relife RL-069', 'Precision tweezers', 'RELIFE', 'Hand tools', '1290', 'hand'],
  ['Quick 861DW', 'Hot air rework station', 'QUICK', 'Hot air', '1188', 'station'],
  ['Aixun T3B', 'Soldering station', 'AIXUN', 'Soldering', '1120', 'station'],
  ['JYD-1503HD', '15V DC regulated supply', 'YYD', 'Power', '1044', 'supply'],
];

const SUB_TERMS = [
  ['Hot air rework station', 'وێستگەی هەوای گەرم', 'محطة هواء ساخن'],
  ['Smart hot air rework station', 'وێستگەی زیرەکی هەوای گەرم', 'محطة هواء ساخن ذكية'],
  ['Compact hot air station', 'وێستگەی بچووکی هەوای گەرم', 'محطة هواء ساخن صغيرة'],
  ['2-in-1 hot air and iron', 'هەوای گەرم و ئوتوو ٢ لە ١', 'هواء ساخن وكاوية ٢ في ١'],
  ['Hot air and iron combo', 'هەوای گەرم و ئوتوو پێکەوە', 'هواء ساخن وكاوية معاً'],
  ['Hot air gun with preheat', 'دەمانچەی هەوای گەرم لەگەڵ پێشگەرمکەر', 'مسدس هواء ساخن مع تسخين'],
  ['IR preheating station', 'وێستگەی پێشگەرمکردنی IR', 'محطة تسخين IR'],
  ['Separating heating plate', 'پلێتی گەرمکردنی جیاکردنەوە', 'لوح تسخين للفصل'],
  ['Trinocular scope with 4K camera', 'مایکرۆسکۆپی سێ چاو لەگەڵ کامێرای 4K', 'مجهر ثلاثي مع كاميرا 4K'],
  ['Trinocular microscope with boom', 'مایکرۆسکۆپی سێ چاو لەگەڵ دەستک', 'مجهر ثلاثي مع ذراع'],
  ['Binocular scope with boom stand', 'مایکرۆسکۆپی دوو چاو لەگەڵ پایە', 'مجهر ثنائي مع حامل'],
  ['Binocular scope with LED ring', 'مایکرۆسکۆپی دوو چاو لەگەڵ ڕووناکی LED', 'مجهر ثنائي مع حلقة LED'],
  ['Trinocular microscope', 'مایکرۆسکۆپی سێ چاو', 'مجهر ثلاثي'],
  ['Binocular microscope', 'مایکرۆسکۆپی دوو چاو', 'مجهر ثنائي'],
  ['Stereo microscope', 'مایکرۆسکۆپی ستیریۆ', 'مجهر ستيريو'],
  ['Nano soldering station', 'وێستگەی لەحیمی نانۆ', 'محطة لحام نانو'],
  ['Dual-channel soldering station', 'وێستگەی لەحیمی دوو کەناڵ', 'محطة لحام ثنائية القناة'],
  ['Lead-free soldering station', 'وێستگەی لەحیمی بێ قوڕقوشم', 'محطة لحام خالية من الرصاص'],
  ['Quick-heat soldering station', 'وێستگەی لەحیمی گەرمبوونی خێرا', 'محطة لحام سريعة التسخين'],
  ['Digital soldering station', 'وێستگەی لەحیمی دیجیتاڵ', 'محطة لحام رقمية'],
  ['Soldering station', 'وێستگەی لەحیم', 'محطة لحام'],
  ['Adjustable soldering iron', 'ئوتووی لەحیمی ڕێکخراو', 'كاوية لحام قابلة للضبط'],
  ['Soldering iron tip set', 'کۆمەڵەی سەری ئوتووی لەحیم', 'طقم رؤوس كاوية'],
  ['Soldering iron kit', 'کیتی ئوتووی لەحیم', 'طقم كاوية لحام'],
  ['regulated DC supply', 'کارەبای DC ڕێکخراو', 'مصدر طاقة DC منظم'],
  ['DC regulated supply', 'کارەبای DC ڕێکخراو', 'مصدر طاقة DC منظم'],
  ['short-circuit supply', 'کارەبا لەگەڵ پشکنینی شۆرت', 'مصدر طاقة لكشف القصر'],
  ['supply with short remover', 'کارەبا لەگەڵ لابەری شۆرت', 'مصدر طاقة مع مزيل القصر'],
  ['with short remover', 'لەگەڵ لابەری شۆرت', 'مع مزيل القصر'],
  ['supply with USB test', 'کارەبا لەگەڵ پشکنینی USB', 'مصدر طاقة مع فحص USB'],
  ['intelligent supply', 'کارەبای زیرەک', 'مصدر طاقة ذكي'],
  ['dual display supply', 'کارەبای دوو شاشە', 'مصدر طاقة بشاشتين'],
  ['digital supply', 'کارەبای دیجیتاڵ', 'مصدر طاقة رقمي'],
  ['dual DC supply', 'کارەبای DC دووانە', 'مصدر طاقة DC مزدوج'],
  ['regulated supply', 'کارەبای ڕێکخراو', 'مصدر طاقة منظم'],
  ['compact supply', 'کارەبای بچووک', 'مصدر طاقة صغير'],
  ['bench supply', 'کارەبای مێز', 'مصدر طاقة مكتبي'],
  ['supply', 'کارەبا', 'مصدر طاقة'],
  ['Short-circuit detector', 'دۆزەرەوەی شۆرت', 'كاشف القصر'],
  ['Battery and cable tester', 'پشکنەری پاتری و وایەر', 'فاحص البطارية والكابل'],
  ['Precision tweezers, titanium', 'مووچنەی ورد، تیتانیۆم', 'ملقط دقيق، تيتانيوم'],
  ['Curved anti-static tweezers', 'مووچنەی چەماوەی دژە ستاتیک', 'ملقط منحني مضاد للكهرباء الساكنة'],
  ['Precision tweezers', 'مووچنەی ورد', 'ملقط دقيق'],
  ['Precision screwdriver set', 'کۆمەڵەی دەرنەفیسی ورد', 'طقم مفكات دقيقة'],
  ['Screwdriver set with case', 'کۆمەڵەی دەرنەفیس لەگەڵ جانتا', 'طقم مفكات مع حقيبة'],
  ['Screwdriver set', 'کۆمەڵەی دەرنەفیس', 'طقم مفكات'],
  ['Opening pry tool set', 'کۆمەڵەی ئامێری کردنەوە', 'طقم أدوات الفتح'],
  ['Blade set for board cleaning', 'کۆمەڵەی تیغ بۆ پاککردنەوەی بۆرد', 'طقم شفرات لتنظيف اللوحة'],
  ['Ultra-thin blade set', 'کۆمەڵەی تیغی زۆر تەنک', 'طقم شفرات رفيعة جداً'],
  ['Anti-static brush and spudger', 'فڵچە و ئامێری دژە ستاتیک', 'فرشاة وأداة مضادة للكهرباء الساكنة'],
  ['Anti-static repair mat', 'فەرشی چاککردنەوەی دژە ستاتیک', 'حصيرة إصلاح مضادة للكهرباء الساكنة'],
  ['No-clean flux paste', 'فلەکسی بێ پاککردنەوە', 'معجون فلكس بدون تنظيف'],
  ['Board repair fixture', 'ڕاگری چاککردنەوەی بۆرد', 'مثبت إصلاح اللوحة'],
  ['Universal PCB holder', 'ڕاگری گشتی PCB', 'حامل PCB عالمي'],
  ['Jump wire repair kit', 'کیتی وایەری چاککردنەوە', 'طقم أسلاك الإصلاح'],
  ['Micro drill and polisher', 'دریلی ورد و پاڵێوەر', 'مثقاب دقيق وملمع'],
  ['Describe this product', 'وەسفی ئەم بەرهەمە بکە', 'صف هذا المنتج'],
];
SUB_TERMS.sort((a, b) => b[0].length - a[0].length);

function localSub(sub, li) {
  if (!li || !sub) return sub;
  let out = sub;
  for (const row of SUB_TERMS) {
    const i = out.toLowerCase().indexOf(row[0].toLowerCase());
    if (i >= 0) { out = out.slice(0, i) + row[li] + out.slice(i + row[0].length); break; }
  }
  return out.replace(/\b(\d+)pcs\b/, (m, n) => n + (li === 1 ? ' پارچە' : ' قطعة'))
            .replace(/\b(\d+) in 1\b/, (m, n) => n + (li === 1 ? ' لە ١' : ' في ١'));
}

function liveCatalog() {
  const st = window.NasanStore && window.NasanStore.get();
  if (!st) return SEED_CATALOG;
  return st.products
    .filter(p => p.status !== 'Draft')
    .map(p => [p.name, localSub(p.sub, nsLang()), p.brand, p.cat, p.code, p.kind, p.status, p.stock]);
}

function LangSheet({ onPick, onClose, current }) {
  return (
    <div onClick={onClose} style={{
      position: 'absolute', inset: 0, zIndex: 70, background: 'rgba(20,24,26,0.5)',
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      animation: 'nsFade .16s ease both',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: T.paper, borderRadius: '24px 24px 0 0', padding: '12px 22px 28px',
        animation: 'nsSheetUp .26s cubic-bezier(.2,.8,.25,1) both',
      }}>
        <div style={{ width: 38, height: 4, borderRadius: 4, background: 'rgba(32,38,42,0.18)', margin: '0 auto 18px' }} />
        <div style={{ font: `700 19px/1 ${T.sans}`, letterSpacing: '-0.02em', color: T.ink }}>{tr('language', current)}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 16 }}>
          {LANGS.map(([codeL, native, english], i) => (
            <div key={codeL} onClick={() => onPick(i)} {...press(0.975)} style={{
              transition: 'transform .13s, border-color .2s',
              animation: 'nsRise .3s cubic-bezier(.2,.8,.25,1) both', animationDelay: (i * 0.05) + 's',
              display: 'flex', alignItems: 'center', gap: 13, padding: '15px 16px', borderRadius: 16, cursor: 'pointer',
              background: T.white, border: `1px solid ${i === current ? 'rgba(63,178,189,0.5)' : T.line}`,
            }}>
              <span style={{
                width: 34, height: 34, borderRadius: 34, flex: 'none',
                background: i === current ? T.teal : 'rgba(32,38,42,0.07)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                font: `700 11px/1 ${T.sans}`, letterSpacing: '.04em', textTransform: 'uppercase',
                color: i === current ? '#0E2124' : T.ink45,
              }}>{codeL}</span>
              <div style={{ flex: 1 }}>
                <div style={{ font: `600 15px/1.2 ${T.sans}`, color: T.ink, direction: codeL === 'en' ? 'ltr' : 'rtl', textAlign: codeL === 'en' ? 'left' : 'right' }}>{native}</div>
                <div style={{ marginTop: 3, font: `400 12.5px/1.2 ${T.sans}`, color: T.ink45 }}>{english}</div>
              </div>
              {i === current && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={T.tealDeep} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12.5l5 5L20 6.5" /></svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

if (typeof document !== 'undefined' && !document.getElementById('nasan-keyframes')) {
  const el = document.createElement('style');
  el.id = 'nasan-keyframes';
  el.textContent = SPLASH_CSS;
  document.head.appendChild(el);
}

/* ── Brands ──────────────────────────────────────────────── */
const BRAND_ROWS = [
  ['YAXUN', 'Soldering · microscopes'],
  ['RF4', 'Microscopes · power'],
  ['SUNSHINE', 'Power · soldering'],
  ['AIXUN', 'Soldering stations'],
  ['QUICK', 'Hot air · soldering'],
  ['YIHUA', 'Power supplies'],
  ['RELIFE', 'Hand tools'],
  ['SUGON', 'Soldering · hot air'],
  ['MECHANIC', 'Soldering · hand tools'],
  ['WANLEE', 'Hot air · soldering'],
  ['KADA', 'Hot air · preheaters'],
  ['SOPTOP', 'Microscopes'],
  ['2UUL', 'Hand tools · knives'],
  ['QIANLI', 'Hand tools · fixtures'],
  ['MA ANT', 'Hand tools · fixtures'],
  ['KAISI', 'Hand tools · screwdrivers'],
  ['AIDA', 'Heating plates'],
  ['FLYCDI', 'Tools'],
  ['AIFEN', 'Testers'],
  ['OSS', 'Soldering · hot air'],
  ['JYD', 'Power supplies'],
  ['YYD', 'Power · hot air'],
];

function brandSub(name, li) {
  const cats = [];
  for (const p of liveCatalog()) {
    if (p[2] === name || p[2] === name.toUpperCase()) {
      if (!cats.includes(p[3])) cats.push(p[3]);
    }
  }
  return cats.slice(0, 3).map(c => tr(c, li)).join(' · ');
}

function BrandTile({ name, sub, count, onClick, i = 0 }) {
  return (
    <div onClick={onClick}
      onPointerDown={e => { e.currentTarget.style.transform = 'scale(.985)'; }}
      onPointerUp={e => { e.currentTarget.style.transform = 'scale(1)'; }}
      onPointerLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}
      style={{
      display: 'flex', alignItems: 'center', gap: 13, padding: '13px 14px', cursor: 'pointer',
      borderRadius: 16, background: T.white, border: `1px solid ${T.line}`,
      animation: 'nsCardIn .3s cubic-bezier(.2,.8,.25,1) both', animationDelay: (i * 0.035) + 's',
      transition: 'transform .14s',
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: 13, flex: 'none',
        background: T.ink, display: 'flex', alignItems: 'center', justifyContent: 'center',
        font: `700 15px/1 ${T.sans}`, letterSpacing: '-0.01em', color: T.teal,
      }}>{name.slice(0, 2).toUpperCase()}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ font: `600 15px/1.2 ${T.sans}`, color: T.ink }}>{name}</div>
        <div style={{ marginTop: 3, font: `400 12.5px/1.3 ${T.sans}`, color: T.ink45, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{sub}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
        <span style={{ font: `600 12.5px/1 ${T.sans}`, color: T.ink45 }}>{count}</span>
        <svg data-flip="1" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={T.ink45} strokeWidth="2" strokeLinecap="round"><path d="M9 5l7 7-7 7" /></svg>
      </div>
    </div>
  );
}

function NasanBrands({ bare, onMenu, onNav, cartCount , onLang } = {}) {
  const D = frame(bare, 'ios');
  const li = useLang();
  const [filter, setFilter] = React.useState('All');
  const [fOpen, setFOpen] = React.useState(false);
  const cats = ['All'].concat(Array.from(new Set(liveCatalog().map(p => p[3]))));
  const rows = BRAND_ROWS.filter(([n]) =>
    filter === 'All' || liveCatalog().some(p => p[2] === n && p[3] === filter))
    .slice().sort((a, b) => String(a[0]).localeCompare(String(b[0]), 'en', { numeric: true, sensitivity: 'base' }));
  return (
    <D>
      <Screen bg={T.paper} bar={{ title: tr('brands', li), onMenu, onCart: () => onNav && onNav('Cart'), cart: cartCount, onLang }}>
        <ScrollArea style={{ paddingTop: 96 }} onRefresh={() => {}}>
          <h1 style={{ margin: '4px 24px 0', font: `700 32px/1.06 ${T.sans}`, letterSpacing: '-0.03em', color: T.ink }}>
            {tr('brandsTitle', li).replace('{n}', li ? arabicNum(BRAND_ROWS.length) : BRAND_ROWS.length)}
          </h1>
          <p style={{ margin: '10px 24px 0', font: `400 14.5px/1.5 ${T.sans}`, color: T.ink70 }}>
            {tr('brandsLead', li)}
          </p>

          {/* spotlight */}
          <div style={{
            margin: '22px 16px 0', padding: '22px 22px 20px', borderRadius: 24,
            background: 'linear-gradient(160deg, #22585E 0%, #20262A 74%)',
          }}>
            <div style={{ font: `600 10.5px/1 ${T.sans}`, letterSpacing: '0.16em', textTransform: 'uppercase', color: T.teal }}>{tr('brandOfMonth', li)}</div>
            <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{
                width: 62, height: 62, borderRadius: 18, flex: 'none',
                background: 'rgba(63,178,189,0.16)', border: '1px solid rgba(63,178,189,0.35)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                font: `700 20px/1 ${T.sans}`, color: T.teal,
              }}>RF</div>
              <div style={{ flex: 1 }}>
                <div style={{ font: `700 21px/1.1 ${T.sans}`, letterSpacing: '-0.02em', color: '#fff' }}>RF4</div>
                <div style={{ marginTop: 5, font: `400 13px/1.4 ${T.sans}`, color: 'rgba(255,255,255,0.6)' }}>{tr('rf4Lead', li)} {liveCatalog().filter(p => p[2] === 'RF4').length} {tr('modelsInStock', li)}</div>
              </div>
            </div>
            <div onClick={() => onNav && onNav('brand:RF4')} style={{ marginTop: 16, display: 'inline-flex', padding: '10px 18px', borderRadius: 100, background: T.teal, font: `600 13px/1 ${T.sans}`, color: '#0E2124', cursor: 'pointer' , ...pressStyle }} {...press(0.975)}>{tr('viewBrand', li)} RF4</div>
          </div>

          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', padding: '24px 24px 0' }}>
            <h2 style={{ margin: 0, font: `700 19px/1 ${T.sans}`, letterSpacing: '-0.02em', color: T.ink }}>{tr('allBrands', li)}</h2>
            <span style={{ font: `600 12.5px/1 ${T.sans}`, color: T.ink45 }}>
              {filter === 'All' ? 'A → Z' : rows.length}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 20px 0' }}>
            <span onClick={() => setFOpen(true)} {...press(0.9)} style={{
              flex: 'none', width: 34, height: 34, borderRadius: 100, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: filter === 'All' ? T.white : T.ink, border: `1px solid ${filter === 'All' ? T.line : T.ink}`,
              transition: 'background .2s', ...pressStyle,
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={filter === 'All' ? T.ink : '#fff'} strokeWidth="1.9" strokeLinecap="round"><path d="M3 6h18M6 12h12M10 18h4" /></svg>
            </span>
            <div style={{ display: 'flex', gap: 8, overflowX: 'auto', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }} ref={dragScroll}>
              {cats.map(c => (
                <div key={c} onClick={() => setFilter(c)} style={{
                  padding: '8px 14px', borderRadius: 100, whiteSpace: 'nowrap', cursor: 'pointer',
                  background: filter === c ? T.ink : T.white, color: filter === c ? '#fff' : T.ink70,
                  border: `1px solid ${filter === c ? T.ink : T.line}`, font: `600 12.5px/1 ${T.sans}`,
                  transition: 'background .2s, color .2s, border-color .2s',
                  animation: filter === c ? 'nsPop .28s cubic-bezier(.2,.8,.25,1)' : undefined,
                }}>{tr(c, li)}</div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '14px 20px 26px' }}>
            {rows.map(([n, sub], bi) => {
              const c = filter === 'All'
                ? liveCatalog().filter(p => p[2] === n).length
                : liveCatalog().filter(p => p[2] === n && p[3] === filter).length;
              return (
                <BrandTile key={n} name={n}
                  sub={filter === 'All' ? '' : tr(filter, li)}
                  count={c ? c + ' ' + tr('items', li) : tr('askUs', li)}
                  i={bi}
                  onClick={() => onNav && onNav('brand:' + n + (filter === 'All' ? '' : '|' + filter))} />
              );
            })}
            {rows.length === 0 && (
              <div style={{ padding: '36px 10px', textAlign: 'center', font: `400 13.5px/1.6 ${T.sans}`, color: T.ink45 }}>
                No brands with {tr(filter, li).toLowerCase()} products yet.
              </div>
            )}
          </div>
        </ScrollArea>
        <TabBar active="Brands" onNav={onNav} />
        {fOpen && (
          <CatalogFilterSheet cats={cats} value={filter}
            count={(c) => BRAND_ROWS.filter(([n]) => c === 'All' || liveCatalog().some(p => p[2] === n && p[3] === c)).length}
            onPick={(c) => setFilter(c)} onClose={() => setFOpen(false)} />
        )}
      </Screen>
    </D>
  );
}

function CatalogFilterSheet({ onClose, cats, value, onPick, count }) {
  const li = useLang();
  const [sel, setSel] = React.useState(value);
  return (
    <div onClick={onClose} style={{
      position: 'absolute', inset: 0, zIndex: 70, background: 'rgba(20,24,26,0.5)',
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      animation: 'nsFade .16s ease both',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        background: T.paper, borderRadius: '24px 24px 0 0', padding: '12px 22px 26px',
        maxHeight: '78%', overflowY: 'auto', animation: 'nsSheetUp .26s cubic-bezier(.2,.8,.25,1) both',
      }}>
        <div style={{ width: 38, height: 4, borderRadius: 4, background: 'rgba(32,38,42,0.18)', margin: '0 auto 16px' }} />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ flex: 1, font: `700 19px/1 ${T.sans}`, letterSpacing: '-0.02em', color: T.ink }}>{tr('filterBy', li)}</div>
          <span onClick={() => { setSel('All'); onPick('All'); onClose(); }} {...press(0.95)} style={{
            display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer', padding: '7px 12px', borderRadius: 100,
            background: 'rgba(63,178,189,0.12)', font: `600 12.5px/1 ${T.sans}`, color: T.tealDeep,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T.tealDeep} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 11a8 8 0 10-2.9 6.2M20 4.5V11h-6" /></svg>
            {tr('showAll', li)}
          </span>
        </div>
        <div style={{ marginTop: 18, font: `600 10.5px/1 ${T.sans}`, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.ink45 }}>{tr('category', li)}</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 11 }}>
          {cats.map(c => (
            <div key={c} onClick={() => setSel(c)} {...press(0.95)} style={{
              padding: '10px 15px', borderRadius: 100, cursor: 'pointer',
              background: sel === c ? T.ink : T.white, color: sel === c ? '#fff' : T.ink70,
              border: `1px solid ${sel === c ? T.ink : T.line}`, font: `600 13px/1 ${T.sans}`,
              transition: 'background .18s, color .18s, border-color .18s',
            }}>{tr(c, li)}</div>
          ))}
        </div>
        <div onClick={() => { onPick(sel); onClose(); }} {...press(0.98)} style={{
          marginTop: 22, textAlign: 'center', padding: '15px 0', borderRadius: 100,
          background: T.ink, font: `600 15px/1 ${T.sans}`, color: '#fff', cursor: 'pointer',
        }}>{tr('showResults', li)} {count(sel)}</div>
      </div>
    </div>
  );
}

/* ── Catalog listing: by category or by brand ────────────── */
function NasanCatalog({ bare, onMenu, onNav, onBack, cartCount, brand, cat , onLang } = {}) {
  const D = frame(bare, 'ios');
  const li = useLang();
  const [filter, setFilter] = React.useState(cat || 'All');
  const [sheet, setSheet] = React.useState(false);
  React.useEffect(() => { setFilter(cat || 'All'); }, [cat, brand]);

  const scope = brand ? liveCatalog().filter(p => p[2] === brand) : liveCatalog();
  const cats = ['All'].concat(Array.from(new Set(scope.map(p => p[3]))));
  const list = filter === 'All' ? scope : scope.filter(p => p[3] === filter);
  const title = brand || (filter !== 'All' ? tr(filter, li) : tr('allProducts', li));

  return (
    <D>
      <Screen bg={T.paper} bar={{ title, onBack, onMenu, onCart: () => onNav && onNav('Cart'), cart: cartCount, onLang }}>
        <ScrollArea style={{ paddingTop: 96 }} onRefresh={() => {}}>
          <div style={{ padding: '6px 24px 0' }}>
            <h1 style={{ margin: 0, font: `700 30px/1.08 ${T.sans}`, letterSpacing: '-0.03em', color: T.ink }}>{title}</h1>
            <div style={{ marginTop: 8, font: `400 13.5px/1.5 ${T.sans}`, color: T.ink70 }}>
              {list.length} {tr(list.length === 1 ? 'product1' : 'products', li)}{brand ? ' ' + tr('from', li) + ' ' + brand : ''}{filter !== 'All' ? ' · ' + tr(filter, li) : ''}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '18px 20px 0' }}>
            <span onClick={() => setSheet(true)} {...press(0.9)} style={{
              flex: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 32, height: 32, borderRadius: 100,
              background: filter === 'All' ? T.white : T.ink,
              border: `1px solid ${filter === 'All' ? T.line : T.ink}`, transition: 'background .2s, border-color .2s',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={filter === 'All' ? T.ink45 : '#fff'} strokeWidth="1.9" strokeLinecap="round"><path d="M3 6h18M6 12h12M10 18h4" /></svg>
            </span>
            <div style={{ display: 'flex', gap: 8, overflowX: 'auto', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }} ref={dragScroll}>
              {cats.map(c => (
                <div key={c} onClick={() => setFilter(c)} style={{
                  padding: '8px 14px', borderRadius: 100, whiteSpace: 'nowrap', cursor: 'pointer',
                  background: filter === c ? T.ink : T.white, color: filter === c ? '#fff' : T.ink70,
                  border: `1px solid ${filter === c ? T.ink : T.line}`, font: `600 12.5px/1 ${T.sans}`,
                  transition: 'background .2s, color .2s, border-color .2s',
                  animation: filter === c ? 'nsPop .28s cubic-bezier(.2,.8,.25,1)' : undefined,
                }}>{tr(c, li)}</div>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, padding: '18px 20px 26px' }}>
            {list.map(([n, sub, br, c, code, k], idx) => (
              <div key={code} onClick={() => onNav && onNav('product:' + code)}
                style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer', animation: 'nsCardIn .34s cubic-bezier(.2,.8,.25,1) both', animationDelay: (idx * 0.045) + 's', transition: 'transform .14s' }}
                onPointerDown={e => { e.currentTarget.style.transform = 'scale(.965)'; }}
                onPointerUp={e => { e.currentTarget.style.transform = 'scale(1)'; }}
                onPointerLeave={e => { e.currentTarget.style.transform = 'scale(1)'; }}>
                <div style={{ background: T.white, border: `1px solid ${T.line}`, borderRadius: 16, padding: '10px 0', display: 'flex', justifyContent: 'center' }}>
                  <ToolShot w={88} kind={k} />
                </div>
                <div style={{ marginTop: 9, font: `600 13.5px/1.25 ${T.sans}`, color: T.ink }}>{n}</div>
                <div style={{ marginTop: 3, font: `400 12px/1.35 ${T.sans}`, color: T.ink45 }}>{sub}</div>
                <div style={{ marginTop: 6, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ font: `600 11px/1 ${T.sans}`, color: T.tealDeep }}>[ {code} ]</span>
                  <span style={{ font: `400 11px/1 ${T.sans}`, color: T.ink45 }}>· {tr(c, li)}</span>
                </div>
              </div>
            ))}
            {list.length === 0 && (
              <div style={{ gridColumn: '1 / -1', padding: '40px 10px', textAlign: 'center', font: `400 13.5px/1.6 ${T.sans}`, color: T.ink45 }}>
                {tr('noProducts', li)}
              </div>
            )}
          </div>
        </ScrollArea>
        <TabBar active={brand ? 'Brands' : 'Shop'} onNav={onNav} />
        {sheet && (
          <CatalogFilterSheet cats={cats} value={filter} onClose={() => setSheet(false)} onPick={setFilter}
            count={v => (v === 'All' ? scope.length : scope.filter(p => p[3] === v).length)} />
        )}
      </Screen>
    </D>
  );
}

/* ── LCD compatibility ─ groups of models that share one screen ── */
const LCD_GROUPS = [
  { brand: 'Xiaomi', type: 'IPS LCD', models: ['Redmi 9A', 'Redmi 9C', 'Redmi 9AT', 'Redmi 10A', 'Poco C3'], grades: ['Original', 'Copy', 'Incell'] },
  { brand: 'Xiaomi', type: 'IPS LCD', models: ['Redmi 9', 'Poco M2'], grades: ['Original', 'Copy', 'Incell'] },
  { brand: 'Xiaomi', type: 'IPS LCD', models: ['Redmi Note 8', 'Redmi Note 8 2021'], grades: ['Original', 'Copy', 'Incell'] },
  { brand: 'Xiaomi', type: 'IPS LCD', models: ['Redmi Note 9', 'Redmi 10X 4G'], grades: ['Original', 'Copy', 'Incell'] },
  { brand: 'Xiaomi', type: 'AMOLED', models: ['Redmi Note 10', 'Redmi Note 10S', 'Poco M5s'], grades: ['Original', 'Incell', 'GX'] },
  { brand: 'Samsung', type: 'PLS LCD', models: ['Galaxy A10', 'Galaxy M10'], grades: ['Original', 'Copy', 'Incell'] },
  { brand: 'Samsung', type: 'PLS LCD', models: ['Galaxy A12', 'Galaxy A12 Nacho', 'Galaxy M12'], grades: ['Original', 'Copy', 'Incell'] },
  { brand: 'Samsung', type: 'Super AMOLED', models: ['Galaxy A50', 'Galaxy A50s', 'Galaxy A30s'], grades: ['Original', 'Incell', 'GX', 'Copy'] },
  { brand: 'Oppo', type: 'IPS LCD', models: ['Oppo A5 2020', 'Oppo A9 2020', 'Oppo A11x', 'Realme 5', 'Realme 5i', 'Realme 5s', 'Realme C3'], grades: ['Original', 'Copy', 'Incell'] },
  { brand: 'Oppo', type: 'IPS LCD', models: ['Oppo A15', 'Oppo A15s'], grades: ['Original', 'Copy', 'Incell'] },
  { brand: 'Huawei', type: 'IPS LCD', models: ['Huawei Y7 2019', 'Huawei Y7 Prime 2019', 'Huawei Y7 Pro 2019'], grades: ['Original', 'Copy', 'Incell'] },
  { brand: 'Apple', type: 'OLED', models: ['iPhone 12', 'iPhone 12 Pro'], grades: ['Original', 'Incell', 'GX', 'Copy'] },
];

function NasanLCD({ bare, onMenu, onNav, cartCount, onLang, onAdd } = {}) {
  const D = frame(bare, 'ios');
  const li = useLang();
  const [q, setQ] = React.useState('');
  const [brand, setBrand] = React.useState('All');
  const [open, setOpen] = React.useState(null);
  const [waMsg, setWaMsg] = React.useState(null);
  const [added, setAdded] = React.useState(null);
  const [type, setType] = React.useState('All');
  const [fOpen, setFOpen] = React.useState(false);
  const [dBrand, setDBrand] = React.useState('All');
  const [dType, setDType] = React.useState('All');
  const [grade, setGrade] = React.useState('All');
  const [dGrade, setDGrade] = React.useState('All');
  const openFilter = () => { setDBrand(brand); setDType(type); setDGrade(grade); setFOpen(true); };
  const types = ['All', 'OLED', 'AMOLED', 'IPS', 'Super AMOLED'];
  const grades = ['All', 'Original', 'Copy', 'Incell', 'GX'];
  const typeKey = (g) => (/IPS|PLS/.test(g.type) ? 'IPS' : g.type);
  const activeCount = (brand !== 'All' ? 1 : 0) + (type !== 'All' ? 1 : 0) + (grade !== 'All' ? 1 : 0);
  const addLcd = (g, lead) => {
    onAdd && onAdd([lead + ' LCD' + (grade !== 'All' ? ' · ' + grade : ''), g.type + ' · ' + g.models.join(' / '), '[ LCD ]', 'hand', 1]);
    setAdded(g.i);
    setTimeout(() => setAdded(a => (a === g.i ? null : a)), 1600);
  };
  const term = q.trim().toLowerCase().replace(/\s+/g, ' ');
  const brands = ['All'].concat(Array.from(new Set(LCD_GROUPS.map(g => g.brand))));
  const groups = LCD_GROUPS
    .map((g, i) => ({ ...g, i, hit: term ? g.models.find(m => m.toLowerCase().includes(term)) : null }))
    .filter(g => (brand === 'All' || g.brand === brand) && (type === 'All' || typeKey(g) === type) && (grade === 'All' || g.grades.includes(grade)) && (!term || g.hit));
  const w = T.white;
  return (
    <D>
      <Screen bg={T.paper} bar={{ title: tr('lcdTitle', li), onMenu, onCart: () => onNav && onNav('Cart'), cart: cartCount, onLang }}>
        <ScrollArea style={{ paddingTop: 96 }} onRefresh={() => {}}>
          <div style={{ padding: '4px 20px 0' }}>
            <div style={{ font: `400 13.5px/1.5 ${T.sans}`, color: T.ink45, textWrap: 'pretty' }}>{tr('lcdLead', li)}</div>
            <div style={{
              marginTop: 14, display: 'flex', alignItems: 'center', gap: 10, padding: '0 14px', height: 50,
              borderRadius: 14, background: w, border: `1px solid ${term ? 'rgba(63,178,189,0.5)' : T.line}`, transition: 'border-color .2s',
            }}>
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke={T.ink45} strokeWidth="1.8" strokeLinecap="round"><path d="M11 4a7 7 0 105.2 11.7L21 20.5" /></svg>
              <input value={q} onChange={e => { setQ(e.target.value); setOpen(null); }} placeholder={tr('lcdPlaceholder', li)}
                style={{ flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent', font: `500 15px/1 ${T.sans}`, color: T.ink }} />
              {q && (
                <span onClick={() => setQ('')} {...press(0.9)} style={{ cursor: 'pointer', display: 'flex', ...pressStyle }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={T.ink45} strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
                </span>
              )}
              <span onClick={openFilter} {...press(0.9)} style={{
                position: 'relative', flex: 'none', width: 34, height: 34, borderRadius: 10, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: activeCount ? T.ink : 'rgba(32,38,42,0.06)', transition: 'background .2s', ...pressStyle,
              }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={activeCount ? '#fff' : T.ink} strokeWidth="1.9" strokeLinecap="round"><path d="M4 7h10M18 7h2M4 17h4M12 17h8" /><circle cx="16" cy="7" r="2" /><circle cx="10" cy="17" r="2" /></svg>
                {activeCount > 0 && (
                  <span style={{
                    position: 'absolute', top: -4, right: -4, minWidth: 16, height: 16, borderRadius: 16, background: T.teal,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    font: `700 9.5px/1 ${T.sans}`, color: '#0E2124', animation: 'nsPop .3s both',
                  }}>{activeCount}</span>
                )}
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 8, overflowX: 'auto', scrollbarWidth: 'none', padding: '14px 20px 4px' }}>
            {brands.map(b => {
              const on = b === brand;
              return (
                <span key={b} onClick={() => setBrand(b)} {...press(0.95)} style={{
                  flex: 'none', padding: '9px 14px', borderRadius: 100, cursor: 'pointer',
                  background: on ? T.ink : w, border: `1px solid ${on ? T.ink : T.line}`,
                  font: `600 12.5px/1 ${T.sans}`, color: on ? '#fff' : T.ink, transition: 'background .2s, color .2s', ...pressStyle,
                }}>{b === 'All' ? tr('lcdAll', li) : b}</span>
              );
            })}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '12px 20px 24px' }}>
            {groups.length === 0 && (
              <div style={{ padding: '26px 18px', borderRadius: 16, background: w, border: `1px solid ${T.line}`, textAlign: 'center', animation: 'nsRiseIn .3s both' }}>
                <div style={{ font: `500 14px/1.5 ${T.sans}`, color: T.ink45 }}>{tr('lcdNone', li)}</div>
                <div onClick={() => setWaMsg(tr('lcdAskMsg', li) + '\n· ' + q.trim())} {...press(0.97)} style={{
                  marginTop: 14, display: 'inline-flex', padding: '12px 18px', borderRadius: 100, background: T.ink, cursor: 'pointer',
                  font: `600 13.5px/1 ${T.sans}`, color: '#fff', ...pressStyle,
                }}>{tr('lcdAsk', li)}</div>
              </div>
            )}
            {groups.map((g, k) => {
              const isOpen = open === g.i || !!term;
              const lead = g.hit || g.models[0];
              const others = g.models.filter(m => m !== lead);
              return (
                <div key={g.i} style={{
                  borderRadius: 16, background: w, border: `1px solid ${g.hit ? 'rgba(63,178,189,0.45)' : T.line}`, overflow: 'hidden',
                  animation: 'nsRiseIn .3s cubic-bezier(.2,.8,.25,1) both', animationDelay: Math.min(k, 8) * 0.03 + 's',
                }}>
                  <div onClick={() => setOpen(open === g.i ? null : g.i)} {...press(0.99)} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', cursor: 'pointer', ...pressStyle }}>
                    <div style={{
                      width: 38, height: 38, borderRadius: 11, flex: 'none', background: 'rgba(63,178,189,0.12)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.tealDeep} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M7 2.5h10a1.5 1.5 0 011.5 1.5v16a1.5 1.5 0 01-1.5 1.5H7A1.5 1.5 0 015.5 20V4A1.5 1.5 0 017 2.5zM8.5 5.5h7v10h-7z" /></svg>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ font: `700 15px/1.2 ${T.sans}`, letterSpacing: '-0.01em', color: T.ink }}>{lead}</div>
                      <div style={{ marginTop: 4, font: `500 12px/1.2 ${T.sans}`, color: T.ink45 }}>{g.brand} · {g.type} · {g.models.length} {tr('lcdModels', li)}</div>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.ink45} strokeWidth="2" strokeLinecap="round"
                      style={{ transform: isOpen ? 'rotate(90deg)' : 'none', transition: 'transform .25s cubic-bezier(.2,.8,.25,1)', flex: 'none' }}><path d="M9 5l7 7-7 7" /></svg>
                  </div>
                  {isOpen && (
                    <div style={{ padding: '0 16px 16px', animation: 'nsRiseIn .25s both' }}>
                      <div style={{ font: `600 10.5px/1 ${T.sans}`, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.tealDeep }}>{tr('lcdSameAs', li)} {lead}</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 10 }}>
                        {others.map(m => (
                          <span key={m} style={{ padding: '8px 11px', borderRadius: 9, background: 'rgba(32,38,42,0.05)', font: `600 12.5px/1 ${T.sans}`, color: T.ink }}>{m}</span>
                        ))}
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
                        {g.grades.map(x => (
                          <span key={x} style={{
                            padding: '6px 9px', borderRadius: 7, font: `600 11px/1 ${T.sans}`,
                            background: x === grade ? 'rgba(63,178,189,0.16)' : 'transparent',
                            border: `1px solid ${x === grade ? 'rgba(63,178,189,0.5)' : T.line}`,
                            color: x === grade ? T.tealDeep : T.ink45,
                          }}>{x}</span>
                        ))}
                      </div>
                      <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
                        <div onClick={() => addLcd(g, lead)} {...press(0.97)} style={{
                          flex: 1.2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
                          padding: '12px 0', borderRadius: 100, cursor: 'pointer',
                          background: added === g.i ? T.tealDeep : T.teal, transition: 'background .25s',
                          font: `600 13.5px/1 ${T.sans}`, color: added === g.i ? '#fff' : '#0E2124', ...pressStyle,
                        }}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d={added === g.i ? 'M4 12.5l5 5L20 6.5' : 'M12 5v14M5 12h14'} />
                          </svg>
                          {tr(added === g.i ? 'addedToCart' : 'addToCart', li)}
                        </div>
                        <div onClick={() => setWaMsg(tr('lcdAskMsg', li) + '\n· ' + g.models.join(' / '))} {...press(0.97)} style={{
                          flex: 1, textAlign: 'center', padding: '12px 0', borderRadius: 100, cursor: 'pointer',
                          border: `1px solid ${T.line}`, background: T.white,
                          font: `600 13.5px/1 ${T.sans}`, color: T.ink, ...pressStyle,
                        }}>{tr('askShort', li)}</div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            <div style={{ marginTop: 4, font: `400 12px/1.5 ${T.sans}`, color: T.ink45, textAlign: 'center' }}>{tr('lcdNote', li)}</div>
          </div>
        </ScrollArea>
        <TabBar active="LCD" onNav={onNav} />
        {fOpen && (
          <div onClick={() => setFOpen(false)} style={{
            position: 'absolute', inset: 0, zIndex: 70, background: 'rgba(20,24,26,0.5)',
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', animation: 'nsFade .16s ease both',
          }}>
            <div onClick={e => e.stopPropagation()} style={{
              background: T.paper, borderRadius: '24px 24px 0 0', padding: '12px 22px 28px',
              animation: 'nsSheetUp .26s cubic-bezier(.2,.8,.25,1) both',
            }}>
              <div style={{ width: 38, height: 4, borderRadius: 4, background: 'rgba(32,38,42,0.18)', margin: '0 auto 16px' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ flex: 1, font: `700 19px/1 ${T.sans}`, letterSpacing: '-0.02em', color: T.ink }}>{tr('lcdFilter', li)}</div>
                <span onClick={() => { setDBrand('All'); setDType('All'); setDGrade('All'); }} {...press(0.95)} style={{
                  cursor: 'pointer', padding: '7px 12px', borderRadius: 100, background: 'rgba(63,178,189,0.12)',
                  font: `600 12.5px/1 ${T.sans}`, color: T.tealDeep, ...pressStyle,
                }}>{tr('lcdReset', li)}</span>
              </div>
              <div style={{ marginTop: 20, font: `600 11px/1 ${T.sans}`, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.ink45 }}>{tr('lcdBrand', li)}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 11 }}>
                {brands.map(x => {
                  const on = x === dBrand;
                  return (
                    <span key={x} onClick={() => setDBrand(x)} {...press(0.95)} style={{
                      padding: '10px 14px', borderRadius: 100, cursor: 'pointer',
                      background: on ? T.ink : T.white, border: `1px solid ${on ? T.ink : T.line}`,
                      font: `600 13px/1 ${T.sans}`, color: on ? '#fff' : T.ink, transition: 'background .2s, color .2s', ...pressStyle,
                    }}>{x === 'All' ? tr('lcdAll', li) : x}</span>
                  );
                })}
              </div>
              <div style={{ marginTop: 20, font: `600 11px/1 ${T.sans}`, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.ink45 }}>{tr('lcdType', li)}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 11 }}>
                {types.map(x => {
                  const on = x === dType;
                  return (
                    <span key={x} onClick={() => setDType(x)} {...press(0.95)} style={{
                      padding: '10px 14px', borderRadius: 100, cursor: 'pointer',
                      background: on ? T.ink : T.white, border: `1px solid ${on ? T.ink : T.line}`,
                      font: `600 13px/1 ${T.sans}`, color: on ? '#fff' : T.ink, transition: 'background .2s, color .2s', ...pressStyle,
                    }}>{x === 'All' ? tr('lcdAll', li) : x}</span>
                  );
                })}
              </div>
              <div style={{ marginTop: 20, font: `600 11px/1 ${T.sans}`, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.ink45 }}>{tr('lcdQuality', li)}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 11 }}>
                {grades.map(x => {
                  const on = x === dGrade;
                  return (
                    <span key={x} onClick={() => setDGrade(x)} {...press(0.95)} style={{
                      padding: '10px 14px', borderRadius: 100, cursor: 'pointer',
                      background: on ? T.ink : T.white, border: `1px solid ${on ? T.ink : T.line}`,
                      font: `600 13px/1 ${T.sans}`, color: on ? '#fff' : T.ink, transition: 'background .2s, color .2s', ...pressStyle,
                    }}>{x === 'All' ? tr('lcdAll', li) : x}</span>
                  );
                })}
              </div>
              <div onClick={() => { setBrand(dBrand); setType(dType); setGrade(dGrade); setOpen(null); setFOpen(false); }} {...press(0.98)} style={{
                marginTop: 24, textAlign: 'center', padding: '15px 0', borderRadius: 100, background: T.ink, cursor: 'pointer',
                font: `600 15px/1 ${T.sans}`, color: '#fff', ...pressStyle,
              }}>{tr('lcdApply', li)}</div>
            </div>
          </div>
        )}
        {waMsg != null && <WhatsAppSheet message={waMsg} onClose={() => setWaMsg(null)} />}
      </Screen>
    </D>
  );
}

/* ── Search (field docked bottom-centre, thumb reach) ────── */
function NasanSearch({ bare, onMenu, onNav, cartCount , onLang } = {}) {
  const D = frame(bare, 'ios');
  const li = useLang();
  const [q, setQ] = React.useState('');
  const [cat, setCat] = React.useState('All');
  const [brand, setBrand] = React.useState('All');
  const [stockOnly, setStockOnly] = React.useState(false);
  const [sheet, setSheet] = React.useState(false);
  const [closing, setClosing] = React.useState(false);
  const closeSheet = () => { setClosing(true); setTimeout(() => { setSheet(false); setClosing(false); setDrag(0); }, 240); };
  const [drag, setDrag] = React.useState(0);
  const [settled, setSettled] = React.useState(false);
  React.useEffect(() => { if (!sheet) { setSettled(false); return; } const id = setTimeout(() => setSettled(true), 300); return () => clearTimeout(id); }, [sheet]);
  const dragRef = React.useRef(null);
  const onGrab = (e) => {
    dragRef.current = { y0: e.clientY, dy: 0 };
    e.currentTarget.setPointerCapture && e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onDrag = (e) => {
    if (!dragRef.current) return;
    const dy = Math.max(0, e.clientY - dragRef.current.y0);
    dragRef.current.dy = dy;
    setDrag(dy);
  };
  const onRelease = () => {
    if (!dragRef.current) return;
    const dy = dragRef.current.dy;
    dragRef.current = null;
    if (dy > 110) { setDrag(0); closeSheet(); } else setDrag(0);
  };
  const brands = ['All'].concat(Array.from(new Set(liveCatalog().map(p => p[2]))));
  const activeFilters = (cat !== 'All' ? 1 : 0) + (brand !== 'All' ? 1 : 0) + (stockOnly ? 1 : 0);
  const inputRef = React.useRef(null);
  const recent = [tr('recent1', li), tr('recent2', li), tr('recent3', li), tr('recent4', li)];
  const cats = ['All', 'Power', 'Microscope', 'Soldering', 'Hot air', 'Hand tools'];

  const term = q.trim().toLowerCase();
  const results = liveCatalog().filter(([n, sub, br, c, code]) => {
    if (cat !== 'All' && c !== cat) return false;
    if (brand !== 'All' && br !== brand) return false;
    if (!term) return false;
    const st = window.NasanStore && window.NasanStore.get().products.find(x => x.code === code);
    const hay = [n, sub, st ? st.sub : '', br, code, c, tr(c, li)].join(' ').toLowerCase();
    return hay.includes(term);
  });

  return (
    <D>
      <Screen bg={T.paper} bar={{ title: tr('search', li), onMenu, onCart: () => onNav && onNav('Cart'), cart: cartCount, onLang }}>
        <ScrollArea style={{ paddingTop: 96, paddingBottom: 8 }} onRefresh={() => {}}>
          <div style={{ display: 'flex', gap: 8, padding: '4px 20px 0', overflowX: 'auto', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none' }} ref={dragScroll}>
            {cats.map(c => (
              <div key={c} onClick={() => setCat(c)} {...press(0.94)} style={{
                ...pressStyle,
                padding: '8px 13px', borderRadius: 100, whiteSpace: 'nowrap', cursor: 'pointer',
                background: cat === c ? T.ink : T.white, color: cat === c ? '#fff' : T.ink70,
                border: `1px solid ${cat === c ? T.ink : T.line}`, font: `600 12.5px/1 ${T.sans}`,
              }}>{tr(c, li)}</div>
            ))}
          </div>

          {!term && (
            <div style={{ padding: '22px 24px 0' }}>
              <div style={{ font: `500 10.5px/1 ${T.sans}`, letterSpacing: '0.16em', textTransform: 'uppercase', color: T.ink45 }}>{tr('recent', li)}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
                {recent.map(r => (
                  <div key={r} onClick={() => setQ(r.split(' ')[0])} style={{ padding: '9px 13px', borderRadius: 100, background: T.white, border: `1px solid ${T.line}`, font: `500 13px/1 ${T.sans}`, color: T.ink70, cursor: 'pointer' }}>{r}</div>
                ))}
              </div>
            </div>
          )}

          <div style={{ padding: '22px 24px 0' }}>
            <div style={{ font: `500 10.5px/1 ${T.sans}`, letterSpacing: '0.16em', textTransform: 'uppercase', color: T.ink45 }}>
              {term ? results.length + ' · "' + q + '"' : tr('popularNow', li)}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '12px 20px 0' }}>
            {(term ? results : liveCatalog().slice(0, 4)).map(([n, sub, brand, c, code, k], ri) => (
              <div key={code} onClick={() => onNav && onNav('product:' + code)} {...press(0.98)}
                style={{ display: 'flex', alignItems: 'center', gap: 12, padding: 12, borderRadius: 16, background: T.white, border: `1px solid ${T.line}`, cursor: 'pointer',
                  animation: 'nsCardIn .3s cubic-bezier(.2,.8,.25,1) both', animationDelay: (ri * 0.05) + 's', ...pressStyle }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: '#F4F3F0', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                  <ToolShot w={40} kind={k} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ font: `600 14.5px/1.2 ${T.sans}`, color: T.ink }}>{n}</div>
                  <div style={{ marginTop: 3, font: `400 12.5px/1.3 ${T.sans}`, color: T.ink45 }}>{sub}</div>
                </div>
                <span style={{ font: `600 11px/1 ${T.sans}`, color: T.tealDeep, whiteSpace: 'nowrap' }}>[ {code} ]</span>
              </div>
            ))}
            {term && results.length === 0 && (
              <div style={{ padding: '30px 4px', textAlign: 'center', font: `400 13.5px/1.6 ${T.sans}`, color: T.ink45 }}>
                {tr('noMatch', li)} "{q}".<br />{tr('weWillSource', li)}
              </div>
            )}
          </div>
        </ScrollArea>

        <div style={{ padding: '10px 16px 6px', background: 'linear-gradient(to top, rgba(246,245,242,1) 60%, rgba(246,245,242,0))' }}>
          <div onClick={() => inputRef.current && inputRef.current.focus()} style={{
            display: 'flex', alignItems: 'center', gap: 10, height: 50, padding: '0 16px',
            borderRadius: 100, background: T.white, border: `1px solid ${T.teal}`,
            boxShadow: '0 10px 26px rgba(32,38,42,0.12)',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={T.tealDeep} strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="M16.2 16.2L21 21" /></svg>
            <input ref={inputRef} value={q} onChange={e => setQ(e.target.value)} placeholder={tr('searchPlaceholder', li)}
              style={{ flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent', font: `400 15px/1 ${T.sans}`, color: T.ink }} />
            {q ? (
              <span onClick={e => { e.stopPropagation(); setQ(''); }} style={{ cursor: 'pointer', font: `600 13px/1 ${T.sans}`, color: T.ink45 }}>{tr('clear', li)}</span>
            ) : (
              <span onClick={e => { e.stopPropagation(); setSheet(true); }} style={{
                display: 'flex', alignItems: 'center', gap: 5, cursor: 'pointer',
                font: `600 13px/1 ${T.sans}`, color: activeFilters ? T.tealDeep : T.ink45,
              }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 6h18M6 12h12M10 18h4" /></svg>
                {tr('filters', li)}{activeFilters ? ' · ' + activeFilters : ''}
              </span>
            )}
          </div>
        </div>
        <TabBar active="Search" onNav={onNav} />

        {sheet && (
          <div onClick={closeSheet} style={{
            position: 'absolute', inset: 0, zIndex: 50, background: 'rgba(20,24,26,0.45)',
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
            animation: closing ? 'nsFadeOut .24s ease both' : (settled ? 'none' : 'nsFade .16s ease both'),
            opacity: closing ? undefined : Math.max(0.25, 1 - drag / 420),
          }}>
            <div onClick={e => e.stopPropagation()} style={{
              background: T.paper, borderRadius: '24px 24px 0 0', padding: '0 22px 26px',
              animation: closing
                ? 'nsSheetDown .24s cubic-bezier(.5,0,.75,0) both'
                : (settled ? 'none' : 'nsSheetUp .26s cubic-bezier(.2,.8,.25,1) both'),
              transform: 'translateY(' + Math.max(0, drag) + 'px)',
              transition: drag ? 'none' : 'transform .22s cubic-bezier(.2,.8,.25,1)',
              maxHeight: '76%', overflowY: 'auto', overscrollBehavior: 'contain', touchAction: 'none',
              transform: drag ? 'translateY(' + drag + 'px)' : undefined,
              transition: dragRef.current ? 'none' : 'transform .22s cubic-bezier(.2,.8,.25,1)',
            }}>
              <div onPointerDown={onGrab} onPointerMove={onDrag} onPointerUp={onRelease} onPointerCancel={onRelease}
                style={{ padding: '12px 0 14px', cursor: 'grab', touchAction: 'none' }}>
                <div style={{ width: 38, height: 4, borderRadius: 4, background: 'rgba(32,38,42,0.22)', margin: '0 auto' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ font: `700 19px/1 ${T.sans}`, letterSpacing: '-0.02em', color: T.ink }}>{tr('filters', li)}</span>
                <span onClick={() => { setCat('All'); setBrand('All'); setStockOnly(false); }} style={{ marginLeft: 'auto', font: `600 13px/1 ${T.sans}`, color: T.teal, cursor: 'pointer' }}>{tr('reset', li)}</span>
              </div>

              <div style={{ marginTop: 20, font: `500 10.5px/1 ${T.sans}`, letterSpacing: '0.14em', textTransform: 'uppercase', color: T.ink45 }}>{tr('category', li)}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 11 }}>
                {cats.map(c => (
                  <div key={c} onClick={() => setCat(c)} style={{
                    padding: '9px 14px', borderRadius: 100, cursor: 'pointer',
                    background: cat === c ? T.ink : T.white, color: cat === c ? '#fff' : T.ink70,
                    border: `1px solid ${cat === c ? T.ink : T.line}`, font: `600 12.5px/1 ${T.sans}`,
                  }}>{tr(c, li)}</div>
                ))}
              </div>

              <div style={{ marginTop: 22, font: `500 10.5px/1 ${T.sans}`, letterSpacing: '0.14em', textTransform: 'uppercase', color: T.ink45 }}>{tr('brand', li)}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 11 }}>
                {brands.map(b => (
                  <div key={b} onClick={() => setBrand(b)} style={{
                    padding: '9px 14px', borderRadius: 100, cursor: 'pointer',
                    background: brand === b ? T.ink : T.white, color: brand === b ? '#fff' : T.ink70,
                    border: `1px solid ${brand === b ? T.ink : T.line}`, font: `600 12.5px/1 ${T.sans}`,
                  }}>{b}</div>
                ))}
              </div>

              <div onClick={() => setStockOnly(v => !v)} style={{
                marginTop: 22, padding: '14px 16px', borderRadius: 16, cursor: 'pointer',
                background: T.white, border: `1px solid ${stockOnly ? 'rgba(63,178,189,0.45)' : T.line}`,
                display: 'flex', alignItems: 'center', gap: 12,
              }}>
                <span style={{ flex: 1, font: `600 14px/1.3 ${T.sans}`, color: T.ink }}>{tr('inStockOnly', li)}</span>
                <div style={{
                  width: 46, height: 27, boxSizing: 'border-box', borderRadius: 27, flex: 'none', padding: 3,
                  background: stockOnly ? T.teal : 'rgba(32,38,42,0.18)', transition: 'background .2s',
                  display: 'flex', alignItems: 'center', justifyContent: stockOnly ? 'flex-end' : 'flex-start',
                }}>
                  <div style={{ width: 21, height: 21, borderRadius: 21, background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
                </div>
              </div>

              <div onClick={closeSheet} style={{
                marginTop: 20, textAlign: 'center', padding: '15px 0', borderRadius: 100,
                background: T.ink, font: `600 15px/1 ${T.sans}`, color: '#fff', cursor: 'pointer'
              , ...pressStyle }} {...press(0.975)}>{tr('showResults', li)}</div>
            </div>
          </div>
        )}
      </Screen>
    </D>
  );
}

/* ── Orders ──────────────────────────────────────────────── */
function NasanOrders({ bare, onMenu, onNav, cartCount , onLang } = {}) {
  const D = frame(bare, 'ios');
  const li = useLang();
  const [tab, setTab] = React.useState('Active');
  const [open, setOpen] = React.useState(null);
  const [asked, setAsked] = React.useState(null);
  const [confirmCancel, setConfirmCancel] = React.useState(null);
  const [leaving, setLeaving] = React.useState(null);
  const doCancel = (id) => {
    setLeaving(id); setConfirmCancel(null); setAsked(null);
    setTimeout(() => { window.NasanStore && window.NasanStore.setOrderStatus(id, 'Cancelled'); setLeaving(null); }, 320);
  };
  const WA = '' + 'https://wa.me/' + nsSet('general', 'whatsapp', '9647704149292') + '?text=';
  const st = window.useNasanStore ? window.useNasanStore() : { orders: [] };
  const STEP = { Waiting: 0, Received: 1, Preparing: 2, Ready: 3, 'Picked up': 4, Collected: 4 };
  const localItems = (n) => n + ' ' + tr(n === 1 ? 'item' : 'items', li);
  const LABEL = {
    Waiting: tr('waiting', li), Received: tr('received', li), Preparing: tr('preparing', li),
    Ready: tr('readyPickup', li), 'Picked up': tr('pickedUp', li), Collected: tr('pickedUp', li),
  };
  const mine = window.NasanStore ? window.NasanStore.myOrders() : [];
  const signedOut = !st.signedIn;
  const active = mine.filter(o => !o.past)
    .map(o => [o.id, LABEL[o.status] || o.status,
      o.summary.replace(/(\d+) items?$/, (m, n) => localItems(Number(n))),
      localWhen(o.when, li),
      STEP[o.status] ?? 0, o.updatedAt]);
  const past = mine.filter(o => o.past)
    .map(o => [o.id, o.summary.replace(/(\d+) items?$/, (m, n) => localItems(Number(n))), localWhen(o.when, li), o.shop || 'Barzar Jawazaka', o.status === 'Cancelled']);
  return (
    <D>
      <Screen bg={T.paper} bar={{ title: tr('orders', li), onMenu, onCart: () => onNav && onNav('Cart'), cart: cartCount, onLang }}>
        <ScrollArea style={{ paddingTop: 96 }} onRefresh={() => {}}>
          <div style={{ display: 'flex', gap: 6, margin: '4px 20px 0', padding: 4, borderRadius: 12, background: 'rgba(32,38,42,0.06)' }}>
            {[['Active', 'active'], ['Past', 'past']].map(([tname, tkey]) => (
              <div key={tname} onClick={() => { setTab(tname); setOpen(null); }} style={{
                flex: 1, textAlign: 'center', padding: '9px 0', borderRadius: 9, cursor: 'pointer',
                background: tab === tname ? T.white : 'transparent',
                boxShadow: tab === tname ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
                font: `600 13.5px/1 ${T.sans}`, color: tab === tname ? T.ink : T.ink45,
              }}>{tr(tkey, li)}</div>
            ))}
          </div>

          {tab === 'Active' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '18px 20px 26px' }}>
{(signedOut || !active.length) && (
                <div style={{ padding: '44px 20px', textAlign: 'center', animation: 'nsCardIn .4s cubic-bezier(.2,.8,.25,1) both' }}>
                  <div style={{ width: 64, height: 64, margin: '0 auto', borderRadius: 20, background: T.white, border: `1px solid ${T.line}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={T.ink45} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16v14H4zM8 3v5M16 3v5M8 13h8M8 16.5h5" /></svg>
                  </div>
                  <div style={{ marginTop: 16, font: `700 18px/1.2 ${T.sans}`, letterSpacing: '-0.02em', color: T.ink }}>{tr(signedOut ? 'ordersSignedOut' : 'noOrdersTitle', li)}</div>
                  <div style={{ marginTop: 7, font: `400 13.5px/1.55 ${T.sans}`, color: T.ink70 }}>{tr(signedOut ? 'gateBody' : 'noOrdersBody', li)}</div>
                  <div onClick={() => onNav && onNav(signedOut ? 'You' : 'Shop')} {...press(0.975)} style={{ ...pressStyle, marginTop: 18, display: 'inline-flex', padding: '12px 22px', borderRadius: 100, background: T.ink, font: `600 13.5px/1 ${T.sans}`, color: '#fff', cursor: 'pointer' }}>
                    {tr(signedOut ? 'gateCreate' : 'browseProducts', li)}
                  </div>
                </div>
              )}
              {!signedOut && active.map(([id, status, items, when, step, updatedAt], oi) => (
                <div key={id} style={{ padding: 16, borderRadius: 18, background: T.white, border: `1px solid ${T.line}`, animation: leaving === id ? 'nsCardOut .32s cubic-bezier(.5,0,.75,0) both' : 'nsCardIn .32s cubic-bezier(.2,.8,.25,1) both', animationDelay: leaving === id ? '0s' : (oi * 0.06) + 's' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ font: `700 15px/1 ${T.sans}`, color: T.ink }}>{id}</span>
                    <span key={status} style={{
                      display: 'flex', alignItems: 'center', gap: 6,
                      font: `600 10.5px/1 ${T.sans}`, letterSpacing: '0.06em', textTransform: 'uppercase',
                      padding: '6px 9px', borderRadius: 6, background: 'rgba(63,178,189,0.14)', color: T.tealDeep,
                      animation: updatedAt && Date.now() - updatedAt < 4000 ? 'nsPop .4s cubic-bezier(.2,.8,.25,1) both' : undefined,
                    }}>
                      <span style={{ width: 5, height: 5, borderRadius: 5, background: T.teal, animation: 'nsPulse 1.6s ease-in-out infinite' }} />
                      {status}
                    </span>
                  </div>
                  <div style={{ marginTop: 9, font: `400 13.5px/1.4 ${T.sans}`, color: T.ink70 }}>{items}</div>
                  <div style={{ marginTop: 4, font: `400 12px/1.3 ${T.sans}`, color: T.ink45 }}>{when}</div>
                  <div style={{ display: 'flex', gap: 4, marginTop: 14 }}>
                    {[['Waiting', 'waiting'], ['Received', 'received'], ['Preparing', 'preparing'], ['Ready', 'ready'], ['Picked up', 'pickedUp']].map(([st, sk], i) => (
                      <div key={st} style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ height: 3, borderRadius: 3, background: 'rgba(32,38,42,0.12)', overflow: 'hidden' }}>
                          <div style={{
                            height: '100%', width: i <= step ? '100%' : '0%',
                            background: i === step
                              ? 'linear-gradient(90deg, ' + T.teal + ' 0%, ' + T.teal + ' 38%, rgba(255,255,255,0.85) 50%, ' + T.teal + ' 62%, ' + T.teal + ' 100%)'
                              : T.teal,
                            backgroundSize: i === step ? '220% 100%' : undefined,
                            animation: i === step ? 'nsFlow 1.9s linear infinite' : undefined,
                            transition: 'width .5s cubic-bezier(.2,.8,.25,1) ' + (i * 0.12) + 's',
                          }} />
                        </div>
                        <div style={{ marginTop: 6, font: `${i === step ? 600 : 500} 10.5px/1.15 ${T.sans}`, color: T.ink70, textAlign: 'center' }}>{tr(sk, li)}</div>
                      </div>
                    ))}
                  </div>
                  <div onClick={() => setAsked(asked === id ? null : id)} style={{ marginTop: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '11px 0', borderRadius: 100, border: `1px solid ${asked === id ? 'rgba(63,178,189,0.5)' : T.line}`, background: asked === id ? 'rgba(63,178,189,0.10)' : 'transparent', font: `600 13px/1 ${T.sans}`, color: T.ink, cursor: 'pointer' , ...pressStyle }} {...press(0.975)}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={T.tealDeep} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16v12H8l-4 4V5z" /></svg>
                    {tr('askAboutOrder', li)}
                  </div>
                  {asked === id && (
                    <div style={{ marginTop: 10, padding: 14, borderRadius: 14, background: T.paper, border: `1px solid ${T.line}` }}>
                      <div style={{ font: `500 10.5px/1 ${T.sans}`, letterSpacing: '0.12em', textTransform: 'uppercase', color: T.ink45 }}>Message about {id}</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginTop: 11 }}>
                        {['Is it ready for pickup?', 'Can I change the quantity?', 'Ask for the price'].map(q => (
                          <a key={q} href={'' + 'https://wa.me/' + nsSet('general', 'whatsapp', '9647704149292') + '?text=' + encodeURIComponent(tr('waOrderMsg', li) + ' ' + id + ': ' + q)}
                            target="_blank" rel="noopener noreferrer"
                            style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '10px 13px', borderRadius: 11, background: T.white, border: `1px solid ${T.line}`, font: `500 13px/1.3 ${T.sans}`, color: T.ink, cursor: 'pointer', textDecoration: 'none' }}>
                            <span style={{ flex: 1 }}>{q}</span>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T.tealDeep} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 5h5v5M19 5l-9 9M18 14v5H5V6h5" /></svg>
                          </a>
                        ))}
                      </div>
                      <a href={'' + 'https://wa.me/' + nsSet('general', 'whatsapp', '9647704149292') + '?text=' + encodeURIComponent(tr('waOrderMsg', li) + ' ' + id)}
                        target="_blank" rel="noopener noreferrer"
                        style={{ marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9, padding: '12px 0', borderRadius: 100, background: T.teal, font: `700 13.5px/1 ${T.sans}`, color: '#0E2124', cursor: 'pointer', textDecoration: 'none' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E2124" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16v12H8l-4 4V5z" /></svg>
                        Write your own message
                      </a>
                    </div>
                  )}
                  {step <= 2 ? (
                    confirmCancel === id ? (
                      <div style={{ marginTop: 10, padding: 14, borderRadius: 14, background: 'rgba(180,68,58,0.06)', border: '1px solid rgba(180,68,58,0.25)', animation: 'nsRiseIn .22s cubic-bezier(.2,.8,.25,1) both' }}>
                        <div style={{ font: `700 14px/1.2 ${T.sans}`, color: T.ink }}>{tr('cancelSure', li)}</div>
                        <div style={{ marginTop: 5, font: `400 12.5px/1.45 ${T.sans}`, color: T.ink70 }}>{tr('cancelNote', li)}</div>
                        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                          <div onClick={() => setConfirmCancel(null)} {...press(0.97)} style={{ ...pressStyle, flex: 1, textAlign: 'center', padding: '11px 0', borderRadius: 100, border: `1px solid ${T.line}`, background: T.white, font: `600 13px/1 ${T.sans}`, color: T.ink, cursor: 'pointer' }}>{tr('keepOrder', li)}</div>
                          <div onClick={() => doCancel(id)} {...press(0.97)} style={{ ...pressStyle, flex: 1, textAlign: 'center', padding: '11px 0', borderRadius: 100, background: '#B4443A', font: `600 13px/1 ${T.sans}`, color: '#fff', cursor: 'pointer' }}>{tr('yesCancel', li)}</div>
                        </div>
                      </div>
                    ) : (
                      <div onClick={() => { setConfirmCancel(id); setAsked(null); }} {...press(0.975)} style={{ ...pressStyle, marginTop: 8, textAlign: 'center', padding: '11px 0', font: `600 13px/1 ${T.sans}`, color: '#B4443A', cursor: 'pointer' }}>
                        {tr('cancelOrder', li)}
                      </div>
                    )
                  ) : (
                    <div style={{ marginTop: 10, textAlign: 'center', font: `400 12px/1.4 ${T.sans}`, color: T.ink45 }}>{tr('cancelLocked', li)}</div>
                  )}
                </div>
              ))}
            </div>
          )}

          {tab === 'Past' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '18px 20px 26px' }}>
{(signedOut || !past.length) && (
                <div style={{ padding: '44px 20px', textAlign: 'center', animation: 'nsCardIn .4s cubic-bezier(.2,.8,.25,1) both' }}>
                  <div style={{ width: 64, height: 64, margin: '0 auto', borderRadius: 20, background: T.white, border: `1px solid ${T.line}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={T.ink45} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16v14H4zM8 3v5M16 3v5M8 13h8M8 16.5h5" /></svg>
                  </div>
                  <div style={{ marginTop: 16, font: `700 18px/1.2 ${T.sans}`, letterSpacing: '-0.02em', color: T.ink }}>{tr(signedOut ? 'ordersSignedOut' : 'noOrdersTitle', li)}</div>
                  <div style={{ marginTop: 7, font: `400 13.5px/1.55 ${T.sans}`, color: T.ink70 }}>{tr(signedOut ? 'gateBody' : 'noPastBody', li)}</div>
                  <div onClick={() => onNav && onNav(signedOut ? 'You' : 'Shop')} {...press(0.975)} style={{ ...pressStyle, marginTop: 18, display: 'inline-flex', padding: '12px 22px', borderRadius: 100, background: T.ink, font: `600 13.5px/1 ${T.sans}`, color: '#fff', cursor: 'pointer' }}>
                    {tr(signedOut ? 'gateCreate' : 'browseProducts', li)}
                  </div>
                </div>
              )}
              {!signedOut && past.map(([id, items, when, shop, isCancelled]) => {
                const isOpen = open === id;
                return (
                  <div key={id} onClick={() => setOpen(isOpen ? null : id)} style={{
                    padding: 16, borderRadius: 18, background: T.white, cursor: 'pointer',
                    border: `1px solid ${isOpen ? 'rgba(63,178,189,0.5)' : T.line}`,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <span style={{ font: `700 14.5px/1.2 ${T.sans}`, color: T.ink }}>{id}</span>
                          {isCancelled && <span style={{ font: `600 10px/1 ${T.sans}`, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '5px 7px', borderRadius: 6, background: 'rgba(180,68,58,0.10)', color: '#B4443A' }}>{tr('cancelled', li)}</span>}
                        </div>
                        <div style={{ marginTop: 4, font: `400 12.5px/1.3 ${T.sans}`, color: T.ink45 }}>{items} · {when}</div>
                      </div>
                      <svg data-flip="1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.ink45} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isOpen ? 'rotate(90deg)' : 'none', transition: 'transform .18s' }}><path d="M9 5l7 7-7 7" /></svg>
                    </div>
                    {isOpen && (
                      <div style={{ marginTop: 14, paddingTop: 14, borderTop: `1px solid ${T.line}` }}>
                        {(isCancelled ? [['Status', tr('cancelled', li)]] : [['Collected from', shop], ['Payment', 'Cash on pickup'], ['Status', 'Completed']]).map(([k, v]) => (
                          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0' }}>
                            <span style={{ font: `400 13px/1.4 ${T.sans}`, color: T.ink45 }}>{k}</span>
                            <span style={{ font: `500 13px/1.4 ${T.sans}`, color: T.ink }}>{v}</span>
                          </div>
                        ))}
                        <div style={{ display: 'flex', gap: 9, marginTop: 14 }}>
                          <div style={{ flex: 1, textAlign: 'center', padding: '11px 0', borderRadius: 100, background: T.ink, font: `600 13px/1 ${T.sans}`, color: '#fff' }}>{tr('reorder', li)}</div>
                          <div style={{ flex: 1, textAlign: 'center', padding: '11px 0', borderRadius: 100, border: `1px solid ${T.line}`, font: `600 13px/1 ${T.sans}`, color: T.ink }}>{tr('getInvoice', li)}</div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </ScrollArea>
        <TabBar active="Orders" onNav={onNav} />
      </Screen>
    </D>
  );
}

/* ── You — sign in / sign up ─────────────────────────────── */
function NasanAccount({ bare, onMenu, onNav, cartCount, onLang } = {}) {
  const D = frame(bare, 'ios');
  const li = useLang();
  const [mode, setMode] = React.useState(() => {
    const want = window.__nasanAuthMode; window.__nasanAuthMode = null;
    if (want) return want;
    const st0 = window.NasanStore && window.NasanStore.get();
    return st0 && st0.accounts && st0.accounts.length ? 'in' : 'up';
  });
  const store = window.useNasanStore ? window.useNasanStore() : { account: {}, signedIn: false };
  React.useEffect(() => {
    if (store.signedIn && window.__nasanReturnToCart) {
      window.__nasanReturnToCart = false;
      const id = setTimeout(() => onNav && onNav('Cart'), 700);
      return () => clearTimeout(id);
    }
  }, [store.signedIn]);
  const form = store.account || {};
  const setForm = (fn) => {
    const next = typeof fn === 'function' ? fn(form) : fn;
    window.NasanStore && window.NasanStore.patchAccount(next);
  };
  const signedIn = store.signedIn;
  const setSignedIn = (v) => window.NasanStore && window.NasanStore.setSignedIn(v);
  const [err, setErr] = React.useState('');
  const [geo, setGeo] = React.useState('idle');
  const [hasShop, setHasShop] = React.useState(false);
  const [coords, setCoords] = React.useState(null);
  const [cityOpen, setCityOpen] = React.useState(false);
  const [citySearch, setCitySearch] = React.useState('');
  const signUp = mode === 'up' || mode === 'edit';
  const editing = mode === 'edit';
  const [locOn, setLocOn] = React.useState(false);
  const [shown, setShown] = React.useState({});
  /* Phone OTP. verifiedPhone holds the exact number that passed, so editing the
     number afterwards un-verifies it. The code is generated locally — a real
     build sends it from the server via an SMS gateway and checks it there. */
  const [otp, setOtp] = React.useState({ sent: false, code: '', entry: '', left: 0, err: '' });
  const [verifiedPhone, setVerifiedPhone] = React.useState(store.account && store.account.phoneVerified ? store.account.phone : '');
  const [savedFlash, setSavedFlash] = React.useState(false);
  /* Profile photo: picked from library or camera, center-cropped to a square and
     downscaled to 320px so it stays small in storage. */
  const photoRef = React.useRef(null);
  const pickPhoto = () => photoRef.current && photoRef.current.click();
  const onPhoto = (e) => {
    const file = e.target.files && e.target.files[0];
    e.target.value = '';
    if (!file || !/^image\//.test(file.type)) return;
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const S = 320, side = Math.min(img.width, img.height);
        const c = document.createElement('canvas'); c.width = S; c.height = S;
        c.getContext('2d').drawImage(img, (img.width - side) / 2, (img.height - side) / 2, side, side, 0, 0, S, S);
        const url = c.toDataURL('image/jpeg', 0.86);
        /* merge-patch only the photo: the async load must not write back a stale copy of the form */
        window.NasanStore && window.NasanStore.patchAccount({ photo: url });
        setErr('');
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  };
  const photoInput = (
    <input ref={photoRef} type="file" accept="image/*" onChange={onPhoto} style={{ display: 'none' }} />
  );
  const [photoBroken, setPhotoBroken] = React.useState('');
  const avatar = (size, initials, bg) => {
    const showPhoto = form.photo && photoBroken !== form.photo;
    return (
    <div style={{
      width: size, height: size, borderRadius: size, flex: 'none', overflow: 'hidden', position: 'relative',
      background: showPhoto ? 'rgba(32,38,42,0.08)' : bg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      font: `700 ${Math.round(size * 0.38)}px/1 ${T.sans}`, color: '#fff',
    }}>
      {showPhoto
        ? <img src={form.photo} alt="" onError={() => setPhotoBroken(form.photo)} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', animation: 'nsFade .25s ease both' }} />
        : initials}
    </div>
    );
  };
  const phoneDigits = (form.phone || '').replace(/\D/g, '');
  /* Also verified when the number is unchanged from the signed-in account's record —
     verifiedPhone is component state seeded at mount (usually signed out), so
     without this an existing account would have to re-verify its own number. */
  const phoneOnRecord = (() => {
    const NSx = window.NasanStore; const se = (store.sessionEmail || '').toLowerCase();
    if (!NSx || !se) return false;
    const rec = NSx.get().accounts.find(a => a.email === se);
    return !!rec && rec.phoneVerified && (rec.phone || '').replace(/\D/g, '') === (form.phone || '').replace(/\D/g, '');
  })();
  /* No SMS code: a full 10-digit Iraqi mobile number is enough. */
  const phoneOk = phoneDigits.length === 10 && /^7/.test(phoneDigits);
  React.useEffect(() => {
    if (!otp.left) return;
    const id = setTimeout(() => setOtp(o => ({ ...o, left: Math.max(0, o.left - 1) })), 1000);
    return () => clearTimeout(id);
  }, [otp.left]);
  const sendOtp = () => {
    if (phoneDigits.length !== 10) return setOtp(o => ({ ...o, err: tr('phoneShort', li) }));
    if (phoneTaken) return setOtp(o => ({ ...o, err: tr('phoneTaken', li) }));
    const code = String(Math.floor(100000 + Math.random() * 900000));
    setOtp({ sent: true, code, entry: '', left: 60, err: '' });
  };
  /* ── identifier & email validation ── */
  const NS = window.NasanStore;
  const EMAIL_RE = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)*\.[a-z]{2,}$/i;
  const TYPO = { 'gmial.com': 'gmail.com', 'gmai.com': 'gmail.com', 'gmail.co': 'gmail.com', 'gamil.com': 'gmail.com', 'gnail.com': 'gmail.com', 'hotmial.com': 'hotmail.com', 'hotmail.co': 'hotmail.com', 'yahoo.co': 'yahoo.com', 'yaho.com': 'yahoo.com', 'outlok.com': 'outlook.com', 'iclod.com': 'icloud.com' };
  const emailTypo = (v) => { const d = (v.split('@')[1] || '').toLowerCase(); return TYPO[d] ? v.split('@')[0] + '@' + TYPO[d] : ''; };
  const sessionEmail = (store.sessionEmail || '').toLowerCase();
  /* returns { tone: 'ok'|'bad'|null, msg } for the sign-in identifier */
  const idStatus = (() => {
    const v = (form.identifier || '').trim();
    if (!v) return { tone: null, msg: '' };
    const looksPhone = /^[+\d\s()-]+$/.test(v);
    if (!looksPhone && !v.includes('@') && /\d/.test(v) && /[a-z]/i.test(v) && v.length < 4) return { tone: 'bad', msg: tr('idBadChars', li) };
    if (looksPhone) {
      const d = v.replace(/\D/g, '').replace(/^964/, '').replace(/^0/, '');
      if (d.length !== 10 || d[0] !== '7') return { tone: 'bad', msg: tr('idFullPhone', li) };
      return NS && NS.findAccount(d) ? { tone: 'ok', msg: tr('accFound', li) } : { tone: 'bad', msg: tr('noAccPhone', li) };
    }
    if (!EMAIL_RE.test(v)) return { tone: 'bad', msg: tr('idFullEmail', li) };
    const typo = emailTypo(v);
    if (NS && NS.findAccount(v)) return { tone: 'ok', msg: tr('accFound', li) };
    return { tone: 'bad', msg: typo ? tr('emailTypo', li) + ' ' + typo + '?' : tr('noAccEmail', li) };
  })();
  /* sign-up / edit email */
  const emailNorm = (form.email || '').trim().toLowerCase();
  const emailOwn = editing && emailNorm === sessionEmail;
  const emailStatus = (() => {
    if (!emailNorm) return { tone: null, msg: '' };
    if (!EMAIL_RE.test(emailNorm)) return { tone: 'bad', msg: tr('idFullEmail', li) };
    const typo = emailTypo(emailNorm);
    if (typo) return { tone: 'bad', msg: tr('emailTypo', li) + ' ' + typo + '?' };
    if (!emailOwn && NS && NS.findAccount(emailNorm)) return { tone: 'bad', msg: tr('emailTaken', li) };
    return { tone: 'ok', msg: emailOwn ? tr('phoneVerified', li) : tr('emailAvail', li) };
  })();
  const [eotp, setEotp] = React.useState({ sent: false, code: '', entry: '', left: 0, err: '' });
  const [verifiedEmail, setVerifiedEmail] = React.useState('');
  const emailOk = emailOwn || (!!verifiedEmail && verifiedEmail === emailNorm);
  React.useEffect(() => {
    if (!eotp.left) return;
    const id = setTimeout(() => setEotp(o => ({ ...o, left: Math.max(0, o.left - 1) })), 1000);
    return () => clearTimeout(id);
  }, [eotp.left]);
  React.useEffect(() => { if (eotp.sent) setEotp({ sent: false, code: '', entry: '', left: 0, err: '' }); }, [emailNorm]);
  const sendEmailOtp = () => {
    if (emailStatus.tone !== 'ok') return;
    setEotp({ sent: true, code: String(Math.floor(100000 + Math.random() * 900000)), entry: '', left: 60, err: '' });
  };
  const checkEmailOtp = (entry) => {
    if (entry.length < 6) return;
    if (entry === eotp.code) { setVerifiedEmail(emailNorm); setEotp({ sent: false, code: '', entry: '', left: 0, err: '' }); setErr(''); }
    else setEotp(o => ({ ...o, entry: '', err: tr('otpWrong', li) }));
  };
  const phoneOwn = editing && NS && (() => { const a = NS.findAccount(form.phone); return a && a.email === sessionEmail; })();
  const phoneTaken = phoneDigits.length === 10 && !phoneOwn && NS && !!NS.findAccount(phoneDigits);
  const passLen = (form.pass || '').length;
  const statusLine = (st) => st && st.tone ? (
    <div style={{ marginTop: 8, display: 'flex', alignItems: 'flex-start', gap: 6, font: `500 12.5px/1.4 ${T.sans}`, color: st.tone === 'ok' ? '#1F8A4C' : '#C0392B', animation: 'nsFade .18s ease both' }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none', marginTop: 1 }}>
        {st.tone === 'ok' ? <path d="M4 12.5l5 5L20 6.5" /> : <path d="M6 6l12 12M18 6L6 18" />}
      </svg>
      <span>{st.msg}</span>
    </div>
  ) : null;
  const otpBox = (o, setO, onDone, target, sentKey) => (
    <div style={{ marginTop: 10, padding: 14, borderRadius: 14, background: T.white, border: `1px solid rgba(63,178,189,0.45)`, animation: 'nsRiseIn .28s cubic-bezier(.2,.8,.25,1) both' }}>
      <div style={{ font: `600 13.5px/1.2 ${T.sans}`, color: T.ink }}>{tr('otpTitle', li)}</div>
      <div style={{ marginTop: 4, font: `400 12.5px/1.4 ${T.sans}`, color: T.ink70 }}>{tr(sentKey, li)} <span dir="ltr">{target}</span></div>
      <div dir="ltr" style={{ position: 'relative', marginTop: 12, display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 7 }}>
        {[0, 1, 2, 3, 4, 5].map(i => (
          <div key={i} style={{
            height: 46, borderRadius: 11, display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(32,38,42,0.04)',
            border: `1.5px solid ${o.err ? '#C0392B' : i === o.entry.length ? T.teal : T.line}`,
            font: `700 20px/1 ${T.sans}`, color: T.ink,
          }}>{o.entry[i] || ''}</div>
        ))}
        <input value={o.entry} inputMode="numeric" autoComplete="one-time-code" maxLength={6}
          onChange={e => { const v = e.target.value.replace(/\D/g, '').slice(0, 6); setO(x => ({ ...x, entry: v, err: '' })); if (v.length === 6) setTimeout(() => onDone(v), 120); }}
          style={{ position: 'absolute', inset: 0, opacity: 0, width: '100%', height: '100%', border: 'none', fontSize: 16, cursor: 'text' }} />
      </div>
      {o.err && <div style={{ marginTop: 9, font: `500 12.5px/1.4 ${T.sans}`, color: '#C0392B' }}>{o.err}</div>}
      <div style={{ marginTop: 10, padding: '9px 11px', borderRadius: 9, background: 'rgba(63,178,189,0.10)', font: `400 12px/1.45 ${T.sans}`, color: T.tealDeep }}>
        {tr('otpDemo', li)} <b dir="ltr" style={{ letterSpacing: '0.12em' }}>{o.code}</b>
      </div>
    </div>
  );
  const sendBtn = (o, onSend, enabled) => (
    <span onClick={enabled && !o.left ? onSend : undefined} {...press(0.95)} style={{
      ...pressStyle, flex: 'none', padding: '9px 13px', borderRadius: 100,
      background: enabled && !o.left ? T.ink : 'rgba(32,38,42,0.08)', color: enabled && !o.left ? '#fff' : T.ink45,
      font: `600 12.5px/1 ${T.sans}`, cursor: enabled && !o.left ? 'pointer' : 'default', whiteSpace: 'nowrap',
    }}>{o.left ? o.left + 's' : o.sent ? tr('resend', li) : tr('sendOtp', li)}</span>
  );
  const emailField = () => (
    <div style={{ marginTop: 14 }}>
      {label(tr('email', li))}
      {input('email', 'name@example.com', 'email')}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
        <div style={{ flex: 1, minWidth: 0 }}>{emailOk && !emailOwn ? statusLine({ tone: 'ok', msg: tr('phoneVerified', li) }) : statusLine(emailStatus)}</div>
        {!emailOk && emailStatus.tone === 'ok' && <div style={{ marginTop: 6 }}>{sendBtn(eotp, sendEmailOtp, true)}</div>}
      </div>
      {!emailOk && eotp.sent && otpBox(eotp, setEotp, checkEmailOtp, emailNorm, 'emailOtpSentTo')}
    </div>
  );

  const checkOtp = (entry) => {
    if (entry.length < 6) return;
    if (entry === otp.code) {
      setVerifiedPhone(form.phone);
      setOtp({ sent: false, code: '', entry: '', left: 0, err: '' });
      setErr('');
    } else setOtp(o => ({ ...o, entry: '', err: tr('otpWrong', li) }));
  };
  const [sent, setSent] = React.useState(false);
  const [left, setLeft] = React.useState(0);
  React.useEffect(() => {
    if (left <= 0) return;
    const id = setTimeout(() => setLeft(n => n - 1), 1000);
    return () => clearTimeout(id);
  }, [left]);
  const sendCode = () => { setSent(true); setLeft(45); };
  /* Real "Sign in to nasan Company" consent screen.
     The app name on that screen comes from the Google Cloud project that owns the
     client ID, so it cannot be set from here. To switch it on:
       1. console.cloud.google.com → APIs & Services → OAuth consent screen
          → App name: "nasan Company"
       2. Credentials → Create OAuth client ID (Web application)
          → Authorised redirect URI: this app's URL
       3. Paste the client ID below.
     With it set, Google shows "Sign in to nasan Company". Without it, Google has
     no app to name, so we fall back to the plain account chooser. */
  const GOOGLE_CLIENT_ID = '';
  const GOOGLE_URL = GOOGLE_CLIENT_ID
    ? 'https://accounts.google.com/o/oauth2/v2/auth'
      + '?client_id=' + encodeURIComponent(GOOGLE_CLIENT_ID)
      + '&redirect_uri=' + encodeURIComponent(typeof location !== 'undefined' ? location.origin + location.pathname : '')
      + '&response_type=code'
      + '&scope=' + encodeURIComponent('openid email profile')
      + '&prompt=select_account'
      + '&access_type=offline'
    : 'https://accounts.google.com/AccountChooser?continue=' + encodeURIComponent('https://myaccount.google.com/');
  const set = (k) => (v) => setForm(f => ({ ...f, [k]: v }));

  const label = (txt) => (
    <div style={{ font: `500 10.5px/1 ${T.sans}`, letterSpacing: '0.12em', textTransform: 'uppercase', color: T.ink45 }}>{txt}</div>
  );
  const input = (key, placeholder, type) => {
    const isPass = type === 'password';
    const visible = !!shown[key];
    return (
      <div style={{ position: 'relative', marginTop: 8 }}>
        <input value={form[key] || ''} onChange={e => set(key)(e.target.value)} placeholder={placeholder}
          type={isPass && !visible ? 'password' : type === 'password' ? 'text' : (type || 'text')}
          autoComplete={isPass ? 'new-password' : 'off'}
          style={{
            width: '100%', boxSizing: 'border-box', height: 48, padding: isPass ? '0 46px 0 14px' : '0 14px',
            borderRadius: 13, background: T.white, border: `1px solid ${T.line}`,
            font: `400 15px/1 ${T.sans}`, color: T.ink, outline: 'none',
          }} />
        {isPass && (
          <span onClick={() => setShown(v => ({ ...v, [key]: !v[key] }))} title={visible ? 'Hide password' : 'Show password'}
            style={{
              position: 'absolute', right: 12, top: 0, bottom: 0, display: 'flex',
              alignItems: 'center', cursor: 'pointer', padding: '0 2px',
            }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={visible ? T.tealDeep : T.ink45} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s3.8-6.5 10-6.5S22 12 22 12s-3.8 6.5-10 6.5S2 12 2 12z" />
              <circle cx="12" cy="12" r="2.8" />
              {!visible && <path d="M4 20L20 4" />}
            </svg>
          </span>
        )}
      </div>
    );
  };
  const field = (key, txt, placeholder, type) => (
    <div style={{ marginTop: 14 }}>{label(txt)}{input(key, placeholder, type)}</div>
  );

  const phoneField = (txt) => (
    <div style={{ marginTop: 14 }}>
      {label(txt)}
      <div style={{
        marginTop: 8, display: 'flex', alignItems: 'center', height: 48,
        borderRadius: 13, background: T.white, border: `1px solid ${T.line}`, overflow: 'hidden',
      }}>
        <span style={{
          padding: '0 12px', height: '100%', display: 'flex', alignItems: 'center', gap: 7,
          borderRight: `1px solid ${T.line}`, background: 'rgba(32,38,42,0.035)',
          font: `600 15px/1 ${T.sans}`, color: T.ink, flex: 'none',
        }}>
          <span style={{ fontSize: 15 }}>🇮🇶</span>+964
        </span>
        <input value={form.phone} type="tel" inputMode="numeric"
          onChange={e => {
            const digits = e.target.value.replace(/\D/g, '').replace(/^964/, '').replace(/^0/, '').slice(0, 10);
            const g = digits.replace(/(\d{3})(\d{0,3})(\d{0,4})/, (m, a, b, c) => [a, b, c].filter(Boolean).join(' '));
            setForm(f => ({ ...f, phone: g }));
          }}
          placeholder="770 123 4567"
          style={{ flex: 1, minWidth: 0, height: '100%', border: 'none', outline: 'none', background: 'transparent', padding: '0 14px', font: `400 15px/1 ${T.sans}`, color: T.ink }} />
        {phoneOk && (
          <span style={{ display: 'flex', alignItems: 'center', padding: '0 14px', flex: 'none' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.tealDeep} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12.5l5 5L20 6.5" /></svg>
          </span>
        )}
      </div>
      {!phoneOk && phoneTaken && statusLine({ tone: 'bad', msg: tr('phoneTaken', li) })}
      {!phoneOk && !phoneTaken && phoneDigits.length > 0 && phoneDigits.length < 10 && statusLine({ tone: 'bad', msg: tr('idFullPhone', li) })}
    </div>
  );

  const cityField = () => (
    <div style={{ marginTop: 14 }}>
      {label(tr('city', li))}
      <div onClick={() => setCityOpen(true)} {...press(0.985)} style={{
        ...pressStyle,
        marginTop: 8, height: 48, borderRadius: 13, background: T.white,
        border: `1px solid ${form.city ? 'rgba(63,178,189,0.45)' : T.line}`,
        display: 'flex', alignItems: 'center', gap: 10, padding: '0 14px', cursor: 'pointer',
      }}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={form.city ? T.tealDeep : T.ink45} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none' }}><path d="M12 21s7-6.1 7-11a7 7 0 10-14 0c0 4.9 7 11 7 11z" /><circle cx="12" cy="10" r="2.4" /></svg>
        <span style={{ flex: 1, font: `400 15px/1 ${T.sans}`, color: form.city ? T.ink : T.ink45 }}>
          {form.city || tr('selectCity', li)}
        </span>
        <span style={{ font: `400 12px/1 ${T.sans}`, color: T.ink45 }}>Iraq</span>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={T.ink45} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
      </div>
    </div>
  );

  const locate = () => {
    if (geo === 'busy') return;
    setGeo('busy');
    if (!navigator.geolocation) { setGeo('denied'); return; }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setCoords({ lat: pos.coords.latitude.toFixed(5), lng: pos.coords.longitude.toFixed(5) });
        setGeo('ok'); setLocOn(true);
      },
      () => setGeo('denied'),
      { enableHighAccuracy: true, timeout: 8000 }
    );
  };

  const submit = () => {
    setErr('');
    if (editing) {
      if (!form.first || !form.last || !form.phone || !form.email) return setErr(tr('required', li));
      if (emailStatus.tone === 'bad') return setErr(emailStatus.msg);
      if (!emailOk) return setErr(tr('verifyEmailFirst', li));
      if (phoneTaken) return setErr(tr('phoneTaken', li));
      if (!phoneOk) return setErr(tr('idFullPhone', li));
      if (!form.photo) return setErr(tr('photoRequired', li));
      if (hasShop && (!form.shop || !form.city)) return setErr(tr('required', li));
      if (NS) {
        NS.patchAccount({ phoneVerified: true, emailVerified: true, email: emailNorm });
        NS.updateAccountRecord(sessionEmail, { ...form, email: emailNorm, phoneVerified: true, emailVerified: true });
      }
      setMode('in');
      setSavedFlash(true); setTimeout(() => setSavedFlash(false), 1800);
      return;
    }
    if (signUp) {
      if (!form.first || !form.last || !form.phone || !form.email || !form.pass) return setErr(tr('required', li));
      if (emailStatus.tone === 'bad') return setErr(emailStatus.msg);
      if (!emailOk) return setErr(tr('verifyEmailFirst', li));
      if (phoneTaken) return setErr(tr('phoneTaken', li));
      if (!phoneOk) return setErr(tr('idFullPhone', li));
      if (!form.photo) return setErr(tr('photoRequired', li));
      if (form.pass.length < 8) return setErr(tr('passShort', li));
      if (form.pass !== form.confirm) return setErr(tr('passMismatch', li));
      if (hasShop && (!form.shop || !form.city)) return setErr(tr('required', li));
      if (!NS) return;
      const rec = NS.registerAccount({ ...form, email: emailNorm, phoneVerified: true, emailVerified: true, hasShop: !!hasShop, lat: coords ? coords.lat : '', lng: coords ? coords.lng : '', locShared: !!(locOn && coords), lang: li });
      NS.startSession(rec);
      return;
    }
    /* sign in: full email or full phone, 8+ char password, must match a registered account */
    if (!form.identifier || !form.pass) return setErr(tr('badCredentials', li));
    if (idStatus.tone === 'bad') return setErr(idStatus.msg);
    if (form.pass.length < 8) return setErr(tr('passShort', li));
    const acc = NS && NS.findAccount(form.identifier);
    if (!acc) return setErr(tr('noAccEmail', li));
    if (!NS.checkPassword(acc, form.pass)) return setErr(tr('wrongPass', li));
    if (acc.status === 'suspended') return setErr(tr('accSuspended', li));
    NS.startSession(acc);
  };

  const googleBtn = (
    <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer"
      onClick={() => setTimeout(() => setSignedIn(true), 400)}
      style={{
      textDecoration: 'none', cursor: 'pointer',
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
      padding: '14px 0', borderRadius: 100, border: `1px solid ${T.line}`, background: T.white,
      font: `600 14px/1 ${T.sans}`, color: T.ink, cursor: 'pointer',
    }}>
      <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
        <path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-2.8-.4-4H24v7.3h12.1c-.2 2-1.6 5-4.5 7l-.1.3 6.5 5 .5.1c4.1-3.8 6.6-9.4 6.6-15.7z" />
        <path fill="#34A853" d="M24 46c5.9 0 10.9-2 14.5-5.3l-6.9-5.4c-1.8 1.3-4.3 2.2-7.6 2.2-5.8 0-10.7-3.8-12.5-9.1l-.3
        0-6.7 5.2-.1.3C7.9 41 15.4 46 24 46z" />
        <path fill="#FBBC05" d="M11.5 28.4c-.5-1.4-.7-2.9-.7-4.4s.3-3 .7-4.4v-.3l-6.8-5.3-.2.1C2.9 17 2 20.4 2 24s.9 7 2.5 9.9l7-5.5z" />
        <path fill="#EA4335" d="M24 10.5c4.1 0 6.9 1.8 8.5 3.3l6.2-6C34.9 4.4 29.9 2 24 2 15.4 2 7.9 7 4.5 14.1l7 5.5c1.8-5.3 6.7-9.1 12.5-9.1z" />
      </svg>
      {mode === 'up' ? tr('signUpGoogle', li) : tr('signInGoogle', li)}
    </a>
  );

  /* ── forgot password ── */
  if (mode === 'forgot') {
    return (
      <D>
        <Screen bg={T.paper} bar={{ title: tr('resetPassword', li), onBack: () => setMode('in') }}>
          <ScrollArea style={{ paddingTop: 96 }} onRefresh={() => {}}>
            <div style={{ padding: '6px 24px 0' }}>
              <h1 style={{ margin: 0, font: `700 28px/1.1 ${T.sans}`, letterSpacing: '-0.03em', color: T.ink }}>{tr('resetPassword', li)}</h1>
              <p style={{ margin: '10px 0 0', font: `400 14px/1.55 ${T.sans}`, color: T.ink70 }}>
                Enter the email or phone number on your account. We send a 6-digit code that expires in 10 minutes.
              </p>
              {field('identifier', 'Email or phone', 'Email or phone number')}
              <div onClick={sendCode} style={{ marginTop: 18, textAlign: 'center', padding: '15px 0', borderRadius: 100, background: T.ink, font: `600 15px/1 ${T.sans}`, color: '#fff', cursor: 'pointer' , ...pressStyle }} {...press(0.975)}>{sent ? tr('codeSent', li) : tr('sendCode', li)}</div>

              <div style={{ marginTop: 22, padding: 16, borderRadius: 16, background: T.white, border: `1px solid ${T.line}` }}>
                {label(tr('enterCode', li))}
                <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                  {[0, 1, 2, 3, 4, 5].map(i => (
                    <div key={i} style={{
                      flex: 1, height: 48, borderRadius: 11, background: T.paper,
                      border: `1px solid ${i === 0 ? T.teal : T.line}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      font: `600 18px/1 ${T.sans}`, color: T.ink45,
                    }}>{i === 0 ? '|' : ''}</div>
                  ))}
                </div>
                <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ font: `400 12px/1.4 ${T.sans}`, color: T.ink45 }}>{tr('didNotArrive', li)}</span>
                  {left > 0 ? (
                    <span style={{ font: `600 12px/1.4 ${T.sans}`, color: T.ink45 }}>
                      {tr('sendAgain', li)} 0:{left < 10 ? '0' + left : left}
                    </span>
                  ) : (
                    <span onClick={sendCode} style={{ font: `600 12px/1.4 ${T.sans}`, color: T.teal, cursor: 'pointer' }}>{tr('sendAgain', li)}</span>
                  )}
                </div>
              </div>

              <p style={{ margin: '18px 0 26px', font: `400 11.5px/1.6 ${T.sans}`, color: T.ink45, textAlign: 'center' }}>
                {tr('securityNote', li)}
              </p>
            </div>
          </ScrollArea>
          <TabBar active="You" onNav={onNav} />
        </Screen>
      </D>
    );
  }

  if (signedIn && !editing) {
    const st = window.NasanStore ? window.NasanStore.get() : { orders: [] };
    const em = form.email || (form.phone ? '+964 ' + form.phone : form.identifier) || 'Google account';
    const typed = [form.first, form.middle, form.last].filter(Boolean).join(' ');
    const nm = typed || 'nasan customer';
    const tint = T.teal;
    return (
      <D>
        <Screen bg={T.paper} bar={{ title: tr('you', useLang()), onMenu, onLang }}>
          <ScrollArea style={{ paddingTop: 96 }} onRefresh={() => {}}>
            <div style={{ padding: '10px 24px 0', display: 'flex', alignItems: 'center', gap: 14 }}>
              {photoInput}
              <div onClick={pickPhoto} {...press(0.94)} title={tr('changePhoto', li)} style={{ ...pressStyle, position: 'relative', cursor: 'pointer', flex: 'none' }}>
                {avatar(58, nm.split(' ').map(w => w[0]).join('').slice(0, 2), tint)}
                <span style={{
                  position: 'absolute', right: -3, bottom: -3, width: 22, height: 22, borderRadius: 22,
                  background: T.ink, border: `2px solid ${T.paper}`, boxSizing: 'border-box',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8h3l2-3h6l2 3h3v11H4z" /><circle cx="12" cy="13" r="3.4" /></svg>
                </span>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ font: `700 20px/1.2 ${T.sans}`, letterSpacing: '-0.02em', color: T.ink }}>{nm}</div>
                <div style={{ marginTop: 4, font: `400 13px/1.3 ${T.sans}`, color: T.ink45, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{em}</div>
                {form.phone && (
                  <div dir="ltr" style={{ marginTop: 5, display: 'flex', alignItems: 'center', gap: 5, font: `500 12.5px/1 ${T.sans}`, color: T.ink70, justifyContent: li ? 'flex-end' : 'flex-start' }}>
                    +964 {form.phone}
                    {phoneOk && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={T.tealDeep} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12.5l5 5L20 6.5" /></svg>}
                  </div>
                )}
              </div>
              <span onClick={() => setMode('edit')} {...press(0.9)} title={tr('editProfile', li)} style={{
                ...pressStyle, flex: 'none', width: 40, height: 40, borderRadius: 40, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', background: T.white, border: `1px solid ${T.line}`,
              }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={T.ink} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h4L19 9l-4-4L4 16v4zM13.5 6.5l4 4" /></svg>
              </span>
            </div>
            {savedFlash && (
              <div style={{ margin: '14px 24px 0', padding: '10px 13px', borderRadius: 11, background: 'rgba(63,178,189,0.14)', font: `600 12.5px/1 ${T.sans}`, color: T.tealDeep, animation: 'nsRiseIn .28s cubic-bezier(.2,.8,.25,1) both' }}>{tr('profileSaved', li)}</div>
            )}

            <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '16px 24px 0', padding: '9px 12px', borderRadius: 100, background: 'rgba(63,178,189,0.12)', width: 'fit-content' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={T.tealDeep} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12.5l5 5L20 6.5" /></svg>
              <span style={{ font: `600 11.5px/1 ${T.sans}`, color: T.tealDeep }}>{tr('signedIn', li)}</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '22px 20px 0' }}>
              {[
                ['editProfile', tr('editProfileMeta', li), 'edit:shop', 'M4 20h4L19 9l-4-4L4 16v4zM13.5 6.5l4 4'],
                ['myOrdersRow', st.orders.filter(o => !o.past).length + ' ' + tr('activeCount', li), 'nav:Orders', 'M4 6h16v14H4zM8 3v5M16 3v5'],
                ['cartTitle', cartCount ? cartCount + ' ' + tr(cartCount === 1 ? 'item' : 'items', li) : tr('empty', li), 'nav:Cart', 'M6 8h12l-1.2 12H7.2L6 8zM9 8V6a3 3 0 016 0v2'],
                hasShop && ['shopDetails', form.shop || '—', 'edit:shop', 'M4 9l2-5h12l2 5v11H4zM9 20v-6h6v6'],
                hasShop && ['savedAddresses', form.city || 'Sulaymaniyah', 'map', 'M12 21s7-6.1 7-11a7 7 0 10-14 0c0 4.9 7 11 7 11z'],
              ].filter(Boolean).map(([key, meta, dest, d]) => (
                <div key={key} {...press(0.98)} onClick={() => {
                  if (dest.startsWith('nav:')) return onNav && onNav(dest.slice(4));
                  if (dest === 'edit:shop') { setMode('edit'); return; }
                  if (dest === 'map') {
                    const q = [form.shopAddr, form.city || 'Sulaymaniyah', 'Iraq'].filter(Boolean).join(', ');
                    window.open(MAPS + encodeURIComponent(q), '_blank', 'noopener');
                  }
                }} style={{
                  ...pressStyle,
                  display: 'flex', alignItems: 'center', gap: 13, padding: 15, borderRadius: 16,
                  background: T.white, border: `1px solid ${T.line}`, cursor: 'pointer',
                }}>
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke={T.tealDeep} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none' }}><path d={d} /></svg>
                  <span style={{ flex: 1, font: `600 14.5px/1.2 ${T.sans}`, color: T.ink }}>{tr(key, li)}</span>
                  <span style={{ font: `400 12.5px/1 ${T.sans}`, color: T.ink45 }}>{meta}</span>
                  <svg data-flip="1" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={T.ink45} strokeWidth="2" strokeLinecap="round"><path d="M9 5l7 7-7 7" /></svg>
                </div>
              ))}
            </div>

            <div onClick={() => { NS ? NS.signOut() : setSignedIn(false); setMode('in'); setVerifiedPhone(''); setVerifiedEmail(''); }} style={{
              margin: '22px 20px 30px', textAlign: 'center', padding: '14px 0', borderRadius: 100,
              border: `1px solid ${T.line}`, background: T.white,
              font: `600 14px/1 ${T.sans}`, color: T.ink, cursor: 'pointer', ...pressStyle,
            }} {...press(0.975)}>{tr('signOut', li)}</div>
          </ScrollArea>
          <TabBar active="You" onNav={onNav} />
        </Screen>
      </D>
    );
  }

  return (
    <D>
      <Screen bg={T.paper} bar={{ title: tr('you', li), onBack: editing ? () => setMode('in') : undefined, onMenu: editing ? undefined : onMenu, onLang }}>
        <ScrollArea style={{ paddingTop: 96 }} onRefresh={() => {}}>
          <h1 style={{ margin: '6px 24px 0', font: `700 30px/1.08 ${T.sans}`, letterSpacing: '-0.03em', color: T.ink }}>
            {editing ? tr('editDetails', li) : signUp ? tr('createAccount', li) : tr('welcomeBack', li)}
          </h1>
          <p style={{ margin: '10px 24px 0', font: `400 14px/1.5 ${T.sans}`, color: T.ink70 }}>
            {editing ? tr('editDetailsLead', li) : signUp ? tr('signUpLead', li) : tr('signInLead', li)}
          </p>

          {!editing && (
          <div style={{ display: 'flex', gap: 6, margin: '20px 20px 0', padding: 4, borderRadius: 12, background: 'rgba(32,38,42,0.06)' }}>
            {[[tr('signIn', li), 'in'], [tr('signUp', li), 'up']].map(([txt, k]) => (
              <div key={k} onClick={() => setMode(k)} style={{
                flex: 1, textAlign: 'center', padding: '9px 0', borderRadius: 9, cursor: 'pointer',
                background: mode === k ? T.white : 'transparent',
                boxShadow: mode === k ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
                font: `600 13.5px/1 ${T.sans}`, color: mode === k ? T.ink : T.ink45,
              }}>{txt}</div>
            ))}
          </div>
          )}

          <div style={{ padding: '10px 24px 0' }}>
            {!signUp && (
              <div>
                <div style={{ marginTop: 14 }}>
                  {label(tr('emailOrPhone', li))}
                  {input('identifier', tr('emailOrPhone', li), 'email')}
                  {statusLine(idStatus)}
                </div>
                <div style={{ marginTop: 14 }}>
                  {label(tr('password', li))}
                  {input('pass', '••••••••', 'password')}
                  {passLen > 0 && passLen < 8 && statusLine({ tone: 'bad', msg: tr('passNeed8', li) + ' · ' + passLen + '/8' })}
                </div>
                <div onClick={() => setMode('forgot')} style={{ marginTop: 12, textAlign: 'right', font: `600 12.5px/1 ${T.sans}`, color: T.teal, cursor: 'pointer' }}>{tr('forgotPassword', li)}</div>
                <div style={{ marginTop: 18, textAlign: 'center', padding: '15px 0', borderRadius: 100, background: T.ink, font: `600 15px/1 ${T.sans}`, color: '#fff', cursor: 'pointer', ...pressStyle }} {...press(0.975)} onClick={submit}>{tr('signIn', li)}</div>
              </div>
            )}

            {signUp && (
              <div>
                {photoInput}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
                  <div onClick={pickPhoto} {...press(0.95)} style={{ ...pressStyle, position: 'relative', cursor: 'pointer', flex: 'none' }}>
                    {form.photo ? avatar(76, '', T.teal) : (
                      <div style={{
                        width: 76, height: 76, borderRadius: 76, boxSizing: 'border-box',
                        border: `1.5px dashed ${err === tr('photoRequired', li) ? '#B4443A' : 'rgba(32,38,42,0.28)'}`,
                        background: T.white, display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={T.ink45} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="9" r="3.6" /><path d="M5 20c1.3-3.6 12.7-3.6 14 0" /></svg>
                      </div>
                    )}
                    <span style={{
                      position: 'absolute', right: -2, bottom: -2, width: 28, height: 28, borderRadius: 28,
                      background: T.ink, border: `2.5px solid ${T.paper}`, boxSizing: 'border-box',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8h3l2-3h6l2 3h3v11H4z" /><circle cx="12" cy="13" r="3.4" /></svg>
                    </span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ font: `600 14px/1.2 ${T.sans}`, color: T.ink }}>{tr('profilePhoto', li)}</div>
                    <div style={{ marginTop: 4, font: `400 12.5px/1.45 ${T.sans}`, color: T.ink70 }}>{tr('photoLead', li)}</div>
                    <div style={{ marginTop: 9, display: 'flex', gap: 14 }}>
                      <span onClick={pickPhoto} style={{ cursor: 'pointer', font: `600 12.5px/1 ${T.sans}`, color: T.tealDeep }}>{tr(form.photo ? 'changePhoto' : 'addPhoto', li)}</span>
                      {form.photo && <span onClick={() => window.NasanStore && window.NasanStore.patchAccount({ photo: '' })} style={{ cursor: 'pointer', font: `600 12.5px/1 ${T.sans}`, color: '#B4443A' }}>{tr('removePhoto', li)}</span>}
                    </div>
                  </div>
                </div>
                {label(tr('fullName', li))}
                <div style={{ display: 'grid', gap: 8, marginTop: 0 }}>
                  {input('first', 'First name')}
                  {input('middle', 'Middle name')}
                  {input('last', 'Last name')}
                </div>
                {phoneField(tr('phoneNumber', li))}
                {emailField()}
                {editing && !hasShop && (
                  <div>
                    <div style={{ marginTop: 22, paddingTop: 18, borderTop: `1px solid ${T.line}` }}>{label(tr('yourAddress', li))}</div>
                    {cityField()}
                    {field('homeAddr', tr('homeAddress', li), 'Street, district')}
                  </div>
                )}
                {!editing && (
                  <div style={{ marginTop: 14 }}>
                    {label(tr('password', li))}
                    {input('pass', '••••••••', 'password')}
                    {passLen > 0 && statusLine(passLen < 8 ? { tone: 'bad', msg: tr('passNeed8', li) + ' · ' + passLen + '/8' } : { tone: 'ok', msg: tr('passGood', li) })}
                  </div>
                )}
                {!editing && (
                  <div style={{ marginTop: 14 }}>
                    {label(tr('confirmPassword', li))}
                    {input('confirm', '••••••••', 'password')}
                    {(form.confirm || '').length > 0 && statusLine(form.confirm === form.pass ? { tone: 'ok', msg: tr('passMatch', li) } : { tone: 'bad', msg: tr('passMismatch', li) })}
                  </div>
                )}

                <div style={{ marginTop: 22, paddingTop: 18, paddingBottom: 12, borderTop: `1px solid ${T.line}` }}>
                  {label(tr('yourShop', li))}
                </div>

                <div onClick={() => setHasShop(v => !v)} {...press(0.985)} style={{
                  ...pressStyle, display: 'flex', alignItems: 'flex-start', gap: 22, cursor: 'pointer',
                  padding: 16, borderRadius: 16, background: hasShop ? 'rgba(63,178,189,0.10)' : T.white,
                  border: `1px solid ${hasShop ? 'rgba(63,178,189,0.45)' : T.line}`,
                  transition: 'background .2s, border-color .2s',
                }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ font: `600 14px/1.3 ${T.sans}`, color: T.ink }}>{tr('haveShop', li)}</div>
                    <div style={{ marginTop: 4, font: `400 12.5px/1.5 ${T.sans}`, color: T.ink70 }}>{tr('haveShopLead', li)}</div>
                  </div>
                  <div style={{
                    flex: 'none', boxSizing: 'border-box', width: 46, height: 27, borderRadius: 100,
                    alignSelf: 'center', padding: 3, display: 'flex', alignItems: 'center',
                    background: hasShop ? T.teal : 'rgba(32,38,42,0.16)',
                    transition: 'background .22s cubic-bezier(.2,.8,.25,1)',
                  }}>
                    <div style={{
                      width: 21, height: 21, borderRadius: 100, background: '#fff', flex: 'none',
                      boxShadow: '0 1px 3px rgba(12,16,18,0.28)',
                      transform: hasShop ? 'translateX(19px)' : 'translateX(0)',
                      transition: 'transform .22s cubic-bezier(.2,.8,.25,1)',
                    }} />
                  </div>
                </div>

                {hasShop && (
                  <div style={{ animation: 'nsRiseIn .3s cubic-bezier(.2,.8,.25,1) both' }}>
                    {field('shop', tr('shopName', li), 'e.g. nasan Company')}
                    {cityField()}
                    {field('shopAddr', tr('shopAddress', li), 'Street, district')}

                <div onClick={locate} {...press(0.985)} style={{
                  ...pressStyle,
                  marginTop: 16, padding: 16, borderRadius: 16, cursor: 'pointer',
                  background: geo === 'ok' ? 'rgba(63,178,189,0.10)' : T.white,
                  border: `1px solid ${geo === 'ok' ? 'rgba(63,178,189,0.45)' : geo === 'denied' ? 'rgba(180,68,58,0.4)' : T.line}`,
                  display: 'flex', alignItems: 'flex-start', gap: 12,
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={geo === 'ok' ? T.tealDeep : T.ink45} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 1, flex: 'none', animation: geo === 'busy' ? 'nsPulse 1.2s ease-in-out infinite' : undefined }}><path d="M12 21s7-6.1 7-11a7 7 0 10-14 0c0 4.9 7 11 7 11z" /><circle cx="12" cy="10" r="2.4" /></svg>
                  <div style={{ flex: 1 }}>
                    <div style={{ font: `600 14px/1.3 ${T.sans}`, color: T.ink }}>
                      {geo === 'busy' ? tr('locating', li) : geo === 'ok' ? tr('locationSet', li) : geo === 'denied' ? tr('locationDenied', li) : tr('useMyLocation', li)}
                    </div>
                    <div style={{ marginTop: 4, font: `400 12.5px/1.5 ${T.sans}`, color: T.ink70 }}>
                      {geo === 'ok' && coords ? coords.lat + ', ' + coords.lng : tr('shareLocationLead', li)}
                    </div>
                  </div>
                  {geo === 'ok' ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.tealDeep} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ alignSelf: 'center', flex: 'none' }}><path d="M4 12.5l5 5L20 6.5" /></svg>
                  ) : (
                    <span style={{ alignSelf: 'center', flex: 'none', font: `600 12.5px/1 ${T.sans}`, color: T.teal, whiteSpace: 'nowrap' }}>
                      {geo === 'busy' ? '…' : tr('viewBrand', li)}
                    </span>
                  )}
                </div>
                  </div>
                )}

                <div style={{ marginTop: 18, textAlign: 'center', padding: '15px 0', borderRadius: 100, background: T.ink, font: `600 15px/1 ${T.sans}`, color: '#fff', cursor: 'pointer', ...pressStyle }} {...press(0.975)} onClick={submit}>{tr(editing ? 'saveChanges' : 'createBtn', li)}</div>
              </div>
            )}

            {err && (
              <div style={{
                marginTop: 14, padding: '12px 14px', borderRadius: 12,
                background: 'rgba(180,68,58,0.08)', border: '1px solid rgba(180,68,58,0.3)',
                font: `500 12.5px/1.4 ${T.sans}`, color: '#8E3229',
                animation: 'nsRise .26s cubic-bezier(.2,.8,.25,1) both',
              }}>{err}</div>
            )}

            <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '20px 0' }}>
              <div style={{ flex: 1, height: 1, background: T.line }} />
              <span style={{ font: `500 11.5px/1 ${T.sans}`, color: T.ink45 }}>{tr('or', li)}</span>
              <div style={{ flex: 1, height: 1, background: T.line }} />
            </div>

            {googleBtn}

            <div style={{ marginTop: 18, display: 'flex', alignItems: 'flex-start', gap: 9 }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={T.ink45} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 2, flex: 'none' }}><path d="M5 11V8a7 7 0 0114 0v3M4 11h16v10H4z" /></svg>
              <p style={{ margin: 0, font: `400 11.5px/1.6 ${T.sans}`, color: T.ink45 }}>
                {tr('privacyNote', li)}
              </p>
            </div>
            <div style={{ height: 26 }} />
          </div>
        </ScrollArea>
        <TabBar active="You" onNav={onNav} />

        {cityOpen && (
          <div onClick={() => { setCityOpen(false); setCitySearch(''); }} style={{
            position: 'absolute', inset: 0, zIndex: 65, background: 'rgba(20,24,26,0.5)',
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
            animation: 'nsFade .16s ease both',
          }}>
            <div onClick={e => e.stopPropagation()} style={{
              background: T.paper, borderRadius: '24px 24px 0 0', padding: '12px 0 24px',
              animation: 'nsSheetUp .26s cubic-bezier(.2,.8,.25,1) both',
              maxHeight: '78%', display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ width: 38, height: 4, borderRadius: 4, background: 'rgba(32,38,42,0.18)', margin: '0 auto 16px' }} />
              <div style={{ padding: '0 22px' }}>
                <div style={{ font: `700 19px/1 ${T.sans}`, letterSpacing: '-0.02em', color: T.ink }}>{tr('selectCity', li)}</div>
                <div style={{
                  marginTop: 14, height: 44, borderRadius: 12, background: T.white,
                  border: `1px solid ${T.line}`, display: 'flex', alignItems: 'center', gap: 9, padding: '0 13px',
                }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.ink45} strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="M16.2 16.2L21 21" /></svg>
                  <input value={citySearch} onChange={e => setCitySearch(e.target.value)} placeholder="Sulaymaniyah, Erbil, Duhok…"
                    style={{ flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent', font: `400 14.5px/1 ${T.sans}`, color: T.ink }} />
                </div>
              </div>
              <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '12px 22px 0', scrollbarWidth: 'none' }}>
                {IRAQ_CITIES.filter(c => c.toLowerCase().includes(citySearch.toLowerCase())).map((c, ci) => (
                  <div key={c} onClick={() => { setForm(f => ({ ...f, city: c })); setCityOpen(false); setCitySearch(''); }}
                    {...press(0.985)} style={{
                    ...pressStyle,
                    display: 'flex', alignItems: 'center', gap: 12, padding: '14px 14px', marginBottom: 8,
                    borderRadius: 14, cursor: 'pointer', background: T.white,
                    border: `1px solid ${form.city === c ? 'rgba(63,178,189,0.5)' : T.line}`,
                    animation: 'nsRise .26s cubic-bezier(.2,.8,.25,1) both', animationDelay: Math.min(ci * 0.02, 0.3) + 's',
                  }}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={form.city === c ? T.tealDeep : T.ink45} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flex: 'none' }}><path d="M12 21s7-6.1 7-11a7 7 0 10-14 0c0 4.9 7 11 7 11z" /><circle cx="12" cy="10" r="2.4" /></svg>
                    <span style={{ flex: 1, font: `${form.city === c ? 600 : 400} 14.5px/1.2 ${T.sans}`, color: T.ink }}>{c}</span>
                    {form.city === c && (
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={T.tealDeep} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12.5l5 5L20 6.5" /></svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </Screen>
    </D>
  );
}

/* ── Cart ────────────────────────────────────────────────── */
function NasanCart({ bare, onBack, onNav, items = [], onQty, cartCount, onLang, onPlaced } = {}) {
  const D = frame(bare, 'ios');
  const li = useLang();
  const bump = (idx, d) => onQty && onQty(idx, d);
  const [placed, setPlaced] = React.useState(null);
  const [waOpen, setWaOpen] = React.useState(false);
  const cartMsg = tr('waPriceMsg', li) + '\n' + items.map(it => '· ' + it[0] + ' ' + it[2] + ' × ' + it[4]).join('\n');
  const placingRef = React.useRef(false);
  const [gate, setGate] = React.useState(false);
  const placeOrder = () => {
    if (!items.length || placingRef.current) return;
    const NS = window.NasanStore;
    if (!NS || !NS.get().signedIn) { setGate(true); return; }
    placingRef.current = true;
    const count = items.reduce((n, it) => n + it[4], 0);
    const lines = items.map(it => it[0] + ' × ' + it[4]);
    const id = '#' + (1802 + Math.floor(Math.random() * 90));
    let newId = id;
    if (window.NasanStore) {
      newId = window.NasanStore.addOrder({
        id, customer: 'You', items: count,
        summary: items[0][0] + (items.length > 1 ? ' +' + (items.length - 1) + ' more' : '') + ' · ' + count + (count === 1 ? ' item' : ' items'),
        lines, when: 'Just now', status: 'Waiting', past: false, updatedAt: Date.now(),
      });
    }
    setPlaced(newId || id);
    setTimeout(() => {
      if (onNav) onNav('Orders');
      if (onPlaced) onPlaced();
      placingRef.current = false;
    }, 700);
  };
  const total = items.reduce((n, it) => n + it[4], 0);
  const step = (onClick, glyph) => (
    <span onClick={onClick} {...press(0.86)} style={{
      ...pressStyle,
      width: 26, height: 26, borderRadius: 26, cursor: 'pointer', userSelect: 'none',
      border: `1px solid ${T.line}`, background: T.white,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      font: `600 15px/1 ${T.sans}`, color: T.ink,
    }}>{glyph}</span>
  );
  return (
    <D>
      <Screen bg={T.paper} bar={{ title: tr('cartTitle', li) + ' · ' + total + ' ' + tr(total === 1 ? 'item' : 'items', li), onBack, cart: total, onLang }}>
        <ScrollArea style={{ paddingTop: 96 }} onRefresh={() => {}}>
          {items.length === 0 && (
            <div style={{ padding: '60px 34px', textAlign: 'center', animation: 'nsCardIn .4s cubic-bezier(.2,.8,.25,1) both' }}>
              <div style={{ width: 68, height: 68, margin: '0 auto', borderRadius: 22, background: T.white, border: `1px solid ${T.line}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={T.ink45} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8h12l-1.2 12H7.2L6 8zM9 8V6a3 3 0 016 0v2" /></svg>
              </div>
              <div style={{ marginTop: 18, font: `700 19px/1.2 ${T.sans}`, letterSpacing: '-0.02em', color: T.ink }}>{tr('cartEmpty', li)}</div>
              <div style={{ marginTop: 8, font: `400 13.5px/1.6 ${T.sans}`, color: T.ink70 }}>{tr('cartEmptyLead', li)}</div>
              <div onClick={() => onNav && onNav('Shop')} style={{ marginTop: 20, display: 'inline-flex', padding: '12px 22px', borderRadius: 100, background: T.ink, font: `600 13.5px/1 ${T.sans}`, color: '#fff', cursor: 'pointer' , ...pressStyle }} {...press(0.975)}>{tr('browseProducts', li)}</div>
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '4px 20px 0' }}>
            {items.map(([n, sub, code, k, qty], idx) => (
              <div key={n} style={{ display: 'flex', gap: 13, padding: 14, borderRadius: 18, background: T.white, border: `1px solid ${T.line}`,
                animation: 'nsCardIn .32s cubic-bezier(.2,.8,.25,1) both', animationDelay: (idx * 0.06) + 's' }}>
                <div style={{ width: 62, height: 62, borderRadius: 14, background: '#F4F3F0', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' }}>
                  <ToolShot w={52} kind={k} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ font: `600 14.5px/1.2 ${T.sans}`, color: T.ink }}>{n}</div>
                  <div style={{ marginTop: 3, font: `400 12.5px/1.3 ${T.sans}`, color: T.ink45 }}>{sub}</div>
                  <div style={{ marginTop: 6, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ font: `600 11.5px/1 ${T.sans}`, letterSpacing: '0.04em', color: T.tealDeep }}>{code}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 10, font: `600 14px/1 ${T.sans}`, color: T.ink }}>
                      {step(() => bump(idx, -1), '−')}
                      <span style={{ minWidth: 14, textAlign: 'center' }}>{qty}</span>
                      {step(() => bump(idx, 1), '+')}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {items.length > 0 && (
          <div style={{ margin: '18px 20px 0', padding: 16, borderRadius: 18, background: 'rgba(63,178,189,0.10)', border: '1px solid rgba(63,178,189,0.28)' }}>
            <div style={{ font: `600 14px/1.3 ${T.sans}`, color: T.ink }}>{tr('quotedOnRequest', li)}</div>
            <div style={{ marginTop: 5, font: `400 12.5px/1.5 ${T.sans}`, color: T.ink70 }}>{tr('quotedLead', li)}</div>
          </div>
          )}
        </ScrollArea>

        {items.length > 0 && (
        <div style={{ padding: '14px 20px 10px', background: T.paper, borderTop: `1px solid ${T.line}` }}>
          <div onClick={() => setWaOpen(true)} {...press(0.98)} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9,
            padding: '15px 0', borderRadius: 100, background: T.teal, textDecoration: 'none',
            font: `700 15px/1 ${T.sans}`, color: '#0E2124', cursor: 'pointer',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0E2124" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16v12H8l-4 4V5z" /></svg>
            {tr('askPriceWA', li)}
          </div>
          <div onClick={placeOrder} style={{
            marginTop: 10, textAlign: 'center', padding: '14px 0', borderRadius: 100,
            background: placed ? T.tealDeep : T.ink, font: `600 15px/1 ${T.sans}`, color: '#fff',
            cursor: 'pointer', transition: 'background .25s'
          , ...pressStyle }} {...press(0.975)}>{placed ? tr('orderPlaced', li) + ' · ' + placed : tr('placeOrder', li)}</div>
          <div style={{ marginTop: 10, textAlign: 'center', font: `400 11.5px/1.4 ${T.sans}`, color: T.ink45 }}>{tr('pickupNote', li)}</div>
        </div>
        )}
        <TabBar active="Shop" onNav={onNav} />
        {waOpen && <WhatsAppSheet message={cartMsg} onClose={() => setWaOpen(false)} />}
        {gate && (
          <div onClick={() => setGate(false)} style={{
            position: 'absolute', inset: 0, zIndex: 80, background: 'rgba(20,24,26,0.55)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
            animation: 'nsFade .18s ease both',
          }}>
            <div onClick={e => e.stopPropagation()} style={{
              width: '100%', maxWidth: 330, padding: '26px 22px 18px', borderRadius: 24, background: T.paper,
              textAlign: 'center', boxShadow: '0 24px 60px rgba(0,0,0,0.25)',
              animation: 'nsPop .34s cubic-bezier(.2,.8,.25,1) both',
            }}>
              <div style={{ width: 56, height: 56, margin: '0 auto', borderRadius: 56, background: 'rgba(63,178,189,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={T.tealDeep} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12a4 4 0 100-8 4 4 0 000 8zM4 21c1.6-4 14.4-4 16 0" /></svg>
              </div>
              <div style={{ marginTop: 16, font: `700 19px/1.2 ${T.sans}`, letterSpacing: '-0.02em', color: T.ink }}>{tr('gateTitle', li)}</div>
              <div style={{ marginTop: 8, font: `400 13.5px/1.55 ${T.sans}`, color: T.ink70, textWrap: 'pretty' }}>{tr('gateBody', li)}</div>
              <div onClick={() => { setGate(false); window.__nasanAuthMode = 'up'; window.__nasanReturnToCart = true; onNav && onNav('You'); }} {...press(0.975)} style={{
                ...pressStyle, marginTop: 20, padding: '14px 0', borderRadius: 100, background: T.ink, cursor: 'pointer',
                font: `600 14.5px/1 ${T.sans}`, color: '#fff',
              }}>{tr('gateCreate', li)}</div>
              <div onClick={() => { setGate(false); window.__nasanAuthMode = 'in'; window.__nasanReturnToCart = true; onNav && onNav('You'); }} {...press(0.975)} style={{
                ...pressStyle, marginTop: 9, padding: '13px 0', borderRadius: 100, border: `1px solid ${T.line}`, background: T.white, cursor: 'pointer',
                font: `600 13.5px/1 ${T.sans}`, color: T.ink,
              }}>{tr('gateSignIn', li)}</div>
              <div onClick={() => setGate(false)} style={{ marginTop: 12, padding: '6px 0', font: `500 13px/1 ${T.sans}`, color: T.ink45, cursor: 'pointer' }}>{tr('notNow', li)}</div>
            </div>
          </div>
        )}
      </Screen>
    </D>
  );
}

Object.assign(window, { NasanLCD, LangSheet, LangCtx, LANGS, tr, NasanCatalog, NasanBrands, NasanSearch, NasanOrders, NasanAccount, NasanCart, NasanSplash, NasanMenu, NasanAbout, NasanContact, NasanHomeEditorial, NasanHomeGrid, NasanHomeDark, NasanHomeAndroid });
module.exports = { NasanCatalog, NasanBrands, NasanSearch, NasanOrders, NasanAccount, NasanCart, NasanSplash, NasanMenu, NasanAbout, NasanContact, NasanHomeEditorial, NasanHomeGrid, NasanHomeDark, NasanHomeAndroid };
