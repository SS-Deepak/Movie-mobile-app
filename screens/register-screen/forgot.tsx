import Icon from '@/constants/icons'
import { Link, useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { OtpInput } from "react-native-otp-entry"
import { SafeAreaView } from 'react-native-safe-area-context'

interface Props {
  onSubmit: (password: string) => void;
}

const ForgotPasswordScreen = ({ onSubmit }: Props) => {
  const [otp, setOtp] = useState('');
  const [invalidOtp, setInvalidOtp] = useState(false);
  const router = useRouter();

  const onPress = () => {
    if(!otp || otp.length !== 6) {
      setInvalidOtp(true);
      return;
    }
    console.log('OTP submitted:', otp);
    setInvalidOtp(true);
    setTimeout(() => {
      setInvalidOtp(false);
    }, 2000);

    router.push('/(public)/reset-password')
  }

  const onChangeText = (text: string) => {
    setOtp(text);
    setInvalidOtp(false);
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
            focusColor={invalidOtp ? "#E74B4BCC" : "#68C0AB"}
            autoFocus={false}
            blurOnFilled={true}
            disabled={false}
            type="alphanumeric"
            secureTextEntry={false}
            focusStickBlinkingDuration={500}
            onFocus={() => console.log("Focused")}
            onBlur={() => console.log("Blurred")}
            onTextChange={onChangeText}
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
          <Text className='text-md text-gray-400 mt-4 font-semibold'>
            {invalidOtp? <Text className='text-[#E74B4B]'>Wrong code. </Text> : null}
            Resending allowed in 25 seconds</Text>

          <TouchableOpacity>
            <Text className='text-md text-primary mt-4 font-semibold'>Resend Confirmation Code</Text>
          </TouchableOpacity>

        </View>

        <TouchableOpacity disabled={invalidOtp} onPress={onPress}>
          <Text className={`h-16 w-full text-center py-4 text-lg font-semibold rounded-xl transition-all duration-200 ${invalidOtp
            ? `bg-secondary text-gray-400`
            : `bg-primary text-white`
            }`}>Reset Password</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

export default ForgotPasswordScreen;