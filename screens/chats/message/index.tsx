import React from 'react'
import { View } from 'react-native'
import MessageCard from './card'

const Mock = [
  {
    id: '1',
    userChat: true,
    text: 'Hello, how are you?',
    sender: 'Alice',
    timestamp: '2023-10-01T12:00:00Z',
  },
  {
    id: '2',
    userChat: false,
    text: 'I am fine, thank you! And you?',
    sender: 'Bob',
    timestamp: '2023-10-01T12:05:00Z',
  },
  {
    id: '3',
    userChat: true,
    text: 'Doing well, thanks for asking!',
    sender: 'Alice',
    timestamp: '2023-10-01T12:10:00Z',
  },
]

const ChatMessages = () => {
  return (
    <View className='flex-1 items-center justify-center'>
      {
        Mock.map((message) => (
          <MessageCard
            key={message.id}
            userChat={message.userChat}
            message={message.text}
            timestamp={new Date(message.timestamp).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          />
        ))
      }
    </View>
  )
}

export default ChatMessages