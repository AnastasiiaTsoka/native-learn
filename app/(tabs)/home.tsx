import { View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants/images';
import Card from '@/components/Card';

const Home = () => {
  return (
    <SafeAreaView className='bg-background'>
      <FlatList
        data={[{id:'1'},{id:'2'},{id:'3'}]}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          // <Text className='text-3xl text-secondaryText'>{ item.id}</Text>
          <Card item={item.id}/>
        )}
        ListHeaderComponent={() => (
          <View className='my-6 px-4 space-y-6'>
            <View className='justify-between items-start flex-row mb-6'>
              <View>
                <Text className='font-medium text-sm text-secondaryText'>Welcome back</Text>
                <Text className='text-2xl font-semibold text-secondaryText'>User</Text>
              </View>
              <View className='mt-[-15px]'>
                <Image
                  source={images.logoSmall}
                  // className='w-[36px] h-[40px]'
                  // style={{width:36, height:40}}
                  resizeMode='contain'
                  style={{
                    width: 64,
                    height:72
                  }}
                />
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

export default Home;
