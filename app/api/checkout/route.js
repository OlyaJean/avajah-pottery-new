import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE); // Use your Stripe secret key

export async function POST(request) {
  try {
    const { cartItems } = await request.json(); // Receive cart data from frontend

    // Map cart items to Stripe's format
    const lineItems = cartItems.map((item) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.description, // Product name
          description: item.category, // Optional description
        },
        unit_amount: Math.round(item.price * 100), // Price in cents
      },
      quantity: item.quantity,
    }));

    // Create a Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'], // Accept card payments
      mode: 'payment', // For one-time payments
      line_items: lineItems,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`, // Redirect on success
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`, // Redirect on cancel
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error creating Checkout Session:', error);
    return new Response(
      JSON.stringify({ message: error.message }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
}