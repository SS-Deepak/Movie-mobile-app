import Icon from '@/constants/icons'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { OtpInput } from "react-native-otp-entry"
import { SafeAreaView } from 'react-native-safe-area-context'

interface Props {
  onSubmit: (password: string) => void;
}

const ForgotPasswordScreen = ({ onSubmit }: Props) => {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [otp, setOtp] = useState('');

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
      <Link href='/(public)/login-email' asChild>
        <TouchableOpacity>
          <Icon name='chevron-back-outline' color='#AAAAAC' size={25} />
        </TouchableOpacity>
      </Link>

      <View className='mt-10 gap-y-6'>
        <View>
          <Text className='text-4xl font-bold mt-5'>Forgot password</Text>
          <Text className='text-xl text-gray-200 mt-2 font-light'>We’ve just sent you a confirmation code to <Text className='font-bold text-black'>alex@nyauto.com</Text>.</Text>
        </View>

        <View>
          <Text className='text-lg text-gray-300 font-semibold'>Enter confirmation code</Text>
          <OtpInput
            numberOfDigits={6}
            focusColor="#68C0AB"
            autoFocus={false}
            blurOnFilled={true}
            disabled={false}
            type="alphanumeric"
            secureTextEntry={false}
            focusStickBlinkingDuration={500}
            onFocus={() => console.log("Focused")}
            onBlur={() => console.log("Blurred")}
            onTextChange={(text) => setOtp(text)}
            onFilled={(text) => console.log(`OTP is ${text}`)}
            textInputProps={{
              accessibilityLabel: "One-Time Password",
            }}
            textProps={{
              accessibilityRole: "text",
              accessibilityLabel: "OTP digit",
              allowFontScaling: false,
            }}
          />
          <Text className='text-md text-gray-400 mt-4 font-semibold'>Resending allowed in 25 seconds</Text>

          <TouchableOpacity>
            <Text className='text-md text-primary mt-4 font-semibold'>Resend Confirmation Code</Text>
          </TouchableOpacity>

        </View>

        <TouchableOpacity disabled={!email?.trim()} onPress={onPress}>
          <Text className={`h-16 w-full text-center py-4 text-lg font-semibold rounded-xl transition-all duration-200 ${!email?.trim()
            ? `bg-secondary text-gray-400`
            : `bg-primary text-white`
            }`}>Reset Password</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

export default ForgotPasswordScreen;