import { View, Text, TextInput, TouchableOpacity, Pressable,Alert} from 'react-native';
import React from 'react';
import { router, usePathname } from 'expo-router';
import { useState } from 'react';


interface SearcheInputProps {
    value?: string,
    otherStyles?: string,
    handleChangeText?: any
    keyboardType?: string
}

const SearcheInput = (props: SearcheInputProps) => {
    const pathname = usePathname();
    const [query, setQuery] = useState('');

    return (
        <View className='border rounded-2xl border-secondary w-full h-16 px-4 bg-background 
             items-center flex-row space-x-4'>
            <TextInput
                className='flex-1 text-secondaryText font-semibold text-base mt-0.5'
                value={query}
                placeholder={'Help you to understand the word... '}
                placeholderTextColor={'#99857D'}
                onChangeText={(e) => setQuery(e)}
            /> 
                
            <Pressable
                onPress={() => {
                    if (!query) {
                        return Alert.alert('Missing query',
                            'Please input something to search results across database')
                    }
                    if (pathname.startsWith('/searchquery')) {
                        router.setParams({query})
                    }else {
                        router.push(`/searchquery/${query}`)
                    }
                }}
            >
                <View className='w-[20px] h-[20px] bg-secondary'>

                </View>
            </Pressable>
        </View>
    )
};

export default SearcheInput;
