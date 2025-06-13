import React from 'react';
import { View } from 'react-native';
import DatePickerCalendar from 'react-native-ui-datepicker';

interface TimePickerProps {
  visible?: boolean;
  selectedTime: string;
  onChange: (date: string) => void;
}

const TimePicker = ({ visible, selectedTime, onChange }: TimePickerProps) => {
  if (!visible) return null;

  return (
    <View>
      <DatePickerCalendar
        timePicker={true}
        initialView='time'
        hideWeekdays={true}
        mode="single"
        hideHeader={true}
        use12Hours={false}
        className='border border-gray-100 rounded-xl shadow-sm bg-white m-4 p-0'
      />
    </View>
  )
}

export default TimePicker