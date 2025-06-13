import DatePicker from '@/components/atom/DatePicker';
import Dropdown from '@/components/atom/Dropdown';
import TimePicker from '@/components/atom/TimePicker';
import Icon from '@/constants/icons';
import React, { useMemo } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import PanelLayout from './layout';

interface FormPanelProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const AppointmentPanel = ({ visible, setVisible }: FormPanelProps) => {
  const currentDate = new Date(Date.now()).toISOString();

  const [selectedDate, setSelectedDate] = React.useState<string>(currentDate);
  const [showDatePicker, setShowDatePicker] = React.useState<boolean>(false);

  const [selectedTime, setSelectedTime] = React.useState<string>(currentDate);
  const [showTimePicker, setShowTimePicker] = React.useState<boolean>(false);

  const isCurrentDate = useMemo(() => {
    const today = new Date().toISOString().split('T')[0];
    return selectedDate.split('T')[0] === today;
  }, [selectedDate]);

  const onDatePick = () => {
    setShowDatePicker(!showDatePicker);
    setShowTimePicker(false);
  }

  const onTimePick = () => {
    setShowTimePicker(!showTimePicker);
    setShowDatePicker(false);
  }
console.log('Selected Date:', selectedDate);
  return (
    <PanelLayout
      visible={visible}
      setVisible={setVisible}
      title="New Appointment"
    >
      <View className='flex-1 justify-between bg-white px-4 pb-4'>

        <ScrollView className='flex-1 my-4' showsVerticalScrollIndicator={false}>
          <View>
            <Dropdown
              placeholder='Select Appointment Type'
              options={[
                { label: 'Service Appointment', value: 'service' },
                { label: 'Sales Appointment', value: 'sales' },
                { label: 'Test Drive', value: 'test_drive' },
              ]}
              onSelect={(option) => console.log('Selected:', option)}
              selectedOption={{ label: 'Service Appointment', value: 'service' }}
            />

            <View className='flex-row items-center justify-between gap-x-4 mt-6'>
              <View className='flex-row items-center justify-start gap-x-2'>
                <Icon name='calendar-clear-outline' size={20} color='#AAAAAC' />
                <Text className='text-lg '>Starts</Text>
              </View>

              <View className='flex-row items-center gap-x-2 '>
                <TouchableOpacity>
                  <View className={`h-12 p-3 rounded-xl flex-row items-center justify-center ${!showDatePicker ? 'bg-[#1D1E200F]' : 'bg-[#68C0AB33]'}`}>
                    <Text className={`${!showDatePicker ? 'text-[#89898B]' : 'text-[#1D1E20]'}`} onPress={onDatePick}>
                      {isCurrentDate ? 'Select date' : selectedDate.split('T')[0]}
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View className={`h-12 p-3 rounded-xl flex-row items-center justify-center ${!showTimePicker ? 'bg-[#1D1E200F]' : 'bg-[#68C0AB33]'}`}>
                    <Text className={`${!showTimePicker ? 'text-[#89898B]' : 'text-[#1D1E20]'}`} onPress={onTimePick}>
                      {isCurrentDate ? 'Select time' : selectedDate.split('T')[0]}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            <DatePicker
              visible={showDatePicker}
              selectedDate={selectedDate}
              onChange={(date) => setSelectedDate(date)}
            />
            <TimePicker
              visible={showTimePicker}
              selectedTime={selectedTime}
              onChange={(time) => setSelectedTime(time)}
            />

            <TextInput
              textAlignVertical='top'
              multiline
              numberOfLines={6}
              placeholder='Enter your description...'
              className='h-[100px] mt-4 placeholder:text-placeholder border border-gray-100 rounded-xl px-4'
            />
          </View>
        </ScrollView>

        <TouchableOpacity>
          <View className='flex-row items-center justify-between bg-primary rounded-xl py-4 px-6'>
            <Text className='text-white'>Schedule </Text>
            <Icon name='send-outline' size={25} color='#fff' />
          </View>
        </TouchableOpacity>

      </View>
    </PanelLayout>
  )
}

export default AppointmentPanel