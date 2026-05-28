/* -------------------------------------------------------------
 * HS School Core JavaScript Logic
 * Multi-lingual Translation, GSAP 3 Animations, 3D Tilts,
 * Swiper, Canvas Confetti & Dark Mode Integration
 * ------------------------------------------------------------- */

// 1. COMPREHENSIVE TEXT CONTENT DICTIONARY (English & Marathi)
const textContent = {
  en: {
    nav_brand: "HS School",
    nav_home: "Home",
    nav_timeline: "Daily Routine",
    nav_milestones: "Milestones",
    nav_reviews: "Reviews",
    nav_features: "Amenities",
    nav_admission: "Admissions",
    nav_contact: "Contact",
    preloader_text: "Dnyansadhana Educational Trust",
    ribbon_text: "Admission Open 2026-27",
    hero_badge: "🎉 Admission Open 2026-27",
    hero_title: "Nurturing the Leaders of Tomorrow",
    hero_subtitle: "We lay a premium, play-driven and activity-focused foundation to foster the balanced intellectual, emotional, and social development of every child.",
    btn_enquiry: "Admission Enquiry",
    btn_explore: "Explore Reviews",
    timeline_badge: "Day in a Life",
    timeline_title: "A Child's Journey at HS School",
    timeline_desc: "An interactive, beautifully balanced daily routine designed to build intelligence, coordination, and values.",
    timeline_1_title: "Joyful Welcome & Sanskrit Shloka Chanting",
    timeline_1_desc: "Sanskrit Shloka chanting and positive assembly to build focus and cultural roots.",
    timeline_2_title: "Activity-Based Learning in the Kreedo Lab",
    timeline_2_desc: "Tactile learning materials to simplify cognitive, mathematical, and motor concepts.",
    timeline_3_title: "Brain Gym & Kids Yoga",
    timeline_3_desc: "Physical coordination, rhythmic breathing, and playful yoga to release stress.",
    timeline_4_title: "Creative Play & Lathi Kathi Training",
    timeline_4_desc: "Traditional Lathi Kathi training to build physical agility and self-defense.",
    milestones_badge: "Trust Milestones",
    milestones_title: "Our Proud Milestones",
    milestones_desc: "A testament to our commitment to safety and growth.",
    count_students_label: "Happy Students Enrolled",
    count_classrooms_label: "Spacious Classrooms",
    count_experience_label: "Years of Educational Excellence",
    reviews_badge: "Testimonials",
    reviews_title: "What Parents Say",
    reviews_desc: "Real reviews from families in our school community.",
    review_1_parent: "Mrs. Priyanka Patil",
    review_1_grade: "Parent of Playgroup Student",
    review_1_text: "The Kreedo sensory labs and personal attention at HS School have completely transformed my daughter's learning. The CCTV safety gives us absolute peace of mind!",
    review_2_parent: "Mr. Rajesh Shinde",
    review_2_grade: "Parent of Senior KG Student",
    review_2_text: "We are delighted by the perfect blend of modern academic learning tools and traditional cultural training like Lathi Kathi and shloka chanting. Highly recommended!",
    review_3_parent: "Mrs. Sneha Deshmukh",
    review_3_grade: "Parent of Class 1 Student",
    review_3_text: "Safe van transportation was our biggest concern, but HS School's verified transport fleet operates perfectly. Teachers groom children with extreme affection.",
    features_badge: "Our Foundations",
    features_title: "Core Amenities & Features",
    features_desc: "Every resource is dedicated to ensuring child safety, premium development, and an enjoyable learning experience.",
    feat_1_title: "Kreedo Lab Setup",
    feat_1_desc: "Equipped with rich, tactile material boxes ensuring kids learn conceptual math and science through physical activities.",
    feat_2_title: "4Q Development",
    feat_2_desc: "Comprehensive grooming structure mapping Intelligence (IQ), Emotional (EQ), Spiritual (SQ), and Creative (CQ) Quotients.",
    feat_3_title: "Abacus",
    feat_3_desc: "Specially formulated abacus brain games to boost calculation speed, spatial focus, and visual memory structures.",
    feat_4_title: "Spacious Classrooms",
    feat_4_desc: "Naturally illuminated, airy learning rooms designed to keep children safe, cozy, and highly energetic.",
    feat_5_title: "CCTV Surveillance",
    feat_5_desc: "Round-the-clock camera monitoring in classrooms and campus passages ensuring zero-blindspots safety.",
    feat_6_title: "Safe Van Facility",
    feat_6_desc: "Trustworthy van pick-up and drop-off networks managed by verified local drivers keeping commute stress-free.",
    feat_7_title: "Sports Area",
    feat_7_desc: "Equipped indoor and outdoor active zones allowing sports, balancing acts, and general physical agility.",
    feat_8_title: "Personal Attention",
    feat_8_desc: "Specially curated limited class sizing formats guarantee teachers can groom and correct children individually.",
    feat_9_title: "Trained Teachers",
    feat_9_desc: "Highly qualified educators undergoing continuous trust pedagogy workshops to nurture kids with extreme affection.",
    adm_title: "Begin Your Child's Journey",
    adm_subtitle: "Register your interest for admissions in the academic year 2026-27.",
    form_label_name: "Child's Full Name",
    form_label_grade: "Grade Seeking",
    form_opt_select: "Select Grade",
    form_opt_playgroup: "Playgroup (2.5+ Yrs)",
    form_opt_nursery: "Nursery (3.0+ Yrs)",
    form_opt_lkg: "Junior KG (4.0+ Yrs)",
    form_opt_ukg: "Senior KG (5.0+ Yrs)",
    form_opt_class1: "Class 1 (6.0+ Yrs)",
    form_opt_class2: "Class 2 (7.0+ Yrs)",
    form_label_phone: "Parent's Phone Number",
    form_submit_btn: "Submit Enquiry Form",
    contact_heading: "Get in Touch",
    contact_subtext: "Walk into our campus or drop us an instant phone call to book your personalized counseling session.",
    info_title_address: "Campus Location",
    info_title_phone: "Direct Admissions Line",
    media_badge: "Campus Highlights",
    media_title: "Virtual Tour & Photo Showcase",
    media_desc: "Experience our premium academic facilities, exploratory labs, and vibrant sports sessions.",
    media_video_overlay: "Take a Virtual Campus Tour",
    gallery_img_1: "Cognitive Playroom (Kreedo Lab)",
    gallery_img_2: "Kids Yoga & Rhythm Session",
    gallery_img_3: "Traditional Lathi Kathi Martial Art",
    gallery_img_4: "Naturally Ventilated Classrooms",
    gallery_img_5: "Active Outdoor Playground Area",
    gallery_img_6: "Reliable Safe Transport Van Fleet",
    footer_address: "Patil Plaza, Next to Silver Birch Hospital, Raikarmala, Dhayari, Pune 411041.",
    footer_trust: "Run by Dnyansadhana Educational Trust.",
    footer_title_links: "Explore Pages",
    footer_title_address: "Contact Address",
    footer_copyright: "© 2026 HS School. All Rights Reserved. Managed by Dnyansadhana Educational Trust.",
    yoga_breathing_normal: "Click Yoga icon to toggle deep breathing",
    yoga_breathing_deep: "Deep Meditation Mode Active (Click to reset)"
  },
  mr: {
    nav_brand: "एच. एस. स्कूल",
    nav_home: "मुख्यपृष्ठ",
    nav_timeline: "दिनचर्या",
    nav_milestones: "आमचे टप्पे",
    nav_reviews: "पालकांचे अभिप्राय",
    nav_features: "सुख-सुविधा",
    nav_admission: "प्रवेश प्रक्रिया",
    nav_contact: "संपर्क",
    preloader_text: "ज्ञानसाधना एज्युकेशनल ट्रस्ट",
    ribbon_text: "प्रवेश सुरू २०२६-२७",
    hero_badge: "🎉 प्रवेश सुरू २०२६-२७",
    hero_title: "उद्याच्या कर्तृत्ववान नेत्यांना घडवत आहोत",
    hero_subtitle: "आम्ही प्रत्येक पाल्याच्या बौद्धिक, भावनिक आणि सामाजिक चतुरस्त्र विकासाला चालना देण्यासाठी खेळ आणि कृती-आधारित दर्जेदार पाया रचतो.",
    btn_enquiry: "प्रवेश चौकशी",
    btn_explore: "अभिप्राय पहा",
    timeline_badge: "शाळेतील एक दिवस",
    timeline_title: "एच. एस. स्कूलमधील मुलांची दिनचर्या",
    timeline_desc: "मुलांच्या बौद्धिक वाढीसाठी, उत्तम शारीरिक समन्वयासाठी आणि मूल्यांसाठी तयार केलेली परस्परसंवादी व संतुलित दिनचर्या.",
    timeline_1_title: "आनंददायी स्वागत आणि श्लोक पठण",
    timeline_1_desc: "मनाची एकाग्रता आणि सांस्कृतिक मूल्ये वाढवण्यासाठी सकाळची प्रार्थना आणि श्लोक पठण.",
    timeline_2_title: "क्रीडो लॅबमधील उपक्रमांद्वारे शिक्षण",
    timeline_2_desc: "गणित, भाषा आणि संज्ञानात्मक संकल्पना सोप्या करण्यासाठी प्रात्यक्षिक आधारित साधने.",
    timeline_3_title: "ब्रेन जिम आणि लहान मुलांचे योग",
    timeline_3_desc: "शारीरिक समन्वय, श्वासोच्छ्वास आणि तणावमुक्तीसाठी सोपी योगासने.",
    timeline_4_title: "सर्जनशील खेळ आणि लाठी काठीचे प्रशिक्षण",
    timeline_4_desc: "शारीरिक चपळता आणि आत्मसंरक्षणासाठी पारंपारिक लाठी काठीचे प्रशिक्षण.",
    milestones_badge: "अभिमानास्पद टप्पे",
    milestones_title: "आमचे टप्पे",
    milestones_desc: "प्रत्येक मुलाच्या सुरक्षितता आणि विकासाप्रती असलेल्या आमच्या वचनबद्धतेचे प्रतिबिंब.",
    count_students_label: "आनंदी विद्यार्थी",
    count_classrooms_label: "हवेशीर वर्गखोल्या",
    count_experience_label: "शैक्षणिक गुणवत्तेची वर्षे",
    reviews_badge: "अभिप्राय",
    reviews_title: "पालकांचे अभिप्राय",
    reviews_desc: "आमच्या शाळेतील विद्यार्थ्यांच्या पानांचे वास्तविक अनुभव.",
    review_1_parent: "श्रीमती प्रियांका पाटील",
    review_1_grade: "प्लेग्रुपच्या विद्यार्थ्याचे पालक",
    review_1_text: "एच. एस. स्कूलमधील क्रीडो लॅब आणि वैयक्तिक लक्षामुळे माझ्या मुलीच्या शिकण्यात अप्रतिम बदल झाला आहे. सीसीटीव्ही सुरक्षेमुळे आम्हाला पूर्ण मानसिक शांतता मिळते!",
    review_2_parent: "श्री. राजेश शिंदे",
    review_2_grade: "सिनीयरी के.जी.च्या विद्यार्थ्याचे पालक",
    review_2_text: "आधुनिक शैक्षणिक साधनांसोबतच लाठी काठी आणि श्लोक पठणासारख्या पारंपारिक संस्कारांचा सुरेख मेळ पाहून आम्ही अतिशय समाधानी आहोत! अवश्य भेट द्या.",
    review_3_parent: "श्रीमती स्नेहा देशमुख",
    review_3_grade: "इयत्ता पहिलीच्या विद्यार्थ्याचे पालक",
    review_3_text: "सुरक्षित वाहतूक ही आमची सर्वात मोठी काळजी होती, पण शाळेची पडताळणी केलेली ट्रान्सपोर्ट व्हॅन सेवा उत्कृष्ट आहे. शिक्षक मुलांचे संगोपन अतिशय प्रेमाने करतात.",
    features_badge: "आमचे आधारस्तंभ",
    features_title: "मुख्य सुख-सुविधा व वैशिष्ट्ये",
    features_desc: "प्रत्येक गोष्ट मुलांची सुरक्षितता, उत्कृष्ट शैक्षणिक वातावरण आणि खेळकर अनुभव लक्षात ठेवून डिझाइन केली आहे.",
    feat_1_title: "क्रीडो लॅब सेटअप",
    feat_1_desc: "मुलांच्या गणित आणि विज्ञान संकल्पना प्रत्यक्ष साहित्याद्वारे हाताळून स्पष्ट करण्यासाठी क्रीडो लॅबची विशेष रचना.",
    feat_2_title: "4Q विकास",
    feat_2_desc: "विद्यार्थ्यांच्या बौद्धिक (IQ), भावनिक (EQ), आध्यात्मिक (SQ), आणि सर्जनशील (CQ) क्षमतांचा सर्वांगीण विकास.",
    feat_3_title: "अबॅकस",
    feat_3_desc: "गणिताचा वेग वाढवण्यासाठी, एकाग्रता वाढवण्यासाठी आणि तार्किक स्मरणशक्ती बळकट करण्यासाठी विशेष मेंदूचे खेळ.",
    feat_4_title: "प्रशस्त वर्गखोल्या",
    feat_4_desc: "नैसर्गिक प्रकाश व खेळत्या हवेने युक्त वर्गखोल्या, ज्या मुलांमध्ये सकारात्मक ऊर्जा आणि ताजेतवानेपणा टिकवून ठेवतात.",
    feat_5_title: "सीसीटीव्ही सुरक्षा",
    feat_5_desc: "शाळेचा परिसर आणि सर्व वर्गखोल्यांमध्ये सुरक्षिततेची खात्री करण्यासाठी चोवीस तास सीसीटीव्हीद्वारे देखरेख.",
    feat_6_title: "सुरक्षित वाहतूक (व्हॅन)",
    feat_6_desc: "अनुभवी आणि पडताळणी केलेल्या चालकांद्वारे घरापासून शाळेपर्यंत सुरक्षित आणि खात्रीशीर व्हॅन सेवा.",
    feat_7_title: "क्रीडा विभाग",
    feat_7_desc: "विविध मैदानी व इनडोअर खेळांसाठी सज्ज असलेले सुरक्षित क्रीडांगण जे मुलांचा शारीरिक फिटनेस वाढवते.",
    feat_8_title: "वैयक्तिक लक्ष",
    feat_8_desc: "मर्यादित विद्यार्थी संख्या असल्यामुळे शिक्षक प्रत्येक विद्यार्थ्याची वैयक्तिक शैक्षणिक व इतर प्रगती चांगल्या प्रकारे सायकल चालवू शकतात.",
    feat_9_title: "प्रशिक्षित शिक्षक",
    feat_9_desc: "मुलांना प्रेमाने आणि विश्वासाने घडवण्यासाठी बाल मानसशास्त्र व आधुनिक शिक्षण पद्धतीचे सखोल प्रशिक्षण घेतलेले शिक्षक.",
    adm_title: "पाल्याचा शैक्षणिक प्रवास सुरू करा",
    adm_subtitle: "शैक्षणिक वर्ष २०२६-२७ च्या प्रवेश चौकशीसाठी आपला फॉर्म भरा.",
    form_label_name: "पाल्याचे संपूर्ण नाव",
    form_label_grade: "प्रवेशाचा वर्ग",
    form_opt_select: "वर्ग निवडा",
    form_opt_playgroup: "प्लेग्रुप (२.५+ वर्षे)",
    form_opt_nursery: "नर्सरी (३.०+ वर्षे)",
    form_opt_lkg: "ज्युनिअर के.जी. (४.०+ वर्षे)",
    form_opt_ukg: "सिनीयरी के.जी. (५.०+ वर्षे)",
    form_opt_class1: "इयत्ता पहिली (६.०+ वर्षे)",
    form_opt_class2: "इयत्ता दुसरी (७.०+ वर्षे)",
    form_label_phone: "पालकांचा मोबाईल नंबर",
    form_submit_btn: "फॉर्म सादर करा",
    contact_heading: "संपर्क साधा",
    contact_subtext: "प्रवेशाबाबत त्वरित सल्ल्यासाठी आमच्या शाळेला प्रत्यक्ष भेट द्या किंवा दिलेल्या फोन नंबरवर थेट कॉल करा.",
    info_title_address: "शाळेचा पत्ता",
    info_title_phone: "थेट प्रवेश कक्ष",
    media_badge: "शाळेची वैशिष्ट्ये",
    media_title: "व्हर्च्युअल सफर आणि फोटो गॅलरी",
    media_desc: "आमचे जागतिक दर्जाचे शैक्षणिक वर्ग, प्रायोगिक प्रयोगशाळा आणि क्रीडांगणाची माहिती मिळवा.",
    media_video_overlay: "शाळेची व्हर्च्युअल सफर करा",
    gallery_img_1: "संज्ञानात्मक खेळघर (क्रीडो लॅब)",
    gallery_img_2: "बाल योग आणि श्वासोच्छ्वास वर्ग",
    gallery_img_3: "पारंपारिक लाठी काठी प्रशिक्षण कला",
    gallery_img_4: "नैसर्गिक व हवेशीर प्रशस्त वर्गखोल्या",
    gallery_img_5: "शारीरिक विकासासाठी मैदानी क्रीडांगण",
    gallery_img_6: "सुरक्षित व खात्रीशीर ट्रान्सपोर्ट व्हॅन सेवा",
    footer_address: "पाटील प्लाझा, सिल्व्हर बिर्च हॉस्पिटल शेजारी, रायकरमळा, धायरी, पुणे ४११०४१.",
    footer_trust: "ज्ञानसाधना एज्युकेशनल ट्रस्टद्वारे संचलित.",
    footer_title_links: "महत्त्वाच्या लिंक्स",
    footer_title_address: "संपर्क तपशील",
    footer_copyright: "© २०२६ एच. एस. स्कूल. सर्व हक्क सुरक्षित. ज्ञानसाधना एज्युकेशनल ट्रस्ट.",
    yoga_breathing_normal: "दीर्घ श्वासोच्छ्वासासाठी योग चिन्हावर क्लिक करा",
    yoga_breathing_deep: "ध्यान मोड सक्रिय (पूर्ववत करण्यासाठी क्लिक करा)"
  }
};

