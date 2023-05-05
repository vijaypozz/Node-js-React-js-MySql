exports.getNewEmailTemplate = (name, link) => {
const a = 
`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Email Template</title>
  </head>
  <body>
    <table style="width: 100%; max-width: 600px; margin: 0 auto; border-collapse: collapse;">
      <tr>
        <td style="background-color: #f7f7f7; padding: 20px; text-align: center;">
          <h1 style="font-size: 24px;">Welcome to My Website</h1>
          <p style="font-size: 16px;">Hi there,</p>
          <p style="font-size: 16px;">Thank you for signing up for my website. Please verify your email address to complete your registration.</p>
          <a href="#" style="display: inline-block; background-color: #4caf50; color: #fff; padding: 10px 20px; text-decoration: none; font-size: 16px; border-radius: 5px; margin-top: 20px;">Verify Email Address</a>
        </td>
      </tr>
      <tr>
        <td style="background-color: #fff; padding: 20px; text-align: center;">
          <p style="font-size: 14px; color: #999;">If you did not sign up for our website, please ignore this email.</p>
        </td>
      </tr>
    </table>
  </body>
</html>`
let message = a

  return message
}
