import React, { useState } from 'react';
import { View, Text, Button, CheckBox } from 'react-native';

const UserInterestsScreen = ({ navigation }) => {
  const [interests, setInterests] = useState({
    vegan: false,
    commuter: false,
    urbanGardener: false,
  });

  const handleCheckboxChange = (interest) => {
    setInterests({ ...interests, [interest]: !interests[interest] });
  };

  return (
    <View>
      <Text>What are your interests?</Text>
      <View>
        <CheckBox
          value={interests.vegan}
          onValueChange={() => handleCheckboxChange('vegan')}
        />
        <Text>Vegan</Text>
      </View>
      <View>
        <CheckBox
          value={interests.commuter}
          onValueChange={() => handleCheckboxChange('commuter')}
        />
        <Text>Commuter</Text>
      </View>
      <View>
        <CheckBox
          value={interests.urbanGardener}
          onValueChange={() => handleCheckboxChange('urbanGardener')}
        />
        <Text>Urban Gardener</Text>
      </View>
      <Button
        title="Next"
        onPress={() => navigation.navigate('NotificationPermission')}
      />
    </View>
  );
};

export default UserInterestsScreen;
