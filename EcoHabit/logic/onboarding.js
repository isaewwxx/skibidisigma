import { userProfileSchema } from '../data/schema';

const onboardingFlow = {
  welcomeScreen: () => {
    // Show welcome screen with animation and explainer carousel
  },
  userInterests: () => {
    // User selects sustainability interests and sets goals
  },
  aiBuilder: (interests) => {
    // AI builder assigns baseline habits and initial carbon score
    const baselineHabits = [];
    if (interests.vegan) {
      baselineHabits.push('Eat a plant-based meal');
    }
    if (interests.commuter) {
      baselineHabits.push('Use public transport');
    }
    if (interests.urbanGardener) {
      baselineHabits.push('Water your plants');
    }
    const initialCarbonScore = 100;
    return { baselineHabits, initialCarbonScore };
  },
  notifications: () => {
    // Daily habit notifications enabled via engagement flow builder
  },
};

export default onboardingFlow;
