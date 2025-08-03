// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href && href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  });
});

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach((el) => {
  observer.observe(el);
});

// Enhanced scroll effect for navigation
let lastScrollY = 0;
const nav = document.querySelector('nav');

// Product data with ingredients
const productData = {
  'raw-chicken-tuna': {
    name: '🐟 Raw Chicken with Tuna',
    price: '25,000 RP',
    ingredients: [
      'Fresh chicken breast and bone',
      'Premium tuna',
      'Organic green beans',
      'Fresh banana',
      'Organic rice & seaweed',
      'Natural vegetable oil',
    ],
  },
  'raw-chicken-gizzard': {
    name: '🥩 Raw Chicken with Gizzard',
    price: '25,000 RP',
    ingredients: [
      'Fresh chicken breast and bone',
      'Nutrient-rich chicken gizzard',
      'Organic green beans',
      'Fresh banana',
      'Organic rice & seaweed',
      'Natural vegetable oil',
    ],
  },
  'raw-chicken-liver': {
    name: '🐔 Raw Chicken with Liver',
    price: '25,000 RP',
    ingredients: [
      'Fresh chicken breast and bone',
      'Premium chicken liver',
      'Organic green beans',
      'Fresh banana',
      'Organic rice & seaweed',
      'Natural vegetable oil',
    ],
  },
  'cooked-chicken-tuna': {
    name: '🔥 Cooked Chicken with Tuna',
    price: '25,000 RP',
    ingredients: [
      'Tender chicken breast and bone',
      'Premium tuna',
      'Sweet potato',
      'Fresh pumpkin',
      'Garden carrots',
    ],
  },
  'cooked-chicken-gizzard': {
    name: '🔥 Cooked Chicken with Gizzard',
    price: '25,000 RP',
    ingredients: [
      'Tender chicken breast and bone',
      'Nutrient-rich chicken gizzard',
      'Sweet potato',
      'Fresh pumpkin',
      'Garden carrots',
    ],
  },
  'cooked-chicken-liver': {
    name: '🔥 Cooked Chicken with Liver',
    price: '25,000 RP',
    ingredients: [
      'Tender chicken breast and bone',
      'Premium chicken liver',
      'Sweet potato',
      'Fresh pumpkin',
      'Garden carrots',
    ],
  },
  'cat-chicken-tuna': {
    name: '🐟 Chicken with Tuna',
    price: '25,000 RP',
    ingredients: [
      'Fresh chicken breast and bone',
      'Premium tuna',
      'Fresh banana',
      'Green mustard',
      'Organic rice & seaweed',
      'Natural vegetable oil & molasses',
    ],
  },
  'cat-chicken-gizzard': {
    name: '🥩 Chicken with Gizzard',
    price: '25,000 RP',
    ingredients: [
      'Fresh chicken breast and bone',
      'Nutrient-rich chicken gizzard',
      'Fresh banana',
      'Green mustard',
      'Organic rice & seaweed',
      'Natural vegetable oil & molasses',
    ],
  },
  'cat-chicken-liver': {
    name: '🐔 Chicken with Liver',
    price: '25,000 RP',
    ingredients: [
      'Fresh chicken breast and bone',
      'Premium chicken liver',
      'Fresh banana',
      'Green mustard',
      'Organic rice & seaweed',
      'Natural vegetable oil & molasses',
    ],
  },
  'cat-mackerel-liver': {
    name: '🐟 Mackerel with Chicken Liver',
    price: '25,000 RP',
    ingredients: [
      'Fresh mackerel',
      'Premium chicken liver',
      'Fresh banana',
      'Green mustard',
      'Organic rice & seaweed',
      'Natural vegetable oil & molasses',
    ],
  },
  'cat-ocean-mackerel': {
    name: '🌊 Ocean Fish with Mackerel',
    price: '25,000 RP',
    ingredients: [
      'Premium ocean fish mix',
      'Fresh mackerel',
      'Fresh banana',
      'Green mustard',
      'Organic rice & seaweed',
      'Natural vegetable oil & molasses',
    ],
  },
  'cat-sardine-gizzard': {
    name: '🐟 Sardine with Chicken Gizzard',
    price: '25,000 RP',
    ingredients: [
      'Premium sardine',
      'Nutrient-rich chicken gizzard',
      'Fresh banana',
      'Green mustard',
      'Organic rice & seaweed',
      'Natural vegetable oil & molasses',
    ],
  },
  'puppy-chicken-tuna': {
    name: '🐟 Chicken with Tuna',
    price: '25,000 RP',
    ingredients: [
      'Fresh chicken breast and bone',
      'Premium tuna',
      'Fresh spinach',
      'Fresh banana',
      'Organic green beans',
      'Seaweed & natural vegetable oil',
    ],
  },
  'puppy-chicken-gizzard': {
    name: '🥩 Chicken with Gizzard',
    price: '25,000 RP',
    ingredients: [
      'Fresh chicken breast and bone',
      'Nutrient-rich chicken gizzard',
      'Fresh spinach',
      'Fresh banana',
      'Organic green beans',
      'Seaweed & natural vegetable oil',
    ],
  },
  'puppy-chicken-liver': {
    name: '🐔 Chicken with Liver',
    price: '25,000 RP',
    ingredients: [
      'Fresh chicken breast and bone',
      'Premium chicken liver',
      'Fresh spinach',
      'Fresh banana',
      'Organic green beans',
      'Seaweed & natural vegetable oil',
    ],
  },
};

