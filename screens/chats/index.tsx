import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ChatHeader from './header'
import ChatFooter from './input'
import ChatMessages from './message'

const ChatScreen = () => {
  return (
    <SafeAreaView className='flex-1' edges={['top', 'bottom']}>
      <ChatHeader />
      <ChatMessages />
      <ChatFooter />
    </SafeAreaView>
  )
}

export default ChatScreen