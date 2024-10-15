import { View, Text, FlatList, } from 'react-native';
import React from 'react';
import LessonItem from './LessonItem';

const LessonsList = () => {
    return (
        <FlatList
            data={[{ id: '1', title:'Alphabet' }, { id: '2', title:'Welcome' }, { id: '3',title:'Family' }, { id: '4',title:'Body' }, { id: '5',title:'Fruits' }, { id: '6',title:'Restaurant' }]}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                // <View className='flex-row px-4 gap-3 items-center'>
                //     <Text className='text-sm text-secondaryText'>{item.id}.</Text>
                //     <Text className='text-2xl text-mainText'>{ item.title}</Text>
                // </View>
                <LessonItem
                    lessonTitle={item.title}
                    lessonId={item.id}
                />
            )}
        />

    )
};

export default LessonsList;
