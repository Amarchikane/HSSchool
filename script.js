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
    nav_principal: "Principal's Desk",
    nav_features: "Amenities",
    nav_admission: "Admissions",
    nav_contact: "Contact",
    preloader_text: "Dnyansadhana Educational Trust",
    ribbon_text: "Admission Open 2026-27",
    hero_badge: "NO DONATION",
    hero_title: "Nurturing Practical Intelligence, Not Just Test-Taking Speed",
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
    features_desc: "",
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
    form_opt_class3: "Class 3 (8.0+ Yrs)",
    form_opt_class4: "Class 4 (9.0+ Yrs)",
    form_opt_class5: "Class 5 (10.0+ Yrs)",
    form_opt_class6: "Class 6 (11.0+ Yrs)",
    form_opt_class7: "Class 7 (12.0+ Yrs)",
    form_label_phone: "Parent's Phone Number (Optional)",
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
    gallery_img_5: "Active Outdoor Play Area",
    gallery_img_6: "Reliable Safe Transport Van Fleet",
    footer_address: "Patil Plaza, Next to Silver Birch Hospital, Raikarmala, Dhayari, Pune 411041.",
    footer_trust: "Run by Dnyansadhana Educational Trust.",
    footer_title_links: "Explore Pages",
    footer_title_address: "Contact Address",
    footer_copyright: "© 2026 HS School. All Rights Reserved. Managed by Dnyansadhana Educational Trust.",
    yoga_breathing_normal: "Click Yoga icon to toggle deep breathing",
    yoga_breathing_deep: "Deep Meditation Mode Active",
    principal_badge: "FROM THE LEADERSHIP DESK",
    principal_1_name: "Gauri Naresh Salunke <span class='principal-degree'>B.A., B.Ed., M.A., M.Ed.</span>",
    principal_1_role: "Founder, Chairperson & Principal",

    principal_1_message: "Our vision is to provide a balanced foundation where traditional cultural roots and modern activity-based learning go hand in hand, nurturing physical, intellectual, and moral growth.",
    principal_2_name: "Naresh Sharad Salunke <span class='principal-degree'>B.Sc., PGDBM</span>",
    principal_2_role: "Managing Director of School",
    principal_2_message: "We are committed to delivering premium educational infrastructure, absolute campus safety with zero-blindspot CCTV monitoring, and safe transportation to keep learning stress-free.",

    // Academics / Curriculum Section
    acad_badge: "ACADEMICS",
    acad_title: "Grow with Us Curriculum",
    acad_desc: "Explore our age-appropriate academic pathways structured for maximum developmental growth.",
    tab_preschool: "Preschool &amp; Kreedo",
    tab_primary: "Primary School",
    tab_secondary: "Secondary School",
    tab_higher: "Higher Secondary",
    preschool_header: "Play-Based Foundations (Ages 2.5 - 6 Yrs)",
    preschool_desc: "We combine rich Montessori activity materials with the advanced Kreedo sensory kit. This physical, tactile play method simplifies early mathematics, language phonics, and cognitive motor-skill pathways.",
    preschool_bullet_1: "Montessori &amp; Kreedo Labs",
    preschool_bullet_2: "Experiential Activity Kits",
    preschool_bullet_3: "Focus on Brain-Gym Exercises",
    primary_header: "Active Concept Building (Grades 1st - 5th)",
    primary_desc: "Primary classes introduce formal mathematics alongside structured abacus sessions to enhance speed and concentration. English grammar and regional language writing fluency are cultivated through creative writing circles.",
    primary_bullet_1: "Abacus Concentration Training",
    primary_bullet_2: "Interactive Science Exhibitions",
    primary_bullet_3: "Playful Language Workshops",
    secondary_header: "Logical Mastery &amp; Boards Prep (Grades 6th - 10th)",
    secondary_desc: "Middle and secondary curricula align with robust analytical board syllabus standards. Advanced physics, chemistry, and biology labs allow students to test concepts physically. Cultural martial arts (Lathi Kathi) training supports stress control.",
    secondary_bullet_1: "Specialized Board Exam Preparation",
    secondary_bullet_2: "Fully Equipped Science Laboratories",
    secondary_bullet_3: "Mandatory Cultural Self-Defense (Lathi Kathi)",
    higher_header: "Scientific Excellence &amp; Careers (Grades 11th - 12th)",
    higher_desc: "Our higher secondary branch specializes in core Science and competitive exam tracks. Students practice JEE and NEET level analysis alongside comprehensive project writing to support top college placements.",
    higher_bullet_1: "JEE, NEET &amp; Board-Integrated Mock Series",
    higher_bullet_2: "Advanced Analytical Computer &amp; Tech Labs",
    higher_bullet_3: "Personalized Career Seminars",

    // Philosophy / Holistic Section
    phil_badge: "PHILOSOPHY",
    phil_title: "The 4Q Holistic Growth Balance",
    phil_desc: "Our balanced educational framework structures the four main quadrants of development to nurture complete leaders.",
    radar_iq: "IQ (INTELLIGENCE)",
    radar_eq: "EQ (EMOTIONAL)",
    radar_sq: "SQ (SPIRITUAL/SOCIAL)",
    radar_pq: "PQ (PHYSICAL)",
    card_iq_title: "Intelligence Quotient (IQ)",
    card_iq_desc: "We challenge intellectual capacity through mathematical abacus challenges, conceptual science experiments in modern labs, and logical coding tracks. Children learn critical analytical processing and factual application.",
    card_eq_title: "Emotional Quotient (EQ)",
    card_eq_desc: "Through interactive group projects and emotional sharing assemblies, our students build empathy and self-regulation. We foster resilient minds that treat failures as active paths to positive growth.",
    card_sq_title: "Spiritual &amp; Social Quotient (SQ)",
    card_sq_desc: "Sanskrit Shloka chanting and morning assemblies help students connect with deep heritage roots and strong moral values. Social service cycles teach community respect, kindness, and public empathy.",
    card_pq_title: "Physical Quotient (PQ)",
    card_pq_desc: "We train children in physical resilience, bravery, and personal self-defense using traditional Lathi Kathi martial arts training and rhythmic brain-gym yoga classes on campus.",

    // Scrapbook Section
    scrap_badge: "CAMPUS ALBUM",
    scrap_title: "Day in the Life Scrapbook",
    scrap_desc: "Flip through our digital memory book to experience visual highlights of active student life.",
    btn_prev_page: "Previous Page",
    btn_next_page: "Next Page",
    scrap_p1_title: "01. Morning Welcomes",
    scrap_p1_desc: "Our day starts at 8:30 AM. Symmetrical classroom assemblies fill our spaces with morning prayers, warm teacher smiles, and Sanskrit shloka chanting sessions designed to cultivate high focus and calm intellectual systems.",
    scrap_p1_num: "PAGE 1",
    scrap_p2_title: "02. Creative Exploration",
    scrap_p2_desc: "In the Kreedo play lab, concepts aren't just memorized—they're touched and assembled. Math becomes wooden counting rods, and physics resolves into colorful geometric blocks that promote conceptual intelligence.",
    scrap_p2_num: "PAGE 2",
    scrap_p3_title: "03. Cultural Strength",
    scrap_p3_desc: "Self-defense builds brave souls. Traditional Indian Lathi Kathi training teaches active body coordination, high spatial awareness, and profound mental discipline to help kids grow robust and fearless.",
    scrap_p3_num: "PAGE 3",

    // Skill Tree Section
    skill_badge: "SKILL MAP",
    skill_title: "The Future-Proof Child Skill Tree",
    skill_desc: "Tap any skill below to reveal the school programs that build it.",
    skill_hint: "Select a skill to explore",
    trait_focus_title: "Focus &amp; Concentration",
    trait_discipline_title: "Physical Discipline",
    trait_logic_title: "Critical Logic &amp; Science",
    trait_creativity_title: "Creativity &amp; Expression",
    trait_values_title: "Values &amp; Culture",
    skill_placeholder_text: "Select a skill on the left to see which school programs develop it",

    // Math Game Section
    game_badge: "MIND GAME",
    game_title: "Are you faster than our Abacus kids?",
    game_desc: "Try our 10-Second mental math gym game and feel how abacus games boost speed!",
    game_start_title: "Ready to test your processing speed?",
    game_start_desc: "3 numbers will flash rapidly. Add and subtract them in your head!",
    btn_start_game: "Start Mental Challenge",
    game_input_title: "What was the final balance?",
    game_input_placeholder: "Your Answer",
    btn_verify_game: "Verify",
    btn_retry_game: "Try Again",
    btn_quick_restart: "Restart Immediately",
    game_msg_success: "🎉 Brilliant! Correct Answer!",
    game_sub_success: "You processed numbers with perfect precision. Just like our trained abacus students!",
    game_msg_fail: "❌ Oops, that's not it!",
    game_sub_fail: "The correct final balance was {correct}. Abacus training helps kids map and see these numbers instantly!",

    // FAQ Section
    faq_badge: "COMMON QUERIES",
    faq_title: "Frequently Asked Questions",
    faq_desc: "Got questions? We have compiled the most common queries from parents about HS School admissions and campus facilities.",
    faq_q1: "What is the curriculum followed at HS School?",
    faq_a1: "We blend the structured activity-based Kreedo Curriculum in preschool with analytical primary pathways including abacus logic.",
    faq_q2: "What are the timings of the preschool?",
    faq_a2: "Our typical school day starts at 8:30 AM with morning chanting and prayers, ending at 1:30 PM after self-defense Lathi Kathi and sports sessions. We maintain class slots designed to keep kids fully focused and high-energy.",
    faq_q3: "How secure is the school transport van facility?",
    faq_a3: "Extremely secure. All our school transport vans are driven by verified local drivers. We maintain regular checks and follow strict route systems around Dhayari, Pune to ensure complete safety during daily commutes.",
    faq_q4: "Are there CCTV cameras installed on the campus?",
    faq_a4: "Yes, absolutely. We operate 24/7 CCTV surveillance with zero-blindspot monitoring in all hallways, classroom spaces, and main play areas to guarantee complete safety for all children."
  },
  mr: {
    nav_brand: "एच. एस. स्कूल",
    nav_home: "मुख्यपृष्ठ",
    nav_timeline: "दिनचर्या",
    nav_milestones: "आमचे टप्पे",
    nav_reviews: "पालकांचे अभिप्राय",
    nav_principal: "मुख्याध्यापकांचे विचार",
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
    features_desc: "",
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
    form_opt_class3: "इयत्ता तिसरी (८.०+ वर्षे)",
    form_opt_class4: "इयत्ता चौथी (९.०+ वर्षे)",
    form_opt_class5: "इयत्ता पाचवी (१०.०+ वर्षे)",
    form_opt_class6: "इयत्ता सहावी (११.०+ वर्षे)",
    form_opt_class7: "इयत्ता सातवी (१२.०+ वर्षे)",
    form_label_phone: "पालकांचा मोबाईल नंबर (ऐच्छिक)",
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
    yoga_breathing_deep: "ध्यान मोड सक्रिय (पूर्ववत करण्यासाठी क्लिक करा)",
    principal_badge: "संस्थापक व व्यवस्थापकीय मंडळ",
    principal_1_name: "गौरी नरेश साळुंके <span class='principal-degree'>बी.ए., बी.एड., एम.ए., एम.एड.</span>",
    principal_1_role: "संस्थापक व अध्यक्षा, मुख्याध्यापिका",
    principal_1_message: "पारंपारिक सांस्कृतिक मूल्ये आणि आधुनिक कृती-आधारित अभ्यासक्रमाचा सुरेख मेळ साधून मुलांचा सर्वांगीण, बौद्धिक व नैतिक विकास घडवणे हेच आमचे ध्येय आहे.",
    principal_2_name: "नरेश शरद साळुंके <span class='principal-degree'>बी.एस्सी., पीजीडीबीएम</span>",
    principal_2_role: "व्यवस्थापकीय संचालक (एम.डी.)",
    principal_2_message: "आम्ही चोवीस तास सीसीटीव्ही सुरक्षितता, प्रशस्त हवेशीर वर्गखोल्या आणि खात्रीशीर व्हॅन वाहतूक याद्वारे मुलांना सुरक्षित आणि सर्वोत्तम सुविधा देण्यास कटिबद्ध आहोत.",

    // Academics / Curriculum Section
    acad_badge: "शिक्षण विभाग",
    acad_title: "आमचा अभ्यासक्रम",
    acad_desc: "मुलांच्या वयोमानानुसार आणि जास्तीत जास्त सर्वांगीण विकासासाठी तयार केलेली आमची शैक्षणिक मार्गदर्शक रचना पहा.",
    tab_preschool: "प्लेस्कूल आणि क्रीडो",
    tab_primary: "प्राथमिक शाळा",
    tab_secondary: "माध्यमिक शाळा",
    tab_higher: "उच्च माध्यमिक",
    preschool_header: "खेळातून शिक्षण (वय २.५ ते ६ वर्षे)",
    preschool_desc: "आम्ही प्रगत क्रीडो लॅब साहित्याद्वारे माँटेसरी शिक्षण देतो. खेळातून आणि प्रात्याक्षिकाद्वारे दिले जाणारे हे शिक्षण मुलांचे प्राथमिक गणित, भाषा आणि वाचन संकल्पना सोपे करते.",
    preschool_bullet_1: "माँटेसरी आणि क्रीडो लॅब्स",
    preschool_bullet_2: "प्रात्याक्षिक ऍक्टिव्हिटी किट्स",
    preschool_bullet_3: "ब्रेन-जिम व्यायामांवर भर",
    primary_header: "सक्रिय संकल्पना अभ्यास (इयत्ता १ ली ते ५ वी)",
    primary_desc: "प्राथमिक वर्गांमध्ये गणिताचा पाया पक्का करण्यासाठी अबॅकसचा अभ्यास सुरू केला जातो, ज्यामुळे मुलांचा वेग आणि एकाग्रता वाढते. इंग्रजी व्याकरण आणि प्रादेशिक भाषांचे उत्तम ज्ञान सर्जनशील उपक्रमांद्वारे दिले जाते.",
    primary_bullet_1: "अबॅकस एकाग्रता प्रशिक्षण",
    primary_bullet_2: "परस्परसंवादी विज्ञान प्रदर्शने",
    primary_bullet_3: "खेळातून भाषा कार्यशाळा",
    secondary_header: "तार्किक प्रभुत्व आणि बोर्ड परीक्षा तयारी (इयत्ता ६ वी ते १० वी)",
    secondary_desc: "माध्यमिक वर्गांचा अभ्यासक्रम शालेय बोर्डाच्या निकषांनुसार आणि तार्किक विचारसरणीला चालना देणारा आहे. मुले भौतिकशास्त्र, रसायनशास्त्र आणि जीवशास्त्र प्रयोगशाळेत स्वतः प्रयोग करून संकल्पना शिकतात. शारीरिक स्वास्थ्यासाठी लाठी काठीचे प्रशिक्षण दिले जाते.",
    secondary_bullet_1: "विशेष बोर्ड परीक्षा पूर्वतयारी",
    secondary_bullet_2: "सुसज्ज विज्ञान प्रयोगशाळा",
    secondary_bullet_3: "पारंपारिक लाठी काठी स्वसंरक्षण (अनिवाय)",
    higher_header: "वैज्ञानिक गुणवत्ता आणि करिअर मार्ग (इयत्ता ११ वी आणि १२ वी)",
    higher_desc: "आमचा उच्च माध्यमिक विभाग मुख्यत्वे विज्ञान शाखा आणि स्पर्धा परीक्षांच्या (JEE / NEET) तयारीसाठी विशेष ओळखला जातो. विद्यार्थी सखोल अभ्यास आणि मॉक टेस्ट सीरिजद्वारे सर्वोत्तम महाविद्यालयांमध्ये प्रवेश मिळवण्यास सज्ज होतात.",
    higher_bullet_1: "JEE, NEET आणि बोर्ड-एकात्मिक मॉक सीरिज",
    higher_bullet_2: "प्रगत संगणक आणि माहिती तंत्रज्ञान लॅब",
    higher_bullet_3: "वैयक्तिक करिअर मार्गदर्शन परिसंवाद",

    // Philosophy / Holistic Section
    phil_badge: "विचारसरणी",
    phil_title: "चतुरस्त्र सर्वांगीण विकास",
    phil_desc: "मुलांना भविष्यातील खंबीर आणि आदर्श नेतृत्व बनवण्यासाठी आम्ही त्यांच्या बौद्धिक, भावनिक, शारीरिक व आध्यात्मिक क्षमतांचा समतोल साधतो.",
    radar_iq: "IQ (बौद्धिक क्षमता)",
    radar_eq: "EQ (भावनिक विकास)",
    radar_sq: "SQ (आध्यात्मिक/सामाजिक)",
    radar_pq: "PQ (शारीरिक चपळता)",
    card_iq_title: "बौद्धिक क्षमता (IQ)",
    card_iq_desc: "आम्ही गणिताचे अबॅकस कोडे, आधुनिक प्रयोगशाळेतील विज्ञान प्रयोग आणि प्राथमिक कोडिंगद्वारे मुलांच्या बौद्धिक क्षमतेला आव्हान देतो, ज्यामुळे ते तार्किक विचार करायला शिकतात.",
    card_eq_title: "भावनिक विकास (EQ)",
    card_eq_desc: "सहकार्यात्मक प्रकल्प आणि भावनिक संवादाद्वारे मुले एकमेकांविषयी सहानुभूती आणि भावनांवर नियंत्रण ठेवायला शिकतात. आम्ही अपयशाकडे यशाची पायरी म्हणून पाहण्याची वृत्ती वाढवतो.",
    card_sq_title: "आध्यात्मिक आणि सामाजिक विकास (SQ)",
    card_sq_desc: "सकाळच्या श्लोक पठणामुळे मुले आपल्या समृद्ध सांस्कृतिक वारशाशी जोडली जातात आणि त्यांच्यात नैतिक मूल्ये रुजतात. सामाजिक सेवा उपक्रमांद्वारे त्यांना समाजप्रती आदर व सेवाभाव शिकवला जातो.",
    card_pq_title: "शारीरिक चपळता (PQ)",
    card_pq_desc: "मुलांना शारीरिकदृष्ट्या सुदृढ आणि धाडसी बनवण्यासाठी आम्ही पारंपारिक लाठी काठीचे खेळ आणि निरोगी आरोग्यासाठी नियमित योग व मेंदूचे व्यायाम वर्ग घेतो.",

    // Scrapbook Section
    scrap_badge: "शाळेतील आठवणी",
    scrap_title: "दिनचर्या फोटो अल्बम",
    scrap_desc: "आमच्या डिजिटल मेमरी बुकची पाने उलटून मुलांच्या उत्साही शालेय जीवनाची सुंदर झलक पहा.",
    btn_prev_page: "मागील पान",
    btn_next_page: "पुढील पान",
    scrap_p1_title: "०१. आनंददायी सकाळची सुरुवात",
    scrap_p1_desc: "आमची शाळा सकाळी ८:३० वाजता सुरू होते. हवेशीर वर्गातील सकाळची प्रार्थना, शिक्षकांचे स्वागत आणि मन प्रसन्न करणारे संस्कृत श्लोक पठण मुलांमध्ये सकारात्मक ऊर्जा व एकाग्रता निर्माण करते.",
    scrap_p1_num: "पान १",
    scrap_p2_title: "०२. सर्जनशील शोध आणि कृती",
    scrap_p2_desc: "क्रीडो लॅबमध्ये मुले संकल्पना फक्त पाठ करत नाहीत, तर साहित्याद्वारे स्वतः हाताळून शिकतात. गणित लाकडी मण्यांद्वारे आणि विज्ञान विविध भौमितिक ब्लॉक्सद्वारे सोपे केले जाते.",
    scrap_p2_num: "पान २",
    scrap_p3_title: "०३. पारंपारिक आणि शारीरिक ताकद",
    scrap_p3_desc: "स्वसंरक्षणामुळे मुलांमध्ये आत्मविश्वास निर्माण होतो. पारंपारिक लाठी काठीचे खेळ केवळ शारीरिक समन्वयच वाढवत नाहीत, तर मुलांमध्ये शिस्त आणि धाडस निर्माण करतात.",
    scrap_p3_num: "पान ३",

    // Skill Tree Section
    skill_badge: "कौशल्य आराखडा",
    skill_title: "मुलांचा भविष्याभिमुख कौशल्य विकास",
    skill_desc: "मुलांमध्ये कोणती शैक्षणिक कौशल्ये कशा प्रकारे विकसित केली जातात हे पाहण्यासाठी खालील कोणत्याही कौशल्यावर क्लिक करा.",
    skill_hint: "माहिती मिळवण्यासाठी कौशल्यावर क्लिक करा",
    trait_focus_title: "एकाग्रता आणि लक्ष",
    trait_discipline_title: "शारीरिक शिस्त",
    trait_logic_title: "तार्किक तर्क आणि विज्ञान",
    trait_creativity_title: "सर्जनशीलता आणि अभिव्यक्ती",
    trait_values_title: "सांस्कृतिक आणि नैतिक मूल्ये",
    skill_placeholder_text: "कोणती कौशल्ये कोणत्या उपक्रमांद्वारे विकसित होतात हे पाहण्यासाठी डावीकडील कौशल्य निवडा",

    // Math Game Section
    game_badge: "मेंदूचा खेळ",
    game_title: "तुम्ही आमच्या अबॅकस मुलांपेक्षा वेगवान आहात का?",
    game_desc: "आमचा १०-सेकंदाचा मेंटल मॅथ गेम खेळून पहा आणि अबॅकसमुळे मुलांची गती कशी वाढते याचा अनुभव घ्या!",
    game_start_title: "मेंदूची गणना गती तपासण्यासाठी तयार आहात का?",
    game_start_desc: "३ संख्या वेगाने फ्लॅश होतील. मनातल्या मनात त्यांची बेरीज आणि वजाबाकी करा!",
    btn_start_game: "मानसिक आव्हान सुरू करा",
    game_input_title: "अंतिम उत्तर काय होते?",
    game_input_placeholder: "तुमचे उत्तर",
    btn_verify_game: "तपासा",
    btn_retry_game: "पुन्हा प्रयत्न करा",
    btn_quick_restart: "लगेच पुन्हा सुरू करा",
    game_msg_success: "🎉 अप्रतिम! बरोबर उत्तर!",
    game_sub_success: "तुम्ही अगदी अचूकतेने गणना केली आहे. अगदी आमच्या प्रशिक्षित अबॅकस विद्यार्थ्यांसारखे!",
    game_msg_fail: "❌ अरेरे, हे बरोबर नाही!",
    game_sub_fail: "अंतिम अचूक उत्तर {correct} होते. अबॅकस प्रशिक्षणामुळे मुले या संख्या मनात त्वरित पाहू शकतात आणि उत्तर देऊ शकतात!",

    // FAQ Section
    faq_badge: "नेहमी विचारले जाणारे प्रश्न",
    faq_title: "सतत विचारले जाणारे प्रश्न (FAQ)",
    faq_desc: "प्रवेश प्रक्रिया, शाळेच्या सुविधा किंवा इतर बाबींबद्दल पालकांनी विचारलेले नेहमीचे प्रश्न आणि त्यांची उत्तरे.",
    faq_q1: "एच. एस. स्कूलमध्ये कोणता अभ्यासक्रम राबवला जातो?",
    faq_a1: "आम्ही पूर्व-प्राथमिक वर्गांमध्ये क्रीडो पद्धतीचा कृती-आधारित अभ्यासक्रम आणि प्राथमिक वर्गांमध्ये अबॅकससह प्रगत अभ्यासक्रमाचा मेळ साधतो.",
    faq_q2: "शाळेची वेळ कशी आहे?",
    faq_a2: "आमची शाळा सकाळी ८:३० वाजता श्लोक पठण व प्रार्थनेने सुरू होते आणि दुपारी १:३० वाजता लाठी काठी, क्रीडा व इतर शारीरिक उपक्रमांनंतर सुटते.",
    faq_q3: "शाळेची व्हॅन वाहतूक सुविधा सुरक्षित आहे का?",
    faq_a3: "होय, अत्यंत सुरक्षित. सर्व व्हॅन्स अनुभवी आणि स्थानिक पडताळणी केलेल्या चालकांद्वारे चालवल्या जातात. आम्ही धायरी व परिसरातील सर्व मार्गांवर सुरक्षेचे काटेकोर पालन करतो.",
    faq_q4: "शाळेच्या आवारात सीसीटीव्ही कॅमेरे आहेत का?",
    faq_a4: "होय, नक्कीच. शाळेचे सर्व वर्ग, कॉरिडोर्स आणि मैदाने चोवीस तास सीसीटीव्ही निगराणीखाली असतात, जिथे कोणतीही अंधारी जागा (blindspot) नाही."
  }
};

