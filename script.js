// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Check if this is the contact button
        if (this.classList.contains('contact-btn')) {
            window.location.href = 'mailto:sirjanabhatta6@gmail.com';
            return;
        }
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation link highlight
window.addEventListener('scroll', () => {
    let fromTop = window.scrollY + 100;

    document.querySelectorAll('.nav-link').forEach(link => {
        let section = document.querySelector(link.getAttribute('href'));
        if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Hero Button click handler
document.querySelector('.btn-primary')?.addEventListener('click', () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
});

// "My Projects" button handler
document.querySelector('.btn-primary-filled')?.addEventListener('click', () => {
    const portfolioSection = document.querySelector('#portfolio');
    if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
});

// "Download CV" button handler
document.querySelector('.btn-secondary-outlined')?.addEventListener('click', () => {
    // Open Google Drive link to download CV
    window.open('https://drive.google.com/file/d/1fYyX0qs5aE3UhF12kv2EYOETxW_tW9gk/view?usp=sharing', '_blank');
});

// Add smooth hover effects for profile card (optional)
const profileCard = document.querySelector('.profile-image-wrapper');
if (profileCard) {
    document.addEventListener('mousemove', (e) => {
        const rect = profileCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Optional: Add subtle parallax effect if desired
        // profileCard.style.transform = `perspective(1000px) rotateY(${(x - rect.width/2) * 0.01}deg) rotateX(${(y - rect.height/2) * -0.01}deg)`;
    });
    
    profileCard.addEventListener('mouseleave', () => {
        // profileCard.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
    });
}