// 2. STATE VARIABLES
let currentLanguage = localStorage.getItem('hs_school_lang') || 'en';
let isDarkMode = localStorage.getItem('hs_school_theme') === 'dark';

// 3. MULTI-LANGUAGE TRANSLATION ENGINE
function updateLanguageUI() {
  const elements = document.querySelectorAll('[data-key]');
  elements.forEach(element => {
    const key = element.getAttribute('data-key');
    if (textContent[currentLanguage] && textContent[currentLanguage][key]) {
      // For input elements/selectors placeholders
      if (element.tagName === 'INPUT' && element.getAttribute('type') === 'text') {
        element.placeholder = textContent[currentLanguage][key];
      } else if (element.tagName === 'INPUT' && element.getAttribute('type') === 'tel') {
        element.placeholder = textContent[currentLanguage][key];
      } else {
        // Normal HTML elements
        element.innerHTML = textContent[currentLanguage][key];
      }
    }
  });

  // Update language selector indicator text
  const indicator = document.getElementById('lang-indicator');
  if (indicator) {
    indicator.textContent = currentLanguage.toUpperCase();
  }

  // Adjust placeholder translations manually for SELECT tags
  const gradeSelect = document.getElementById('grade');
  if (gradeSelect) {
    const firstOpt = gradeSelect.options[0];
    if (firstOpt && textContent[currentLanguage]['form_opt_select']) {
      firstOpt.textContent = textContent[currentLanguage]['form_opt_select'];
    }
  }

  const yogaIndicator = document.getElementById('yoga-mode-indicator');
  if (yogaIndicator) {
    const yogaKey = yogaIndicator.getAttribute('data-key');
    if (textContent[currentLanguage] && textContent[currentLanguage][yogaKey]) {
      yogaIndicator.textContent = textContent[currentLanguage][yogaKey];
    }
  }
}

