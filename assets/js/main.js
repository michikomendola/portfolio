const CONTACT_EMAIL = "michimendola@gmail.com";

const typedPhrases = [
  "manual & exploratory testing",
  "Cypress + TypeScript automation",
  "SQL data validation",
  "clear Jira defect reports",
  "Agile quality delivery",
];

function typeWriter(el, phrases, speed = 70, hold = 1600) {
  let i = 0;
  let char = 0;
  let deleting = false;

  function tick() {
    const current = phrases[i];
    el.textContent = current.slice(0, char);

    if (!deleting && char < current.length) {
      char += 1;
      setTimeout(tick, speed);
      return;
    }
    if (!deleting && char === current.length) {
      deleting = true;
      setTimeout(tick, hold);
      return;
    }
    if (deleting && char > 0) {
      char -= 1;
      setTimeout(tick, speed / 2);
      return;
    }
    deleting = false;
    i = (i + 1) % phrases.length;
    setTimeout(tick, 280);
  }

  tick();
}

function onScrollNav() {
  const nav = document.getElementById("navbar");
  const topBtn = document.getElementById("backToTop");
  if (nav) nav.classList.toggle("scrolled", window.scrollY > 40);
  if (topBtn) topBtn.classList.toggle("visible", window.scrollY > 400);
}

function setActiveNav() {
  const sections = [...document.querySelectorAll("section[id]")];
  const scrollPos = window.scrollY + 120;
  let current = "home";
  for (const section of sections) {
    if (scrollPos >= section.offsetTop) current = section.id;
  }
  document.querySelectorAll(".navbar .nav-link").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
}

function animateSkills() {
  document.querySelectorAll(".skill-bar").forEach((bar) => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 40) bar.classList.add("is-visible");
  });
}

function animateCounters() {
  document.querySelectorAll(".counter-num").forEach((el) => {
    if (el.dataset.done) return;
    const rect = el.getBoundingClientRect();
    if (rect.top > window.innerHeight - 40) return;
    el.dataset.done = "true";
    const target = Number(el.dataset.count);
    const start = performance.now();
    const duration = 1200;
    function frame(now) {
      const t = Math.min(1, (now - start) / duration);
      el.textContent = Math.round(target * t);
      if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  });
}

function handleContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    if (CONTACT_EMAIL.includes("example.com")) {
      status.innerHTML =
        'Thanks! Please reach me on <a href="https://www.linkedin.com/in/michikomendola" target="_blank" rel="noopener">LinkedIn</a> while this form is being set up.';
      return;
    }

    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`;
    status.textContent = "Opening your email client…";
  });
}

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
  const typed = document.getElementById("typed");
  if (typed) typeWriter(typed, typedPhrases);
});

window.addEventListener("scroll", () => {
  onScrollNav();
  setActiveNav();
  animateSkills();
  animateCounters();
});

onScrollNav();
handleContactForm();
animateSkills();
