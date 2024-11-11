import { View, Text, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';

const LessonCategory = () => {

  const navigation = useNavigation();
  const { category } = useLocalSearchParams();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle:category,
    })
  },[]);

  return (
    <SafeAreaView className='bg-background h-full'>
      <Text className='text-3xl font-semibold text-secondaryText'>{category}</Text>
    </SafeAreaView>
  )
};

export default LessonCategory;
