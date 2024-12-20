
import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE); // Use your Stripe secret key

export async function POST(request) {
  try {
    const { cartItems, customerInfo } = await request.json(); 


    // Map cart items to Stripe's format
    const lineItems = cartItems.map((item) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.description, // Product name
         
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
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
     
      // Redirect on success
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`, // Redirect on cancel
      metadata:{
        customerInfo: JSON.stringify(customerInfo),
        cartItems: JSON.stringify(cartItems)
      }
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