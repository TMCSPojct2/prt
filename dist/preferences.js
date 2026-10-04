(() => {
const translations = {
'واجهة موقع الحارة الشامية بالقنفذة':'Al-Shamiyah neighborhood website preview',
'تكبير صورة موقع الحارة الشامية':'Enlarge Al-Shamiyah website preview',
'الحارة الشامية':'Al-Shamiyah Neighborhood',
'القنفذة · فوانيس رمضان':'Al-Qunfudah · Ramadan Lanterns',
'موقع تعريفي · مشاركة في مسابقة':'Informational website · Competition entry',
'الموقع التعريفي بالحارة الشامية':'Al-Shamiyah Neighborhood Website',
'موقع تعريفي بالحارة الشامية في القنفذة، صُمم للمشاركة ضمن مسابقة فوانيس رمضان.':'An informational website about Al-Shamiyah neighborhood in Al-Qunfudah, designed as an entry in the Ramadan Lanterns competition.',
'تسجيل الحضور':'Attendance registration',
'احتفال اليوم الوطني السعودي':'Saudi National Day celebration',
'موقع تسجيل حضور':'Attendance registration website',
'تسجيل حضور احتفال اليوم الوطني':'National Day Attendance Registration',
'تصميم موقع لتسجيل حضور احتفال اليوم الوطني السعودي في مركز التنمية الاجتماعية بالقوز.':'Website design for attendance registration at the Saudi National Day celebration at the Social Development Center in Al-Quoz.',
'فتح ملف كود الحضور':'Open attendance code PDF',
'ياسر بن محفوظ':'Yasser Bin Mahfouz', 'ياسر بن محفوظ.':'Yasser Bin Mahfouz.',
'نبذة عني':'About', 'المشاريع':'Projects', 'الخبرة':'Experience', 'المهارات':'Skills', 'التواصل':'Contact',
'علوم الحاسب · تطوير الويب والجوال':'Computer Science · Web & Mobile Development',
'من الفكرة إلى التطبيق.':'From idea to application.',
'خريج علوم الحاسب، مهتم ببناء تطبيقات ويب وجوال عملية تضع المستخدم في قلب التجربة.':'Computer Science graduate building practical web and mobile applications with the user at the heart of the experience.',
'استعرض مشاريعي':'Explore my projects', 'تحميل السيرة الذاتية':'Download CV',
'المعدل التراكمي · مرتبة الشرف الأولى':'GPA · First Class Honors', 'جامعة أم القرى':'Umm Al-Qura University',
'بكالوريوس علوم الحاسب · 2026':'BSc in Computer Science · 2026', 'ويب وجوال':'Web & Mobile', 'تطبيقات متعددة المنصات':'Cross-platform applications',
'التعلم، ثم البناء':'Learn, then build',
'أهتم بتحويل الأفكار إلى حلول برمجية قابلة للتوسع، وكتابة كود واضح يخدم تجربة المستخدم. لدي خبرة عملية في تطوير الويب باستخدام HTML وCSS وJavaScript، وتطوير تطبيقات الجوال باستخدام Flutter وDart.':'I turn ideas into scalable software and write clear code that serves the user experience. My hands-on experience includes web development with HTML, CSS and JavaScript, and mobile development with Flutter and Dart.',
'خلال التدريب التعاوني عملت على الدعم الفني وتطوير التطبيقات والشبكات، وطوّرت مهاراتي في حل المشكلات والتعاون ضمن فريق.':'During my co-op training, I worked on technical support, application development and networking, strengthening my problem-solving and teamwork skills.',
'بكالوريوس علوم الحاسب':'BSc in Computer Science', 'جامعة أم القرى · القنفذة':'Umm Al-Qura University · Al-Qunfudah',
'يونيو 2026 · ممتاز مع مرتبة الشرف الأولى':'June 2026 · Excellent with First Class Honors', 'العربية · اللغة الأم':'Arabic · Native', 'الإنجليزية · STEP 79':'English · STEP 79',
'مشاريع مختارة':'Selected projects', 'من الجامعة إلى المجتمع':'From campus to community',
'نبيه · لحظات من عرض المشروع':'NABIH · Project showcase', 'ملصق المشروع':'Project poster', 'عرض المشروع':'Project showcase',
'مشروع التخرج':'Graduation project', 'نبيه — المساعد الجامعي الذكي':'NABIH — Smart University Assistant',
'تطبيق يجمع خدمات الطالب الجامعي مع مساعد ذكي يجيب عن الأسئلة بالعربية والإنجليزية.':'An application combining university student services with an AI assistant that answers questions in Arabic and English.',
'عرض المشروع على GitHub':'View project on GitHub', 'تفاصيل المشروع':'Project details',
'تطبيق جوال متعدد المنصات باستخدام Flutter وDart.':'Cross-platform mobile application built with Flutter and Dart.',
'روبوت محادثة يستخدم RAG للإجابة عن الأسئلة الجامعية.':'AI chatbot using RAG to answer university-related questions.',
'تنقل تفاعلي داخل الحرم الجامعي، عرض الجداول، تتبع المعدل والإشعارات.':'Interactive campus navigation, schedule viewing, GPA tracking and notifications.',
'تعاون ضمن فريق من خمسة أعضاء باستخدام Git وGitHub.':'Collaboration with a five-member team using Git and GitHub.',
'دليل الزوار · من أرض المهرجان':'Visitor guide · At the festival', 'مشروع مجتمعي':'Community project',
'دليل زوار مهرجان المانجو':'Mango Festival Visitor Guide',
'دليل متعدد اللغات يعرّف الزوار بمعالم المهرجان وأنشطته والخدمات المتاحة لهم.':'A multilingual guide introducing visitors to festival attractions, activities and available services.',
'زيارة العرض الحي':'View live demo', 'تطوير دليل زوار متعدد اللغات.':'Developed a multilingual visitor guide.',
'بناء المشروع بالشراكة مع وزارة البيئة والمياه والزراعة.':'Built in partnership with the Ministry of Environment, Water and Agriculture.',
'عرض معلومات معالم المهرجان والأنشطة وخدمات الزوار.':'Information about festival attractions, activities and visitor services.',
'الخبرة العملية':'Professional experience', 'مارس — سبتمبر 2025':'March — September 2025', 'تدريب تعاوني':'Co-op training',
'متدرب تقنية معلومات':'IT Intern', 'مكتب وزارة الصحة بالقنفذة':'Ministry of Health Office · Al-Qunfudah',
'تقديم الدعم الفني للأجهزة والبرمجيات لأكثر من 30 طلب دعم.':'Provided hardware and software technical support for more than 30 requests.',
'المساهمة في تطوير تطبيقات ويب باستخدام HTML وCSS وJavaScript وPHP وLaravel.':'Contributed to web application development using HTML, CSS, JavaScript, PHP and Laravel.',
'بناء تطبيقات جوال باستخدام Flutter وDart.':'Built mobile applications using Flutter and Dart.',
'المساهمة في صيانة الأنظمة ومعالجة المشكلات التقنية والعمل ضمن فريق.':'Helped maintain systems and resolve technical issues while working with a team.',
'المهارات والتعلم':'Skills & learning', 'لغات البرمجة':'Programming languages', 'الأطر وقواعد البيانات':'Frameworks & databases', 'أدوات التطوير':'Development tools',
'مسار تطوير تطبيقات Flutter':'Flutter Application Development Path', 'منصة سطر':'SATR Platform',
'مسار منهجيات وأطر المشاريع التقنية':'Technical Project Methodologies & Frameworks Path', 'أساسيات الشبكات':'Networking Basics', 'مقدمة إلى إنترنت الأشياء (IoT)':'Introduction to the Internet of Things (IoT)',
'لنتواصل':'Let’s connect', 'لديك فرصة أو فكرة مشروع؟':'Have an opportunity or project idea?',
'يسعدني التواصل ومناقشة فرص المساهمة في تطوير حلول برمجية.':'I welcome opportunities to connect and contribute to software projects.',
'جدة، المملكة العربية السعودية':'Jeddah, Saudi Arabia', 'السيرة الذاتية بالعربية':'Arabic CV', '© 2026 ياسر بن محفوظ':'© 2026 Yasser Bin Mahfouz', 'إغلاق ×':'Close ×',
'التنقل الرئيسي':'Main navigation', 'بطاقة تعريف':'Profile card', 'صورة ياسر بن محفوظ':'Portrait of Yasser Bin Mahfouz',
'فريق مشروع نبيه':'NABIH project team', 'تكبير صورة فريق مشروع نبيه':'Enlarge NABIH team photo', 'فريق مشروع نبيه أمام ملصق المشروع':'NABIH project team in front of the project poster',
'الملصق التعريفي لمشروع نبيه':'NABIH project poster', 'عرض الملصق التعريفي لمشروع نبيه':'View NABIH project poster', 'عرض مشروع نبيه':'NABIH project showcase', 'تكبير صورة عرض مشروع نبيه':'Enlarge NABIH showcase photo', 'ملصق نبيه في موقع عرض المشروع':'NABIH poster at the project showcase',
'عرض دليل زوار مهرجان المانجو':'Mango Festival Visitor Guide showcase', 'تكبير صورة عرض دليل زوار مهرجان المانجو':'Enlarge Mango Festival Visitor Guide photo', 'ياسر بن محفوظ بجانب شاشة تعرض دليل زوار مهرجان المانجو':'Yasser Bin Mahfouz beside a screen displaying the Mango Festival Visitor Guide', 'إغلاق الصورة':'Close image'
};
const textEntries = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
while (walker.nextNode()) {
 const node = walker.currentNode;
 if (['SCRIPT','STYLE'].includes(node.parentElement.tagName)) continue;
 const original = node.textContent;
 const key = original.trim();
 if (translations[key]) textEntries.push({node, original, english:original.replace(key, translations[key])});
}
const attributes = [];
document.querySelectorAll('[alt],[aria-label],[data-caption]').forEach(element => {
 ['alt','aria-label','data-caption'].forEach(attr => {
  const original = element.getAttribute(attr);
  if (translations[original]) attributes.push({element,attr,original,english:translations[original]});
 });
});
const languageButton = document.querySelector('#language-toggle');
const themeButton = document.querySelector('#theme-toggle');
let language = 'ar'; let theme = 'dark';
try { language = localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'ar'; theme = localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark'; } catch {}
function save(key,value) { try {localStorage.setItem(key,value);} catch {} }
function applyLanguage() {
 const english = language === 'en';
 document.documentElement.lang = language;
 document.documentElement.dir = english ? 'ltr' : 'rtl';
 textEntries.forEach(entry => entry.node.textContent = english ? entry.english : entry.original);
 attributes.forEach(entry => entry.element.setAttribute(entry.attr, english ? entry.english : entry.original));
 document.title = english ? 'Yasser Bin Mahfouz | Computer Science' : 'ياسر بن محفوظ | علوم الحاسب';
 document.querySelector('meta[name="description"]').content = english ? 'Yasser Bin Mahfouz, Computer Science graduate and web and mobile developer. Explore my experience, skills and projects.' : 'ياسر بن محفوظ، خريج علوم الحاسب ومطور تطبيقات الويب والجوال. تعرف على خبراتي ومهاراتي ومشاريعي.';
 languageButton.textContent = english ? 'العربية' : 'English';
 languageButton.lang = english ? 'ar' : 'en';
 languageButton.setAttribute('aria-label', english ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية');
 updateThemeButton();
}
function updateThemeButton() {
 const light = theme === 'light';
 themeButton.textContent = language === 'en' ? (light ? '☾ Dark' : '☀ Light') : (light ? '☾ ليلي' : '☀ نهاري');
 themeButton.setAttribute('aria-label', language === 'en' ? (light ? 'Enable dark mode' : 'Enable light mode') : (light ? 'تفعيل الوضع الليلي' : 'تفعيل الوضع النهاري'));
 themeButton.setAttribute('aria-pressed', String(light));
}
function applyTheme() {
 document.documentElement.dataset.theme = theme;
 document.querySelector('meta[name="theme-color"]').content = theme === 'light' ? '#f3f7ff' : '#080d18';
 updateThemeButton();
}
languageButton.addEventListener('click', () => {language = language === 'ar' ? 'en' : 'ar';applyLanguage();save('portfolio-language',language);});
themeButton.addEventListener('click', () => {theme = theme === 'dark' ? 'light' : 'dark';applyTheme();save('portfolio-theme',theme);});
applyLanguage();applyTheme();
})();
