import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import dailyHabitFlow from '../logic/dailyHabit';

const DailyHabitScreen = () => {
  const [habit, setHabit] = useState(null);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setHabit(dailyHabitFlow.recommendHabit());
  }, []);

  const handleComplete = () => {
    dailyHabitFlow.updateHabit(habit, true);
    setCompleted(true);
  };

  const handleSnooze = () => {
    dailyHabitFlow.updateHabit(habit, false);
    setHabit(dailyHabitFlow.recommendHabit());
  };

  return (
    <View>
      {habit && !completed ? (
        <View>
          <Text>Today's Habit:</Text>
          <Text>{habit.habitName}</Text>
          <Text>Reason: {habit.reason}</Text>
          <Text>Estimated Impact: {habit.estimatedImpact}</Text>
          <Button title="Complete" onPress={handleComplete} />
          <Button title="Snooze" onPress={handleSnooze} />
        </View>
      ) : (
        <Text>You have completed your habit for today!</Text>
      )}
    </View>
  );
};

export default DailyHabitScreen;
