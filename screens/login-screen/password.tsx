import InputBox from '@/components/atom/InputBox'
import Icon from '@/constants/icons'
import { images } from '@/constants/images'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface Props {
  onSubmit: (password: string) => void;
}

const LoginPasswordScreen = ({ onSubmit }: Props) => {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const onPress = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setValidEmail(false);
      return;
    }

    setValidEmail(true);
    console.log('Email is valid:', email);
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
          <Text className='text-4xl font-bold mt-5'>Enter password</Text>
          <Text className='text-xl text-gray-200 mt-2 font-light'>You are signing in with <Text className='font-bold text-black'>alex@nyauto.com</Text>.
            Please fill in your password and sign in.</Text>
        </View>

        <View>
          <InputBox
            secureTextEntry={!showPassword}
            value={email}
            onChangeText={onChangeText}
            placeholder='Password'
            preIcon={<Icon name='lock-closed-outline' size={20} color={'#AAAAAC'} />}
            postIcon={<Icon name={!showPassword ? 'eye-outline' : 'eye-off-outline'} size={20} color={'#AAAAAC'} />}
            onPostIconPress={() => setShowPassword(!showPassword)}
            inputClassName={`${!validEmail ? '!border-error' : ''}`}
          />
          <Text className={`text-error text-sm mt-1 ${validEmail ? 'hidden' : 'block'}`}>
            Incorrect password
          </Text>
        </View>

        <TouchableOpacity disabled={!email?.trim()} onPress={onPress}>
          <Text className={`h-16 w-full text-center py-4 text-lg font-semibold rounded-xl transition-all duration-200 ${!email?.trim()
            ? `bg-secondary text-gray-400`
            : `bg-primary text-white`
            }`}>Sign in</Text>
        </TouchableOpacity>

        <Link href='/(public)/forgot-password' className='mt-4' asChild>
          <TouchableOpacity>
            <Text className='text-center text-primary '>Forgot password?</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  )
}

export default LoginPasswordScreen;