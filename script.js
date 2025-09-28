const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.querySelector('.contact-form');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        const expanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', String(!expanded));
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

if (contactForm) {
    const form = contactForm;
    const alertBox = form.querySelector('.form-alert');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const name = String(formData.get('name') || '');
        const email = String(formData.get('email') || '');
        const message = String(formData.get('message') || '');

        if (!name || !email || !message) {
            showNotification('모든 필드를 입력해주세요.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('올바른 이메일 주소를 입력해주세요.', 'error');
            return;
        }

        if (alertBox) {
            alertBox.hidden = false;
            alertBox.textContent = '메시지가 성공적으로 전송되었습니다!';
        }
        
        showNotification('메시지가 성공적으로 전송되었습니다!', 'success');
        form.reset();
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type) {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    const bgColor = type === 'success' ? '#10b981' : '#ef4444';
    const textColor = '#ffffff';

    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${bgColor};
        color: ${textColor};
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
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

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

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

// 스크롤 애니메이션
const fadeElements = document.querySelectorAll('.project-card, .skill-item, .stat, .contact-box');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(el => {
    el.classList.add('fade-in');
    fadeObserver.observe(el);
});

// 스킬 탭 기능
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // 모든 탭 버튼에서 active 클래스 제거
        tabBtns.forEach(b => b.classList.remove('active'));
        // 모든 탭 콘텐츠에서 active 클래스 제거
        tabContents.forEach(content => content.classList.remove('active'));
        
        // 클릭된 버튼에 active 클래스 추가
        btn.classList.add('active');
        
        // 해당하는 탭 콘텐츠에 active 클래스 추가
        const targetTab = btn.getAttribute('data-tab');
        const targetContent = document.getElementById(targetTab);
        if (targetContent) {
            targetContent.classList.add('active');
        }
    });
});

console.log('포트폴리오 웹사이트가 로드되었습니다!');