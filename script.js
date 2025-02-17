document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    // Add hamburger button to navbar
    const hamburger = document.createElement('button');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    navbar.appendChild(hamburger);

    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // View More functionality
    const viewMoreBtn = document.querySelector('.view-more-btn');
    const destinationsGrid = document.querySelector('.destinations-grid');
    
    viewMoreBtn.addEventListener('click', () => {
        destinationsGrid.classList.toggle('show-all');
        viewMoreBtn.textContent = destinationsGrid.classList.contains('show-all') 
            ? 'Show Less' 
            : 'View More Destinations';
    });
}); 