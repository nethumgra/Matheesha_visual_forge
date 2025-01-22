   // Smooth scroll functionality
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Active link switching
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

   // Smooth scroll for CTA buttons
   document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
});

// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

    // Progress bar animation
    const progressBars = document.querySelectorAll('.skill-progress');

const animateProgressBars = () => {
    progressBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.width = percent + '%';
    });
};

// Intersection Observer for animation trigger
const aboutSection = document.querySelector('.about');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgressBars();
        }
    });
}, { threshold: 0.5 });

observer.observe(aboutSection);

// Portfolio Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    const filter = button.dataset.filter;
    
    portfolioItems.forEach(item => {
        const category = item.dataset.category;
        if(filter === 'all' || category === filter) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});
});

// Hover effect for touch devices
portfolioItems.forEach(item => {
item.addEventListener('touchstart', () => {
    item.classList.add('hover-effect');
});

item.addEventListener('touchend', () => {
    setTimeout(() => {
        item.classList.remove('hover-effect');
    }, 500);
});
});

   // Add intersection observer for service cards
   const serviceCards = document.querySelectorAll('.service-card');
    
   const serviceObserver = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
           if(entry.isIntersecting) {
               entry.target.style.opacity = 1;
               entry.target.style.transform = 'translateY(0)';
           }
       });
   }, { threshold: 0.1 });

   serviceCards.forEach(card => {
       card.style.opacity = 0;
       card.style.transform = 'translateY(30px)';
       card.style.transition = 'all 0.6s ease-out';
       serviceObserver.observe(card);
   });
     // Intersection Observer for testimonial cards
     const testimonialCards = document.querySelectorAll('.testimonial-card');
    
     const testimonialObserver = new IntersectionObserver((entries) => {
         entries.forEach(entry => {
             if(entry.isIntersecting) {
                 entry.target.style.opacity = 1;
                 entry.target.style.transform = 'translateY(0)';
             }
         });
     }, { threshold: 0.1 });
 
     testimonialCards.forEach(card => {
         card.style.opacity = 0;
         card.style.transform = 'translateY(30px)';
         card.style.transition = 'all 0.6s ease-out';
         testimonialObserver.observe(card);
     });
        // Form Submission
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Add your form submission logic here
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });

    // Animation for contact section
    const contactObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    const contactItems = document.querySelectorAll('.contact-form, .info-item');
    contactItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s ease-out';
        contactObserver.observe(item);
    });
       // Footer Navigation Smooth Scroll
       document.querySelectorAll('.footer-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });