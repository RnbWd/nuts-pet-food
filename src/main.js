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

// Enhanced scroll effect for navigation (add subtle background & shadow on scroll)
const nav = document.querySelector('nav');
function updateNavScrolledState() {
  if (!nav) return;
  if (window.scrollY > 8) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}
updateNavScrolledState();
window.addEventListener('scroll', updateNavScrolledState, { passive: true });

// (Removed SPA-like routing to restore standard single-page scrolling)

const price = '35,000 RP';
// Product data with ingredients and preview images (used by order select)
const productData = {
  'raw-chicken-tuna': {
    name: '🐟 Raw Chicken with Tuna',
    price,
    image: 'images/dog-transparent/dog-transparent150w.png',
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
    price,
    image: 'images/dog-transparent/dog-transparent150w.png',
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
    price,
    image: 'images/dog-transparent/dog-transparent150w.png',
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
    price,
    image: 'images/dog-transparent/dog-transparent150w.png',
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
    price,
    image: 'images/dog-transparent/dog-transparent150w.png',
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
    price,
    image: 'images/dog-transparent/dog-transparent150w.png',
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
    price,
    image: 'images/cat-transparent/cat-transparent150w.png',
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
    price,
    image: 'images/cat-transparent/cat-transparent150w.png',
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
    price,
    image: 'images/cat-transparent/cat-transparent150w.png',
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
    price,
    image: 'images/cat-transparent/cat-transparent150w.png',
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
    price,
    image: 'images/cat-transparent/cat-transparent150w.png',
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
    price,
    image: 'images/cat-transparent/cat-transparent150w.png',
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
    price,
    image: 'images/puppy-transparent/puppy-transparent150w.png',
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
    price,
    image: 'images/puppy-transparent/puppy-transparent150w.png',
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
    price,
    image: 'images/puppy-transparent/puppy-transparent150w.png',
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
const modalOrderLink = document.getElementById('modal-order-link');

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

      // Prefill WhatsApp order message
      if (modalOrderLink) {
        const base = 'https://wa.me/6287861808065';
        const message = `Hello! I would like to order: ${product.name} – ${product.price}. Could you please help with delivery to South/Central Bali?`;
        const url = `${base}?text=${encodeURIComponent(message)}`;
        modalOrderLink.href = url;
      }

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

// Initialize gallery - show all photos if gallery exists
if (photoItems.length > 0) {
  filterPhotos('all');
}

// Add click event listeners to filter buttons
if (galleryFilterBtns.length > 0) {
  galleryFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      galleryFilterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const filterCategory = btn.getAttribute('data-filter');
      filterPhotos(filterCategory);
    });
  });
}

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

// Play/pause story video when in view
(function initStoryVideoAutoplay() {
  const video = document.getElementById('storyVideo');
  if (!video) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    },
    { threshold: 0.35 }
  );
  io.observe(video);
})();

// ---------- Quick Order Form (WhatsApp) + Highlight selected product ----------
(function initQuickOrder() {
  const form = document.getElementById('quickOrderForm');
  if (!form) return;

  const productSelect = document.getElementById('orderProduct');
  const sizeFixed = '500g';
  const qtyInput = document.getElementById('orderQty');
  const infoName = document.getElementById('orderInfoName');
  const infoPrice = document.getElementById('orderInfoPrice');
  const infoIngredients = document.getElementById('orderInfoIngredients');
  const infoImage = document.getElementById('orderInfoImage');
  const infoSize = document.getElementById('orderInfoSize');

  function highlightProduct(productId) {
    document
      .querySelectorAll('.product-card')
      .forEach((c) => c.classList.remove('highlight'));
    const card = document.querySelector(`[data-product="${productId}"]`);
    if (card) {
      card.classList.add('highlight');
      // Ensure the category section is visible
      const section = card.closest('.product-section');
      if (section) {
        document
          .querySelectorAll('.product-section')
          .forEach((s) => s.classList.remove('active'));
        section.classList.add('active');
        // Update category nav active state
        const id = section.getAttribute('id');
        document.querySelectorAll('.category-btn').forEach((btn) => {
          btn.classList.toggle(
            'active',
            btn.getAttribute('data-category') === id
          );
        });
      }
      // Update preview image
      const img = card.querySelector('.product-image img');
      if (img) infoImage.src = img.src;
    }
  }

  function updatePreview(productId) {
    const data = productData[productId];
    if (!data) return;
    infoName.textContent = data.name;
    infoPrice.textContent = data.price;
    infoIngredients.innerHTML = '';
    data.ingredients.forEach((ing) => {
      const li = document.createElement('li');
      li.textContent = ing;
      infoIngredients.appendChild(li);
    });
    if (infoSize) infoSize.textContent = 'Size: 500g';
    // Prefer explicit preview image from product data, fallback to card image
    if (data.image) {
      infoImage.src = data.image;
    }
    highlightProduct(productId);
  }

  // Initialize with current select value
  if (productSelect && productSelect.value) {
    updatePreview(productSelect.value);
  }

  productSelect.addEventListener('change', (e) => {
    updatePreview(e.target.value);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const productId = productSelect.value;
    const size = sizeFixed;
    const qty = qtyInput.value || 1;
    const product = productData[productId];
    if (!product) return;
    const message = `Hi Nuts Pet Food! I'd like to order:\n\n• ${product.name} (${size})\n• Qty: ${qty}\n\nPlease confirm availability and delivery to South/Central Bali.`;
    const wa = `https://wa.me/6287861808065?text=${encodeURIComponent(message)}`;
    window.open(wa, '_blank');
  });
})();
