import { View, Text,Image,FlatList,ScrollView, TouchableOpacity} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { ListProps } from './Lessons/List';
import { images } from '@/constants/images';
import { useRouter } from 'expo-router';

interface CardProps {
    list: ListProps[],
    categoryTitle:string
};

const Card = (props: CardProps) => {
    const categoryTitle = props.categoryTitle;
    const list = props.list;
    const router = useRouter();
    const flatlistRef = useRef(null);
    const [slider, setSlider] = useState<ListProps[]>([]);

    // const handleSlider = () => {
    //     setSlider(slider => {...slider, list} )
    // };

    return (
        <View className='flex-col  px-4 mb-14'>
            <View className='flex-row  space-x-2 justify-between items-center px-4 w-full'>
                <View>
                    <Text className='text-2xl font-semibold text-mainText'>{categoryTitle}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => router.push('/lessons')}
                >
                    <Text className='text-sm font-light text-secondaryText'>View All</Text>
                </TouchableOpacity>
            </View>
            <View>
            <FlatList
                data={list}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                style={{paddingVertical:5}}
                // pagingEnabled
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{gap:10, paddingHorizontal:12}}
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
                // ListHeaderComponent={() => (

                // )}
                />
            </View>
        </View>
    )
};

export default Card;
