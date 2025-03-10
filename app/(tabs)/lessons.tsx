import { View, Text, FlatList,Image, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants/images';
import LessonsList from '@/components/Lessons/LessonsList';

const Lessons = () => {
    return (
        <SafeAreaView className='bg-background h-full'>
            <ScrollView contentContainerStyle={{ height: '100%',backgroundColor:'#0d0e1c' }}>
            <View className='my-6 px-4 '>
                <Text className='text-primary text-3xl font-semibold'> Lessons</Text>
            </View>
            <View>
                <LessonsList/>
            </View>
            {/* <FlatList
                data={[{ id: '1', title:'Alphabet' }, { id: '2', title:'Fruits' }, { id: '3',title:'Famely' }]}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <Text className='text-3xl text-mainText'>{item.id} { item.title}</Text>
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
            /> */}

         </ScrollView>  
       </SafeAreaView>
    )
};

export default Lessons;