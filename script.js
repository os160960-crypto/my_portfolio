// DOM 요소들
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const skillBars = document.querySelectorAll('.skill-progress');
const contactForm = document.querySelector('.contact-form');
const themeToggle = document.getElementById('theme-toggle');

// 모바일 메뉴 토글
hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!expanded));
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 네비게이션 링크 클릭 시 메뉴 닫기
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// 스무스 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // 네비게이션 높이만큼 빼기
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// 스크롤 시 네비게이션 스타일 변경 (테마 대응)
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 스크롤 애니메이션
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// 애니메이션할 요소들 관찰
document.querySelectorAll('.project-card, .stat, .skill-item, .contact-info, .contact-form').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// 스킬 바 애니메이션
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillBar = entry.target;
            const width = skillBar.getAttribute('data-width');
            skillBar.style.setProperty('--width', width);
            skillBar.classList.add('animate');
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(skillBar => {
    skillObserver.observe(skillBar);
});

// 연락처 폼 제출
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // 폼 데이터 수집
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // 간단한 유효성 검사
    if (!name || !email || !subject || !message) {
        showNotification('모든 필드를 입력해주세요.', 'error');
        return;
    }
    
    if (!isValidEmail(String(email))) {
        showNotification('올바른 이메일 주소를 입력해주세요.', 'error');
        return;
    }
    
    // 성공 메시지 (실제로는 서버로 전송)
    showNotification('메시지가 성공적으로 전송되었습니다!', 'success');
    contactForm.reset();
});

// 이메일 유효성 검사
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 알림 표시
function showNotification(message, type) {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    const styles = getComputedStyle(document.documentElement);
    const bg = type === 'success' ? styles.getPropertyValue('--notify-success').trim() : styles.getPropertyValue('--notify-error').trim();
    const text = styles.getPropertyValue('--accent-color').trim() || '#ffffff';

    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${bg};
        color: ${text};
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// 타이핑 효과 (히어로 섹션)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// 페이지 로드 시 타이핑 효과 시작
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        typeWriter(heroTitle, originalText, 50);
    }
});

// 스크롤 진행률 표시
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #6366f1, #8b5cf6);
        z-index: 10001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// 스크롤 진행률 생성
createScrollProgress();

// 프로젝트 카드 호버 효과
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// 스킬 카테고리 탭 기능 (선택사항)
function createSkillTabs() {
    const skillsSection = document.querySelector('.skills');
    if (!skillsSection) return;
    
    const skillsContent = document.querySelector('.skills-content');
    const categories = document.querySelectorAll('.skills-category');
    
    if (categories.length <= 1) return;
    
    // 탭 버튼 생성
    const tabContainer = document.createElement('div');
    tabContainer.className = 'skill-tabs';
    tabContainer.style.cssText = `
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
        gap: 1rem;
    `;
    
    categories.forEach((category, index) => {
        const tab = document.createElement('button');
        tab.className = `skill-tab ${index === 0 ? 'active' : ''}`;
        tab.textContent = category.querySelector('h3').textContent;
        tab.style.cssText = `
            padding: 0.8rem 1.5rem;
            border: 2px solid #e5e7eb;
            background: white;
            color: #6b7280;
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 600;
        `;
        
        tab.addEventListener('click', () => {
            // 모든 탭 비활성화
            tabContainer.querySelectorAll('.skill-tab').forEach(t => {
                t.classList.remove('active');
                t.style.background = 'white';
                t.style.color = '#6b7280';
                t.style.borderColor = '#e5e7eb';
            });
            
            // 클릭된 탭 활성화
            tab.classList.add('active');
            tab.style.background = '#6366f1';
            tab.style.color = 'white';
            tab.style.borderColor = '#6366f1';
            
            // 해당 카테고리만 표시
            categories.forEach((cat, i) => {
                cat.style.display = i === index ? 'block' : 'none';
            });
        });
        
        tabContainer.appendChild(tab);
    });
    
    skillsSection.querySelector('.container').insertBefore(tabContainer, skillsContent);
    
    // 첫 번째 카테고리만 표시
    categories.forEach((cat, index) => {
        cat.style.display = index === 0 ? 'block' : 'none';
    });
}

// 스킬 탭 생성
createSkillTabs();

// 로딩 애니메이션
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// 키보드 네비게이션 지원
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// 접근성 개선: 포커스 관리
navLinks.forEach(link => {
    link.addEventListener('focus', () => {
        link.style.outline = '2px solid #6366f1';
        link.style.outlineOffset = '2px';
    });
    
    link.addEventListener('blur', () => {
        link.style.outline = 'none';
    });
});

// 다크모드 토글 기능
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // 아이콘 변경
    const icon = themeToggle.querySelector('i');
    icon.className = newTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    themeToggle.setAttribute('aria-pressed', String(newTheme === 'dark'));
});

// 저장된 테마 불러오기
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
const icon = themeToggle.querySelector('i');
icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
themeToggle.setAttribute('aria-pressed', String(savedTheme === 'dark'));

// 스크롤 탑 버튼
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
    const toggleScrollTop = () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'flex';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    };
    window.addEventListener('scroll', toggleScrollTop);
    toggleScrollTop();

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// 현재 섹션에 따라 네비 링크 활성화
const sections = document.querySelectorAll('section[id]');
const navLinkMap = {};
navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
        navLinkMap[href.substring(1)] = link;
    }
});

const scrollSpyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.id;
        if (entry.isIntersecting) {
            Object.values(navLinkMap).forEach(l => l.classList.remove('active'));
            const active = navLinkMap[id];
            if (active) active.classList.add('active');
        }
    });
}, {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
});

sections.forEach(section => scrollSpyObserver.observe(section));

// 프로젝트 필터링
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterBtns.length) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');

            const filter = btn.getAttribute('data-filter');
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                const show = filter === 'all' || category === filter;
                card.style.display = show ? '' : 'none';
            });
        });
    });
}

console.log('포트폴리오 웹사이트가 성공적으로 로드되었습니다! 🚀');
