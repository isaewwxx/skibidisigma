const userProfileSchema = {
  name: 'UserProfile',
  properties: {
    fullName: 'string',
    email: 'string',
    location: 'string',
    lifestyleTags: 'string[]',
    sustainabilityGoals: 'string[]',
    preferredHabitsTime: 'string',
    engagementStyle: 'string',
  },
};

const habitSchema = {
  name: 'Habit',
  properties: {
    habitName: 'string',
    category: 'string',
    difficultyLevel: 'string',
    impactScore: 'int',
    requiredInputs: 'string[]',
    suggestedSchedule: 'string',
    completionStatus: 'bool',
    aiFeedbackNotes: 'string',
  },
};

const challengeSchema = {
  name: 'Challenge',
  properties: {
    challengeName: 'string',
    individualOrGroup: 'string',
    goalAndMetric: 'string',
    startDate: 'date',
    endDate: 'date',
    rewardTier: 'string',
  },
};

export { userProfileSchema, habitSchema, challengeSchema };
