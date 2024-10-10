const UserPreference = require('../models/UserPreference');
const NotificationFactory = require('../services/NotificationFactory');

exports.sendNotification = async (req, res) => {
  try {
    const { userId, eventType, message } = req.body;

    const userPreference = await UserPreference.findOne({ userId, eventType });

    if (!userPreference) {
      return res.status(404).json({ message: 'User preferences not found' });
    }

    const enabledChannels = Object.entries(userPreference.channels)
      .filter(([_, enabled]) => enabled)
      .map(([channel, _]) => channel);

    const notificationPromises = enabledChannels.map(channel => {
      const notificationService = NotificationFactory.createNotificationService(channel);
      return notificationService.send(userId, message);
    });

    await Promise.all(notificationPromises);

    res.status(200).json({ message: 'Notifications sent successfully' });
  } catch (error) {
    console.error('Error sending notifications:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};