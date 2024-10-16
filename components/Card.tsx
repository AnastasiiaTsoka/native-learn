import { View, Text,Image,FlatList,ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { ListProps } from './Lessons/List';
import { images } from '@/constants/images';

interface CardProps {
    list: ListProps[],
    categoryTitle:string
};

const Card = (props: CardProps) => {
    const categoryTitle = props.categoryTitle;
    const list = props.list;
    const flatlistRef = useRef(null);
    console.log(flatlistRef);
    


    return (
        <View className='flex-col items-center px-4 mb-14'>
            <View className='flex-row  space-x-2 justify-between items-center px-4 w-full'>
                <View>
                    <Text className='text-2xl font-semibold text-mainText'>{categoryTitle}</Text>
                </View>
                <View>
                    <Text className='text-sm font-light text-secondaryText'>View All</Text>
                </View>
            </View>
            <FlatList
                ref={flatlistRef}
                data={list}
                keyExtractor={(item) => item.title}
                horizontal
                pagingEnabled
                // showsHorizontalScrollIndicator={true}
                renderItem={({ item }) => (
                    <TouchableOpacity >
                        <View className='flex-col my-2'>
                            <Image
                            source={item.img}
                            resizeMode='contain'
                            style={{
                                width: 200,
                                height: 160,
                                borderRadius:16
                            }}
                            /> 
                            <Text className='text-mainText'>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                
            />
        </View>
    )
};

export default Card;
