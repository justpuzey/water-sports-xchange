
const router = require('express').Router();
const stripe = require('stripe')('sk_test_51Ix9BkIK69n6NqQMQP17bVlrtDH6vUtsMkdKxY5f0uYVU8g4e3F091ulIjTEKtkmdBnZUsnQorPH7dOBOQzEORZa00qSBzB3Pj'); // Add your Secret Key Here


router.post('/create-checkout-session', async (req, res) => {
  // console.log('prod-detail', req.body)
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: req.body.name,//req.body.item
          },
          unit_amount: req.body.cost * 100,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:3001/checkout/success',
    cancel_url: 'http://localhost:3001/checkout/cancel'
  });

  res.json({ id: session.id });
});


router.get('/success', (req, res) => {
  res.render('success')
})

router.get('/cancel', (req, res) => {
  res.render('cancel')
})
// router.get('/checkout', (req, res) => {
//   res.render('checkout')
// })

// router.post('/charge', (req, res) => {
//   try {
//     stripe.customers
//       .create({
//         name: req.body.name,
//         email: req.body.email,
//         source: req.body.stripeToken
//       })
//       .then(customer =>
//         stripe.charges.create({
//           amount: req.body.amount * 100,
//           currency: "usd",
//           customer: customer.id
//         })
//       )
//       .then(() => res.render('completed'))
//       .catch(err => console.log(err));
//   } catch (err) {
//     res.send(err);
//   }
// });

module.exports = router;