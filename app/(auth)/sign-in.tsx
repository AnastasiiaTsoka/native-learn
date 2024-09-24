import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { Link } from 'expo-router';

const SignIn = () => {
    const [form,setForm] = useState({
        email: '',
        password:''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = () => {

    };

    return (
        <SafeAreaView className='bg-background h-full'>
            <ScrollView>
                <View className='w-full min-h-[75vh] justify-center px-4 mt-6'>
                    <Text className='text-2xl text-mainText mt-10 font-semibold'>Lon In to BYELingual</Text>
                    <FormField
                        title='Email'
                        value={form.email}
                        handleChangeText={(e:any) => setForm({
                            ...form,
                            email:e
                        })}
                        otherStyles='mt-7'
                        keyboardType='email-address'
                    />
                    <FormField
                        title='Password'
                        value={form.password}
                        handleChangeText={(e:any) => setForm({
                            ...form,
                            password:e
                        })}
                        otherStyles='mt-7'
                    />
                    <CustomButton
                        title='Sign In'
                        handlePress={submit}
                        containerStyles={'mt-7'}
                        isLoading={isSubmitting}
                    />
                      <View className='justify-center pt-5 flex-row gap-2'>
                        <Text className='text-lg text-secondaryText font-normal'>
                            Don't have an account?
                        </Text>
                        <Link href={'/(auth)/sign-up'} className='text-lg
                        font-semibold text-secondary'>Sign Up</Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

export default SignIn;
