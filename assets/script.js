// انتخاب تمام دکمه‌های toggle
const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        // بستن بقیه بخش‌ها
        document.querySelectorAll('.faq').forEach(faq => {
            if (!faq.contains(toggle)) {
                faq.classList.remove('active');
            }
        });
        // باز/بسته کردن بخش فعلی
        toggle.parentNode.classList.toggle('active');
    });
});