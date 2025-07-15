const engagementLogic = {
  positiveReinforcement: () => {
    // "You're reducing the equivalent of 12 plastic bottles this week 🌊 Keep it up!"
    const messages = [
      "You're reducing the equivalent of 12 plastic bottles this week 🌊 Keep it up!",
      "Great job! You're making a real difference.",
      "You're an eco-warrior! Keep up the great work.",
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  },
  aiTriggeredNudges: (lastActivity) => {
    // After 3 days inactivity: “Want to reboot with a mini challenge?”
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
    if (lastActivity < threeDaysAgo) {
      return 'Want to reboot with a mini challenge?';
    }
    return null;
  },
  milestoneAlerts: (carbonOffset) => {
    // “You've earned your Bronze Footprint Badge 🏅 – Check out your stats!”
    if (carbonOffset > 100) {
      return "You've earned your Bronze Footprint Badge 🏅 – Check out your stats!";
    }
    return null;
  },
};

export default engagementLogic;
