document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Translation Data
    const translations = {
        en: {
            heroTitle: "Literature Review AI Hub",
            heroDesc: "Empower your research journey with integrated AI tools designed for every phase of the literature review process.",
            step1Title: "Defining Research Question",
            step2Title: "Searching Literature",
            step3Title: "Screening Papers",
            step4Title: "Extracting Data",
            step5Title: "Analyzing Trends",
            step6Title: "Refining Review",
            step7Title: "Managing Sources",
            step8Title: "Plagiarism Check",
            copyright: "&copy; 2026 MusAnalytics Hub - Literature Review AI Tools Repository",
            navDownloads: "Downloads Hub",
            downloadsTitle: "Downloads Hub",
            downloadsDesc: "Direct access to desktop software, browser extensions, and mobile apps.",
            desktopApps: "Desktop Software",
            extensions: "Browser Extensions",
            mobileApps: "Mobile Apps"
        },
        bm: {
            heroTitle: "Hab AI Sorotan Literatur",
            heroDesc: "Perkasakan perjalanan penyelidikan anda dengan alatan AI bersepadu yang direka untuk setiap fasa proses sorotan literatur.",
            step1Title: "Menentukan Persoalan Kajian",
            step2Title: "Mencari Literatur",
            step3Title: "Menyaring Kertas Kajian",
            step4Title: "Mengekstrak Data",
            step5Title: "Menganalisis Trend",
            step6Title: "Menambah Baik Sorotan",
            step7Title: "Mengurus Sumber",
            step8Title: "Semakan Plagiarisme",
            copyright: "&copy; 2026 MusAnalytics Hub - Repositori Alatan AI Sorotan Literatur",
            navDownloads: "Hab Muat Turun",
            downloadsTitle: "Hab Muat Turun",
            downloadsDesc: "Akses terus kepada perisian desktop, sambungan pelayar, dan aplikasi mudah alih.",
            desktopApps: "Perisian Desktop",
            extensions: "Sambungan Pelayar",
            mobileApps: "Aplikasi Mudah Alih"
        }
    };

    let currentLang = localStorage.getItem('lrhub_lang') || 'en';

    function updateLanguage(lang) {
        document.querySelectorAll('[data-tr]').forEach(el => {
            const key = el.getAttribute('data-tr');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        localStorage.setItem('lrhub_lang', lang);
        
        // Update button appearance
        const btn = document.getElementById('lang-toggle-btn');
        const ukFlag = '<svg class="flag-svg" width="20" height="10" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg"><clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath><rect width="60" height="30" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6" clip-path="url(#s)"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="4" clip-path="url(#s)"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/></svg>';
        const myFlag = '<svg class="flag-svg" width="20" height="10" viewBox="0 0 28 14" xmlns="http://www.w3.org/2000/svg"><rect width="28" height="14" fill="#fff"/><path d="M0,0h28v1h-28zM0,2h28v1h-28zM0,4h28v1h-28zM0,6h28v1h-28zM0,8h28v1h-28zM0,10h28v1h-28zM0,12h28v1h-28z" fill="#cc0000"/><rect width="14" height="8" fill="#000066"/><path d="M6,1.4a3.1,3.1 0 1 0 0,5.2 3.5,3.5 0 1 1 0,-5.2M8.5,4l1,0.5 0.5,1 0.5,-1 1,-0.5 -1,-0.5 -0.5,-1 -0.5,1z" fill="#ffff00"/></svg>';
        
        if (lang === 'en') {
            btn.innerHTML = `${ukFlag} EN | BM ${myFlag}`;
        } else {
            btn.innerHTML = `${myFlag} BM | EN ${ukFlag}`;
        }
    }

    // Initialize Language
    updateLanguage(currentLang);

    // Language Toggle Listener
    document.getElementById('lang-toggle-btn').addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'bm' : 'en';
        updateLanguage(currentLang);
    });

    // Add subtle hover micro-interactions
    const toolItems = document.querySelectorAll('.tool-item');
    toolItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Optional: Add micro-interaction logic here
            // console.log(`Hovering over: ${item.querySelector('.tool-name').textContent}`);
        });
    });

    // Handle Title Animation
    const title = document.getElementById('main-title');
    title.style.opacity = '0';
    title.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        title.style.transition = 'all 1s ease-out';
        title.style.opacity = '1';
        title.style.transform = 'translateY(0)';
    }, 100);

    // Handle Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scroll for any anchor links if added later
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
