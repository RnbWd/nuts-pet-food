import { PRODUCT_SIZE, WHATSAPP_NUMBER, getProduct } from './data/products.js';

export function normalizeQuantity(value) {
  const quantity = Number.parseInt(value, 10);
  return Number.isFinite(quantity) && quantity > 0 ? quantity : 1;
}

export function buildWhatsAppOrderMessage(product, quantity) {
  return [
    "Hi Nuts Pet Food! I'd like to order:",
    '',
    `- ${product.name} (${PRODUCT_SIZE})`,
    `- Qty: ${normalizeQuantity(quantity)}`,
    '',
    'Please confirm availability and delivery to South/Central Bali.',
  ].join('\n');
}

export function buildWhatsAppOrderUrl(productId, quantity) {
  const product = getProduct(productId);

  if (!product) {
    throw new Error(`Unknown product id: ${productId}`);
  }

  const message = buildWhatsAppOrderMessage(product, quantity);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
