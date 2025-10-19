document.addEventListener('DOMContentLoaded', function() {
  // Language dictionaries
  const languages = {
    'de': {
      'nav.home': 'Startseite',
      'nav.features': 'Funktionen',
      'nav.screenshots': 'Screenshots',
      'nav.journey': 'Reflexionsreise',
      'nav.download': 'Download',
      'nav.contact': 'Kontakt',
      'hero.subtitle': 'Dein Begleiter für tägliche Reflexion',
      'hero.description': 'Reflektiere über deinen Tag, verfolge deine Stimmung und entwickle eine Gewohnheit der Selbstreflexion mit Reflectric.',
      'hero.download': 'App herunterladen',
      'hero.explore': 'Funktionen erkunden',
      'features.title': 'Hauptfunktionen',
      'features.daily.title': 'Tägliche Reflexionen',
      'features.daily.desc': 'Starte und beende deinen Tag mit geführten Reflexionen. Morgens: Plane deinen Tag. Abends: Reflektiere über Erlebtes.',
      'features.periodic.title': 'Periodische Reflexionen',
      'features.periodic.desc': 'Wöchentliche, monatliche und vierteljährliche Rückblicke helfen dir, das große Ganze zu sehen und deine Entwicklung zu verfolgen.',
      'features.mood.title': 'Stimmungsverfolgung',
      'features.mood.desc': 'Tracke deine tägliche Stimmung und erkenne Muster. Verstehe, was dich glücklich macht und was dich herunterzieht.',
      'features.streak.title': 'Streak-System',
      'features.streak.desc': 'Baue eine Gewohnheit auf! Verfolge deine Reflexions-Streaks und bleibe motiviert durch tägliche Erfolge.',
      'features.stats.title': 'Statistiken & Insights',
      'features.stats.desc': 'Erhalte detaillierte Einblicke in deine Reflexionsgewohnheiten, Stimmungstrends und persönliche Entwicklung.',
      'features.sync.title': 'iCloud Synchronisation',
      'features.sync.desc': 'Synchronisiere nahtlos über alle deine Apple-Geräte. Deine Reflexionen sind überall verfügbar.',
      'features.photos.title': 'Fotos & Erinnerungen',
      'features.photos.desc': 'Füge Fotos zu deinen täglichen Reflexionen hinzu und bewahre visuelle Erinnerungen an besondere Momente.',
      'features.todos.title': 'Aufgaben & Ziele',
      'features.todos.desc': 'Verwalte deine täglichen Aufgaben und langfristigen Ziele. Verfolge deinen Fortschritt und bleibe fokussiert.',
      'screenshots.title': 'App Screenshots',
      'screenshots.subtitle': 'Entdecke die intuitive und schöne Benutzeroberfläche von Reflectric',
      'journey.title': 'Deine Reflexionsreise',
      'journey.subtitle': 'Ein strukturierter Ansatz für persönliches Wachstum',
      'journey.morning.title': 'Morgenreflexion',
      'journey.morning.desc': 'Beginne deinen Tag mit Klarheit. Setze Intentionen, plane deine Prioritäten und starte fokussiert in den Tag.',
      'journey.evening.title': 'Abendreflexion',
      'journey.evening.desc': 'Reflektiere über deinen Tag. Was lief gut? Was hast du gelernt? Wofür bist du dankbar?',
      'journey.periodic.title': 'Periodische Rückblicke',
      'journey.periodic.desc': 'Wöchentlich, monatlich und vierteljährlich: Betrachte das große Ganze, erkenne Muster und feiere deine Fortschritte.',
      'quote.title': 'Reflexion ist der Schlüssel zu persönlichem Wachstum.',
      'quote.subtitle': 'Nimm dir Zeit, innezuhalten und über deinen Weg nachzudenken.',
      'privacy.title': 'Deine Gedanken gehören nur dir',
      'privacy.subtitle': 'Bei Reflectric steht deine Privatsphäre an erster Stelle.',
      'privacy.feature1.title': 'Keine Datenweitergabe:',
      'privacy.feature1.desc': 'Wir sammeln, greifen nicht auf deine persönlichen Reflexionen zu und speichern sie nicht.',
      'privacy.feature2.title': 'Keine Werbung:',
      'privacy.feature2.desc': 'Keine Anzeigen, kein Tracking und keine Datenweitergabe.',
      'privacy.feature3.title': 'Lokale Speicherung:',
      'privacy.feature3.desc': 'Alle deine Reflexionen bleiben sicher auf deinem Gerät oder in deiner persönlichen iCloud.',
      'privacy.feature4.title': 'Volle Kontrolle:',
      'privacy.feature4.desc': 'Du kannst deine Daten jederzeit exportieren oder löschen.',
      'languages.title': 'Verfügbar in mehreren Sprachen',
      'languages.subtitle': 'Die App ist in den folgenden Sprachen verfügbar:',
      'languages.english': 'Englisch',
      'languages.german': 'Deutsch',
      'download.title': 'Jetzt herunterladen',
      'download.subtitle': 'Beginne deine Reise zu mehr Selbstbewusstsein und persönlichem Wachstum mit Reflectric.',
      'download.button': 'App herunterladen',
      'download.qr': 'Scanne den QR-Code',
      'download.compatibility': 'Reflectric ist für iPhone, iPad und Mac mit iOS 18 / macOS 15 oder neuer verfügbar.',
      'contact.title': 'Kontakt',
      'contact.subtitle': 'Haben Sie Fragen zur App? Kontaktieren Sie mich gerne!',
      'contact.email': 'E-Mail',
      'contact.phone': 'Telefon',
      'contact.address': 'Adresse',
      'contact.whatsapp': 'Schreiben Sie mir auf WhatsApp!',
      'footer.copyright': '© 2025 Adrian Eberhardt',
      'footer.imprint': 'Impressum',
      'footer.privacy': 'Datenschutz',
      'footer.app-privacy': 'Datenschutz Reflectric'
    },
    'en': {
      'nav.home': 'Home',
      'nav.features': 'Features',
      'nav.screenshots': 'Screenshots',
      'nav.journey': 'Reflection Journey',
      'nav.download': 'Download',
      'nav.contact': 'Contact',
      'hero.subtitle': 'Your Companion for Daily Reflection',
      'hero.description': 'Reflect on your day, track your mood, and develop a habit of self-reflection with Reflectric.',
      'hero.download': 'Download App',
      'hero.explore': 'Explore Features',
      'features.title': 'Main Features',
      'features.daily.title': 'Daily Reflections',
      'features.daily.desc': 'Start and end your day with guided reflections. Morning: Plan your day. Evening: Reflect on experiences.',
      'features.periodic.title': 'Periodic Reflections',
      'features.periodic.desc': 'Weekly, monthly, and quarterly reviews help you see the big picture and track your development.',
      'features.mood.title': 'Mood Tracking',
      'features.mood.desc': 'Track your daily mood and recognize patterns. Understand what makes you happy and what brings you down.',
      'features.streak.title': 'Streak System',
      'features.streak.desc': 'Build a habit! Track your reflection streaks and stay motivated through daily achievements.',
      'features.stats.title': 'Statistics & Insights',
      'features.stats.desc': 'Get detailed insights into your reflection habits, mood trends, and personal development.',
      'features.sync.title': 'iCloud Synchronization',
      'features.sync.desc': 'Sync seamlessly across all your Apple devices. Your reflections are available everywhere.',
      'features.photos.title': 'Photos & Memories',
      'features.photos.desc': 'Add photos to your daily reflections and preserve visual memories of special moments.',
      'features.todos.title': 'Tasks & Goals',
      'features.todos.desc': 'Manage your daily tasks and long-term goals. Track your progress and stay focused.',
      'screenshots.title': 'App Screenshots',
      'screenshots.subtitle': 'Discover the intuitive and beautiful interface of Reflectric',
      'journey.title': 'Your Reflection Journey',
      'journey.subtitle': 'A structured approach to personal growth',
      'journey.morning.title': 'Morning Reflection',
      'journey.morning.desc': 'Start your day with clarity. Set intentions, plan your priorities, and begin the day focused.',
      'journey.evening.title': 'Evening Reflection',
      'journey.evening.desc': 'Reflect on your day. What went well? What did you learn? What are you grateful for?',
      'journey.periodic.title': 'Periodic Reviews',
      'journey.periodic.desc': 'Weekly, monthly, and quarterly: Look at the big picture, recognize patterns, and celebrate your progress.',
      'quote.title': 'Reflection is the key to personal growth.',
      'quote.subtitle': 'Take time to pause and think about your journey.',
      'privacy.title': 'Your thoughts belong only to you',
      'privacy.subtitle': 'At Reflectric, your privacy comes first.',
      'privacy.feature1.title': 'No Data Sharing:',
      'privacy.feature1.desc': 'We don\'t collect, access, or store your personal reflections.',
      'privacy.feature2.title': 'No Ads:',
      'privacy.feature2.desc': 'No advertisements, no tracking, and no data sharing.',
      'privacy.feature3.title': 'Local Storage:',
      'privacy.feature3.desc': 'All your reflections stay secure on your device or in your personal iCloud.',
      'privacy.feature4.title': 'Full Control:',
      'privacy.feature4.desc': 'You can export or delete your data at any time.',
      'languages.title': 'Available in Multiple Languages',
      'languages.subtitle': 'The app is available in the following languages:',
      'languages.english': 'English',
      'languages.german': 'German',
      'download.title': 'Download Now',
      'download.subtitle': 'Begin your journey to more self-awareness and personal growth with Reflectric.',
      'download.button': 'Download App',
      'download.qr': 'Scan the QR Code',
      'download.compatibility': 'Reflectric is available for iPhone, iPad, and Mac with iOS 18 / macOS 15 or newer.',
      'contact.title': 'Contact',
      'contact.subtitle': 'Have questions about the app? Feel free to reach out!',
      'contact.email': 'Email',
      'contact.phone': 'Phone',
      'contact.address': 'Address',
      'contact.whatsapp': 'Message me on WhatsApp!',
      'footer.copyright': '© 2025 Adrian Eberhardt',
      'footer.imprint': 'Imprint',
      'footer.privacy': 'Privacy Policy',
      'footer.app-privacy': 'Reflectric Privacy Policy'
    }
  };

  // Set the language on page load (default to German)
  let currentLang = 'de';

  // Function to update content based on selected language
  function updateContent(lang) {
    // Update HTML elements with translations
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (languages[lang][key]) {
        element.textContent = languages[lang][key];
      }
    });

    // Update placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      if (languages[lang][key]) {
        element.placeholder = languages[lang][key];
      }
    });

    // Update document language
    document.documentElement.lang = lang;

    // Update screenshot images if they exist
    document.querySelectorAll('.screenshot-img').forEach(img => {
      const imgId = img.getAttribute('data-img-id');
      if (lang === 'en') {
        img.src = `./img/screenshots/en/${imgId}.png`;
      } else {
        img.src = `./img/screenshots/de/${imgId}.png`;
      }
    });

    // Update language buttons
    document.querySelectorAll('.language-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update current language
    currentLang = lang;
  }

  // Add event listeners to language buttons
  document.querySelectorAll('.language-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const lang = this.getAttribute('data-lang');
      updateContent(lang);

      // Close the mobile navbar if it's open
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
      }
    });
  });

  // Initialize with German
  updateContent('de');

  // Add click handler to close mobile navbar when any nav link is clicked
  document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
      }

      // Handle anchor links with manual scrolling
      const href = this.getAttribute('href');
      if (href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          // Get the navbar height
          const navbarHeight = document.querySelector('.navbar').offsetHeight;

          // Calculate the target scroll position with offset
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;

          // Smooth scroll to target
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Navbar scroll effect
  let lastScroll = 0;
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
      navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
  });
});
