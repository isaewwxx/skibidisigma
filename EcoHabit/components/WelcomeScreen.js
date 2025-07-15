import React from 'react';
import { View, Text, Button } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to EcoHabit!</Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate('UserInterests')}
      />
    </View>
  );
};

export default WelcomeScreen;