// Language switch trigger
const langToggle = document.getElementById('lang-toggle');
if (langToggle) {
  langToggle.addEventListener('click', () => {
    currentLanguage = currentLanguage === 'en' ? 'mr' : 'en';
    localStorage.setItem('hs_school_lang', currentLanguage);
    
    // Transition text swap smoothly using GSAP
    gsap.to('body', {
      opacity: 0.85,
      duration: 0.15,
      onComplete: () => {
        updateLanguageUI();
        gsap.to('body', { opacity: 1, duration: 0.2 });
      }
    });
  });
}

// 4. DIGITAL DARK MODE CONTROLLER
function applyTheme() {
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

document.getElementById('theme-toggle').addEventListener('click', (e) => {
  isDarkMode = !isDarkMode;
  localStorage.setItem('hs_school_theme', isDarkMode ? 'dark' : 'light');
  
  const ripple = document.getElementById('dark-ripple');
  if (ripple) {
    // Get cursor coordinates or fallback to center
    const clickX = e.clientX || window.innerWidth / 2;
    const clickY = e.clientY || 40;
    
    // Set ripple color based on target theme (expanding midnight blue layer)
    ripple.style.backgroundColor = isDarkMode ? '#061426' : '#FFFFFF';
    
    // Position ripple center
    ripple.style.clipPath = `circle(0% at ${clickX}px ${clickY}px)`;
    ripple.classList.remove('active');
    
    // Toggle body class immediately for state transition
    applyTheme();
    
    // Trigger transition
    setTimeout(() => {
      ripple.style.clipPath = `circle(150% at ${clickX}px ${clickY}px)`;
      ripple.classList.add('active');
      
      // Animate icon rotation
      gsap.to('.theme-toggle-btn i', {
        rotate: 360,
        duration: 0.4,
        clearProps: "transform"
      });
      
      // Clean up overlay when done
      setTimeout(() => {
        ripple.classList.remove('active');
        ripple.style.clipPath = `circle(0% at ${clickX}px ${clickY}px)`;
      }, 750);
    }, 50);
  } else {
    applyTheme();
  }
});

// 5. OUT-OF-THE-BOX PRELOADER (SPLASH SCREEN)
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  const tl = gsap.timeline({
    onComplete: () => {
      preloader.style.display = 'none';
      initHeroAnimations();
    }
  });

  // 1st Step: Scale the gold line
  tl.to('.preloader-line', {
    scaleX: 1,
    duration: 1.2,
    ease: "power2.inOut"
  });

  // 2nd Step: Fade in and scale logo
  tl.fromTo('.preloader-logo', {
    opacity: 0,
    scale: 0.8
  }, {
    opacity: 1,
    scale: 1,
    duration: 0.6,
    ease: "back.out(1.5)"
  }, "-=0.4");

  // 3rd Step: Fade in and slide up text
  tl.to('.preloader-title', {
    opacity: 1,
    y: -10,
    duration: 0.6,
    ease: "power2.out"
  }, "-=0.3");

  // 4th Step: Lift the preloader curtain up
  tl.to(preloader, {
    yPercent: -100,
    duration: 0.8,
    ease: "power3.inOut"
  }, "+=0.4");
}

