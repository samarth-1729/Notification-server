# File: README.md

npm install

npm start

## Environment Variables

Make sure to set the following environment variables in your `.env` file:

- `PORT`: define port (default:3000)
- `MONGODB_URI`: give mongo url
- `EMAIL_HOST`: SMTP host
- `EMAIL_PORT`: SMTP port
- `EMAIL_USER`: Email username
- `EMAIL_PASS`: Email password
- `EMAIL_FROM`: Sender email address
- `TWILIO_ACCOUNT_SID`: Twilio account SID
- `TWILIO_AUTH_TOKEN`: Twilio auth token
- `TWILIO_PHONE_NUMBER`: Twilio phone number for SMS
- `TWILIO_WHATSAPP_NUMBER`: Twilio WhatsApp number

## API Endpoints

### Set User Preferences

POST /api/preferences


Request body:
```json
{
  "userId": "user123",
  "eventType": "order_placed",
  "channels": {
    "email": true,
    "sms": false,
    "whatsapp": true
  }
}
```

### Get User Preferences


GET /api/preferences/:userId


### Trigger Event Notifications


POST /api/notifications/send

Request body:
```json
{
  "userId": "user123",
  "eventType": "order_placed",
  "message": "Your order has been placed successfully!"
}
```

Example using axios:

```javascript
const axios = require('axios');

async function triggerNotification(userId, eventType, message) {
  try {
    await axios.post('http://your-microservice-url/api/notifications/send', {
      userId,
      eventType,
      message
    });
    console.log('Notification triggered successfully');
  } catch (error) {
    console.error('Failed to trigger notification:', error);
  }
}

triggerNotification('user123', 'order_placed', 'Your order has been placed successfully!');
```