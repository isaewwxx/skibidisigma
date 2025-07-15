import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import challengeParticipationFlow from '../logic/challenge';

const ChallengesScreen = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    setChallenges(challengeParticipationFlow.browseChallenges());
  }, []);

  const handleJoinChallenge = (challenge) => {
    challengeParticipationFlow.joinChallenge(challenge);
  };

  const renderItem = ({ item }) => (
    <View>
      <Text>{item.challengeName}</Text>
      <Text>Goal: {item.goalAndMetric}</Text>
      <Button title="Join" onPress={() => handleJoinChallenge(item)} />
    </View>
  );

  return (
    <View>
      <FlatList
        data={challenges}
        renderItem={renderItem}
        keyExtractor={(item) => item.challengeName}
      />
    </View>
  );
};

export default ChallengesScreen;