// 6. HERO SECTION ENTRANCE ANIMATIONS
function initHeroAnimations() {
  const heroTL = gsap.timeline();
  
  heroTL.fromTo('.announcement-bar', 
    { y: -38, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
  );

  heroTL.fromTo('.site-header', 
    { y: -80, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
    "-=0.3"
  );

  // Fade-in Hero visual content first!
  heroTL.fromTo('.hero-visual-content', 
    { scale: 0.92, opacity: 0, y: 30 }, 
    { scale: 1, opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
    "-=0.2"
  );

  // Fade-in Text badge and title
  heroTL.fromTo('.hero-badge', 
    { scale: 0.6, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
    "-=0.4"
  );

  // Draw SVG Scribble highlight
  heroTL.fromTo('.scribble-path',
    { strokeDashoffset: 600 },
    { strokeDashoffset: 0, duration: 0.8, ease: "power2.inOut" },
    "-=0.3"
  );

  heroTL.fromTo('.hero-title', 
    { y: 30, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
    "-=0.4"
  );

  heroTL.fromTo('.hero-subtitle', 
    { y: 20, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
    "-=0.4"
  );

  heroTL.fromTo('.hero-actions .btn', 
    { y: 15, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 0.5, stagger: 0.15, ease: "power2.out" },
    "-=0.4"
  );
}

// 7. SYMMETRICAL NAVIGATION OVERLAY DRAWER
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('navigation-menu');
const navLinks = document.querySelectorAll('.nav-link');

function toggleNavigation() {
  navToggle.classList.toggle('open');
  navMenu.classList.toggle('active');
  
  if (navMenu.classList.contains('active')) {
    document.body.style.overflow = 'hidden'; // Lock scrolling
    
    // Animate menu links
    gsap.fromTo('.nav-link', 
      { y: 20, opacity: 0 },
      { y: 0, opacity: 0.8, stagger: 0.08, duration: 0.4, ease: "power2.out", delay: 0.1 }
    );
  } else {
    document.body.style.overflow = 'auto'; // Release scrolling
  }
}

navToggle.addEventListener('click', toggleNavigation);
document.querySelector('.nav-overlay-bg').addEventListener('click', toggleNavigation);

// Close menu when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
      toggleNavigation();
    }
  });
});

// 8. DAY IN THE LIFE DYNAMIC TIMELINE DRAWING
function initTimelineScrollAnimation() {
  const isDesktop = window.innerWidth >= 768;
  const timelinePath = document.querySelector('.timeline-path-fill');
  
  if (!timelinePath) return;

  // Compute length of timeline path to handle dash array
  const pathLength = 800; // matches viewBox path dimensions 0 to 800
  timelinePath.style.strokeDasharray = pathLength;
  timelinePath.style.strokeDashoffset = pathLength;

  // ScrollTrigger to draw SVG timeline path down the scroll
  gsap.to(timelinePath, {
    strokeDashoffset: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".timeline-items-list",
      start: "top 30%",
      end: "bottom 70%",
      scrub: 0.5
    }
  });

  // Activate timeline indicator nodes as they enter viewport middle
  const timelineItems = document.querySelectorAll('.timeline-item');
  timelineItems.forEach(item => {
    ScrollTrigger.create({
      trigger: item,
      start: "top 55%",
      end: "bottom 45%",
      onEnter: () => {
        item.classList.add('active');
        const node = item.querySelector('.timeline-indicator-node');
        gsap.timeline()
          .to(node, { borderRadius: "30% 30% 70% 70%", scaleY: 1.6, duration: 0.15, ease: "power1.out" })
          .to(node, { borderRadius: "50%", scaleY: 1.0, duration: 0.35, ease: "elastic.out(1.2, 0.5)" });
      },
      onLeaveBack: () => {
        item.classList.remove('active');
      }
    });
  });
}

