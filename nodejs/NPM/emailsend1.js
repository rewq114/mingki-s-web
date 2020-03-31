var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rewq114@gmail.com',
    pass: 'alsrl126^^'
  }
});

var mailOptions = {
  from: 'rewq114@gmail.com',
  to: 'rewq114@hyundai.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

// Multiple Receivers
// To send an email to more than one receiver, add them to the "to" property of the mailOptions object, separated by commas:
//
// Example
// Send email to more than one address:
//
// var mailOptions = {
//   from: 'youremail@gmail.com',
//   to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// }
// Send HTML
// To send HTML formatted text in your email, use the "html" property instead of the "text" property:
//
// Example
// Send email containing HTML:
//
// var mailOptions = {
//   from: 'youremail@gmail.com',
//   to: 'myfriend@yahoo.com',
//   subject: 'Sending Email using Node.js',
//   html: '<h1>Welcome</h1><p>That was easy!</p>'
// }
