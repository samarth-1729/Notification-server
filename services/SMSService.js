const twilio = require('twilio');
const NotificationService = require('./NotificationService');

class SMSService extends NotificationService {
  constructor() {
    super();
    this.client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
  }

  async send(userId, message) {
    // fetch user phone based on their user id, here we will use the example phone
    const userPhone = `+1${userId.padStart(10, '0')}`;

    try {
      await this.client.messages.create({
        body: message,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: userPhone
      });
      console.log(`SMS sent to ${userPhone}`);
    } catch (error) {
      console.error(`Failed to send SMS to ${userPhone}:`, error);
      throw error;
    }
  }
}
