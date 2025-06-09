import { images } from '@/constants/images'
import React from 'react'
import { Image, Text, View } from 'react-native'

const Saved = () => {
  return (
    <View className='flex-1 bg-primary '>
      <Image
        source={images.bg}
        className='absolute w-full z-0 '
      />

      <Text className='text-white text-center mt-20 text-2xl font-semibold'>
        This page is in development.
      </Text>
    </View>
  )
}

export default Saved