// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      
      if (href !== '#') {
        const targetId = href.replace('#', '');
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Mobile navigation menu toggle functionality
  // This would be implemented if we had a hamburger menu for mobile
  
  // Add subtle animation to the feature cards
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach((card, index) => {
    // Add a slight delay to each card
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 300 * index);
  });
  
  // Initialize with opacity 0 for animation
  document.addEventListener('DOMContentLoaded', function() {
    featureCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
  });
  
  // Simple image load placeholder handling
  document.querySelectorAll('.contributor img').forEach(img => {
    img.addEventListener('error', function() {
      this.src = 'https://via.placeholder.com/120x120?text=Lawyer';
    });
  });