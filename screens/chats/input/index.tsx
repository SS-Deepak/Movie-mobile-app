import Icon from '@/constants/icons';
import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import InputModal from './modal';

const ChatFooter = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View className='flex-row items-center justify-between gap-x-4 py-2 px-4 bg-white border-t border-gray-100'>

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View className='h-10 w-10 items-center justify-center bg-gray-100 rounded-full'>
          <Icon name='add-outline' size={24} color='black' />
        </View>
      </TouchableOpacity>

      <TextInput
        className='flex-1 h-15 px-4 border border-gray-100 rounded-full placeholder:text-placeholder'
        placeholder='Type a message...'
      />

      <TouchableOpacity>
        <Icon name='mic-outline' size={26} color='#AAAAAC' />
      </TouchableOpacity>

      <InputModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  )
}

export default ChatFooter