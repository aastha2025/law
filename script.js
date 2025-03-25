document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
    
    // Scroll animations
    const scrollElements = document.querySelectorAll(".service-card, .location-card, .step-card");
    
    const elementInView = (el, percentageScroll = 100) => {
      const elementTop = el.getBoundingClientRect().top;
      const elementHeight = el.getBoundingClientRect().height;
      
      return (
        elementTop <= 
        ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
      );
    };
    
    const displayScrollElement = (element) => {
      element.classList.add("scrolled");
    };
    
    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 80)) {
          displayScrollElement(el);
        }
      });
    };
    
    // Add initial styles for animation
    scrollElements.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "all 0.6s ease-in-out";
    });
    
    // Initialize animations
    window.addEventListener('scroll', () => {
      handleScrollAnimation();
    });
    
    // Trigger once on load
    handleScrollAnimation();
    
    // Navbar scroll effect
    const navbar = document.querySelector(".navbar");
    
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        navbar.style.padding = "1rem 5%";
        navbar.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.1)";
      } else {
        navbar.style.padding = "1.5rem 5%";
        navbar.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
      }
    });
    
    // Show animation effect for cards
    document.querySelectorAll(".scrolled").forEach(el => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
    
    // Search functionality (simplified demo)
    const searchBtn = document.querySelector(".search-btn");
    const searchInput = document.querySelector(".search-box input");
    
    searchBtn.addEventListener("click", () => {
      if (searchInput.value.trim() !== "") {
        alert(You searched for: ${searchInput.value});
        searchInput.value = "";
      }
    });
    
    // Enter key for search
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter" && searchInput.value.trim() !== "") {
        alert(You searched for: ${searchInput.value});
        searchInput.value = "";
      }
    });
    
    // CTA button action
    document.querySelector(".cta-btn").addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      setTimeout(() => {
        searchInput.focus();
      }, 1000);
    });
  });