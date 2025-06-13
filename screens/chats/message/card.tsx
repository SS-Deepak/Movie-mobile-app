import React from 'react';
import { Text, View } from 'react-native';

interface MessageCardProps {
  userChat: boolean;
  message: string;
  timestamp: string;
}

const MessageCard = ({ userChat, message, timestamp }: MessageCardProps) => {
  return (
    <View className={`w-[80%] ${userChat ? 'self-end' : 'self-start'} mb-2 px-2`}>
      <Text className='text-sm text-[#0003]'>{timestamp}</Text>
      <Text className={`rounded-xl px-2 py-4 text-${userChat ? 'white' : 'black'} ${userChat ? 'bg-[#68C0AB]' : 'bg-white'}`}>{message}</Text>
    </View>
  )
}

export default MessageCard