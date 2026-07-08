document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const mainNav = document.getElementById("mainNav");

  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  const contactForm = document.getElementById("contactForm");
  const CENTER_EMAIL = "contact@example.com";

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = contactForm.name.value.trim();
    const phone = contactForm.phone.value.trim();
    const program = contactForm.program.value;
    const message = contactForm.message.value.trim();

    const subject = `[상담 예약 문의] ${name}님`;
    const body =
      `이름: ${name}\n` +
      `연락처: ${phone}\n` +
      `희망 프로그램: ${program}\n\n` +
      `문의 내용:\n${message}`;

    const mailtoUrl =
      `mailto:${CENTER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  });
});
