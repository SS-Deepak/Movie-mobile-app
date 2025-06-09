import { images } from '@/constants/images'
import { Link, useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableHighlight, View } from 'react-native'

const MovieDetail = () => {
  const { id } = useLocalSearchParams();

  return (
    <View className='flex-1 bg-primary '>
      <Image
        source={images.bg}
        className='absolute w-full z-0 '
      />

      <Text className='text-white text-center mt-20 text-2xl font-semibold'>
        This page is in development.
      </Text>

      <Text className='text-white text-center mt-5 text-lg'>
        Movie ID: {id}
      </Text>


      <TouchableHighlight>
        <Link href='/'>
          Go to Home
        </Link>
      </TouchableHighlight>
    </View>
  )
}

export default MovieDetail