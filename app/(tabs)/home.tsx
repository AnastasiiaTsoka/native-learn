import { View, Text, FlatList, Image, Animated,ScrollView} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants/images';
import Card from '@/components/Card';
import { List } from '@/components/Lessons/List';

const Home = () => {
  return (
    <SafeAreaView className='bg-background h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='my-6 px-4 space-y-6'>
          <View className='justify-between items-start  flex-row mb-6'>
            <View>
              <Text className='font-medium text-sm text-secondaryText'>Welcome back</Text>
              <Text className='text-2xl font-semibold text-secondaryText'>User</Text>
            </View>
            <View className='mt-[-15px]'>
              <Image
                source={images.logoSmall}
                resizeMode='contain'
                style={{
                  width: 64,
                  height:72
                }}
              />
            </View>
          </View>
        </View>
        <Card categoryTitle='Lessons' list={List}/>
        <Card categoryTitle='Reading' list={List}/>
        <Card categoryTitle='Video' list={List}/>
        <Card categoryTitle='Audition' list={List}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home;
