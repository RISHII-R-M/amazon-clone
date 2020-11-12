const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HmfSOCdN7rPCpZDKq4MLV8JBmp4oj17MpnE6bGQ52Z69AfMyGLyNhsbaE76cKvmumT3arzHublogTS3bV6Ce4e900The3CP2m"
);

//api

//app config
const app = express();

//middleware
app.use(cors({ origin: true }));
app.use(express.json());

//api roots
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payment/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request recived Boom!! for this amount ", total);
  const paymentIntent = await stripe.paymentIntent.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//listen command
exports.api = functions.https.onRequest(app)
