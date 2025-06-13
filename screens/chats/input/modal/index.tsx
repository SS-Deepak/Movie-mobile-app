import Icon from '@/constants/icons';
import React, { useCallback } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import AppointmentPanel from './panel/appointment';
import FormPanel from './panel/form';

interface InputModalProps {
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}

const InputModal = ({ modalVisible, setModalVisible }: InputModalProps) => {
  const [showFormPanel, setShowFormPanel] = React.useState(false);
  const [showAppointmentPanel, setShowAppointmentPanel] = React.useState(false);

  const Card = useCallback(({ title, icon, onPress }: { title: string, icon: string, onPress: () => void }) => {
    return (
      <TouchableOpacity className="w-[80%] flex-row items-center gap-x-4" onPress={onPress}>
        <View className='h-16 w-16 items-center justify-center bg-gray-100 rounded-xl'>
          <Icon name={icon} size={25} />
        </View>
        <Text className="text-xl font-semibold">{title}</Text>
      </TouchableOpacity>
    )
  }, []);

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 items-center justify-between bg-white/90 pb-16 ">

          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            className='mt-6 bg-gray-100 rounded-full p-2 z-10 shadow-xl'
          >
            <Icon name="close-outline" size={30} color="black" />
          </ TouchableOpacity>

          <View className='w-full items-center gap-y-4'>
            <Card title="Forms" icon="reader-outline" onPress={() => setShowFormPanel(true)} />
            <Card title="New Appointment" icon="calendar-clear-outline" onPress={() => setShowAppointmentPanel(true)} />
            <Card title="Inventory" icon="car-sport-outline" onPress={() => { }} />
            <Card title="Photo & Video" icon="image-outline" onPress={() => { }} />
            <Card title="Files" icon="document-outline" onPress={() => { }} />
          </View>
        </View>
      </Modal>

      <FormPanel visible={showFormPanel} setVisible={setShowFormPanel} />
      <AppointmentPanel visible={showAppointmentPanel} setVisible={setShowAppointmentPanel} />
    </>
  )
}

export default InputModal