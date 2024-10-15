import { View, Text } from 'react-native';
import React from 'react';

interface CardProps {
    item:any
};

const Card = (props:CardProps) => {
    return (
        <View className='flex-col items-center px-4 mb-14'>
            <View className='flex-row  space-x-2 justify-between items-center px-4 w-full'>
                <View>
                    <Text className='text-2xl font-semibold text-mainText'>Lessons</Text>
                </View>
                <View>
                    <Text className='text-sm font-light text-secondaryText'>View All</Text>
                </View>
                

            </View>
        </View>
    )
};

export default Card;
