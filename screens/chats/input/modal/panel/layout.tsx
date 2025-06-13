import Icon from '@/constants/icons';
import React, { FC, PropsWithChildren } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  title: string;
}

const PanelLayout: FC<PropsWithChildren<Props>> = ({ children, visible, setVisible, title }) => {
  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={() => setVisible(false)}
    >
      <View className="flex-1 justify-end bg-black/40 pt-4">
        <View className="bg-white rounded-t-3xl w-full shadow-xl h-[95%] pt-5">

          <View className='w-full flex-row ml-5 my-5'>
            <TouchableOpacity onPress={() => setVisible(false)}          >
              <Icon name="close-outline" size={30} color="#AAAAAC" />
            </ TouchableOpacity>
            <Text className='text-3xl ml-2 font-semibold'>{title}</Text>
          </View>

          {children}
        </View>
      </View>
    </Modal>
  )
}


export default PanelLayout