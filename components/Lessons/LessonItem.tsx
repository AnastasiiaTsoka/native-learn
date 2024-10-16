import { View, Text, Pressable } from 'react-native';
import React from 'react';

interface LessonItemProps{
    lessonId: number,
    lessonTitle: string
}

const LessonItem = (props: LessonItemProps) => {
    const lessonId = props.lessonId;
    const lessonTitle = props.lessonTitle;
    

    return (
        <Pressable className='flex-row px-4 gap-3 items-center  '
            onPress={() => { console.log(lessonId) }}
        >
            <Text className='text-sm text-secondaryText'>{lessonId}</Text>
            <Text className='text-2xl text-mainText'>{lessonTitle}</Text>
        </Pressable>
    )
};

export default LessonItem;
