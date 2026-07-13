(function () {

  // Mobile menu is now INSIDE the nav element, not a sibling of body's flex children.
  // This prevents body's flex layout from breaking max-height transitions on mobile.
  const navbarHTML = `
<nav class="navbar">
  <div class="navbar-inner">
    <div class="nav-left">
      <a href="index.html" style="color: inherit; text-decoration: none;">Jose Lima</a>
      <div class="subheading">Gameplay Programmer &nbsp;</div>
    </div>

    <ul class="nav-links desktop-nav">
      <li><a href="about.html">About Me</a></li>
      <li><a href="portfolio.html">Projects</a></li>
      <li><a href="joselima_resume.pdf" target="_blank" rel="noopener">Resume</a></li>
    </ul>

    <button class="hamburger" id="hamburger-btn" aria-label="Toggle navigation" aria-expanded="false">
      <span class="ham-bar"></span>
      <span class="ham-bar"></span>
      <span class="ham-bar"></span>
    </button>
  </div>

  <!-- Mobile menu lives INSIDE <nav> so it is not a direct flex child of body -->
  <div class="mobile-menu" id="mobile-menu" aria-hidden="true">
    <ul>
      <li><a href="about.html">About Me</a></li>
      <li><a href="portfolio.html">Projects</a></li>
      <li><a href="joselima_resume.pdf" target="_blank" rel="noopener">Resume</a></li>
    
      <li>
        <div class="mobile-menu-icons">
          <a href="https://www.linkedin.com/in/jose-l-b4a2132a8/" target="_blank" rel="noopener" aria-label="LinkedIn">
            <img src="assets/icons/linkedin.svg" alt="LinkedIn" />
          </a>
        </div>
      </li>
      <li>
        <div class="mobile-menu-icons">
          <a href="https://github.com/josecmu27" target="_blank" rel="noopener" aria-label="GitHub">
            <img src="assets/icons/github.svg" alt="GitHub" />
          </a>
          </a>
        </div>
      </li>
    </ul>
  </div>
</nav>`;

  const footerHTML = `
<footer>
  <div class="footer-icons">
    <a href="https://www.linkedin.com/in/jose-l-b4a2132a8/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <img src="assets/icons/linkedin.svg" alt="LinkedIn Icon" class="linkedin" />
    </a>
    <a href="https://github.com/josecmu27" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
      <img src="assets/icons/github.svg" alt="Github Icon" class="linkedin" />
    </a>
    <a href="joselima_resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume">
      <img src="assets/icons/resume.svg" alt="Resume Icon" class="resume" />
    </a>
  </div>
</footer>`;

  const navEl  = document.getElementById('navbar-placeholder');
  const footEl = document.getElementById('footer-placeholder');
  if (navEl)  navEl.outerHTML  = navbarHTML;
  if (footEl) footEl.outerHTML = footerHTML;

  setTimeout(function () {
    var btn  = document.getElementById('hamburger-btn');
    var menu = document.getElementById('mobile-menu');

    if (!btn || !menu) return;

    btn.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('open');
      btn.classList.toggle('open', isOpen);
      btn.setAttribute('aria-expanded', String(isOpen));
      menu.setAttribute('aria-hidden', String(!isOpen));
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
      });
    });
  }, 0);

})();