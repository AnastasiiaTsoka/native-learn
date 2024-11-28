import { Audio } from 'expo-av';
import { MutableRefObject } from 'react';

export const recordSpeech = async (audioRecordingRef: MutableRefObject<Audio.Recording>) => {
    console.log(audioRecordingRef);
    try {
        await Audio.setAudioModeAsync({
            allowsRecordingIOS: true,
            playsInSilentModeIOS: true,
        });

        const doneRecordings = audioRecordingRef?.current?._isDoneRecording;
        if (doneRecordings) {
            audioRecordingRef.current = new Audio.Recording;
        }

        const permissionResponse = await Audio.requestPermissionsAsync();
        console.log('PERMRESPONSE!!!!',permissionResponse.status)
        if (permissionResponse.status === 'granted') {
            const recordingStatus = await audioRecordingRef?.current?.getStatusAsync();
            console.log('PERMIS::::::::::', recordingStatus)
            if (!recordingStatus?.canRecord) {
                const recordingOptions = {
                    ...Audio.RecordingOptionsPresets.HIGH_QUALITY,
                    android: {
                        extension: '.amr',
                        outputFormat: Audio.AndroidOutputFormat.AMR_WB,
                        audioEncoder: Audio.AndroidAudioEncoder.AMR_WB,
                        sampleRate: 16000,
                        numberOfChannels: 1,
                        bitRate: 128000,
                    },
                    ios: {
                        extension: '.wav',
                        audioQuality: Audio.IOSAudioQuality.HIGH,
                        sampleRate: 44100,
                        numberOfChannels: 1,
                        bitRate: 128000,
                        linearPCMBitDepth: 16,
                        linearPCMIsBigEndian: false,
                        linearPCMIsFloat: false,
                    },
                };

                await audioRecordingRef?.current?.prepareToRecordAsync(recordingOptions)
                    .then(() => console.log('Prepared recording instance!'))
                    .catch((e) => console.log('Failed to prepare recording instance!',e))
                ;
            }
            await audioRecordingRef.current.startAsync();
        } else {
            console.error('Permission to record audio is required!');
            return;
        }
    } catch (e) {
        console.error('Failed to start recording', e);
        return;
    }

};

