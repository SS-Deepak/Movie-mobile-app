import Icon from '@/constants/icons'
import { images } from '@/constants/images'
import { Storage } from '@/services/async-storage'
import { Link, RelativePathString, useRouter } from 'expo-router'
import React, { useCallback } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  const router = useRouter();

  const Card = useCallback(({ icon, title }: { icon: string, title: string }) => {
    return (
      <Link href={`/(private)/${title.toLowerCase()}` as RelativePathString} asChild>
        <TouchableOpacity className='w-[45%] h-[100px] m-1 items-center justify-center bg-white rounded-lg shadow-md gap-y-1'>
          <Icon name={icon} size={35} color={'#008524'} />
          <Text className='text-md text-gray-200 font-semibold'>{title}</Text>
        </TouchableOpacity>
      </Link>
    )
  }, []);

  const onLogout = useCallback(async () => {
    Storage().removeItem('user');
    router.push('/(public)/login-email');
  }, [router]);

  return (
    <SafeAreaView className='flex-1 px-5 py-10' edges={['top', 'bottom']}>
      <View className='flex-row items-center justify-between'>
        <Image source={images.logo} className='' />

        <TouchableOpacity onPress={onLogout}>
          <Icon name='log-out-outline' size={30} color={'#AAAAAC'} />
        </TouchableOpacity>
      </View>

      <View className='flex-row flex-wrap items-center justify-between mt-10 gap-y-4'>
        <Card icon='chatbubble-ellipses-outline' title='Chats' />
        <Card icon='library-outline' title='Dealership' />
        <Card icon='car-sport-outline' title='Inventory' />
        <Card icon='camera-outline' title='Camera' />
        <Card icon='person-outline' title='Profile' />
        <Card icon='settings-outline' title='Settings' />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen