const nodemailer = require('nodemailer');
const NotificationService = require('./NotificationService');

class EmailService extends NotificationService {
  constructor() {
    super();
    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  }

  async send(userId, message) {
    // fetch user email based on their user id, here we will use the example email
    const userEmail = `${userId}@example.com`;

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: userEmail,
      subject: 'Notification',
      text: message
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log(`Email sent to ${userEmail}`);
    } catch (error) {
      console.error(`Failed to send email to ${userEmail}:`, error);
      throw error;
    }
  }
}

