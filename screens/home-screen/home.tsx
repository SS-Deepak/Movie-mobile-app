import Icon from '@/constants/icons'
import { images } from '@/constants/images'
import React, { useCallback } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {

  const Card = useCallback(({ icon, title }: { icon: string, title: string }) => {
    return (
      <TouchableOpacity className='w-[45%] h-[100px] m-1 items-center justify-center bg-white rounded-lg shadow-md gap-y-1'>
        <Icon name={icon} size={35} color={'#008524'} />
        <Text className='text-md text-gray-200 font-semibold'>{title}</Text>
      </TouchableOpacity>
    )
  }, []);

  return (
    <SafeAreaView className='flex-1 px-5 py-10' edges={['top', 'bottom']}>
      <Image source={images.logo} className='self-center' />

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