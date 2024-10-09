import { View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native';
import React, { useState } from 'react';

interface FormFieldProps {
    title: string,
    value: string,
    otherStyles: string,
    handleChangeText: any
    keyboardType?: string
    placeholder?:string
}

const FormField = (props: FormFieldProps) => {
    
    const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${props.otherStyles}`}>
          <Text className='text-base text-gray-100 font-medium'>{props.title}</Text>
      <View className='border-2 border-slate-800 w-full h-16 px-4 bg-slate-800 rounded-2xl
           focus:border-secondary items-center'
          >
            <TextInput
                  className='flex-1 text-secondaryText font-semibold text-base'
                  value={props.value}
                  placeholder={props.placeholder}
                  placeholderTextColor={'#c2b8b2'}
                  onChangeText={props.handleChangeText}
                  secureTextEntry={props.title === 'Password' && !showPassword}
              /> 
              {props.title === 'Password' && (
                  <Pressable
                      onPress={()=> setShowPassword(!showPassword)}
                  >
                      
                  </Pressable>
              )}
          </View>
    </View>
  )
}

export default FormField;
