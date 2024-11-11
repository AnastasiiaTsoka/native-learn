import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import { useLocalSearchParams } from 'expo-router';

const Search = () => {
    const { search } = useLocalSearchParams();
    return (
        <SafeAreaView className='bg-background h-full'>
            <Text className='text-3xl text-mainText'>{search}</Text>
        </SafeAreaView>
    )
};

export default Search;