// 2. STATE VARIABLES
let currentLanguage = localStorage.getItem('hs_school_lang') || 'en';
let isDarkMode = localStorage.getItem('hs_school_theme') === 'dark';
let activeAmenityId = 1;

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

  // Update showcase benefits dynamically on language change
  if (typeof updateShowcaseBenefits === 'function') {
    updateShowcaseBenefits();
  }

  // Update active skill details panel dynamically on language change
  const activeTraitCard = document.querySelector('.hss-trait-card.active');
  if (activeTraitCard) {
    activeTraitCard.click();
  }

  // Update ruler ticks titles and aria-labels dynamically on language change
  const rulerTicks = document.querySelectorAll('.ruler-tick.major');
  rulerTicks.forEach(tick => {
    const target = tick.getAttribute('data-target');
    let titleKey = '';
    if (target === '#hero') titleKey = 'nav_home';
    else if (target === '#timeline') titleKey = 'nav_timeline';
    else if (target === '#milestones') titleKey = 'nav_milestones';
    else if (target === '#reviews') titleKey = 'nav_reviews';
    else if (target === '#features') titleKey = 'nav_features';
    else if (target === '#admission') titleKey = 'nav_admission';
    
    if (titleKey && textContent[currentLanguage] && textContent[currentLanguage][titleKey]) {
      const translatedText = textContent[currentLanguage][titleKey];
      tick.setAttribute('title', translatedText);
      tick.setAttribute('aria-label', currentLanguage === 'mr' ? `${translatedText} वर जा` : `Scroll to ${translatedText}`);
    }
  });
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
  
  const isActive = navMenu.classList.contains('active');
  if (navToggle) {
    navToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
  }
  
  if (isActive) {
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
          // play none none none maintains visibility once elements are revealed
          toggleActions: "play none none none"
        }
      }
    );
  });

  // Staggered features list
  ScrollTrigger.create({
    trigger: ".features-grid",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none none",
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

// Playful Out-of-the-Box Section End Dividers ScrollTrigger Animations
function initPlayfulDividersAnimation() {
  if (typeof ScrollTrigger !== 'undefined') {
    const dividers = [
      ".hss-bus-divider",
      ".hss-toy-blocks-divider",
      ".hss-soap-bubbles-divider",
      ".hss-rainbow-divider",
      ".hss-crayon-divider",
      ".hss-hanging-photos-divider",
      ".hss-paper-boat-divider",
      ".hss-lightbulbs-divider",
      ".hss-balloons-divider",
      ".hss-paint-divider",
      ".hss-blackboards-divider",
      ".hss-school-bell-divider",
      ".hss-notebook-margin-container"
    ];

    dividers.forEach(selector => {
      ScrollTrigger.create({
        trigger: selector,
        start: "top 95%",
        onEnter: () => {
          const divider = document.querySelector(selector);
          if (divider) divider.classList.add("visible");
        },
        onLeaveBack: () => {
          const divider = document.querySelector(selector);
          if (divider) divider.classList.remove("visible");
        }
      });
    });

    // Climbing Mascots Reactively in Timeline Section
    if (document.querySelector('.mascot-panda') && document.querySelector('.mascot-squirrel')) {
      gsap.to(".mascot-panda", {
        top: "85%",
        ease: "none",
        scrollTrigger: {
          trigger: "#timeline",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1
        }
      });

      gsap.to(".mascot-squirrel", {
        top: "10%",
        ease: "none",
        scrollTrigger: {
          trigger: "#timeline",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1.5
        }
      });
    }
  }
}

// Dynamic Bubble Popping Interaction
function initSoapBubblesDivider() {
  const bubbles = document.querySelectorAll('.hss-soap-bubbles-divider .bubble');
  bubbles.forEach(bubble => {
    const popBubble = () => {
      if (!bubble.classList.contains('bubble-popped')) {
        bubble.classList.add('bubble-popped');
        // Bring back bubble after 4.5s for infinite playability
        setTimeout(() => {
          bubble.classList.remove('bubble-popped');
        }, 4500);
      }
    };
    
    bubble.addEventListener('click', popBubble);
    bubble.addEventListener('touchstart', (e) => {
      e.preventDefault();
      popBubble();
    }, { passive: false });
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
  
  // Resilient safe initialization helper to prevent CDN or element load crashes from blocking interactions
  function safeInit(name, initFn) {
    try {
      initFn();
    } catch (error) {
      console.warn(`[HS School safeInit] "${name}" initialization skipped or failed:`, error);
    }
  }

  // Init core UI animations and visual engines safely
  safeInit("Preloader", initPreloader);
  safeInit("Timeline Scroll Animation", initTimelineScrollAnimation);
  safeInit("3D Tilt Cards", init3DTiltCards);
  safeInit("Swiper Slider", initSwiperSlider);
  safeInit("Confetti Interaction", initConfettiInteraction);
  safeInit("Scroll Reveal Engine", initScrollRevealEngine);
  safeInit("Playful Dividers Animation", initPlayfulDividersAnimation);
  safeInit("Soap Bubbles Divider", initSoapBubblesDivider);
  safeInit("Form Submission", initFormSubmission);
  safeInit("Video Tour", initVideoTour);
  safeInit("Custom Cursor & Magnetics", initCustomCursorAndMagnetics);
  safeInit("Hero Parallax", initHeroParallax);
  safeInit("Form Validation Animations", initFormValidationAnimations);
  safeInit("Milestones Counters", initMilestonesCounters);
  safeInit("Yoga Breathing Controller", initYogaBreathingController);
  
  // Audited dynamic & premium creative components safely
  safeInit("Floating Canvas", initFloatingCanvas);
  safeInit("School Ruler Tracker", initSchoolRulerTracker);
  safeInit("Interactive Timeline Tracker", initInteractiveTimelineTracker);

  // Three entirely new highly interactive modules safely
  safeInit("Curriculum Tabs", initCurriculumTabs);
  safeInit("4Q Holistic Radar Chart", init4QHolisticRadarChart);
  safeInit("Scrapbook Album", initScrapbookAlbum);

  // Gamified ultra-interactive components safely
  safeInit("Gamified Skill Tree", initGamifiedSkillTree);
  safeInit("Mental Math Game", initMentalMathGame);

  // Premium UI Interactive Components safely
  safeInit("Gallery Filter", initGalleryFilter);
  safeInit("FAQ Accordion", initFaqAccordion);
  safeInit("Background Parallax", initBackgroundParallax);
  safeInit("Amenities Dashboard", initAmenitiesDashboard);
  safeInit("Mobile Peek Mascots", initMobilePeekMascots);
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

// 22. SUBTLE EDUCATIONAL FLOATING CANVAS BACKGROUND
function initFloatingCanvas() {
  const canvas = document.getElementById('hero-floating-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let width = canvas.width = canvas.offsetWidth;
  let height = canvas.height = canvas.offsetHeight;

  const particles = [];
  const chars = ['A', 'B', 'C', '1', '2', '3', '★', '♫', '♥', '✏'];
  const maxParticles = 25; // Low count for high performance

  // Generate particles
  for (let i = 0; i < maxParticles; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      char: chars[Math.floor(Math.random() * chars.length)],
      size: Math.random() * 16 + 12,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: -(Math.random() * 0.4 + 0.2), // Gently floats upwards
      opacity: Math.random() * 0.25 + 0.1,
      parallaxFactor: Math.random() * 10 + 5
    });
  }

  // Mouse Parallax Offset tracking
  let mouseX = 0, mouseY = 0;
  let targetMouseX = 0, targetMouseY = 0;

  window.addEventListener('mousemove', (e) => {
    targetMouseX = (e.clientX / window.innerWidth - 0.5) * 40;
    targetMouseY = (e.clientY / window.innerHeight - 0.5) * 40;
  });

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Smoothly ease mouse coordinates to prevent jitter
    mouseX += (targetMouseX - mouseX) * 0.1;
    mouseY += (targetMouseY - mouseY) * 0.1;

    ctx.font = '700 24px Outfit, sans-serif';
    particles.forEach(p => {
      ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity})`;
      ctx.font = `${p.size}px Outfit, sans-serif`;

      // Apply coordinates with soft parallax offset
      const posX = p.x + mouseX * (p.parallaxFactor / 10);
      const posY = p.y + mouseY * (p.parallaxFactor / 10);

      ctx.fillText(p.char, posX, posY);

      // Move particle
      p.x += p.speedX;
      p.y += p.speedY;

      // Wrap-around bounds checker
      if (p.y < -30) {
        p.y = height + 20;
        p.x = Math.random() * width;
      }
      if (p.x < -30) p.x = width + 20;
      if (p.x > width + 30) p.x = -20;
    });

    animationFrameId = requestAnimationFrame(draw);
  }

  // Auto-pause loop when canvas scrolls out of viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        draw();
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    });
  }, { threshold: 0.1 });

  observer.observe(canvas);

  // Responsive canvas resizing
  window.addEventListener('resize', () => {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  });
}

// 23. STICKY "SCHOOL RULER" RIGHT-SIDE SCROLL TRACKER
function initSchoolRulerTracker() {
  const ruler = document.getElementById('school-ruler-tracker');
  const marker = document.getElementById('ruler-marker');
  if (!ruler || !marker) return;

  const ticks = document.querySelectorAll('.ruler-tick.major');
  
  // Track viewport scroll percentage and adjust marker
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;
    
    const percentage = scrollTop / docHeight;
    const rulerHeight = ruler.offsetHeight - 40; // offset boundaries
    const newTop = 20 + (percentage * rulerHeight);
    
    marker.style.top = `${newTop}px`;
  });

  // Handle clickable & keyboard-accessible ruler shortcuts
  ticks.forEach(tick => {
    const scrollToTarget = () => {
      const targetId = tick.getAttribute('data-target');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
        // Set focus to the target section for screen readers
        targetSection.setAttribute('tabindex', '-1');
        targetSection.focus({ preventScroll: true });
      }
    };

    tick.addEventListener('click', scrollToTarget);
    
    tick.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault(); // prevent page scroll down on Space key
        scrollToTarget();
      }
    });
  });
}

// 24. INTERACTIVE "SCHOOL DAY JOURNEY" TIMELINE TRACKER
function initInteractiveTimelineTracker() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  const dynamicBG = document.querySelector('.hss-timeline-dynamic-bg');
  if (timelineItems.length === 0) return;

  // Track active timeline segment on scroll
  window.addEventListener('scroll', () => {
    let currentActive = null;
    
    timelineItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      // Highlight element if it is near center-top of viewport
      if (rect.top < window.innerHeight * 0.55 && rect.bottom > window.innerHeight * 0.3) {
        currentActive = item;
      }
    });

    timelineItems.forEach(item => {
      if (item === currentActive) {
        item.classList.add('active-routine');
        
        // Dynamically shift background gradient theme based on active card step
        if (dynamicBG) {
          dynamicBG.classList.remove('sunrise', 'midday', 'afternoon', 'evening');
          if (item.id === 'step-1') dynamicBG.classList.add('sunrise');
          else if (item.id === 'step-2') dynamicBG.classList.add('midday');
          else if (item.id === 'step-3') dynamicBG.classList.add('afternoon');
          else if (item.id === 'step-4') dynamicBG.classList.add('evening');
        }
      } else {
        item.classList.remove('active-routine');
      }
    });
  });
}

// 25. SECTION 1: CURRICULUM FILTER ENGINE
window.curriculumAutoShiftInterval = null;

window.switchCurriculumTab = function(btn) {
  if (!btn) return;
  const tabBtns = document.querySelectorAll('.hss-tab-btn');
  const tabPanels = document.querySelectorAll('.hss-tab-panel');

  // Update button active state
  tabBtns.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const targetTab = btn.getAttribute('data-tab');

  // Update panels active states
  tabPanels.forEach(panel => {
    if (panel.id === `panel-${targetTab}`) {
      panel.classList.add('active');
    } else {
      panel.classList.remove('active');
    }
  });

  // Clear auto-shift cycle on user click to prevent automatic switching right after
  if (window.curriculumAutoShiftInterval) {
    clearInterval(window.curriculumAutoShiftInterval);
    // Restart cycle with a fresh 5s delay
    window.startCurriculumAutoShift();
  }
};

window.startCurriculumAutoShift = function() {
  window.stopCurriculumAutoShift();
  const tabBtns = document.querySelectorAll('.hss-tab-btn');
  if (tabBtns.length === 0) return;

  window.curriculumAutoShiftInterval = setInterval(() => {
    let activeIndex = -1;
    tabBtns.forEach((btn, index) => {
      if (btn.classList.contains('active')) {
        activeIndex = index;
      }
    });

    const nextIndex = (activeIndex + 1) % tabBtns.length;
    const nextBtn = tabBtns[nextIndex];

    if (nextBtn) {
      // Switch tab programmatically without resetting the interval timer itself
      const tabPanels = document.querySelectorAll('.hss-tab-panel');
      tabBtns.forEach(b => b.classList.remove('active'));
      nextBtn.classList.add('active');
      const targetTab = nextBtn.getAttribute('data-tab');
      tabPanels.forEach(panel => {
        if (panel.id === `panel-${targetTab}`) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    }
  }, 5000); // Shift every 5 seconds
};

window.stopCurriculumAutoShift = function() {
  if (window.curriculumAutoShiftInterval) {
    clearInterval(window.curriculumAutoShiftInterval);
  }
};

function initCurriculumTabs() {
  // Start the automatic rotation cycle initially
  window.startCurriculumAutoShift();

  // Pause rotation on hover, resume on mouseout
  const sectionContainer = document.querySelector('#curriculum');
  if (sectionContainer) {
    sectionContainer.addEventListener('mouseenter', window.stopCurriculumAutoShift);
    sectionContainer.addEventListener('mouseleave', window.startCurriculumAutoShift);
  }
}

// 26. SECTION 2: 4Q HOLISTIC RADAR CHART ENGINE (3D Orbital Gyroscope of Growth)
function init4QHolisticRadarChart() {
  const gyroscope = document.getElementById('holistic-gyroscope');
  const planets = document.querySelectorAll('.gyro-planet');
  const descCards = document.querySelectorAll('.hss-4q-card');
  if (!gyroscope || planets.length === 0) return;

  const quadrants = ['iq', 'eq', 'sq', 'pq'];
  let activeQuadrantIndex = 0;
  let gyroscopeInterval;

  function setActiveQuadrant(quadrant) {
    if (!quadrant) return;

    // Update description cards with active class
    descCards.forEach(card => {
      card.classList.remove('active');
      if (card.id === `card-${quadrant}`) {
        card.classList.add('active');
      }
    });

    // Update gyroscope planets with active class
    planets.forEach(planet => {
      if (planet.getAttribute('data-quadrant') === quadrant) {
        planet.classList.add('active');
      } else {
        planet.classList.remove('active');
      }
    });
  }

  function startGyroscopeCycle() {
    stopGyroscopeCycle();
    gyroscopeInterval = setInterval(() => {
      activeQuadrantIndex = (activeQuadrantIndex + 1) % quadrants.length;
      setActiveQuadrant(quadrants[activeQuadrantIndex]);
    }, 5000); // Shift active quadrant every 5 seconds
  }

  function stopGyroscopeCycle() {
    if (gyroscopeInterval) {
      clearInterval(gyroscopeInterval);
    }
  }

  // Unified Pause and Play states
  function pauseGyroscope() {
    gyroscope.classList.add('paused');
    stopGyroscopeCycle();
  }

  function resumeGyroscope() {
    gyroscope.classList.remove('paused');
    startGyroscopeCycle();
  }

  // Bind mouse and keyboard triggers on gyroscope planets
  planets.forEach(planet => {
    const triggerActivation = () => {
      pauseGyroscope();
      const quadrant = planet.getAttribute('data-quadrant');
      if (quadrant) {
        activeQuadrantIndex = quadrants.indexOf(quadrant);
        setActiveQuadrant(quadrant);
      }
    };

    planet.addEventListener('mouseenter', triggerActivation);
    planet.addEventListener('click', triggerActivation);
    
    planet.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        triggerActivation();
      }
    });

    planet.addEventListener('mouseleave', () => {
      resumeGyroscope();
    });
  });

  // Bind bidirectional triggers on description cards
  descCards.forEach(card => {
    const triggerCardActivation = () => {
      pauseGyroscope();
      const id = card.id; // e.g. "card-iq"
      const quadrant = id.replace('card-', '');
      if (quadrants.includes(quadrant)) {
        activeQuadrantIndex = quadrants.indexOf(quadrant);
        setActiveQuadrant(quadrant);
      }
    };

    card.addEventListener('mouseenter', triggerCardActivation);
    card.addEventListener('click', triggerCardActivation);
    card.addEventListener('mouseleave', () => {
      resumeGyroscope();
    });
  });

  // Interactive Sun element click resets / resumes rotation
  const sunElement = gyroscope.querySelector('.gyro-sun');
  if (sunElement) {
    sunElement.addEventListener('click', () => {
      resumeGyroscope();
      // Cycle to the first one immediately to give instant visual feedback
      activeQuadrantIndex = 0;
      setActiveQuadrant(quadrants[activeQuadrantIndex]);
    });
  }

  // Modern 3D Hover Depth Effect on Holistic Gyroscope Container
  if (!window.matchMedia("(pointer: coarse)").matches) {
    const chartContainer = document.querySelector('.hss-4q-chart-container');

    if (chartContainer) {
      chartContainer.addEventListener('mousemove', (e) => {
        const rect = chartContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 20;  // Max 10 degrees Y
        const rotateX = -((y / rect.height) - 0.5) * 20; // Max 10 degrees X

        gsap.to(gyroscope, {
          rotateY: rotateY,
          rotateX: rotateX,
          transformPerspective: 1000,
          ease: "power2.out",
          duration: 0.5
        });
      });

      chartContainer.addEventListener('mouseleave', () => {
        gsap.to(gyroscope, {
          rotateY: 0,
          rotateX: 0,
          ease: "power3.out",
          duration: 0.6
        });
      });
    }
  }

  // Hover over section pauses automatic shifting & rotation
  const sectionElement = document.querySelector('#holistic');
  if (sectionElement) {
    sectionElement.addEventListener('mouseenter', pauseGyroscope);
    sectionElement.addEventListener('mouseleave', resumeGyroscope);
  }

  // Start the automatic cycle initially
  startGyroscopeCycle();
}

// 27. SECTION 3: 3D MEMORY SCRAPBOOK ALBUM ENGINE
function initScrapbookAlbum() {
  const pages = document.querySelectorAll('.hss-page');
  const prevBtn = document.getElementById('scrapbook-prev-btn');
  const nextBtn = document.getElementById('scrapbook-next-btn');
  if (pages.length === 0) return;

  let currentPageIndex = 0;
  let scrapbookInterval;

  function startScrapbookCycle() {
    stopScrapbookCycle();
    scrapbookInterval = setInterval(() => {
      if (currentPageIndex < pages.length) {
        pages[currentPageIndex].classList.add('flipped');
        pages[currentPageIndex].style.zIndex = 10 + currentPageIndex;
        currentPageIndex++;
      } else {
        // Unflip all pages back to start
        for (let i = pages.length - 1; i >= 0; i--) {
          pages[i].classList.remove('flipped');
          pages[i].style.zIndex = 10 - i;
        }
        currentPageIndex = 0;
      }
    }, 5000); // Auto-flip every 5 seconds
  }

  function stopScrapbookCycle() {
    if (scrapbookInterval) {
      clearInterval(scrapbookInterval);
    }
  }

  function handleNextPage() {
    startScrapbookCycle();

    if (currentPageIndex < pages.length) {
      pages[currentPageIndex].classList.add('flipped');
      pages[currentPageIndex].style.zIndex = 10 + currentPageIndex;
      currentPageIndex++;
    } else {
      for (let i = pages.length - 1; i >= 0; i--) {
        pages[i].classList.remove('flipped');
        pages[i].style.zIndex = 10 - i;
      }
      currentPageIndex = 0;
    }
  }

  function handlePrevPage() {
    startScrapbookCycle();

    if (currentPageIndex > 0) {
      currentPageIndex--;
      pages[currentPageIndex].classList.remove('flipped');
      pages[currentPageIndex].style.zIndex = 10 - currentPageIndex;
    } else {
      // If at the beginning, flip all to go to the last spread
      for (let i = 0; i < pages.length; i++) {
        pages[i].classList.add('flipped');
        pages[i].style.zIndex = 10 + i;
      }
      currentPageIndex = pages.length;
    }
  }

  if (nextBtn) nextBtn.addEventListener('click', handleNextPage);
  if (prevBtn) prevBtn.addEventListener('click', handlePrevPage);

  // Click direct page to flip forward/backward on all devices
  pages.forEach((page, index) => {
    page.addEventListener('click', () => {
      startScrapbookCycle();
      if (page.classList.contains('flipped')) {
        for (let i = currentPageIndex - 1; i >= index; i--) {
          pages[i].classList.remove('flipped');
          pages[i].style.zIndex = 10 - i;
          currentPageIndex--;
        }
      } else {
        for (let i = currentPageIndex; i <= index; i++) {
          pages[i].classList.add('flipped');
          pages[i].style.zIndex = 10 + i;
          currentPageIndex++;
        }
      }
    });
  });

  // Pause cycle on hover, resume on mouseout
  const scrapbookSection = document.querySelector('#scrapbook');
  if (scrapbookSection) {
    scrapbookSection.addEventListener('mouseenter', stopScrapbookCycle);
    scrapbookSection.addEventListener('mouseleave', startScrapbookCycle);
  }

  // Start the slideshow cycle initially
  startScrapbookCycle();
}

// 28. CINEMATIC "OPEN THE GATES" SCROLL INTRO (REMOVED)

// 29. "FUTURE-PROOF CHILD" GAMIFIED SKILL TREE ENGINE
function initGamifiedSkillTree() {
  const traitCards = document.querySelectorAll('.hss-trait-card');
  const placeholder = document.getElementById('skill-placeholder');
  const detailContent = document.getElementById('skill-detail-content');
  const detailIcon = document.getElementById('skill-detail-icon');
  const detailTitle = document.getElementById('skill-detail-title');
  const detailDesc = document.getElementById('skill-detail-desc');
  const programsGrid = document.getElementById('skill-programs-grid');

  if (traitCards.length === 0 || !detailContent) return;

  // Full trait data with linked programs
  // Full trait data with linked programs in both English and Marathi
  const traitData = {
    focus: {
      icon: '🎯',
      color: '#D4AF37',
      title: {
        en: 'Focus & Concentration',
        mr: 'एकाग्रता आणि लक्ष'
      },
      desc: {
        en: 'Sharpening attention, boosting mental storage, and building mathematical visualization — the foundation of every academic skill.',
        mr: 'लक्ष वेधणे, स्मरणशक्ती वाढवणे आणि गणिताचे आकलन सुधारणे - ही प्रत्येक शैक्षणिक कौशल्याची पायाभरणी आहे.'
      },
      programs: [
        {
          icon: '🧮',
          name: {
            en: 'Abacus Brain Games',
            mr: 'अबॅकस ब्रेन गेम्स'
          },
          detail: {
            en: 'Rapid bead calculations train both hemispheres simultaneously, dramatically improving memory span, calculation speed, and spatial reasoning.',
            mr: 'जलद मणी मोजणीमुळे मेंदूच्या दोन्ही भागांना चालना मिळते, ज्यामुळे स्मरणशक्ती, गणिताचा वेग आणि तर्कशक्ती सुधारते.'
          }
        },
        {
          icon: '🧩',
          name: {
            en: 'Montessori Kreedo Lab',
            mr: 'माँटेसरी क्रीडो लॅब'
          },
          detail: {
            en: "Tactile material boxes force sustained, focused engagement with shapes, numbers, and patterns — building a child's ability to concentrate for longer durations.",
            mr: "विविध शैक्षणिक साहित्याद्वारे मुले आकार, संख्या आणि पॅटर्न समजून घेतात - ज्यामुळे त्यांची एकाग्रता दीर्घकाळ टिकून राहते."
          }
        }
      ]
    },
    discipline: {
      icon: '🛡️',
      color: '#2ECC71',
      title: {
        en: 'Physical Discipline & Bravery',
        mr: 'शारीरिक शिस्त आणि धाडस'
      },
      desc: {
        en: 'Cultivating body rhythm, stamina, personal defense confidence, and deep spinal strength through traditional and modern physical training.',
        mr: 'पारंपारिक आणि आधुनिक शारीरिक प्रशिक्षणाद्वारे शरीराचा समन्वय, तग धरण्याची क्षमता, वैयक्तिक संरक्षणाचा आत्मविश्वास आणि शारीरिक ताकद वाढवणे.'
      },
      programs: [
        {
          icon: '🥋',
          name: {
            en: 'Lathi Kathi Martial Art',
            mr: 'लाठी काठी पारंपारिक कला'
          },
          detail: {
            en: 'Traditional Lathi Kathi training builds physical agility, self-defense awareness, core strength, and disciplined body control rooted in Indian heritage.',
            mr: 'पारंपारिक लाठी काठी प्रशिक्षण आपल्या भारतीय संस्कृतीशी जोडलेले असून, ते मुलांमध्ये शारीरिक चपळता, स्वसंरक्षण, मुख्य ताकद आणि शिस्तबद्ध नियंत्रण विकसित करते.'
          }
        },
        {
          icon: '🧘',
          name: {
            en: 'Rhythmic Yoga & Brain Gym',
            mr: 'योग आणि ब्रेन जिम'
          },
          detail: {
            en: 'Daily breathing sequences and yoga postures calm the nervous system, improve posture, coordination and release stress — setting children up for focused learning.',
            mr: 'नियमित प्राणायाम आणि योगासने मज्जासंस्थेला शांत करतात, शरीराची ठेवण आणि समन्वय सुधारतात, तसेच ताणतणाव दूर करून मुलांना अभ्यासासाठी सज्ज करतात.'
          }
        }
      ]
    },
    logic: {
      icon: '💡',
      color: '#4D96FF',
      title: {
        en: 'Critical Logic & Science',
        mr: 'तार्किक तर्क आणि विज्ञान'
      },
      desc: {
        en: 'Building tactical problem solving, active scientific inquiry, and analytical reasoning — preparing children to ask "why" and find real answers.',
        mr: 'मुलांमध्ये तार्किक विचारसरणी, वैज्ञानिक जिज्ञासा आणि विश्लेषणात्मक विचार करण्याची क्षमता विकसित करणे - ज्यामुळे ते स्वतः प्रश्न विचारून उत्तरे शोधू शकतील.'
      },
      programs: [
        {
          icon: '🔬',
          name: {
            en: 'Practical Science Streams',
            mr: 'प्रात्यक्षिक विज्ञान वर्ग'
          },
          detail: {
            en: 'Activity-based exploration of cause-and-effect, basic chemistry, nature observation, and structured reasoning to nurture young scientific thinkers.',
            mr: 'मुलांमधील वैज्ञानिक विचारसरणीला वाव देण्यासाठी कार्य-कारण भाव, मूलभूत रसायनशास्त्र प्रयोग, निसर्ग निरीक्षण आणि तार्किक विज्ञानाचे उपक्रम.'
          }
        },
        {
          icon: '🧩',
          name: {
            en: 'Kreedo Problem Solving',
            mr: 'क्रीडो समस्या निवारण खेळ'
          },
          detail: {
            en: 'Material-based sorting, sequencing, and pattern games build logical deduction skills far before formal schooling concepts are introduced.',
            mr: 'विविध साहित्याद्वारे वर्गीकरण, क्रमवारी आणि पॅटर्न सोडवण्याचे खेळ, जे औपचारिक शिक्षणापूर्वीच मुलांमध्ये तर्कशास्त्र कौशल्य विकसित करतात.'
          }
        }
      ]
    },
    creativity: {
      icon: '🎨',
      color: '#FF6B9D',
      title: {
        en: 'Creativity & Expression',
        mr: 'सर्जनशीलता आणि अभिव्यक्ती'
      },
      desc: {
        en: 'Unleashing imagination through art, music, storytelling, and open-ended play — nurturing the Creative Quotient (CQ) every child possesses.',
        mr: 'कला, संगीत, गोष्टी आणि मोकळ्या खेळांद्वारे मुलांच्या कल्पनाशक्तीला वाव देणे - जेणेकरून त्यांची सर्जनशील बुद्धिमत्ता (CQ) विकसित होईल.'
      },
      programs: [
        {
          icon: '🎵',
          name: {
            en: 'Rhythmic & Cultural Activities',
            mr: 'सांस्कृतिक आणि संगीत उपक्रम'
          },
          detail: {
            en: 'Dance, drawing, clay modelling, and group storytelling sessions allow children to express feelings, develop fine motor skills, and build creative confidence.',
            mr: 'नृत्य, चित्रकला, मातीकाम आणि गट गोष्टींच्या सत्रांमुळे मुले आपल्या भावना व्यक्त करायला शिकतात, त्यांचे स्नायू मजबूत होतात आणि आत्मविश्वास वाढतो.'
          }
        },
        {
          icon: '🎠',
          name: {
            en: 'Open Play & Exploration',
            mr: 'मुक्त खेळ आणि शोध'
          },
          detail: {
            en: 'Unstructured play in our safe indoor and outdoor play areas gives children freedom to invent, experiment and develop imaginative thinking independently.',
            mr: 'शाळेच्या सुरक्षित इनडोअर आणि मैदानी खेळाच्या जागेत मुले स्वतःचे नवीन खेळ शोधतात, प्रयोग करतात आणि कल्पकतेने विचार करायला शिकतात.'
          }
        }
      ]
    },
    values: {
      icon: '🕉️',
      color: '#9B5DE5',
      title: {
        en: 'Values & Cultural Roots',
        mr: 'नैतिक आणि सांस्कृतिक मूल्ये'
      },
      desc: {
        en: 'Grounding every child in Indian cultural heritage, moral values, and spiritual awareness alongside modern academics — the Spiritual Quotient (SQ).',
        mr: 'आधुनिक शिक्षणासोबतच मुलांमध्ये भारतीय सांस्कृतिक वारसा, उच्च नैतिक मूल्ये आणि आध्यात्मिक जाणीव रुजवणे - म्हणजेच आध्यात्मिक बुद्धिमत्ता (SQ).'
      },
      programs: [
        {
          icon: '🙏',
          name: {
            en: 'Sanskrit Shloka Chanting',
            mr: 'संस्कृत श्लोक पठण'
          },
          detail: {
            en: 'Morning assemblies include rhythmic Sanskrit chanting that builds focus, phonological awareness, cultural pride, and a peaceful start to the school day.',
            mr: 'सकाळच्या परिपाठातील लयबद्ध संस्कृत श्लोक पठणामुळे मुलांचे लक्ष केंद्रित होते, उच्चार स्पष्ट होतात आणि दिवसाची सुरुवात प्रसन्न होते.'
          }
        },
        {
          icon: '⭐',
          name: {
            en: 'Moral & Value Education',
            mr: 'नैतिक आणि मूल्य शिक्षण'
          },
          detail: {
            en: 'Stories, assembly sessions and teacher-guided discussions on kindness, honesty, respect, and responsibility build a strong moral compass in early years.',
            mr: 'दयाळूपणा, प्रामाणिकपणा, आदर आणि जबाबदारी या विषयांवरील गोष्टी व चर्चांद्वारे बालवयातच मुलांमध्ये भक्कम नैतिक पाया रचला जातो.'
          }
        }
      ]
    }
  };

  // Store original parent (the grid layout) for desktop restore
  const detailPanel = document.getElementById('skill-detail-panel');
  const originalParent = detailPanel ? detailPanel.parentElement : null;

  traitCards.forEach(card => {
    card.addEventListener('click', () => {
      const trait = card.getAttribute('data-trait');
      const data = traitData[trait];
      if (!data) return;

      // Update active card state
      traitCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');

      const titleText = data.title[currentLanguage] || data.title['en'];
      const descText = data.desc[currentLanguage] || data.desc['en'];

      // Build program cards HTML using emoji icons in active language
      const programsHTML = data.programs.map(p => {
        const pName = p.name[currentLanguage] || p.name['en'];
        const pDetail = p.detail[currentLanguage] || p.detail['en'];
        return `
          <div class="hss-skill-program-card">
            <div class="hss-skill-program-icon" style="background:${data.color}22; color:${data.color}; font-size:1.5rem;">${p.icon}</div>
            <div>
              <h5>${pName}</h5>
              <p>${pDetail}</p>
            </div>
          </div>
        `;
      }).join('');

      // Inject content
      detailIcon.textContent = data.icon;
      detailIcon.style.background = data.color + '22';
      detailIcon.style.color = data.color;
      detailTitle.textContent = titleText;
      detailTitle.style.color = data.color;
      detailDesc.textContent = descText;
      programsGrid.innerHTML = programsHTML;

      // Show detail panel — hide placeholder, show content
      if (placeholder) placeholder.style.display = 'none';
      detailContent.style.display = 'flex';
      detailContent.style.flexDirection = 'column';
      detailContent.style.gap = '24px';

      // MOBILE: Move the detail panel to sit right after the clicked card
      if (detailPanel && window.innerWidth <= 991) {
        // Insert panel immediately after the clicked card inside traits panel
        card.after(detailPanel);
        detailPanel.style.marginTop = '12px';
        detailPanel.style.marginBottom = '4px';
      } else if (detailPanel && originalParent && detailPanel.parentElement !== originalParent) {
        // DESKTOP: restore to original grid position if it was moved
        originalParent.appendChild(detailPanel);
        detailPanel.style.marginTop = '';
        detailPanel.style.marginBottom = '';
      }

      // Animate in with GSAP — only animate the inner content, keeping the parent static
      if (typeof gsap !== 'undefined') {
        gsap.fromTo(detailContent,
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out', clearProps: 'transform' }
        );
        const pcards = detailContent.querySelectorAll('.hss-skill-program-card');
        gsap.fromTo(pcards,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out', stagger: 0.1, delay: 0.2, clearProps: 'transform' }
        );
      }
    });
  });

  // Populate first card on page load
  const activeTrait = document.querySelector('.hss-trait-card.active');
  if (activeTrait) {
    activeTrait.click();
  }
}

// 30. "BRAIN GYM" 10-SECOND MENTAL MATH MICRO-GAME ENGINE
function initMentalMathGame() {
  const startBtn = document.getElementById('start-game-btn');
  const submitBtn = document.getElementById('submit-game-btn');
  const retryBtn = document.getElementById('retry-game-btn');
  const quickRestartBtn = document.getElementById('quick-restart-game-btn');
  const inputRetryBtn = document.getElementById('input-retry-game-btn');
  const countdownBox = document.getElementById('game-countdown-box');
  
  const startPanel = document.querySelector('.hss-game-start-panel');
  const numbersPanel = document.getElementById('game-numbers-panel');
  const inputPanel = document.getElementById('game-input-panel');
  const resultPanel = document.getElementById('game-result-panel');
  
  const flashingNum = document.getElementById('flashing-number-box');
  const answerInput = document.getElementById('game-user-answer');
  const resultMessage = document.getElementById('game-result-message');
  const resultSub = document.getElementById('game-result-sub');

  if (!startBtn || !submitBtn || !retryBtn) return;

  // --- Random question generator ---
  let sequence = [];
  let correctResult = 0;
  let countdownTimer = null;
  let countdownStarted = false;

  function generateQuestion() {
    // Pick 3 or 4 numbers randomly
    const count = Math.random() < 0.5 ? 3 : 4;
    const nums = [];
    // First number is always a positive start (10–30)
    nums.push(Math.floor(Math.random() * 21) + 10);
    // Remaining numbers are -15 to +25, avoiding zero
    for (let i = 1; i < count; i++) {
      let n = 0;
      while (n === 0) {
        n = Math.floor(Math.random() * 41) - 15; // -15 to +25
      }
      nums.push(n);
    }
    // Compute the correct sum
    sequence = nums;
    correctResult = nums.reduce((acc, n) => acc + n, 0);
  }

  function startRound() {
    cancelCountdown();
    generateQuestion();

    // Phase 1: Hide start, show flashing board
    startPanel.classList.add('hidden');
    resultPanel.classList.add('hidden');
    inputPanel.classList.add('hidden');
    numbersPanel.classList.remove('hidden');
    answerInput.value = '';

    let currentStep = 0;

    function flashNextNumber() {
      if (currentStep < sequence.length) {
        const num = sequence[currentStep];
        flashingNum.textContent = num > 0 ? `+${num}` : `${num}`;
        flashingNum.classList.add('show');

        setTimeout(() => {
          flashingNum.classList.remove('show');
          currentStep++;
          setTimeout(flashNextNumber, 400); // interval pause between numbers
        }, 800);
      } else {
        // Phase 2: Show input box
        numbersPanel.classList.add('hidden');
        inputPanel.classList.remove('hidden');
        // Auto-focus the input so user can type immediately
        answerInput.focus();
      }
    }

    setTimeout(flashNextNumber, 500);
  }

  function startAutoCountdown() {
    cancelCountdown();
    let secondsLeft = 10;
    
    // Initial display text matching current language
    if (countdownBox) {
      const startingText = currentLanguage === 'en' ? "Challenge starting in" : "आव्हान सुरू होत आहे";
      countdownBox.innerHTML = `<i class="fa-solid fa-hourglass-half fa-spin"></i> ${startingText} ${secondsLeft}s...`;
      countdownBox.classList.add('active');
    }
    
    countdownTimer = setInterval(() => {
      secondsLeft--;
      const currentStartingText = currentLanguage === 'en' ? "Challenge starting in" : "आव्हान सुरू होत आहे";
      
      if (secondsLeft > 0) {
        if (countdownBox) {
          countdownBox.innerHTML = `<i class="fa-solid fa-hourglass-half fa-spin"></i> ${currentStartingText} ${secondsLeft}s...`;
        }
      } else {
        clearInterval(countdownTimer);
        if (countdownBox) {
          countdownBox.innerHTML = '';
          countdownBox.classList.remove('active');
        }
        startRound();
      }
    }, 1200);
  }

  function cancelCountdown() {
    if (countdownTimer) {
      clearInterval(countdownTimer);
      countdownTimer = null;
    }
    if (countdownBox) {
      countdownBox.innerHTML = '';
      countdownBox.classList.remove('active');
    }
  }

  // Manual click on start button triggers immediately and cancels countdown
  startBtn.addEventListener('click', () => {
    cancelCountdown();
    startRound();
  });

  // IntersectionObserver to auto-start countdown when section comes into view
  const gameSection = document.getElementById('brain-gym-game');
  if (gameSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !countdownStarted) {
          countdownStarted = true;
          startAutoCountdown();
          observer.unobserve(gameSection);
        }
      });
    }, { threshold: 0.25 }); // 25% of the section is visible
    observer.observe(gameSection);
  }

  // Allow pressing Enter to submit
  answerInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') submitBtn.click();
  });

  submitBtn.addEventListener('click', () => {
    const userAnswer = parseInt(answerInput.value, 10);
    if (isNaN(userAnswer)) return; // don't submit if empty
    inputPanel.classList.add('hidden');
    resultPanel.classList.remove('hidden');

    if (userAnswer === correctResult) {
      resultMessage.textContent = textContent[currentLanguage]['game_msg_success'] || "🎉 Brilliant! Correct Answer!";
      resultSub.textContent = textContent[currentLanguage]['game_sub_success'] || "You processed numbers with perfect precision. Just like our trained abacus students!";
      
      // Trigger confetti burst on success!
      const canvas = document.getElementById('confetti-canvas');
      if (canvas) {
        const fab = document.getElementById('call-cta-fab');
        if (fab) fab.click(); // Reuse confetti handler
      }
    } else {
      resultMessage.textContent = textContent[currentLanguage]['game_msg_fail'] || "❌ Oops, that's not it!";
      const failTemplate = textContent[currentLanguage]['game_sub_fail'] || "The correct final balance was {correct}. Abacus training helps kids map and see these numbers instantly!";
      resultSub.textContent = failTemplate.replace('{correct}', correctResult);
    }
  });

  retryBtn.addEventListener('click', () => {
    resultPanel.classList.add('hidden');
    startPanel.classList.remove('hidden');
    // Restart automatic prep countdown when they click Try Again
    startAutoCountdown();
  });

  // Quick Restart button directly fires a new round immediately bypassing countdown
  if (quickRestartBtn) {
    quickRestartBtn.addEventListener('click', () => {
      cancelCountdown();
      resultPanel.classList.add('hidden');
      startRound();
    });
  }

  // Quick Retry button below the answer input box
  if (inputRetryBtn) {
    inputRetryBtn.addEventListener('click', () => {
      cancelCountdown();
      inputPanel.classList.add('hidden');
      startPanel.classList.remove('hidden');
      startAutoCountdown();
    });
  }
}


// 31. CAMPUS PHOTO GALLERY FILTER COMPONENT
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.hss-gallery-btn');
  const galleryCards = document.querySelectorAll('.gallery-card');
  if (filterBtns.length === 0 || galleryCards.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filterValue = btn.getAttribute('data-filter');

      // Update active button state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter with smooth GSAP transition animations
      const cardsToHide = [];
      const cardsToShow = [];

      galleryCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          cardsToShow.push(card);
        } else {
          cardsToHide.push(card);
        }
      });

      // Animate out cards that do not match the filter
      if (cardsToHide.length > 0) {
        gsap.to(cardsToHide, {
          opacity: 0,
          scale: 0.8,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            cardsToHide.forEach(card => card.classList.add('filtered-out'));
            // Refresh ScrollTrigger since page geometry changes
            if (typeof ScrollTrigger !== 'undefined') {
              ScrollTrigger.refresh();
            }
          }
        });
      }

      // Prepare cards to show by putting them back into document flow
      cardsToShow.forEach(card => {
        card.classList.remove('filtered-out');
      });

      // Animate matching cards in with stagger
      if (cardsToShow.length > 0) {
        gsap.fromTo(cardsToShow, 
          { opacity: 0, scale: 0.8 },
          { 
            opacity: 1, 
            scale: 1, 
            duration: 0.4, 
            stagger: 0.05, 
            ease: "power2.out", 
            delay: cardsToHide.length > 0 ? 0.2 : 0,
            onComplete: () => {
              if (typeof ScrollTrigger !== 'undefined') {
                ScrollTrigger.refresh();
              }
            }
          }
        );
      }
    });
  });
}

// 32. FREQUENTLY ASKED QUESTIONS (FAQ) ACCORDION COMPONENT
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.hss-faq-item');
  if (faqItems.length === 0) return;

  faqItems.forEach(item => {
    const trigger = item.querySelector('.hss-faq-trigger');
    const content = item.querySelector('.hss-faq-content');

    if (!trigger || !content) return;

    // Accessibility attributes for semantic SEO & screen readers
    trigger.setAttribute('aria-expanded', 'false');
    const panelId = `faq-panel-${Math.random().toString(36).substr(2, 9)}`;
    content.setAttribute('id', panelId);
    trigger.setAttribute('aria-controls', panelId);

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other accordion panels for clean accordion behavior
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
          const otherTrigger = otherItem.querySelector('.hss-faq-trigger');
          const otherContent = otherItem.querySelector('.hss-faq-content');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          if (otherContent) {
            otherContent.style.maxHeight = '0px';
          }
        }
      });

      // Toggle current panel
      if (isActive) {
        item.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = '0px';
      } else {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
      }

      // Refresh ScrollTrigger to update trigger offset calculations
      setTimeout(() => {
        if (typeof ScrollTrigger !== 'undefined') {
          ScrollTrigger.refresh();
        }
      }, 400); // After CSS transition completes
    });
  });
}

// 33. COLORFUL DYNAMIC BACKGROUND PARALLAX DECORATIONS
function initBackgroundParallax() {
  const elements = document.querySelectorAll('.hss-floating-bg-element');
  if (elements.length === 0 || window.matchMedia("(pointer: coarse)").matches) return;

  window.addEventListener('mousemove', (e) => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    
    // Normalize cursor position around center (-0.5 to 0.5)
    const mouseX = (e.clientX / w - 0.5);
    const mouseY = (e.clientY / h - 0.5);

    elements.forEach(el => {
      // Depth parameter determines magnitude of movement
      const depth = parseFloat(el.getAttribute('data-depth') || '25');
      const shiftX = mouseX * depth;
      const shiftY = mouseY * depth;

      // Animate using GSAP for optimized 60fps hardware acceleration
      gsap.to(el, {
        x: shiftX,
        y: shiftY,
        duration: 0.8,
        ease: "power2.out",
        overwrite: "auto"
      });
    });
  });
}

// 34. INTERACTIVE AMENITIES EXPLORER DASHBOARD
const amenitiesData = {
  1: {
    image: "assets/amenity_kreedo.jpeg",
    theme: "academic",
    badge: { en: "ACADEMIC", mr: "शैक्षणिक" },
    benefits: {
      en: [
        "Tactile Montessori Kits",
        "Activity-Based Pedagogy",
        "Sensory Skills Growth"
      ],
      mr: [
        "प्रात्यक्षिक क्रीडो किट्स",
        "कृती-आधारित शिक्षण",
        "संवेदी क्षमतांचा विकास"
      ]
    }
  },
  2: {
    image: "assets/amenity_holistic.jpg",
    theme: "holistic",
    badge: { en: "HOLISTIC", mr: "सर्वांगीण" },
    benefits: {
      en: [
        "IQ Logical Challenges",
        "EQ Empathy Training",
        "SQ Sanskrit Shlokas"
      ],
      mr: [
        "IQ तार्किक आव्हाने",
        "EQ भावनिक सहसंवेदना",
        "SQ संस्कृत श्लोक पठण"
      ]
    }
  },
  3: {
    image: "assets/amenity_abacus.jpeg",
    theme: "academic",
    badge: { en: "ACADEMIC", mr: "शैक्षणिक" },
    benefits: {
      en: [
        "Supermath Calculations",
        "Visual Memory Focus",
        "Speed & Concentration"
      ],
      mr: [
        "जलद गणितीय आकडेमोड",
        "तार्किक स्मरणशक्ती विकास",
        "एकाग्रता आणि वेग वाढवणे"
      ]
    }
  },
  4: {
    image: "assets/WhatsApp Image 2026-05-31 at 10.13.00 AM (2).jpeg",
    theme: "holistic",
    badge: { en: "HOLISTIC", mr: "सर्वांगीण" },
    benefits: {
      en: [
        "Naturally Lit & Airy",
        "Child-Safe Furniture",
        "Hygienic Play Spaces"
      ],
      mr: [
        "नैसर्गिक प्रकाश व खेळती हवा",
        "मुलांसाठी सुरक्षित फर्निचर",
        "स्वच्छ व सुरक्षित खेळण्याची जागा"
      ]
    }
  },
  5: {
    image: "assets/amenity_cctv.jpeg",
    theme: "safety",
    badge: { en: "SAFETY FIRST", mr: "सुरक्षितता" },
    benefits: {
      en: [
        "24/7 Passage Monitor",
        "Zero-Blindspot Cameras",
        "Instant Security Feeds"
      ],
      mr: [
        "२४/७ परिसर देखरेख",
        "अद्ययावत सीसीटीव्ही कॅमेरे",
        "तात्काळ सुरक्षा यंत्रणा"
      ]
    }
  },
  6: {
    image: "assets/amenity_van.jpg",
    theme: "safety",
    badge: { en: "SAFETY FIRST", mr: "सुरक्षितता" },
    benefits: {
      en: [
        "Verified Local Drivers",
        "Routine Pickup Zones",
        "Stress-Free Commute"
      ],
      mr: [
        "पडताळणी केलेले चालक",
        "घरापासून शाळेपर्यंत वाहतूक",
        "तणावमुक्त प्रवासाची खात्री"
      ]
    }
  },
  7: {
    image: "assets/WhatsApp Image 2026-05-31 at 10.13.00 AM (3).jpeg",
    theme: "holistic",
    badge: { en: "HOLISTIC", mr: "सर्वांगीण" },
    benefits: {
      en: [
        "Indoor Active Gym",
        "Outdoor Play Area",
        "Balance & Coordination"
      ],
      mr: [
        "इनडोअर ऍक्टिव्ह जिम",
        "सुरक्षित मैदानी क्रीडांगण",
        "शारीरिक नियंत्रण व समन्वय"
      ]
    }
  },
  8: {
    image: "assets/amenity_attention.jpeg",
    theme: "safety",
    badge: { en: "SAFETY FIRST", mr: "सुरक्षितता" },
    benefits: {
      en: [
        "Strict Teacher-Kid Ratio",
        "Individual Care Plans",
        "Progress Monitoring"
      ],
      mr: [
        "मर्यादित विद्यार्थी संख्या",
        "प्रत्येक मुलावर वैयक्तिक लक्ष",
        "नियमित प्रगती अहवाल"
      ]
    }
  },
  9: {
    image: "assets/amenity_teachers.jpg",
    theme: "academic",
    badge: { en: "ACADEMIC", mr: "शैक्षणिक" },
    benefits: {
      en: [
        "Trust Pedagogy Certified",
        "Pedagogical Workshops",
        "Affectionate Grooming"
      ],
      mr: [
        "बाल मानसशास्त्र प्रशिक्षित",
        "pedagogy कार्यशाळा प्रमाणपत्र",
        "अतिशय प्रेमाचे संगोपन"
      ]
    }
  }
};

function updateShowcaseBenefits() {
  const bulletsContainer = document.getElementById('showcase-benefits');
  if (!bulletsContainer) return;

  const data = amenitiesData[activeAmenityId];
  if (!data) return;

  // Clear and rebuild bullet list
  bulletsContainer.innerHTML = '';
  bulletsContainer.className = `hss-showcase-bullets ${data.theme}`;

  const bullets = data.benefits[currentLanguage] || data.benefits['en'];
  bullets.forEach(bullet => {
    const li = document.createElement('li');
    li.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${bullet}</span>`;
    bulletsContainer.appendChild(li);
  });
}

function initAmenitiesDashboard() {
  const tabs = document.querySelectorAll('.hss-amenity-tab');
  const card = document.getElementById('amenity-showcase-card');
  const imgElement = document.getElementById('showcase-img');
  const badgeElement = document.getElementById('showcase-theme-badge');
  const titleElement = document.getElementById('showcase-title');
  const descElement = document.getElementById('showcase-desc');

  if (tabs.length === 0 || !card) return;

  let autoShiftInterval;

  function startAutoShift() {
    stopAutoShift();
    autoShiftInterval = setInterval(() => {
      let activeIndex = -1;
      tabs.forEach((tab, index) => {
        if (tab.classList.contains('active')) {
          activeIndex = index;
        }
      });

      const nextIndex = (activeIndex + 1) % tabs.length;
      const nextTab = tabs[nextIndex];

      if (nextTab) {
        nextTab.click();
      }
    }, 5000); // Cycle every 5 seconds
  }

  function stopAutoShift() {
    if (autoShiftInterval) {
      clearInterval(autoShiftInterval);
    }
  }

  // Click handler to swap showcase contents smoothly
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Centering active tab on mobile horizontal scrolling ribbon
      const sidebar = document.querySelector('.hss-amenities-sidebar');
      if (sidebar && window.innerWidth <= 991) {
        const sidebarRect = sidebar.getBoundingClientRect();
        const tabRect = tab.getBoundingClientRect();
        const scrollLeftOffset = sidebar.scrollLeft + (tabRect.left - sidebarRect.left);
        sidebar.scrollTo({
          left: scrollLeftOffset - (sidebarRect.width / 2) + (tabRect.width / 2),
          behavior: 'smooth'
        });
      }

      // Reset auto-shift timer on user interaction
      startAutoShift();

      const amenityId = parseInt(tab.getAttribute('data-amenity'), 10);
      if (amenityId === activeAmenityId) return;

      activeAmenityId = amenityId;
      const data = amenitiesData[activeAmenityId];

      // Update sidebar tab active styling
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Morph animation using GSAP
      gsap.to(card, {
        opacity: 0,
        scale: 0.96,
        y: 10,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          // Swap image source
          if (imgElement) {
            imgElement.src = data.image;
            imgElement.alt = textContent[currentLanguage][`feat_${activeAmenityId}_title`] || "Showcase";
          }

          // Swap theme badge class & text
          if (badgeElement) {
            badgeElement.className = `hss-showcase-badge ${data.theme}`;
            badgeElement.textContent = data.badge[currentLanguage] || data.badge['en'];
          }

          // Update data-keys for title & description translation
          if (titleElement) {
            titleElement.setAttribute('data-key', `feat_${activeAmenityId}_title`);
          }
          if (descElement) {
            descElement.setAttribute('data-key', `feat_${activeAmenityId}_desc`);
          }

          // Rebuild localized benefits list
          updateShowcaseBenefits();

          // Force translation engine refresh
          updateLanguageUI();

          // Fade card back in
          gsap.to(card, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.35,
            ease: "power2.out",
            onComplete: () => {
              if (typeof ScrollTrigger !== 'undefined') {
                ScrollTrigger.refresh();
              }
            }
          });
        }
      });
    });
  });

  // Modern 3D Card Hover Depth Effect on Showcase Card
  if (!window.matchMedia("(pointer: coarse)").matches) {
    const showcasePanel = document.querySelector('.hss-amenities-showcase');
    
    showcasePanel.addEventListener('mousemove', (e) => {
      const rect = showcasePanel.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateY = ((x / rect.width) - 0.5) * 12; // max 6 deg
      const rotateX = -((y / rect.height) - 0.5) * 8; // max 4 deg

      gsap.to(card, {
        rotateY: rotateY,
        rotateX: rotateX,
        transformPerspective: 1000,
        ease: "power2.out",
        duration: 0.5,
        scale: 1.01,
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)"
      });
    });

    showcasePanel.addEventListener('mouseleave', () => {
      gsap.to(card, {
        rotateY: 0,
        rotateX: 0,
        scale: 1,
        ease: "power3.out",
        duration: 0.6,
        boxShadow: "var(--shadow-premium)"
      });
    });
  }

  // Hover pauses auto-shift rotation, mouseout resumes it
  const dashboardContainer = document.querySelector('.hss-amenities-dashboard');
  if (dashboardContainer) {
    dashboardContainer.addEventListener('mouseenter', stopAutoShift);
    dashboardContainer.addEventListener('mouseleave', startAutoShift);
  }

  // Start the automatic rotation initially
  startAutoShift();
}