// 9. FEATURES GRID 3D TILT CARDS EFFECT (GSAP Transform Matrix)
function init3DTiltCards() {
  // 3D Tilt only for desktop, mobile uses subtle hover transitions
  if (window.matchMedia("(pointer: coarse)").matches) {
    // Touch Devices - Apply a slight tap visual tilt
    const featureCards = document.querySelectorAll('.tilt-card');
    featureCards.forEach(card => {
      card.addEventListener('touchstart', () => {
        gsap.to(card.querySelector('.card-inner'), {
          rotateY: 10,
          rotateX: -5,
          scale: 0.98,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      card.addEventListener('touchend', () => {
        gsap.to(card.querySelector('.card-inner'), {
          rotateY: 0,
          rotateX: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });
    return;
  }

  const featureCards = document.querySelectorAll('.tilt-card');
  
  featureCards.forEach(card => {
    const inner = card.querySelector('.card-inner');
    
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x coordinate inside the card
      const y = e.clientY - rect.top;  // y coordinate inside the card
      
      // Calculate rotation bounds based on position (max rotation +/-15 deg)
      const w = rect.width;
      const h = rect.height;
      const rotateY = ((x / w) - 0.5) * 20; // range from -10 to 10
      const rotateX = -(((y / h) - 0.5) * 15); // range from -7.5 to 7.5
      
      gsap.to(inner, {
        rotateY: rotateY,
        rotateX: rotateX,
        transformPerspective: 1000,
        ease: "power2.out",
        duration: 0.4,
        scale: 1.02,
        boxShadow: "var(--shadow-hover)"
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(inner, {
        rotateY: 0,
        rotateX: 0,
        scale: 1,
        ease: "power3.out",
        duration: 0.5,
        boxShadow: "var(--shadow-premium)"
      });
    });
  });
}

// 10. SWIPERJS SLIDER INITIALIZATION
function initSwiperSlider() {
  new Swiper('.reviews-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 600,
    grabCursor: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 40
      }
    }
  });
}

// 11. CANVAS CONFETTI MICRO-INTERACTION (High Performance particles)
function initConfettiInteraction() {
  const fab = document.getElementById('call-cta-fab');
  const canvas = document.getElementById('confetti-canvas');
  if (!fab || !canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let particles = [];
  
  // Set full-screen coordinates
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  class ConfettiParticle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      
      // Speed vectors (bursting upward and leftward around bottom-right button)
      const angle = (Math.PI * 1.0) + (Math.random() * Math.PI * 0.6); // Angle directed left-upward
      const speed = 8 + (Math.random() * 12);
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed;
      
      this.gravity = 0.35;
      this.friction = 0.98;
      
      // Aesthetics details
      this.size = 8 + Math.floor(Math.random() * 12);
      this.alpha = 1;
      this.rotation = Math.random() * 360;
      this.spin = -4 + Math.random() * 8;
      
      // Determine Type: Star, Alphabet, or simple square foil
      const types = ['star', 'alphabet', 'foil'];
      this.type = types[Math.floor(Math.random() * types.length)];
      
      // Alphabets
      const chars = ['A', 'B', 'C', 'H', 'S', '1', '2', 'K'];
      this.char = chars[Math.floor(Math.random() * chars.length)];
      
      // Premium colors
      const colors = [
        '#D4AF37', // Gold
        '#F9F6F0', // Cream
        '#2ECC71', // Green
        '#3498DB', // Soothing Blue
        '#9B59B6'  // Warm Purple
      ];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
      this.vx *= this.friction;
      this.vy += this.gravity;
      this.x += this.vx;
      this.y += this.vy;
      this.rotation += this.spin;
      this.alpha -= 0.015; // Slow fade
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      
      if (this.type === 'star') {
        // Draw standard five-point star
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
          ctx.lineTo(Math.cos((18 + i * 72) * Math.PI / 180) * this.size,
                     Math.sin((18 + i * 72) * Math.PI / 180) * this.size);
          ctx.lineTo(Math.cos((54 + i * 72) * Math.PI / 180) * (this.size / 2),
                     Math.sin((54 + i * 72) * Math.PI / 180) * (this.size / 2));
        }
        ctx.closePath();
        ctx.fill();
      } else if (this.type === 'alphabet') {
        // Draw alphabet
        ctx.font = `bold ${this.size}px 'Outfit'`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.char, 0, 0);
      } else {
        // Draw foil square
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
      }
      ctx.restore();
    }
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw active particles
    particles = particles.filter(p => p.alpha > 0);
    particles.forEach(p => {
      p.update();
      p.draw();
    });

    if (particles.length > 0) {
      animationFrameId = requestAnimationFrame(loop);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  fab.addEventListener('click', (e) => {
    // Generate burst origin from active FAB coordinates
    const rect = fab.getBoundingClientRect();
    const originX = rect.left + rect.width / 2;
    const originY = rect.top + rect.height / 2;
    
    // Add particle elements
    for (let i = 0; i < 60; i++) {
      particles.push(new ConfettiParticle(originX, originY));
    }
    
    // Start drawing loops if not running
    cancelAnimationFrame(animationFrameId);
    animationFrameId = requestAnimationFrame(loop);
  });
}

// 12. SCROLL REVEAL ENGINE (ScrollTrigger Repeater)
function initScrollRevealEngine() {
  const revealElements = document.querySelectorAll('.scroll-reveal');
  
  revealElements.forEach(element => {
    gsap.fromTo(element, 
      {
        opacity: 0,
        y: 40
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%", // Triggers when element bottom hits 85% of screen
          end: "bottom 15%",
          // play reverse play reverse resets animation elements when scrolled up
          toggleActions: "play reverse play reverse"
        }
      }
    );
  });

  // Staggered features list
  ScrollTrigger.create({
    trigger: ".features-grid",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play reverse play reverse",
    onEnter: () => {
      gsap.fromTo(".features-grid .feature-card", 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, stagger: 0.08, duration: 0.6, ease: "power2.out", overwrite: "auto" }
      );
    },
    onEnterBack: () => {
      gsap.fromTo(".features-grid .feature-card", 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, stagger: 0.08, duration: 0.6, ease: "power2.out", overwrite: "auto" }
      );
    }
  });
}

// 13. WHATSAPP REDIRECT FORM SUBMISSION
function initFormSubmission() {
  const form = document.getElementById('admission-form');
  if (!form) return;

  // School WhatsApp number (India country code 91 + number)
  const SCHOOL_WHATSAPP = '918149431588';

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Collect form values
    const childName  = document.getElementById('student-name').value.trim();
    const gradeSelect = document.getElementById('grade');
    const gradeText  = gradeSelect.options[gradeSelect.selectedIndex].text.trim();
    const parentPhone = document.getElementById('parent-phone').value.trim();

    // Validate all fields are filled
    if (!childName || !gradeSelect.value || !parentPhone) return;

    const submitBtn = form.querySelector('.submit-btn');
    const originalHTML = submitBtn.innerHTML;

    // Show sending state
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.75';
    submitBtn.innerHTML = currentLanguage === 'en'
      ? '<i class="fa-brands fa-whatsapp"></i> Opening WhatsApp...'
      : '<i class="fa-brands fa-whatsapp"></i> व्हाट्सअ‍ॅप उघडत आहे...';

    // Build pre-filled message
    const message = currentLanguage === 'en'
      ? `Hello HS School 👋\n\nI would like to enquire about *Admission 2026-27*.\n\n` +
        `📌 *Child's Name:* ${childName}\n` +
        `📚 *Grade Seeking:* ${gradeText}\n` +
        `📞 *Parent's Number:* ${parentPhone}\n\n` +
        `Please guide us on the next steps. Thank you!`
      : `नमस्कार एच. एस. स्कूल 👋\n\nमला *प्रवेश २०२६-२७* बाबत चौकशी करायची आहे.\n\n` +
        `📌 *मुलाचे नाव:* ${childName}\n` +
        `📚 *प्रवेशाचा वर्ग:* ${gradeText}\n` +
        `📞 *पालकांचा नंबर:* ${parentPhone}\n\n` +
        `कृपया पुढील प्रक्रियेबद्दल मार्गदर्शन करा. धन्यवाद!`;

    // Encode and open WhatsApp app directly
    const encoded = encodeURIComponent(message);
    const waURL = `whatsapp://send?phone=${SCHOOL_WHATSAPP}&text=${encoded}`;

    setTimeout(() => {
      window.open(waURL, '_blank');

      // Success feedback on button
      submitBtn.innerHTML = currentLanguage === 'en'
        ? '✅ WhatsApp Opened!'
        : '✅ व्हाट्सअ‍ॅप उघडले!';
      submitBtn.style.opacity = '1';

      // Confetti burst on success
      const canvas = document.getElementById('confetti-canvas');
      if (canvas) {
        const fab = document.getElementById('call-cta-fab');
        if (fab) fab.click(); // reuse confetti from FAB origin
      }

      // Reset form and button after 2.5s
      setTimeout(() => {
        form.reset();
        // Clear valid states
        document.querySelectorAll('.form-input, .form-select').forEach(f => f.classList.remove('valid'));
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalHTML;
      }, 2500);
    }, 800);
  });
}

