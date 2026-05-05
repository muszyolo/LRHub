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
            copyright: "&copy; 2026 MusAnalytics Hub - Literature Review AI Tools Repository"
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
            copyright: "&copy; 2026 MusAnalytics Hub - Repositori Alatan AI Sorotan Literatur"
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
        
        // Update button appearance if needed
        const btn = document.getElementById('lang-toggle-btn');
        if (lang === 'en') {
            btn.innerHTML = '<span class="flag-icon">🇬🇧</span> EN | BM <span class="flag-icon">🇲🇾</span>';
        } else {
            btn.innerHTML = '<span class="flag-icon">🇲🇾</span> BM | EN <span class="flag-icon">🇬🇧</span>';
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
