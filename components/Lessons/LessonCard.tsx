import { View, Text,Button, Pressable } from 'react-native';
import React from 'react';
import Tts from 'react-native-tts';
import { useEffect } from 'react';
import * as Speech from 'expo-speech';
import Ionicons from '@expo/vector-icons/Ionicons';

interface LessonCardProps{
  letter:string,
  id:string,
  transcription: string,
  sound:string,
}

// const voices = window.speechSynthesis.getVoices();
// console.log(voices);

const LessonCard = (props: LessonCardProps) => {
  const letter = props.letter;
  const sound = props.sound;
  const id = props.id;
  const transcription = props.transcription;

  const soundPlay = (word:string) => {
    const utterance = new SpeechSynthesisUtterance(word);
    // utterance.pitch = 1; // Adjust pitch (0 is lowest, 2 is highest)
    // utterance.rate = 1;  // Adjust speed (0.1 is slowest, 10 is fastest)
    // utterance.volume = 1; // Set volume (0 is mute, 1 is max)
    window.speechSynthesis.speak(utterance); 
  };

  const expoSpeak = (word:string) => {
    Speech.speak(word);
  }

  return (
    <View className='justify-center items-center m-16 '>
      <View className='w-72 h-80 bg-secondary justify-center items-center border border-secondary rounded-xl flex-col
      space-y-3'>
        <Text className='text-mainText font-extrabold text-9xl'>{letter}</Text>
        <Text className='text-primary font-medium text-4xl'>{transcription}</Text>
        {/* <View>
          <Button title="Speak" onPress={() => soundPlay(sound)} />
          <Button title="Speak" onPress={() => expoSpeak(sound)} />
        </View> */}
        <Pressable
          onPress={() => expoSpeak(sound) }
        >
          <View >
            <Ionicons name="megaphone-outline" size={24} color="#EBEBE4" />
          </View>
        </Pressable>
       
      </View>
     
    </View>
  )
};

export default LessonCard;