// 14. INITIALIZE ALL DOM EVENTS
document.addEventListener("DOMContentLoaded", () => {
  // Create circular transition element before page loads
  initCircularTransitionSupport();
  
  // Pre-load default language text dynamically
  updateLanguageUI();
  applyTheme();
  
  // Init core UI animations and visual engines
  initPreloader();
  initTimelineScrollAnimation();
  init3DTiltCards();
  initSwiperSlider();
  initConfettiInteraction();
  initScrollRevealEngine();
  initFormSubmission();
  initVideoTour();
  initCustomCursorAndMagnetics();
  initHeroParallax();
  initFormValidationAnimations();
  initMilestonesCounters();
  initYogaBreathingController();
});

// 15. VIRTUAL TOUR VIDEO CONTROLLER
function initVideoTour() {
  const videoOverlay = document.getElementById('video-overlay');
  const campusVideo = document.getElementById('campus-video');
  if (videoOverlay && campusVideo) {
    videoOverlay.addEventListener('click', () => {
      videoOverlay.classList.add('hidden');
      campusVideo.setAttribute('controls', 'true');
      campusVideo.play();
    });
    
    campusVideo.addEventListener('pause', () => {
      videoOverlay.classList.remove('hidden');
      campusVideo.removeAttribute('controls');
    });
    
    campusVideo.addEventListener('ended', () => {
      videoOverlay.classList.remove('hidden');
      campusVideo.removeAttribute('controls');
      campusVideo.load(); // Reset poster
    });
  }
}

