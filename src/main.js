import {
  PRODUCT_CATEGORIES,
  PRODUCT_SIZE,
  PRODUCTS,
  getCategory,
  getProduct,
} from './data/products.js';
import { buildWhatsAppOrderUrl, normalizeQuantity } from './order.js';

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (event) {
    const href = this.getAttribute('href');
    if (!href || href.length <= 1) return;

    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    window.scrollTo({
      top: target.offsetTop - 80,
      behavior: 'smooth',
    });
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  }
);

document.querySelectorAll('.animate-on-scroll').forEach((element) => {
  observer.observe(element);
});

const nav = document.querySelector('nav');

function updateNavScrolledState() {
  if (!nav) return;
  nav.classList.toggle('scrolled', window.scrollY > 8);
}

updateNavScrolledState();
window.addEventListener('scroll', updateNavScrolledState, { passive: true });

function renderProductOptions(select) {
  select.innerHTML = '';

  PRODUCT_CATEGORIES.forEach((category) => {
    const group = document.createElement('optgroup');
    group.label = category.label;

    category.productIds.forEach((productId) => {
      const product = getProduct(productId);
      if (!product) return;

      const option = document.createElement('option');
      option.value = productId;
      option.textContent = product.name;
      group.appendChild(option);
    });

    select.appendChild(group);
  });
}

function renderMenuPreview(container) {
  container.innerHTML = '';

  PRODUCT_CATEGORIES.forEach((category) => {
    const card = document.createElement('article');
    card.className = 'menu-card';

    const recipes = category.productIds
      .map((productId) => getProduct(productId)?.name)
      .filter(Boolean)
      .slice(0, 3)
      .join(', ');

    card.innerHTML = `
      <img src="${category.image}" alt="${category.label} preview" />
      <div>
        <h3>${category.label}</h3>
        <p>${category.description}</p>
        <span>${recipes}</span>
      </div>
    `;

    container.appendChild(card);
  });
}

function updateProductPreview(productId) {
  const product = getProduct(productId);
  if (!product) return;

  const category = getCategory(product.categoryId);
  const infoName = document.getElementById('orderInfoName');
  const infoPrice = document.getElementById('orderInfoPrice');
  const infoIngredients = document.getElementById('orderInfoIngredients');
  const infoImage = document.getElementById('orderInfoImage');
  const infoSize = document.getElementById('orderInfoSize');
  const infoCategory = document.getElementById('orderInfoCategory');

  if (infoName) infoName.textContent = product.name;
  if (infoPrice) infoPrice.textContent = product.price;
  if (infoSize) infoSize.textContent = `Size: ${PRODUCT_SIZE}`;
  if (infoCategory) infoCategory.textContent = category?.label ?? '';

  if (infoImage) {
    infoImage.src = product.image;
    infoImage.alt = `${product.name} preview`;
  }

  if (infoIngredients) {
    infoIngredients.innerHTML = '';
    product.ingredients.forEach((ingredient) => {
      const item = document.createElement('li');
      item.textContent = ingredient;
      infoIngredients.appendChild(item);
    });
  }
}

(function initMenuPreview() {
  const menuPreview = document.getElementById('menuPreview');
  if (menuPreview) renderMenuPreview(menuPreview);
})();

(function initQuickOrder() {
  const form = document.getElementById('quickOrderForm');
  const productSelect = document.getElementById('orderProduct');
  const qtyInput = document.getElementById('orderQty');

  if (!form || !productSelect || !qtyInput) return;

  renderProductOptions(productSelect);
  updateProductPreview(productSelect.value);

  productSelect.addEventListener('change', (event) => {
    updateProductPreview(event.target.value);
  });

  qtyInput.addEventListener('change', () => {
    qtyInput.value = normalizeQuantity(qtyInput.value);
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    window.open(
      buildWhatsAppOrderUrl(productSelect.value, qtyInput.value),
      '_blank',
      'noopener'
    );
  });
})();
