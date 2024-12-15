import Stripe from 'stripe';
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE);

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const session_id = searchParams.get('session_id');

  if (!session_id) {
    return new Response(JSON.stringify({ error: 'Session ID is required' }), { status: 400 });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);
    return new Response(JSON.stringify({ session }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching session:', error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}