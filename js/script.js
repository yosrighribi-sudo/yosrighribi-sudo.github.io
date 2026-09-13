document.addEventListener('DOMContentLoaded', function () {
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- LANGUAGE (FR / EN) ---------- */
  var I18N = {
    fr: {
      'hero.avail': 'disponible pour des projets',
      'hero.sub': 'Créatif numérique — je conçois des sites web, des identités visuelles et des contenus vidéo qui aident les marques et les créateurs à se démarquer.',
      'hero.cta1': 'Voir mes projets ↗',
      'hero.cta2': 'Me contacter',
      'hero.meta': 'Tunisie',
      'hero.chip1': 'Systèmes Embarqués',
      'hero.chip2': 'Linux / Ubuntu',
      'hero.chip3': 'IoT',
      'hero.chip4': 'Montage Vidéo',
      'hero.chip5': 'Marketing Digital',
      'hero.chip6': 'Programmation C',
      'marquee.1': 'Systèmes Embarqués',
      'marquee.2': 'IoT',
      'marquee.3': 'C',
      'marquee.4': 'Linux',
      'marquee.5': 'Web Design',
      'marquee.6': 'Motion',
      'about.title': 'Étudiant en <span class="pink">Systèmes Embarqués &amp; IoT</span>, avec le sens du terrain et la tête dans le code.',
      'about.p2': "Créatif numérique polyvalent, je travaille le <strong>développement web</strong>, le <strong>graphisme</strong>, le <strong>montage vidéo</strong> et la <strong>création de contenu</strong>. Je conçois des sites modernes et responsives, je crée des identités visuelles professionnelles, je monte des vidéos engageantes et je conçois des vignettes YouTube qui attirent l'œil.<br /><br />Je maîtrise aussi le <strong>SEO YouTube</strong> et l'optimisation de contenu. Mon approche combine créativité, compétences techniques et souci du détail pour livrer un travail de qualité qui aide les entreprises et les créateurs à se démarquer.<br /><br />Donnons vie à vos idées et créons ensemble quelque chose d'impactant.",
      'about.github': 'Mon GitHub ↗',
      'skills.s1': 'Programmation C',
      'skills.s2': 'Linux / Ubuntu',
      'skills.s3': 'Systèmes Embarqués',
      'skills.s4': 'IoT',
      'skills.s5': 'HTML / CSS / JS',
      'skills.s6': 'Photoshop / After Effects',
      'skills.s7': 'Canva / CapCut',
      'skills.s8': 'Marketing Digital',
      'services.title': 'Ce que je peux faire <span class="pink">pour toi</span>',
      'services.s1.title': 'Développement Web',
      'services.s1.desc': 'Des sites vitrines modernes, responsive et avec du caractère — comme celui-ci.',
      'services.s1.l1': 'Sites responsives',
      'services.s1.l2': 'Animations & motion',
      'services.s1.l3': 'SEO de base',
      'services.s2.title': 'UI / Graphisme',
      'services.s2.desc': "Visuels, mises en page et identité visuelle pour donner de l'impact à ta marque.",
      'services.s2.l1': 'Identité visuelle',
      'services.s2.l2': 'Affiches & posts réseaux',
      'services.s2.l3': 'Maquettes simples',
      'services.s3.title': 'Montage Vidéo & Motion',
      'services.s3.desc': "Édition, motion design et contenus courts pour réseaux sociaux qui captent l'attention.",
      'services.s3.l1': 'Montage & colo',
      'services.s3.l2': 'Motion design',
      'services.s3.l3': 'Contenus verticaux',
      'services.s4.title': 'YouTube SEO',
      'services.s4.desc': 'Optimisation de chaînes et de vidéos pour mieux ranker sur YouTube et gagner plus de vues.',
      'services.s4.l1': 'Mots-clés & titres',
      'services.s4.l2': 'Miniatures accrocheuses',
      'services.s4.l3': 'Description & tags',
      'work.inprogress': 'en cours',
      'work.w1.title': 'Portfolio<br />Personnel',
      'work.w1.desc': 'Ce site — vitrine responsive en HTML, CSS &amp; JavaScript, pensée pour évoluer avec mon parcours.',
      'work.w1.link': 'Visiter ↗',
      'work.w2.title': 'YouTube<br />SEO',
      'work.w2.desc': 'Optimisation de contenu — titres, descriptions, mots-clés et miniatures — pour améliorer le référencement des vidéos sur YouTube.',
      'work.w2.link': 'En cours ↗',
      'work.seo1': 'Mots-clés',
      'work.seo2': 'Miniatures',
      'work.seo3': 'Analyse',
      'work.w4.title': 'Montage<br />Vidéo',
      'work.w4.desc': "Édition, motion design et contenus pour les réseaux sociaux de l'atelier — du brut à la mise en ligne.",
      'work.w4.link': 'Voir le format ↗',
      'contact.title': 'Un projet, une idée ? <span class="pink">Parlons-en.</span>',
      'contact.location': 'Localisation',
      'contact.country': 'Tunisie',
      'contact.social': 'Social',
      'contact.ctaTitle': 'Parlons-en en direct.',
      'contact.ctaText': 'Le plus rapide : envoie-moi un message sur LinkedIn ou GitHub — je réponds vite.',
      'footer.note': 'Conçu & développé par Yousri — Creative Developer',
      'doc.title': 'YOUSRI | Creative Developer',
      'doc.desc': 'Portfolio de Yousri Ghribi — création de sites web, design graphique, montage vidéo et SEO YouTube.'
    },
    en: {
      'hero.avail': 'available for projects',
      'hero.sub': 'Digital creative — I design websites, visual identities and video content that help brands and creators stand out.',
      'hero.cta1': 'See my projects ↗',
      'hero.cta2': 'Contact me',
      'hero.meta': 'Tunisia',
      'hero.chip1': 'Embedded Systems',
      'hero.chip2': 'Linux / Ubuntu',
      'hero.chip3': 'IoT',
      'hero.chip4': 'Video Editing',
      'hero.chip5': 'Digital Marketing',
      'hero.chip6': 'C Programming',
      'marquee.1': 'Embedded Systems',
      'marquee.2': 'IoT',
      'marquee.3': 'C',
      'marquee.4': 'Linux',
      'marquee.5': 'Web Design',
      'marquee.6': 'Motion',
      'about.title': 'Computer Systems Engineering student in <span class="pink">Embedded Systems &amp; IoT</span> — grounded in the field, head in the code.',
      'about.p2': "I'm a versatile digital creative with experience in <strong>web development</strong>, <strong>graphic design</strong>, <strong>video editing</strong> and <strong>content creation</strong>. I build modern, responsive websites, craft professional branding and visual identities, edit engaging videos and design eye-catching YouTube thumbnails.<br /><br />I also have a solid understanding of <strong>YouTube SEO</strong> and content optimization. My approach combines creativity, technical skill and attention to detail to deliver high-quality work that helps businesses and creators stand out.<br /><br />Let's bring your ideas to life and create something impactful together.",
      'about.github': 'My GitHub ↗',
      'skills.s1': 'C Programming',
      'skills.s2': 'Linux / Ubuntu',
      'skills.s3': 'Embedded Systems',
      'skills.s4': 'IoT',
      'skills.s5': 'HTML / CSS / JS',
      'skills.s6': 'Photoshop / After Effects',
      'skills.s7': 'Canva / CapCut',
      'skills.s8': 'Digital Marketing',
      'services.title': 'What I can do <span class="pink">for you</span>',
      'services.s1.title': 'Web Development',
      'services.s1.desc': 'Modern, responsive, characterful showcase websites — like this very one.',
      'services.s1.l1': 'Responsive sites',
      'services.s1.l2': 'Animations & motion',
      'services.s1.l3': 'Basic SEO',
      'services.s2.title': 'UI / Design',
      'services.s2.desc': 'Visuals, layouts and branding to give your brand an edge.',
      'services.s2.l1': 'Visual identity',
      'services.s2.l2': 'Posters & social posts',
      'services.s2.l3': 'Simple mockups',
      'services.s3.title': 'Video Editing & Motion',
      'services.s3.desc': 'Editing, motion design and short-form content for social media that grabs attention.',
      'services.s3.l1': 'Editing & color',
      'services.s3.l2': 'Motion design',
      'services.s3.l3': 'Vertical content',
      'services.s4.title': 'YouTube SEO',
      'services.s4.desc': 'Optimizing channels and videos to rank higher on YouTube and get more views.',
      'services.s4.l1': 'Keywords & titles',
      'services.s4.l2': 'Click-worthy thumbnails',
      'services.s4.l3': 'Description & tags',
      'work.inprogress': 'in progress',
      'work.w1.title': 'Personal<br />Portfolio',
      'work.w1.desc': 'This site — a responsive showcase built in HTML, CSS &amp; JavaScript, designed to grow with my journey.',
      'work.w1.link': 'View ↗',
      'work.w2.title': 'YouTube<br />SEO',
      'work.w2.desc': 'Content optimization — titles, descriptions, keywords and thumbnails — to improve video rankings on YouTube.',
      'work.w2.link': 'In progress ↗',
      'work.seo1': 'Keywords',
      'work.seo2': 'Thumbnails',
      'work.seo3': 'Analytics',
      'work.w4.title': 'Video<br />Editing',
      'work.w4.desc': 'Editing, motion design and social content for the family workshop — from raw footage to launch.',
      'work.w4.link': 'See the format ↗',
      'contact.title': 'A project, an idea? <span class="pink">Let\'s talk.</span>',
      'contact.location': 'Location',
      'contact.country': 'Tunisia',
      'contact.social': 'Social',
      'contact.ctaTitle': "Let's talk directly.",
      'contact.ctaText': 'Fastest way: message me on LinkedIn or GitHub — I reply quickly.',
      'footer.note': 'Designed & built by Yousri — Creative Developer',
      'doc.title': 'YOUSRI | Creative Developer',
      'doc.desc': 'Yousri Ghribi portfolio — web development, graphic design, video editing and YouTube SEO.'
    }
  };

  var langToggle = document.getElementById('langToggle');

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.fr;
    document.documentElement.lang = lang;
    langToggle.textContent = lang === 'fr' ? 'EN' : 'FR';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (dict[key]) el.innerHTML = dict[key];
    });

    if (dict['doc.title']) document.title = dict['doc.title'];
    if (dict['doc.desc']) {
      var meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', dict['doc.desc']);
    }
  }

  var savedLang = 'fr';
  try { savedLang = localStorage.getItem('yg-lang') || 'fr'; } catch (e) {}

  if (langToggle) {
    langToggle.addEventListener('click', function () {
      var next = document.documentElement.lang === 'en' ? 'fr' : 'en';
      applyLang(next);
      try { localStorage.setItem('yg-lang', next); } catch (e) {}
    });
    applyLang(savedLang);
  }

  /* ---------- NAV ---------- */
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
    });
  });

  /* ---------- SCROLL PROGRESS ---------- */
  var progress = document.getElementById('scrollProgress');
  function updateProgress() {
    var h = document.documentElement;
    var scrollable = h.scrollHeight - h.clientHeight;
    progress.style.width = (scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0) + '%';
  }

  /* ---------- SCROLL SPY ---------- */
  var spyLinks = [].slice.call(document.querySelectorAll('.nav__links a[href^="#"]'));
  var spySections = [];
  ['accueil', 'apropos', 'services', 'projets', 'contact'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) spySections.push(el);
  });

  function spy() {
    var pos = window.scrollY + 140;
    var current = 'accueil';
    spySections.forEach(function (s) {
      if (s.offsetTop <= pos) current = s.id;
    });
    spyLinks.forEach(function (a) {
      var id = a.getAttribute('href').slice(1);
      a.classList.toggle('active', id === current && !a.classList.contains('nav__cta'));
    });
  }

  /* ---------- SELECTED WORK SCENE ---------- */
  var wrap = document.querySelector('.work-wrap');
  var scene = document.querySelector('.work-scene');
  var letters = [].slice.call(document.querySelectorAll('.w-letter'));
  var wCards = [].slice.call(document.querySelectorAll('.w-card'));
  var viewAll = document.querySelector('.work-scene__all');

  function updateScene() {
    if (!wrap) return;
    var total = wrap.offsetHeight - window.innerHeight;
    var rect = wrap.getBoundingClientRect();
    var p = total > 0 ? Math.min(Math.max(-rect.top / total, 0), 1) : 1;

    scene.style.setProperty('--p', p.toFixed(4));

    letters.forEach(function (letter, i) {
      letter.style.opacity = (1 - Math.min(p * 1.15, 1)).toFixed(3);
      letter.style.transform =
        'translate3d(calc(' + ((0.5 - p) * 38) + 'vw), ' +
        (p * -22) + 'vh, ' + ((0.5 - p) * -320) + 'px) ' +
        'rotateY(' + ((0.5 - p) * 120) + 'deg)';
    });

    wCards.forEach(function (card, i) {
      var shown = Math.min(Math.max(p * 4.4 - i, 0), 1);
      card.style.setProperty('--shown', shown.toFixed(3));
    });

    if (viewAll) {
      viewAll.classList.toggle('is-visible', p > 0.92);
    }
  }

  /* ---------- REVEAL ON SCROLL ---------- */
  var revealTargets = [].slice.call(document.querySelectorAll(
    '.section__title, .section__tag, .about__card, .service-card, .contact, .footer'
  ));

  if (prefersReducedMotion) {
    revealTargets.forEach(function (el) { el.classList.add('visible'); });
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        en.target.classList.add('visible');
        io.unobserve(en.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach(function (el) {
    if (!prefersReducedMotion) el.classList.add('reveal');
    io.observe(el);
  });

  /* ---------- 3D AVATAR (smooth tilt, like SEWINX) ---------- */
  var avatar = document.getElementById('avatar');

  if (avatar && !prefersReducedMotion && window.matchMedia('(min-width: 1101px)').matches) {
    var STRENGTH = 3;
    var ROTATE = 25;
    var rAF = null;

    function resetAvatar() {
      avatar.style.transform =
        'perspective(800px) rotateX(0deg) rotateY(0deg) translate3d(0px, 0px, 0px)';
      avatar.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)';
    }

    window.addEventListener('mousemove', function (e) {
      if (rAF) return;
      rAF = requestAnimationFrame(function () {
        rAF = null;
        var bounds = avatar.getBoundingClientRect();
        var cx = bounds.left + bounds.width / 2;
        var cy = bounds.top + bounds.height / 2;
        var d = e.clientX - cx;
        var f = e.clientY - cy;

        if (Math.abs(d) < bounds.width / 2 + 150 && Math.abs(f) < bounds.height / 2 + 150) {
          avatar.style.transition = 'transform 0.3s ease-out';
          avatar.style.transform =
            'perspective(800px) rotateX(' + (-(f / ROTATE)).toFixed(2) + 'deg) ' +
            'rotateY(' + (d / ROTATE).toFixed(2) + 'deg) ' +
            'translate3d(' + (d / STRENGTH).toFixed(2) + 'px, ' + (f / STRENGTH).toFixed(2) + 'px, 0px)';
        }
      });
    });

    avatar.addEventListener('mouseleave', resetAvatar);
  }

  /* ---------- 3D DECOR OBJECTS (parallax) ---------- */
  var obj3dItems = [].slice.call(document.querySelectorAll('.obj3d'));
  if (obj3dItems.length && !prefersReducedMotion && window.matchMedia('(min-width: 961px)').matches) {
    window.addEventListener('mousemove', function (e) {
      var nx = (e.clientX / window.innerWidth) - 0.5;
      var ny = (e.clientY / window.innerHeight) - 0.5;
      obj3dItems.forEach(function (o) {
        var d = parseFloat(o.getAttribute('data-depth')) || 20;
        o.style.transform =
          'translate3d(' + (nx * d).toFixed(2) + 'px, ' + (ny * d * 0.7).toFixed(2) + 'px, 0)';
      });
    });
  }

  /* ---------- WIRE SCROLL ---------- */
  function onScroll() {
    updateProgress();
    spy();
    updateScene();
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();
});