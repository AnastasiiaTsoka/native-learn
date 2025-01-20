import {
    View, Text, SafeAreaView, ScrollView, ActivityIndicator,
    Pressable, Touchable, TouchableOpacity,Button
} from 'react-native';
import React, { useState, useRef } from 'react';
import { useLocalSearchParams } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Audio } from 'expo-av';
import { recordSpeech } from '@/functions/recordingSpeech';
import { transcribSpeech } from '@/functions/transcribeSpeech';
import * as FileSystem from 'expo-file-system';
import { Platform } from 'react-native';



const Search = () => {
    const { search } = useLocalSearchParams();
    const [transcribedSpeech, setTranscribedSpeech] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    const [isTranscribing, setIsTranscribing] = useState(false);
    const audioRecordingRef = useRef(new Audio.Recording());


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


    // const [recording, setRecording] = useState() as any;
    // const [recordings, setRecordings] = useState([]) as any;

    // const startRecording = async () => {
    //     try {
    //         const perm = await Audio.requestPermissionsAsync();
    //         if (perm.status === 'granted') {
    //             await Audio.setAudioModeAsync({
    //                 allowsRecordingIOS: true,
    //                 playsInSilentModeIOS: true,
    //             });
    //             const { recording } = await Audio.Recording.createAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
    //             setRecording(recording);
    //         }
    //     } catch (e) {
    //         console.error('Didnt record!!!!', e);
    //         return;
    //     }
    //  };
    // const stopRecording = async () => { 
    //     setRecording(undefined);
    //     await recording.stopAndUnloadAsync();
    //     let allrecordings = [...recordings];
    //     const { sound, status } = await recording.createNewLoadedSoundAsync();

    //     const base64Uri = await FileSystem.readAsStringAsync(recording.getURI(), {
    //         encoding: FileSystem.EncodingType.Base64,
    //     });
    //     const audioConfig = {
    //         encoding: Platform.OS === 'ios' ? 'LINEAR16' : 'AMR_WB',
    //         sampleRateHerrtz: Platform.OS === 'ios' ? 44100 : 16000,
    //         languageCode: 'en-US',
    //     };


    //     allrecordings.push({
    //         sound: sound,
    //         duration: getDuractionFormatted(status.durationMillis),
    //         file: recording.getURI(),
    //         body: JSON.stringify({
    //             audioUrl: base64Uri,
    //             config: audioConfig,
    //         })
    //     });

    //     setRecordings(allrecordings);
    //     await Audio.setAudioModeAsync({
    //         allowsRecordingIOS: false,
    //         playsInSilentModeIOS: false,
    //     });

       
    //     // console.log('BASE64',base64Uri)

    // };
    // const getDuractionFormatted = (milliseconds: any) => {
    //     const minutes = milliseconds / 1000 / 60;
    //     const seconds = Math.round((minutes - Math.floor(minutes)) * 60);
    //     return seconds < 10 ? `${Math.floor(minutes)}:0${seconds}` : `${Math.floor(minutes)}:${seconds} `;
    //  };
    // const getRecordingLines = () => { 
    //     return recordings.map((recordingLines:any,index:any) => {
    //         return (
    //             <View key={index}>
    //                 <Text>
    //                     Recording #{index + 1} | {recordingLines.duration}
    //                 </Text>
    //                 <Button title={'play'} onPress={() => recordingLines.sound.replayAsync()}></Button>
    //             </View>
    //         )
    //     });
    // };
    // const clearRecordingLines = () => {
    //     setRecordings([]);
    // };

    // console.log('AAAAAAAAAAAAAAAAAAAAAAA', recordings)

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
                    {/* <Button title={recording ? 'Stop Recording' : 'Start Recording'}
                        onPress={recording ? stopRecording : startRecording}
                    ></Button>
                    {getRecordingLines()}
                    <Button title={recordings.length > 0 ? 'Clear Recordings' : ''}
                        onPress={clearRecordingLines}
                    ></Button> */}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

export default Search;
