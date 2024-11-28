import { View, Text, SafeAreaView, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import LessonCard from '@/components/Lessons/LessonCard';
import { Alphabet } from '@/components/Lessons/List';

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
    <SafeAreaView className='bg-background h-full '>
      {/* <Text className='text-3xl font-semibold text-secondaryText'>{category}</Text> */}
      <FlatList
        data={Alphabet}
        renderItem={({item,index}) => (
          <LessonCard
            letter={item.letter}
            id={item.id}
            transcription={item.transcription}
            sound={item.sound}
          />
        )}
        horizontal
      />
      
    </SafeAreaView>
  )
};

export default LessonCategory;
