document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        once: true,
        offset: 50,
        easing: 'ease-out-cubic',
    });
});

const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
const bars = document.querySelectorAll('.bar');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    if (navLinks.classList.contains('active')) {
        bars[0].style.transform = 'translateY(9px) rotate(45deg)';
        bars[1].style.transform = 'translateY(-9px) rotate(-45deg)';
    } else {
        bars[0].style.transform = 'translateY(0) rotate(0)';
        bars[1].style.transform = 'translateY(0) rotate(0)';
    }
});

// 注意：多頁面架構下，點擊真實連結會直接換頁，這段主要為了確保點擊本頁連結時(若有)會收起選單
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        bars[0].style.transform = 'translateY(0) rotate(0)';
        bars[1].style.transform = 'translateY(0) rotate(0)';
    });
});
