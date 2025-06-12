import Icon from '@/constants/icons'
import { images } from '@/constants/images'
import { Link } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const ChatHeader = () => {
  return (
    <View className='flex-row items-center justify-between px-4 py-2 bg-white border-b border-gray-100 shadow-sm'>
      
      <View className='flex-row items-center gap-x-2'>
        <Link href='/(private)/home' asChild>
          <TouchableOpacity>
            <Icon name='chevron-back-outline' size={24} color='#000' />
          </TouchableOpacity>
        </Link>
        <Text className='bg-primary text-white rounded-full size-6 text-center'>2</Text>
      </View>

      <View className='flex-1 items-center justify-center'>
        <Text className='text-lg font-semibold'>Oliver Davis</Text>
        <View className='flex-row items-center gap-x-1 mt-1'>
          <View className='h-2 w-2 bg-green-500 rounded-full'></View>
          <Text className='text-gray-500 text-sm'>Online</Text>
        </View>
      </View>

      <View>
        <Image source={images.profile} className='size-12 rounded-full' />
      </View>
    </View>
  )
}

export default ChatHeader