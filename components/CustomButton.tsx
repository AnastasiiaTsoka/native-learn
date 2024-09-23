import { TouchableOpacity ,Text} from 'react-native';
import React from 'react';
import { opacity } from 'react-native-reanimated/lib/typescript/Colors';

interface CustomButtonProps {
    title: string,
    handlePress: any,
    containerStyles: Object,
    textStyles?: Object,
    isLoading?:boolean,
};

const CustomButton = (props:CustomButtonProps) => {
    return (
        <TouchableOpacity
            onPress={props.handlePress}
            activeOpacity={0.7}
            className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center
                 ${props.containerStyles}
                 ${props.isLoading ? 'opacity-50' : ''}`}
            disabled={props.isLoading}     
        >
            <Text className={`text-background font-black text-lg ${props.textStyles}`}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
};

export default CustomButton;
