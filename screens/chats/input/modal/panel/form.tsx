import Icon from '@/constants/icons';
import React, { useCallback } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import PanelLayout from './layout';

interface FormPanelProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const FormPanel = ({ visible, setVisible }: FormPanelProps) => {

  const Card = useCallback(({ title, seperator = true }: { title: string, seperator?: boolean }) => {
    return (
      <TouchableOpacity className="w-[80%] flex-row items-center gap-x-4">
        <View className='h-16 w-16 items-center justify-center bg-gray-100 rounded-xl'>
          <Icon name="reader-outline" size={25} />
        </View>
        <View className={`h-16 items-start justify-center ${seperator ? 'border-b border-[#EDEDED]' : ''} flex-1`}>
          <Text className="text-xl font-semibold">{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }, []);

  return (
    <PanelLayout
      visible={visible}
      setVisible={setVisible}
      title="Forms"
    >
      <ScrollView>
        <View className='w-full items-center gap-y-6 mt-6'>
          <Card title="Driver’s License" />
          <Card title="Insurance Card" />
          <Card title="Credit Application" />
          <Card title="Pre-qualification" />
          <Card title="Trade In" />
          <Card title="Vehicle Registration" />
          <Card title="Vehicle Title" />
          <Card title="Privacy Agreement" seperator={false} />
        </View>
      </ScrollView>
    </PanelLayout>
  )
}

export default FormPanel