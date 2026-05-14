import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

import {
  DISPLAY_WHATSAPP_NUMBER,
  PRODUCT_CATEGORIES,
  PRODUCT_SIZE,
  PRODUCTS,
  WHATSAPP_NUMBER,
  getProduct,
} from '../src/data/products.js';
import {
  buildWhatsAppOrderMessage,
  buildWhatsAppOrderUrl,
  normalizeQuantity,
} from '../src/order.js';

test('every category points at valid products', () => {
  const categorizedIds = new Set();

  for (const category of PRODUCT_CATEGORIES) {
    assert.ok(category.id, 'category id is required');
    assert.ok(category.label, `${category.id} label is required`);
    assert.ok(category.productIds.length > 0, `${category.id} has products`);

    for (const productId of category.productIds) {
      categorizedIds.add(productId);
      assert.ok(PRODUCTS[productId], `${productId} exists in PRODUCTS`);
      assert.equal(PRODUCTS[productId].categoryId, category.id);
    }
  }

  assert.deepEqual(categorizedIds, new Set(Object.keys(PRODUCTS)));
});

test('products have the content needed for menu and order preview', () => {
  for (const [productId, product] of Object.entries(PRODUCTS)) {
    assert.ok(product.name, `${productId} has a name`);
    assert.ok(product.price, `${productId} has a price`);
    assert.ok(product.image, `${productId} has an image`);
    assert.doesNotMatch(
      product.image,
      /^images\//,
      `${productId} image should be imported so Vite includes it in dist`,
    );
    assert.ok(product.ingredients.length >= 3, `${productId} has ingredients`);
  }
});

test('category images are Vite-managed asset URLs', () => {
  for (const category of PRODUCT_CATEGORIES) {
    assert.ok(category.image, `${category.id} has an image`);
    assert.doesNotMatch(
      category.image,
      /^images\//,
      `${category.id} image should be imported so Vite includes it in dist`,
    );
  }
});

test('quantity is normalized for WhatsApp orders', () => {
  assert.equal(normalizeQuantity('3'), 3);
  assert.equal(normalizeQuantity('0'), 1);
  assert.equal(normalizeQuantity('-2'), 1);
  assert.equal(normalizeQuantity('abc'), 1);
});

test('WhatsApp order URL uses the confirmed number and selected product', () => {
  const product = getProduct('cooked-chicken-tuna');
  const message = buildWhatsAppOrderMessage(product, 2);
  const url = buildWhatsAppOrderUrl('cooked-chicken-tuna', 2);

  assert.match(url, new RegExp(`^https://wa\\.me/${WHATSAPP_NUMBER}\\?text=`));
  assert.match(decodeURIComponent(url), /Cooked Chicken with Tuna/);
  assert.match(message, new RegExp(`\\(${PRODUCT_SIZE}\\)`));
  assert.match(message, /Qty: 2/);
});

test('homepage uses only the confirmed customer WhatsApp number', () => {
  const html = readFileSync(new URL('../src/index.html', import.meta.url), 'utf8');

  assert.match(html, new RegExp(WHATSAPP_NUMBER, 'g'));
  assert.match(html, new RegExp(DISPLAY_WHATSAPP_NUMBER.replaceAll('+', '\\+')));
  assert.doesNotMatch(html, /6281999376938/);
  assert.doesNotMatch(html, /\+62 819-9937-6938/);
});

test('removed legacy sections stay removed from the homepage', () => {
  const html = readFileSync(new URL('../src/index.html', import.meta.url), 'utf8');

  assert.doesNotMatch(html, /productModal/);
  assert.doesNotMatch(html, /features-slideshow/);
  assert.doesNotMatch(html, /photo-lightbox/);
});
