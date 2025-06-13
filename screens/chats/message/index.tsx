import React from 'react'
import { ScrollView, View } from 'react-native'
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
  {
    id: '4',
    userChat: false,
    text: 'What are you up to today?',
    sender: 'Bob',
    timestamp: '2023-10-01T12:15:00Z',
  },
  {
    id: '5',
    userChat: false,
    text: 'Just working on some projects. You?',
    sender: 'Alice',
    timestamp: '2023-10-01T12:20:00Z',
  },
  {
    id: '6',
    userChat: false,
    text: 'Same here, busy with deadlines.',
    sender: 'Bob',
    timestamp: '2023-10-01T12:25:00Z',
  },
  {
    id: '11',
    userChat: true,
    text: 'Hello, how are you?',
    sender: 'Alice',
    timestamp: '2023-10-01T12:00:00Z',
  },
  {
    id: '21',
    userChat: false,
    text: 'I am fine, thank you! And you?',
    sender: 'Bob',
    timestamp: '2023-10-01T12:05:00Z',
  },
  {
    id: '13',
    userChat: true,
    text: 'Doing well, thanks for asking!',
    sender: 'Alice',
    timestamp: '2023-10-01T12:10:00Z',
  },
  {
    id: '14',
    userChat: false,
    text: 'What are you up to today?',
    sender: 'Bob',
    timestamp: '2023-10-01T12:15:00Z',
  },
  {
    id: '15',
    userChat: false,
    text: 'Just working on some projects. You?',
    sender: 'Alice',
    timestamp: '2023-10-01T12:20:00Z',
  },
  {
    id: '61',
    userChat: false,
    text: 'Same here, busy with deadlines.',
    sender: 'Bob',
    timestamp: '2023-10-01T12:25:00Z',
  }
]

const ChatMessages = () => {
  return (
    <View className='flex-1 items-center justify-center'>
      <ScrollView className='flex-1 w-full p-4'>
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
      </ScrollView>
    </View>
  )
}

export default ChatMessages