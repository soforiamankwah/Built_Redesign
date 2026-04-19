/**
 * Built.africa Website - Main JavaScript
 * Handles interactive features like FAQ toggling
 */

/**
 * Toggle FAQ answer display
 * @param {Element} element - The FAQ question element
 */
function toggle(element) {
  const answer = element.nextElementSibling;
  const icon = element.querySelector('.faq-icon');
  
  // Close all other FAQs
  const allAnswers = document.querySelectorAll('.faq-a');
  const allIcons = document.querySelectorAll('.faq-q .faq-icon');
  
  allAnswers.forEach((ans) => {
    if (ans !== answer) {
      ans.classList.remove('open');
    }
  });
  
  allIcons.forEach((icn) => {
    if (icn !== icon) {
      icn.textContent = '+';
    }
  });
  
  // Toggle current FAQ
  answer.classList.toggle('open');
  
  // Update icon
  if (answer.classList.contains('open')) {
    icon.textContent = '−';
  } else {
    icon.textContent = '+';
  }
}

/**
 * Initialize event listeners
 */
document.addEventListener('DOMContentLoaded', function() {
  // Add keyboard navigation for FAQ
  const faqQuestions = document.querySelectorAll('.faq-q');
  
  faqQuestions.forEach((question) => {
    question.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle(this);
      }
    });
  });
});

// Optional: Add smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