// 16. PREMIUM MAGNETIC BUTTONS & CUSTOM CURSOR
function initCustomCursorAndMagnetics() {
  const dot = document.getElementById('custom-cursor-dot');
  const ring = document.getElementById('custom-cursor-ring');
  if (!dot || !ring) return;

  // Display custom cursors only on pointer devices
  if (window.matchMedia("(pointer: fine)").matches) {
    dot.style.opacity = '1';
    ring.style.opacity = '1';
  } else {
    return;
  }

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  // Move dot instantly with cursor coordinates
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    gsap.set(dot, { x: mouseX, y: mouseY });
  });

  // Lag ring smoothly behind the dot
  gsap.ticker.add(() => {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    gsap.set(ring, { x: ringX, y: ringY });
  });

  // Scale and color ring on hover targets
  const hoverElements = document.querySelectorAll('a, button, select, input, textarea, .video-overlay, .swiper-button-next, .swiper-button-prev, .nav-toggle-btn');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      dot.classList.add('active');
      ring.classList.add('active');
    });
    el.addEventListener('mouseleave', () => {
      dot.classList.remove('active');
      ring.classList.remove('active');
      
      // Release magnetic pull
      gsap.to(el, { x: 0, y: 0, scale: 1, duration: 0.35, ease: "power2.out" });
    });
  });

  // Magnetic lock on primary buttons, FAB, and controls
  const magneticCTAs = document.querySelectorAll('.btn-primary, .call-fab, .theme-toggle-btn, .lang-toggle-btn');
  magneticCTAs.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const btnX = rect.left + rect.width / 2;
      const btnY = rect.top + rect.height / 2;
      
      // Pull coefficients
      const pullX = (e.clientX - btnX) * 0.35;
      const pullY = (e.clientY - btnY) * 0.35;
      
      gsap.to(btn, {
        x: pullX,
        y: pullY,
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto"
      });

      // Sticky cursor ring pull
      gsap.to(ring, {
        x: btnX + pullX * 0.5,
        y: btnY + pullY * 0.5,
        duration: 0.2,
        overwrite: "auto"
      });
    });
  });
}

