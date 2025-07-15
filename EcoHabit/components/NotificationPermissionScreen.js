import React from 'react';
import { View, Text, Button } from 'react-native';

const NotificationPermissionScreen = ({ navigation }) => {
  const handleEnableNotifications = () => {
    // Logic to enable notifications
    navigation.navigate('Home');
  };

  return (
    <View>
      <Text>Enable daily habit notifications?</Text>
      <Button title="Enable" onPress={handleEnableNotifications} />
      <Button title="Skip" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default NotificationPermissionScreen;
