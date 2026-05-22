import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const payload = await request.json();
  console.log('LUNASSA contact form payload:', payload);

  return NextResponse.json({
    ok: true,
    message: 'Mock contact form received. Connect an email/CRM provider before production.'
  });
}