// 27. HIDE-AND-SEEK MOBILE PEEKING MASCOTS
function initMobilePeekMascots() {
  if (typeof ScrollTrigger === 'undefined' || typeof gsap === 'undefined') return;

  const mascots = document.querySelectorAll('.hss-peek-mascot');
  if (mascots.length === 0) return;

  mascots.forEach(mascot => {
    const parentSection = mascot.closest('section');
    if (!parentSection) return;

    const isLeft = mascot.classList.contains('peek-left');

    // Assign staggered organic ambient loop speeds & delays to the inner wrapper
    const inner = mascot.querySelector('.hss-peek-inner');
    if (inner) {
      inner.classList.add(isLeft ? 'loop-left' : 'loop-right');
      const randomDuration = 6 + Math.random() * 5; // between 6s and 11s loop
      const randomDelay = Math.random() * -10; // negative delay to start immediately at random phase
      inner.style.animationDuration = `${randomDuration}s`;
      inner.style.animationDelay = `${randomDelay}s`;
    }
    
    // ScrollTrigger to add/remove visible class when section is inside the viewport
    ScrollTrigger.create({
      trigger: parentSection,
      start: "top 90%",
      end: "bottom 10%",
      onEnter: () => mascot.classList.add('visible'),
      onLeave: () => mascot.classList.remove('visible'),
      onEnterBack: () => mascot.classList.add('visible'),
      onLeaveBack: () => mascot.classList.remove('visible'),
      invalidateOnRefresh: true
    });

    // Tap Interaction event handler
    const mascotType = mascot.getAttribute('data-mascot');
    
    // Add both click and touchstart for instant mobile feedback
    const handleTap = (e) => {
      // Prevent double triggers
      e.preventDefault();
      
      // Prevent running if already animating
      if (gsap.isAnimating(mascot)) return;

      const tl = gsap.timeline();
      
      switch (mascotType) {
        case 'sun':
          // Elastic 360deg rotation spin
          tl.to(mascot, { rotation: "+=360", duration: 0.8, ease: "back.out(1.5)" });
          break;
        case 'butterfly':
          // Flutter wings and minor hover wiggle
          tl.to(mascot, { scaleX: 0.25, x: isLeft ? 26 : -26, duration: 0.08, repeat: 3, yoyo: true })
            .to(mascot, { scaleX: 1.0, x: isLeft ? 18 : -18, y: "-=10", duration: 0.15 })
            .to(mascot, { y: 0, duration: 0.35, ease: "bounce.out" });
          break;
        case 'chick':
          // Cute little squeaky hop
          tl.to(mascot, { y: "-=15", scaleY: 1.25, scaleX: 0.85, duration: 0.2, ease: "power1.out" })
            .to(mascot, { y: 0, scaleY: 0.85, scaleX: 1.15, duration: 0.15, ease: "power1.in" })
            .to(mascot, { scaleY: 1.0, scaleX: 1.0, duration: 0.25, ease: "elastic.out(1.2, 0.4)" });
          break;
        case 'panda':
          // Left-right side wiggle dance
          tl.to(mascot, { rotation: -12, x: isLeft ? 22 : -22, duration: 0.15, ease: "power1.out" })
            .to(mascot, { rotation: 12, x: isLeft ? 14 : -14, duration: 0.2, ease: "power1.inOut" })
            .to(mascot, { rotation: 0, x: isLeft ? 18 : -18, duration: 0.15, ease: "back.out(1.2)" });
          break;
        case 'snail':
          // Crawls forward slowly and pulls back
          tl.to(mascot, { x: isLeft ? 32 : -32, skewX: isLeft ? -10 : 10, duration: 0.5, ease: "power1.inOut" })
            .to(mascot, { x: isLeft ? 18 : -18, skewX: 0, duration: 0.4, ease: "power2.out" });
          break;
        case 'squirrel':
          // Bounce and 360 flip
          tl.to(mascot, { y: "-=25", scale: 1.2, duration: 0.2, ease: "power1.out" })
            .to(mascot, { rotation: isLeft ? 360 : -360, duration: 0.4, ease: "none" })
            .to(mascot, { y: 0, scale: 1.0, duration: 0.2, ease: "power1.in" });
          break;
        case 'giraffe':
          // Elastic neck stretch
          tl.to(mascot, { scaleY: 1.4, scaleX: 0.9, y: "-=8", duration: 0.2, ease: "power1.out" })
            .to(mascot, { scaleY: 1.0, scaleX: 1.0, y: 0, duration: 0.5, ease: "elastic.out(1.2, 0.4)" });
          break;
        case 'elephant':
          // Trunk spraying squash
          tl.to(mascot, { scaleY: 0.8, scaleX: 1.2, duration: 0.15 })
            .to(mascot, { scaleY: 1.25, scaleX: 0.9, y: "-=15", duration: 0.25, ease: "power1.out" })
            .to(mascot, { scaleY: 1.0, scaleX: 1.0, y: 0, duration: 0.4, ease: "elastic.out(1.1, 0.4)" });
          break;
        case 'koala':
          // Side-to-side lazy swing
          tl.to(mascot, { rotation: -15, scale: 1.1, duration: 0.2 })
            .to(mascot, { rotation: 15, duration: 0.25 })
            .to(mascot, { rotation: 0, scale: 1.0, duration: 0.2, ease: "back.out" });
          break;
        case 'owl':
          // Wise owl head tilt back and forth
          tl.to(mascot, { rotation: -18, duration: 0.15, ease: "power1.out" })
            .to(mascot, { rotation: 18, duration: 0.25, ease: "power1.inOut" })
            .to(mascot, { rotation: 0, duration: 0.2, ease: "back.out(1.2)" });
          break;
        case 'penguin':
          // Wobbly waddle slide
          tl.to(mascot, { skewX: -12, rotation: -8, duration: 0.18 })
            .to(mascot, { skewX: 12, rotation: 8, duration: 0.18 })
            .to(mascot, { skewX: 0, rotation: 0, duration: 0.2, ease: "elastic.out" });
          break;
        case 'duck':
          // Wing quacking wiggle
          tl.to(mascot, { scaleY: 1.3, scaleX: 0.8, duration: 0.12 })
            .to(mascot, { scaleY: 0.9, scaleX: 1.2, duration: 0.12 })
            .to(mascot, { scaleY: 1.0, scaleX: 1.0, duration: 0.2, ease: "back.out" });
          break;
        case 'bee':
          // Rapid buzzing shake & scale
          tl.to(mascot, { scale: 1.25, x: isLeft ? "+=4" : "-=4", duration: 0.05, repeat: 5, yoyo: true })
            .to(mascot, { scale: 1, x: isLeft ? 18 : -18, duration: 0.1 });
          break;
        case 'ladybug':
          // Creeps upward slightly
          tl.to(mascot, { y: "-=20", rotation: -10, duration: 0.3, ease: "power1.out" })
            .to(mascot, { y: 0, rotation: 0, duration: 0.25, ease: "power1.in" });
          break;
        case 'caterpillar':
          // Inching worm squeeze and stretch
          tl.to(mascot, { scaleX: 0.7, x: isLeft ? 24 : -24, duration: 0.2 })
            .to(mascot, { scaleX: 1.3, x: isLeft ? 12 : -12, duration: 0.15 })
            .to(mascot, { scaleX: 1.0, x: isLeft ? 18 : -18, duration: 0.2, ease: "elastic.out" });
          break;
        case 'parrot':
          // Staggered bobbing leap
          tl.to(mascot, { y: "-=25", rotation: -10, duration: 0.25, ease: "power2.out" })
            .to(mascot, { y: 0, rotation: 0, duration: 0.4, ease: "bounce.out" });
          break;
        case 'dog':
          // Wag tail and bounce
          tl.to(mascot, { rotation: 12, y: "-=12", duration: 0.15, repeat: 3, yoyo: true })
            .to(mascot, { rotation: 0, y: 0, duration: 0.2 });
          break;
        case 'cat':
          // Elastic cat stretch
          tl.to(mascot, { scaleY: 1.35, scaleX: 0.8, y: "-=6", duration: 0.22, ease: "power2.out" })
            .to(mascot, { scaleY: 1.0, scaleX: 1.0, y: 0, duration: 0.4, ease: "elastic.out(1.1, 0.4)" });
          break;
        case 'monkey':
          // Swing side-to-side (anchored from top-ish)
          tl.to(mascot, { rotation: -25, transformOrigin: "top center", duration: 0.2, ease: "power1.out" })
            .to(mascot, { rotation: 25, duration: 0.3, ease: "power1.inOut" })
            .to(mascot, { rotation: 0, duration: 0.25, ease: "back.out(1.2)" });
          break;
        case 'tiger':
          // Springing roar bounce
          tl.to(mascot, { scale: 1.35, x: isLeft ? 26 : -26, duration: 0.18, ease: "power2.out" })
            .to(mascot, { scale: 1.0, x: isLeft ? 18 : -18, duration: 0.4, ease: "elastic.out" });
          break;
        case 'rabbit':
          // Elegant tall leap
          tl.to(mascot, { y: "-=30", scaleY: 1.3, scaleX: 0.85, duration: 0.25, ease: "power2.out" })
            .to(mascot, { y: 0, scaleY: 1.0, scaleX: 1.0, duration: 0.35, ease: "bounce.out" });
          break;
        case 'robot':
          // Pulse shake with glowing drop shadow
          tl.to(mascot, { scale: 1.3, filter: "drop-shadow(0 0 12px var(--accent-gold))", duration: 0.15 })
            .to(mascot, { scale: 0.9, duration: 0.1 })
            .to(mascot, { scale: 1, filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.16))", duration: 0.25, ease: "elastic.out(1.2, 0.5)" });
          break;
        case 'alien':
          // Teleports (fades and bounces back)
          tl.to(mascot, { opacity: 0, scale: 0.2, duration: 0.25, ease: "power2.in" })
            .to(mascot, { opacity: 1, scale: 1.2, duration: 0.2, ease: "power2.out" })
            .to(mascot, { scale: 1.0, duration: 0.2, ease: "power1.out" });
          break;
        case 'rocket':
          // Launch off and land
          tl.to(mascot, { y: "-=45", scale: 1.25, duration: 0.3, ease: "power2.out" })
            .to(mascot, { y: 0, scale: 1.0, duration: 0.5, ease: "bounce.out" });
          break;
        case 'frog':
          // Deep squeeze and vertical jump bounce
          tl.to(mascot, { scaleY: 0.6, scaleX: 1.3, duration: 0.15 })
            .to(mascot, { scaleY: 1.3, scaleX: 0.8, y: "-=30", duration: 0.25, ease: "power2.out" })
            .to(mascot, { scaleY: 0.9, scaleX: 1.1, y: 0, duration: 0.2, ease: "power2.in" })
            .to(mascot, { scaleY: 1.0, scaleX: 1.0, duration: 0.3, ease: "elastic.out(1.2, 0.4)" });
          break;
        case 'fish':
          // Swimming loop wave path
          tl.to(mascot, { y: "-=12", rotation: -20, duration: 0.2 })
            .to(mascot, { y: "+=12", rotation: 20, duration: 0.25 })
            .to(mascot, { y: 0, rotation: 0, duration: 0.15 });
          break;
        case 'turtle':
          // Hide in shell
          tl.to(mascot, { scale: 0.45, duration: 0.18, ease: "power2.in" })
            .to(mascot, { scale: 1.1, delay: 0.2, duration: 0.22, ease: "back.out" })
            .to(mascot, { scale: 1.0, duration: 0.1 });
          break;
        case 'fox':
          // Ears perk wiggle
          tl.to(mascot, { skewX: -10, scaleY: 1.1, duration: 0.15 })
            .to(mascot, { skewX: 10, duration: 0.15 })
            .to(mascot, { skewX: 0, scaleY: 1, duration: 0.2, ease: "back.out" });
          break;
        case 'unicorn':
          // Prances elegantly
          tl.to(mascot, { y: "-=22", skewY: -10, scale: 1.2, duration: 0.25, ease: "power2.out" })
            .to(mascot, { y: 0, skewY: 0, scale: 1.0, duration: 0.35, ease: "elastic.out" });
          break;
        case 'dino':
          // Tail whip snap rotation
          tl.to(mascot, { rotation: -24, duration: 0.15, ease: "power1.out" })
            .to(mascot, { rotation: 0, duration: 0.3, ease: "elastic.out(1.3, 0.4)" });
          break;
        case 'lion':
          // Roar pulse (scale swell)
          tl.to(mascot, { scale: 1.45, duration: 0.2, ease: "back.out(1.7)" })
            .to(mascot, { scale: 1.0, duration: 0.45, ease: "elastic.out(1, 0.4)" });
          break;
        case 'teddy':
          // Teddy snug squeeze
          tl.to(mascot, { scaleX: 0.75, scaleY: 0.75, duration: 0.15, ease: "power1.out" })
            .to(mascot, { scaleX: 1.0, scaleY: 1.0, duration: 0.4, ease: "elastic.out" });
          break;
        case 'deer':
          // Elegant high leap
          tl.to(mascot, { y: "-=28", x: isLeft ? "+=15" : "-=15", duration: 0.24, ease: "power2.out" })
            .to(mascot, { y: 0, x: isLeft ? 18 : -18, duration: 0.35, ease: "bounce.out" });
          break;
        case 'dolphin':
          // Swim hop
          tl.to(mascot, { y: "-=20", rotation: isLeft ? 15 : -15, duration: 0.25, ease: "power1.out" })
            .to(mascot, { y: 0, rotation: 0, duration: 0.35, ease: "bounce.out" });
          break;
        case 'koala_baby':
          // Baby koala wobbly roll
          tl.to(mascot, { rotation: -12, scale: 1.15, duration: 0.2 })
            .to(mascot, { rotation: 12, duration: 0.25 })
            .to(mascot, { rotation: 0, scale: 1.0, duration: 0.2, ease: "back.out" });
          break;
        case 'mouse':
          // Small squeak rapid wiggle
          tl.to(mascot, { scale: 1.25, x: isLeft ? "+=3" : "-=3", duration: 0.04, repeat: 4, yoyo: true })
            .to(mascot, { scale: 1.0, x: isLeft ? 18 : -18, duration: 0.1 });
          break;
        case 'crab':
          // Lateral crawl shake
          tl.to(mascot, { x: isLeft ? 32 : -32, duration: 0.2 })
            .to(mascot, { x: isLeft ? 8 : -8, duration: 0.2 })
            .to(mascot, { x: isLeft ? 18 : -18, duration: 0.15, ease: "back.out" });
          break;
        case 'whale':
          // Slow scale swell
          tl.to(mascot, { scale: 1.35, duration: 0.4, ease: "power1.out" })
            .to(mascot, { scale: 1.0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
          break;
        case 'kangaroo':
          // High elegant hops
          tl.to(mascot, { y: "-=25", scaleY: 1.2, duration: 0.22, ease: "power2.out" })
            .to(mascot, { y: 0, scaleY: 1.0, duration: 0.35, ease: "bounce.out" });
          break;
        case 'octopus':
          // Tentacle wave loop
          tl.to(mascot, { skewX: -15, skewY: 5, duration: 0.22 })
            .to(mascot, { skewX: 15, skewY: -5, duration: 0.25 })
            .to(mascot, { skewX: 0, skewY: 0, duration: 0.18, ease: "back.out" });
          break;
        case 'hamster':
          // Cute hamster cheek stretch
          tl.to(mascot, { scaleX: 1.35, scaleY: 0.8, duration: 0.15 })
            .to(mascot, { scaleX: 0.8, scaleY: 1.35, duration: 0.15 })
            .to(mascot, { scaleX: 1.0, scaleY: 1.0, duration: 0.25, ease: "elastic.out" });
          break;
        case 'dove':
          // Fluttering leap
          tl.to(mascot, { y: "-=22", scaleX: 0.3, duration: 0.08, repeat: 3, yoyo: true })
            .to(mascot, { y: 0, scaleX: 1.0, duration: 0.3, ease: "bounce.out" });
          break;
        case 'sheep':
          // Gentle bouncy hop
          tl.to(mascot, { y: "-=12", scaleY: 1.15, duration: 0.18, ease: "power1.out" })
            .to(mascot, { y: 0, scaleY: 1.0, duration: 0.22, ease: "bounce.out" });
          break;
        case 'squid':
          // Jet propel up
          tl.to(mascot, { y: "-=30", scaleY: 1.4, scaleX: 0.7, duration: 0.2, ease: "power2.out" })
            .to(mascot, { y: 0, scaleY: 1.0, scaleX: 1.0, duration: 0.45, ease: "elastic.out(1, 0.4)" });
          break;
        case 'sloth':
          // Super slow head turn
          tl.to(mascot, { rotation: -10, duration: 0.6, ease: "power1.inOut" })
            .to(mascot, { rotation: 10, duration: 0.7, ease: "power1.inOut" })
            .to(mascot, { rotation: 0, duration: 0.5, ease: "power1.inOut" });
          break;
      }
    };

    mascot.addEventListener('click', handleTap);
    mascot.addEventListener('touchstart', handleTap, { passive: false });
  });
}