// 17. HERO PARALLAX MOUSE DEPTH LAYERS
function initHeroParallax() {
  const heroSection = document.getElementById('hero');
  if (!heroSection || window.matchMedia("(pointer: coarse)").matches) return;

  heroSection.addEventListener('mousemove', (e) => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    
    const moveX = (e.clientX / w - 0.5) * 30; // Max 15px shift
    const moveY = (e.clientY / h - 0.5) * 20; // Max 10px shift
    
    // Shift background shapes more than foreground building image
    gsap.to('.shape-1', { x: -moveX * 1.5, y: -moveY * 1.5, duration: 0.6, ease: "power2.out" });
    gsap.to('.shape-2', { x: moveX * 1.5, y: moveY * 1.5, duration: 0.6, ease: "power2.out" });
    gsap.to('.hero-visual-content', { x: moveX * 0.5, y: moveY * 0.5, duration: 0.6, ease: "power2.out" });
  });
}

// 18. CIRCULAR DARK MODE TRANSITION RIPPLE SUPPORT
function initCircularTransitionSupport() {
  const rippleContainer = document.createElement('div');
  rippleContainer.className = 'dark-mode-ripple-container';
  rippleContainer.innerHTML = '<div class="dark-mode-ripple" id="dark-ripple"></div>';
  document.body.appendChild(rippleContainer);
}

// 19. FORM VALIDATION GLOW ANIMATIONS
function initFormValidationAnimations() {
  const fields = document.querySelectorAll('.form-input, .form-select');
  fields.forEach(field => {
    const checkValid = () => {
      if (field.checkValidity() && field.value !== "") {
        field.classList.add('valid');
      } else {
        field.classList.remove('valid');
      }
    };
    field.addEventListener('input', checkValid);
    field.addEventListener('change', checkValid);
  });
}

// 20. GSAP MILESTONES COUNTERS ENGINE (ScrollTrigger-driven counters)
function initMilestonesCounters() {
  const counters = document.querySelectorAll('.counter-number');
  if (counters.length === 0) return;

  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'), 10);
    
    ScrollTrigger.create({
      trigger: counter,
      start: "top 85%",
      onEnter: () => {
        const tempObj = { val: 0 };
        gsap.to(tempObj, {
          val: target,
          duration: 2.0,
          ease: "power2.out",
          onUpdate: () => {
            counter.textContent = Math.round(tempObj.val);
          }
        });
      },
      onEnterBack: () => {
        const tempObj = { val: 0 };
        gsap.to(tempObj, {
          val: target,
          duration: 2.0,
          ease: "power2.out",
          onUpdate: () => {
            counter.textContent = Math.round(tempObj.val);
          }
        });
      }
    });
  });
}

// 21. INTERACTIVE CLICKABLE YOGA BREATHING CONTROLLER
function initYogaBreathingController() {
  const yogaSVG = document.getElementById('svg-kids-yoga');
  const indicator = document.getElementById('yoga-mode-indicator');
  if (!yogaSVG || !indicator) return;

  let yogaDeepBreathing = false;

  // Add interactive class for custom magnetic cursor hover snapping
  yogaSVG.classList.add('interactive-yoga-icon');

  yogaSVG.addEventListener('click', () => {
    yogaDeepBreathing = !yogaDeepBreathing;
    
    // Toggle breathing speed values
    const ring = yogaSVG.querySelector('.yoga-ring-dynamic');
    const figure = yogaSVG.querySelector('.yoga-figure');
    
    if (ring && figure) {
      if (yogaDeepBreathing) {
        ring.style.animationDuration = '8s';
        figure.style.animationDuration = '8s';
        
        indicator.setAttribute('data-key', 'yoga_breathing_deep');
        indicator.textContent = textContent[currentLanguage]['yoga_breathing_deep'];
      } else {
        ring.style.animationDuration = '4s';
        figure.style.animationDuration = '4s';
        
        indicator.setAttribute('data-key', 'yoga_breathing_normal');
        indicator.textContent = textContent[currentLanguage]['yoga_breathing_normal'];
      }
    }

    // Trigger subtle canvas confetti burst on the timeline card when clicked
    const card = yogaSVG.closest('.timeline-card');
    if (card) {
      gsap.fromTo(card, 
        { scale: 0.96 }, 
        { scale: 1.0, duration: 0.4, ease: "elastic.out(1.2, 0.4)" }
      );
    }
  });
}
