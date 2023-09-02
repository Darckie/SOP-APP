const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const nodemailer = require("nodemailer");

const port = 80;

//Middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//serving the static file

app.use(express.static(__dirname));

//get request

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/submit", (req, res) => {
  const { name, email } = req.body;
  console.log(name, email);
  // Create a Nodemailer transporter using your email service (e.g., Gmail)
  const transporter = nodemailer.createTransport({
    service: "Gmail", // email service
    auth: {
      user: "brijeshkunwar85@gmail.com", // Your email address
      pass: "hndasajmznwzqlqu", // Your email/app password
    },
    tls: {
      rejectUnauthorized: false, // Trust the self-signed certificate
    },
  });
  //email sender
  const mailOptions = {
    from: "brijeshkunwar85@gmail.com",
    to: email, // Send the email to the user's email address
    subject: "Thank you for submitting the form",
    text: `Hello ${name},\n\nThank you for submitting the form!`,
  };

  //  sent
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Form submitted successfully");
    }
  });
});

app.listen(port, () => {
  console.log("connection Stablished");
});
