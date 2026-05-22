import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const payload = await request.json();

  if (!payload?.items?.length) {
    return NextResponse.json({ ok: false, message: 'Cart is empty' }, { status: 400 });
  }

  // Production note:
  // Replace this mock response with Stripe Checkout Session, PayPal Orders API,
  // or Shopify Storefront/Checkout integration after your merchant account is ready.
  return NextResponse.json({
    ok: true,
    orderId: `LUN-${Date.now()}`,
    message: 'Mock order created. Connect a real payment provider before launch.'
  });
}
