import { WHATSAPP_NUMBER, EXTRA_CONNECTION_PRICE } from "./constants";

export interface WhatsAppOrderDetails {
  planName: string;
  planPrice: number;
  proxyEnabled: boolean;
  proxyPrice: number;
  extraConnections: number;
  /** Per-plan unit price for one extra connection over the full term. */
  extraConnectionPrice?: number;
  brandName?: string;
}

export function calculateOrderTotal(
  order: Omit<WhatsAppOrderDetails, "brandName" | "planName">
): number {
  const unitPrice = order.extraConnectionPrice ?? EXTRA_CONNECTION_PRICE;
  return (
    order.planPrice +
    (order.proxyEnabled ? order.proxyPrice : 0) +
    order.extraConnections * unitPrice
  );
}

export function buildWhatsAppCheckoutUrl(order: WhatsAppOrderDetails): string {
  const brand = order.brandName ?? "the service";
  const unitPrice = order.extraConnectionPrice ?? EXTRA_CONNECTION_PRICE;
  const extraConnectionsPrice = order.extraConnections * unitPrice;
  const total = calculateOrderTotal({
    planPrice: order.planPrice,
    proxyEnabled: order.proxyEnabled,
    proxyPrice: order.proxyPrice,
    extraConnections: order.extraConnections,
    extraConnectionPrice: order.extraConnectionPrice,
  });

  const lines = [
    `Hi — I'd like to order ${brand}.`,
    "",
    `Plan: ${order.planName} (£${order.planPrice.toFixed(2)})`,
  ];

  if (order.proxyEnabled) {
    lines.push(`Secure Proxy: Yes (+£${order.proxyPrice.toFixed(2)})`);
  }

  if (order.extraConnections > 0) {
    lines.push(
      `Extra Connections: ${order.extraConnections} × £${unitPrice.toFixed(2)} (+£${extraConnectionsPrice.toFixed(2)})`
    );
  }

  lines.push(
    "",
    `Total: £${total.toFixed(2)}`,
    "",
    "Please send me the payment details. Thanks!"
  );

  const message = lines.join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export interface WhatsappFallbackMessage {
  planName: string;
  proxyOn: boolean;
  extraConnections: number;
  total: number;
  currency: string;
}

/**
 * Message used when /checkout degrades to WhatsApp — either the hub reports no
 * store available, or the hub call itself failed. Distinct from
 * buildWhatsAppCheckoutUrl, which is the pricing-modal happy path.
 */
export function buildWhatsappMessage({
  planName,
  proxyOn,
  extraConnections,
  total,
  currency,
}: WhatsappFallbackMessage): string {
  const parts = [`Hi, I'd like to complete my ${planName} order.`];

  const addons: string[] = [];
  if (proxyOn) addons.push("Proxy Protection");
  if (extraConnections > 0) {
    addons.push(
      `${extraConnections} Extra Connection${extraConnections > 1 ? "s" : ""}`
    );
  }

  if (addons.length > 0) {
    parts.push(`Add-ons: ${addons.join(", ")}.`);
  }

  parts.push(`Total: ${currency}${total.toFixed(2)}.`);
  parts.push(
    "The checkout page wasn't available — can you help me complete the order here?"
  );

  return parts.join(" ");
}
