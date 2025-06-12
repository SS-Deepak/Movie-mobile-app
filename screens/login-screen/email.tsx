import InputBox from '@/components/atom/InputBox'
import Icon from '@/constants/icons'
import { images } from '@/constants/images'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface Props {
  onSuccess: (email: string) => void;
}

const LoginEmailScreen = ({ onSuccess }: Props) => {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const router = useRouter();

  const onSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setValidEmail(false);
      return;
    }

    setValidEmail(true);
    console.log('Email is valid:', email);
    router.push('/login/password')
  }

  const onChangeText = (text: string) => {
    setEmail(text);
    setValidEmail(true);
  }

  return (
    <SafeAreaView className='flex-1 px-5 py-10' edges={['top', 'bottom']}>
      <Image source={images.logo} />

      <View className='mt-10 gap-y-6'>
        <View>
          <Text className='text-4xl font-bold mt-5'>Hello 👋</Text>
          <Text className='text-xl text-gray-200 mt-2 font-light' >It’s great to see you! Enter your business email to sign into the platform.</Text>
        </View>

        <View>
          <InputBox
            value={email}
            onChangeText={onChangeText}
            placeholder='Business email'
            preIcon={<Icon name='person-outline' size={20} color={'#AAAAAC'} />}
            inputClassName={`${!validEmail ? '!border-error' : ''}`}
          />
          <Text className={`text-error text-sm mt-1 ${validEmail ? 'hidden' : 'block'}`}>
            Please enter a valid email address.
          </Text>
        </View>

        <TouchableOpacity disabled={!email?.trim()} onPress={onSubmit}>
          <Text className={`h-16 w-full text-center py-4 text-lg font-semibold rounded-xl transition-all duration-200 ${!email?.trim()
            ? `bg-secondary text-gray-400`
            : `bg-primary text-white`
            }`}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default LoginEmailScreen;