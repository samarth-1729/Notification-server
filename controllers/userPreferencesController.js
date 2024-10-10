const UserPreference = require('../models/UserPreference');

exports.setPreferences = async (req, res) => {
  try {
    const { userId, eventType, channels } = req.body;

    const preference = await UserPreference.findOneAndUpdate(
      { userId, eventType },
      { channels },
      { upsert: true, new: true }
    );

    res.status(200).json(preference);
  } catch (error) {
    console.error('Error setting user preferences:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getPreferences = async (req, res) => {
  try {
    const { userId } = req.params;

    const preferences = await UserPreference.find({ userId });

    res.status(200).json(preferences);
  } catch (error) {
    console.error('Error getting user preferences:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