// Category navigation functionality
const categoryBtns = document.querySelectorAll('.category-btn');
const productSections = document.querySelectorAll('.product-section');

categoryBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons and sections
    categoryBtns.forEach((b) => b.classList.remove('active'));
    productSections.forEach((s) => s.classList.remove('active'));

    // Add active class to clicked button
    btn.classList.add('active');

    // Show corresponding section
    const targetCategory = btn.getAttribute('data-category');
    const targetSection = document.getElementById(targetCategory);
    if (targetSection) {
      targetSection.classList.add('active');
    }
  });
});

// Modal functionality
const modal = document.getElementById('productModal');
const modalImage = document.getElementById('modal-product-image');
const modalName = document.getElementById('modal-product-name');
const modalPrice = document.getElementById('modal-product-price');
const modalIngredients = document.getElementById('modal-ingredients-list');
const closeModal = document.querySelector('.close');

// Function to get the appropriate image based on product category
function getProductImage(productId) {
  // Find the product card with this productId
  const productCard = document.querySelector(`[data-product="${productId}"]`);
  if (productCard) {
    const productImage = productCard.querySelector('.product-image img');
    if (productImage) {
      return productImage.src;
    }
  }

  // Fallback to default dog image if not found
  return './images/dog-transparent/dog-transparent150w.png';
}

// Open modal when product card is clicked
document.querySelectorAll('.product-card').forEach((card) => {
  card.addEventListener('click', () => {
    const productId = card.getAttribute('data-product');
    const product = productData[productId];

    if (product) {
      modalImage.src = getProductImage(productId);
      modalImage.alt = product.name;
      modalName.textContent = product.name;
      modalPrice.textContent = product.price;

      // Clear and populate ingredients
      modalIngredients.innerHTML = '';
      product.ingredients.forEach((ingredient) => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        modalIngredients.appendChild(li);
      });

      modal.classList.add('show');
    }
  });
});

// Close modal functionality
closeModal.addEventListener('click', () => {
  modal.classList.remove('show');
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
  }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('show')) {
    modal.classList.remove('show');
  }
});

// Features slideshow functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;
let slideInterval;

function showSlide(index) {
  // Remove all classes from all slides and dots
  slides.forEach((slide) => slide.classList.remove('active', 'prev', 'next'));
  dots.forEach((dot) => dot.classList.remove('active'));

  // Add active class to current slide and dot
  slides[index].classList.add('active');
  dots[index].classList.add('active');

  // Add prev and next classes for smoother animation
  const prevIndex = (index - 1 + totalSlides) % totalSlides;
  const nextIndex = (index + 1) % totalSlides;
  slides[prevIndex].classList.add('prev');
  slides[nextIndex].classList.add('next');

  currentSlide = index;
}

function nextSlide() {
  const next = (currentSlide + 1) % totalSlides;
  showSlide(next);
}

function prevSlide() {
  const prev = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(prev);
}

function startAutoSlide() {
  clearInterval(slideInterval); // Clear any existing interval
  slideInterval = setInterval(nextSlide, 8000); // Change slide every 8 seconds
}

function stopAutoSlide() {
  clearInterval(slideInterval);
}

function resetAutoSlide() {
  stopAutoSlide();
  startAutoSlide();
}

// Arrow navigation
document.querySelector('.slide-arrow--next').addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});

document.querySelector('.slide-arrow--prev').addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});

// Dot navigation
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
    resetAutoSlide();
  });
});

