(() => {
  const root = document.documentElement;
  root.classList.add("has-js");

  const email = document.body.dataset.contactEmail?.trim();
  const subject = encodeURIComponent("UGC project inquiry");

  if (email) {
    document.querySelectorAll("[data-email-link]").forEach((link) => {
      link.href = `mailto:${email}?subject=${subject}`;
    });

    document.querySelectorAll("[data-email-text]").forEach((node) => {
      node.textContent = email;
    });
  }

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  const portrait = document.querySelector("[data-portrait]");
  const portraitFrame = document.querySelector("[data-portrait-frame]");

  if (portrait && portraitFrame) {
    const showPortrait = () => portraitFrame.classList.add("has-image");
    const hidePortrait = () => portraitFrame.classList.remove("has-image");

    portrait.addEventListener("load", showPortrait);
    portrait.addEventListener("error", hidePortrait);

    if (portrait.complete) {
      portrait.naturalWidth > 0 ? showPortrait() : hidePortrait();
    }
  }

  document.querySelectorAll("[data-video-card]").forEach((card) => {
    const video = card.querySelector("[data-portfolio-video]");
    if (!video) return;

    const markReady = () => card.classList.add("has-video");
    const markMissing = () => card.classList.remove("has-video");

    video.addEventListener("loadedmetadata", markReady);
    video.addEventListener("error", markMissing);
    video.querySelectorAll("source").forEach((source) => source.addEventListener("error", markMissing));

    video.addEventListener("play", () => {
      document.querySelectorAll("[data-portfolio-video]").forEach((otherVideo) => {
        if (otherVideo !== video) otherVideo.pause();
      });
    });

    if (video.readyState >= 1 && video.duration) markReady();
  });

  const copyButton = document.querySelector("[data-copy-email]");
  const copyLabel = document.querySelector("[data-copy-label]");

  if (copyButton && copyLabel && email) {
    copyButton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(email);
        copyLabel.textContent = "Copied";
        window.setTimeout(() => {
          copyLabel.textContent = "Copy";
        }, 1800);
      } catch {
        window.location.href = `mailto:${email}?subject=${subject}`;
      }
    });
  }

  const reveals = [...document.querySelectorAll(".reveal")];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach((node) => node.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -7% 0px", threshold: 0.08 }
    );

    reveals.forEach((node) => observer.observe(node));
  }
})();
