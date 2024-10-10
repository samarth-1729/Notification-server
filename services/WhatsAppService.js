const twilio = require('twilio');
const NotificationService = require('./NotificationService');

class WhatsAppService extends NotificationService {
  constructor() {
    super();
    this.client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
  }

  async send(userId, message) {
    // fetch user phone based on their user id, here we will use the example phone
    const userWhatsApp = `whatsapp:+1${userId.padStart(10, '0')}`;

    try {
      await this.client.messages.create({
        body: message,
        from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
        to: userWhatsApp

      });
      console.log(`WhatsApp message sent to ${userWhatsApp}`);
    } catch (error) {
      console.error(`Failed to send WhatsApp message to ${userWhatsApp}:`, error);
      throw error;
    }
  }
}

