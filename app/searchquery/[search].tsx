import { View, Text, SafeAreaView, ScrollView, ActivityIndicator, Pressable, Touchable, TouchableOpacity } from 'react-native';
import React, { useState, useRef } from 'react';
import { useLocalSearchParams } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Audio } from 'expo-av';
import { recordSpeech } from '@/functions/recordingSpeech';
import { transcribSpeech } from '@/functions/transcribeSpeech';
// import { useAudioRecorder, RecordingOptions, AudioModule, RecordingPresets } from 'expo-audio';

const Search = () => {
    const { search } = useLocalSearchParams();
    const [transcribedSpeech, setTranscribedSpeech] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    const [isTranscribing, setIsTranscribing] = useState(false);
    const audioRecordingRef = useRef(new Audio.Recording());

    // const audioRecorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);

    const startRecording = async () => {
        setIsRecording(true);
        await recordSpeech(audioRecordingRef);
     };

    const stopRecording = async () => {
        setIsRecording(false);
        setIsTranscribing(true);
        try {
            const speechTrascript = await transcribSpeech(audioRecordingRef);
            setTranscribedSpeech(speechTrascript || '');
        } catch (e) {
            console.error(e);
        } finally {
            setIsTranscribing(false);
        }
        
     };

    return (
        <SafeAreaView className='bg-background h-full'>
            <ScrollView contentContainerStyle={{ height: '100%'}}>
                <View className='w-full px-4  flaex-col space-y-7 items-center'>
                    <Text className='text-3xl text-mainText'>{search}</Text>
                    <View className=' h-3/4 p-2 bg-secondaryText items-start border rounded-xl'>
                        {isTranscribing ? <ActivityIndicator size='small' color={'#000'}></ActivityIndicator> :
                            <Text>{transcribedSpeech || "Hello World! My name is Boris. The sun is shinning."}</Text>
                        }
                    </View>

                    <Pressable className='h-14 w-14 border rounded-full bg-red-600 items-center justify-center'
                        style={{ opacity: isRecording || isTranscribing ? 0.5 : 1 }}
                        disabled={isRecording || isTranscribing}
                        onPressIn={startRecording}
                        onPressOut={stopRecording}
                    >
                        {isRecording ? <ActivityIndicator size='small' color={'white'}></ActivityIndicator> :<Ionicons name="mic" size={36} color="white" />}
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

export default Search;