// Pause auto-slide on hover
const slideshowContainer = document.querySelector('.slideshow-container');
slideshowContainer.addEventListener('mouseenter', stopAutoSlide);
slideshowContainer.addEventListener('mouseleave', startAutoSlide);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    e.preventDefault();
    prevSlide();
    resetAutoSlide();
  } else if (e.key === 'ArrowRight') {
    e.preventDefault();
    nextSlide();
    resetAutoSlide();
  }
});

// Touch/Swipe functionality for mobile
let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;
let isSwiping = false;

function handleSwipe() {
  const swipeThreshold = 50; // Minimum distance for a swipe
  const verticalThreshold = 100; // Maximum vertical movement to still count as horizontal swipe

  const horizontalDistance = Math.abs(touchEndX - touchStartX);
  const verticalDistance = Math.abs(touchEndY - touchStartY);

  // Only process horizontal swipes
  if (
    horizontalDistance > swipeThreshold &&
    verticalDistance < verticalThreshold
  ) {
    if (touchEndX < touchStartX) {
      // Swipe left - next slide
      nextSlide();
      resetAutoSlide();
    } else if (touchEndX > touchStartX) {
      // Swipe right - previous slide
      prevSlide();
      resetAutoSlide();
    }
  }
}

// Add touch event listeners to slideshow container
slideshowContainer.addEventListener(
  'touchstart',
  (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
    isSwiping = true;
    stopAutoSlide(); // Stop auto-slide when user starts touching
  },
  { passive: true }
);

slideshowContainer.addEventListener(
  'touchmove',
  (e) => {
    if (!isSwiping) return;
    // Prevent default scroll behavior during horizontal swipes
    const currentX = e.changedTouches[0].screenX;
    const currentY = e.changedTouches[0].screenY;
    const horizontalDistance = Math.abs(currentX - touchStartX);
    const verticalDistance = Math.abs(currentY - touchStartY);

    if (horizontalDistance > verticalDistance && horizontalDistance > 10) {
      e.preventDefault();
    }
  },
  { passive: false }
);

slideshowContainer.addEventListener(
  'touchend',
  (e) => {
    if (!isSwiping) return;
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
    isSwiping = false;
    startAutoSlide(); // Resume auto-slide after touch ends
  },
  { passive: true }
);

// Prevent context menu on long press for better mobile experience
slideshowContainer.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});

// Start the slideshow
startAutoSlide();

// Photo Gallery Filtering Functionality
const galleryFilterBtns = document.querySelectorAll('.filter-btn');
const photoItems = document.querySelectorAll('.photo-item');

function filterPhotos(category) {
  photoItems.forEach((item) => {
    const itemCategory = item.getAttribute('data-category');

    if (category === 'all' || itemCategory === category) {
      item.classList.remove('hidden');
      item.classList.add('visible');
    } else {
      item.classList.add('hidden');
      item.classList.remove('visible');
    }
  });
}

// Initialize gallery - show all photos
filterPhotos('all');

// Add click event listeners to filter buttons
galleryFilterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons
    galleryFilterBtns.forEach((b) => b.classList.remove('active'));

    // Add active class to clicked button
    btn.classList.add('active');

    // Get filter category and filter photos
    const filterCategory = btn.getAttribute('data-filter');
    filterPhotos(filterCategory);
  });
});

// Photo Gallery Lightbox Functionality (Optional Enhancement)
photoItems.forEach((item) => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    const overlay = item.querySelector('.photo-overlay');
    const title = overlay ? overlay.querySelector('h4').textContent : '';
    const category = overlay
      ? overlay.querySelector('.photo-category').textContent
      : '';

    // Create lightbox modal
    const lightbox = document.createElement('div');
    lightbox.className = 'photo-lightbox';
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <span class="lightbox-close">&times;</span>
        <img src="${img.src}" alt="${img.alt}" class="lightbox-image">
        <div class="lightbox-info">
          <span class="lightbox-category">${category}</span>
          <h3 class="lightbox-title">${title}</h3>
        </div>
      </div>
    `;

    document.body.appendChild(lightbox);

    // Show lightbox
    setTimeout(() => lightbox.classList.add('show'), 10);

    // Close lightbox functionality
    const closeBtn = lightbox.querySelector('.lightbox-close');
    closeBtn.addEventListener('click', () => {
      lightbox.classList.remove('show');
      setTimeout(() => document.body.removeChild(lightbox), 300);
    });

    // Close on background click
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('show');
        setTimeout(() => document.body.removeChild(lightbox), 300);
      }
    });

    // Close with Escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        lightbox.classList.remove('show');
        setTimeout(() => document.body.removeChild(lightbox), 300);
        document.removeEventListener('keydown', handleEscape);
      }
    };
    document.addEventListener('keydown', handleEscape);
  });
});
