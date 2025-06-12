import React from 'react';
import { Text, View } from 'react-native';

interface MessageCardProps {
  userChat: boolean;
  message: string;
  timestamp: string;
}

const MessageCard = ({ userChat, message, timestamp }: MessageCardProps) => {
  return (
    <View className='w-[80%]'>
      <Text className='text-sm text-[#0003]'>{timestamp}</Text>
      <Text className={`rounded-xl px-2 py-4 text-${userChat ? 'white' : 'black'} bg-[${userChat ? '#68C0AB' : '#fff'}]`}>{message}</Text>
    </View>
  )
}

export default MessageCard