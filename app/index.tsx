import { View, Text, ScrollView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Redirect,router } from 'expo-router';
import '../global.css';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '@/components/CustomButton';
import { images } from '../constants/images';


const App = () => {
  return (
    <SafeAreaView className='bg-background h-full'>
      <ScrollView contentContainerStyle={{ height: '100%',backgroundColor:'#0d0e1c' }}>
        <View className='w-full justify-center items-center min-h-[85vh] px-4'>
          <Image
            source={images.logoBye}
            style={{
              width:420,
              height:260
            }}
            resizeMode='contain'
          />
          <View className='relative mt-5'>
            <Text className='text-sm text-secondaryText font-bold text-center'>Discover Endless Possibilities with 
                <Text className='text-1xl text-primary font-bold text-center'> BYELingual</Text>
            </Text>
          </View> 
          <CustomButton
              title='Continue with Email'
              // handlePress={() => router.push('/(auth)/sign-in')}
              handlePress={() => router.push('/(tabs)/home')}
              containerStyles="w-full mt-20"
          />
        </View>
      </ScrollView>
          <StatusBar backgroundColor='#0d0e1c' style='light'/>
    </SafeAreaView>
  )
}

export default App;
