import { TouchableOpacity ,Text, Pressable} from 'react-native';
import React from 'react';

interface CustomButtonProps {
    title: string,
    handlePress: any,
    containerStyles: Object,
    textStyles?: Object,
    isLoading?:boolean,
};

const CustomButton = (props:CustomButtonProps) => {
    return (
        <Pressable
            onPress={props.handlePress}
            // activeOpacity={0.7}
            className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center
                 ${props.containerStyles}
                 ${props.isLoading ? 'opacity-50' : ''}`}
            disabled={props.isLoading}     
        >
            <Text className={`text-background font-black text-lg ${props.textStyles}`}>
                {props.title}
            </Text>
        </Pressable>
    )
};

export default CustomButton;
