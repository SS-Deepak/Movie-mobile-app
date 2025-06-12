import Icon from '@/constants/icons'
import React from 'react'
import { TextInput, View } from 'react-native'

const ChatFooter = () => {
  return (
    <View className='flex-row items-center justify-between gap-x-4 py-2 px-4 bg-white border-t border-gray-100'>
      <View className='h-10 w-10 items-center justify-center bg-gray-100 rounded-full'>
        <Icon name='add-outline' size={24} color='black' />
      </View>
      <TextInput
        className='flex-1 h-15 px-4 border border-gray-100 rounded-full placeholder:text-placeholder'
        placeholder='Type a message...'
      />
      <Icon name='mic-outline' size={26} color='#AAAAAC' />
    </View>
  )
}

export default ChatFooter