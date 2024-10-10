const EmailService = require('./EmailService');
const SMSService = require('./SMSService');
const WhatsAppService = require('./WhatsAppService');

class NotificationFactory {
  static createNotificationService(channel) {
    switch (channel) {
      case 'email':
        return new EmailService();
      case 'sms':
        return new SMSService();
      case 'whatsapp':
        return new WhatsAppService();
      default:
        throw new Error(`Unsupported notification channel: ${channel}`);
    }
  }
}

module.exports = NotificationFactory;

