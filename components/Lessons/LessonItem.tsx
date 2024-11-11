import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

interface LessonItemProps{
    lessonId: number,
    lessonTitle: string
}

const LessonItem = (props: LessonItemProps) => {
    const lessonId = props.lessonId;
    const lessonTitle = props.lessonTitle;
    const router = useRouter();

    return (
        <Pressable className='flex-row px-4 gap-3 items-center  '
            onPress={(lessonId) => router.push(`/lessonscategory/${lessonTitle}`)}
        >
            <Text className='text-sm text-secondaryText'>{lessonId}</Text>
            <Text className='text-2xl text-mainText'>{lessonTitle}</Text>
        </Pressable>
    )
};

export default LessonItem;
