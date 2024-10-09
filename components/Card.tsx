import { View, Text } from 'react-native';
import React from 'react';

interface CardProps {
    item:any
};

const Card = (props:CardProps) => {
    return (
        <View className='flex-col items-center px-4 mb-14'>
            <View className='flex-row gap-3 items-start'>
                <View className='justify-center items-center flex-row flex-1'>
                    <View className='w-[46px] h-[46px] rounded-lg border border-secondary 
                    justify-center items-center p-0.5'>

                    </View>
                    <View className='justify-center flex-1 ml-3 gap-y-1'>
                        <Text className='text-mainText font-semibold text-sm'>
                            Card title blsfgdfgfdf
                        </Text>
                    </View>
                </View>
            </View>
            <Text className='text-2xl text-mainText'>Card</Text>
        </View>
    )
};

export default Card;
