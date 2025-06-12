import InputBox from '@/components/atom/InputBox'
import Icon from '@/constants/icons'
import { images } from '@/constants/images'
import { useRouter } from 'expo-router'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

interface Props {
  onSubmit: (password: string) => void;
}

interface ValidatorCardItemProps {
  status: 'valid' | 'invalid' | 'default';
  text: string;
}

const ResetPasswordScreen = ({ onSubmit }: Props) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showValidators, setShowValidators] = useState(false);
  const router = useRouter();

  const onPress = () => {
    router.push('/(private)/home')
  }

  const validation = useMemo(() => {
    const atleastOneNumber = /(?=.*[0-9])/;
    const atleastOneUppercase = /(?=.*[A-Z])/;
    const atleastOneLowercase = /(?=.*[a-z])/;
    const atleastOneSpecialChar = /(?=.*[@#$%&])/;
    const atleastEightCharacters = /.{8,}/;
    const onlyAllowedCharacters = /^[A-Za-z0-9@#$%&]*$/;

    const number = atleastOneNumber.test(password || '');
    const uppercase = atleastOneUppercase.test(password || '');
    const lowercase = atleastOneLowercase.test(password || '');
    const specialChar = atleastOneSpecialChar.test(password || '') && onlyAllowedCharacters.test(password || '');
    const minLength = atleastEightCharacters.test(password || '');

    return {
      number,
      uppercase,
      lowercase,
      specialChar,
      minLength,
    };
  }, [password]);

  const disabled = !password || !confirmPassword || password !== confirmPassword;

  const ValidatorCardItem = useCallback(({ status = 'default', text }: ValidatorCardItemProps) => {
    const iconName = status === 'valid'
      ? 'greenTick'
      : status === 'invalid'
        ? 'errorCircle'
        : 'emptyCircle';

    return (
      <View className='flex-row items-start gap-x-3 w-full'>
        <Image source={images[iconName]} className='mt-1 size-5' />
        <Text className='flex-1 p-0'>{text}</Text>
      </View>
    )
  }, []);

  useEffect(() => {
    const allCheckPassed = Object.values(validation).every((check) => check);
    if (allCheckPassed && showValidators) {
      setShowValidators(false);
    } else if (!allCheckPassed && !showValidators) {
      setShowValidators(true);
    }
  }, [validation, showValidators]);

  const onPasswordChange = (text: string) => {
    setPassword(text);
  }

  const cartStatus = (isValid: boolean) => {
    if (!password) return 'default';
    if (isValid) return 'valid';
    return 'invalid';
  }

  return (
    <SafeAreaView className='flex-1 px-5 py-10' edges={['top', 'bottom']}>
      <TouchableOpacity onPress={() => router.back()}>
        <Icon name='chevron-back-outline' color='#AAAAAC' size={25} />
      </TouchableOpacity>

      <View className='mt-10 gap-y-7'>
        <View>
          <Text className='text-4xl font-bold mt-5'>New password</Text>
          <Text className='text-xl text-gray-200 mt-2 font-light'>Set a new password for <Text className='font-bold text-black'>alex@nyauto.com</Text>.
            and continue.</Text>
        </View>

        <View className='gap-y-4 relative'>
          <InputBox
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={onPasswordChange}
            placeholder='Password'
            onFocus={() => setShowValidators(true)}
            onBlur={() => setShowValidators(false)}
            preIcon={<Icon name='lock-closed-outline' size={20} color={'#AAAAAC'} />}
            postIcon={<Icon name={!showPassword ? 'eye-outline' : 'eye-off-outline'} size={20} color={'#AAAAAC'} />}
            onPostIconPress={() => setShowPassword(!showPassword)}
          />
          <InputBox
            secureTextEntry={!showPassword}
            value={confirmPassword}
            onChangeText={(p) => setConfirmPassword(p)}
            placeholder='Password'
            preIcon={<Icon name='lock-closed-outline' size={20} color={'#AAAAAC'} />}
            postIcon={<Icon name={!showPassword ? 'eye-outline' : 'eye-off-outline'} size={20} color={'#AAAAAC'} />}
            onPostIconPress={() => setShowPassword(!showPassword)}
          />

          {
            showValidators
              ? <View className='flex-1 absolute top-20 bg-white z-10 p-4 rounded-xl gap-y-2 w-full shadow-md'>
                <ValidatorCardItem status={cartStatus(validation.number)} text='At least one number' />
                <ValidatorCardItem status={cartStatus(validation.uppercase)} text='At least one uppercase character' />
                <ValidatorCardItem status={cartStatus(validation.lowercase)} text='At least one lowercase character' />
                <ValidatorCardItem status={cartStatus(validation.minLength)} text='At least 8 characters' />
                <ValidatorCardItem status={cartStatus(validation.specialChar)} text='At least one of the following characters (@ # $ % &)' />
              </View>
              : null
          }
        </View>

        <TouchableOpacity disabled={disabled} onPress={onPress}>
          <Text className={`h-16 w-full text-center py-4 text-lg font-semibold rounded-xl transition-all duration-200 ${disabled
            ? `bg-secondary text-gray-400`
            : `bg-primary text-white`
            }`}>Continue with New Password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default ResetPasswordScreen;