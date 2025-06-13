import Icon from '@/constants/icons';
import dayjs from 'dayjs';
import React from 'react';
import { View } from 'react-native';
import DatePickerCalendar, { useDefaultClassNames } from 'react-native-ui-datepicker';

interface DatePickerProps {
  visible?: boolean;
  selectedDate: string;
  onChange: (date: string) => void;
}

const DatePicker = ({ visible, selectedDate, onChange }: DatePickerProps) => {
  const defaultClassNames = useDefaultClassNames();
  console.log('Selected Date:', selectedDate);
  if (!visible) return null;

  return (
    <View>
      <DatePickerCalendar
        monthsFormat="full"
        weekdaysFormat="short"
        firstDayOfWeek={1}
        navigationPosition="right"
        mode="single"
        date={new Date(selectedDate)}
        onChange={v => onChange(v.date as string)}
        className='border border-gray-100 rounded-xl shadow-sm bg-white m-4 p-2'
        minDate={dayjs().startOf('day')}
        classNames={{
          ...defaultClassNames,
          weekday_label: 'text-gray-400 uppercase text-sm',
          disabled_label: 'text-gray-400',
          selected: 'bg-teal rounded-full h-15 w-15',
          selected_label: 'text-white',
          today_label: 'text-teal font-semibold text-2xl',
          month_selector_label: 'ml-3 text-xl font-semibold text-[#1D1E20]',
          year_selector_label: 'text-xl font-semibold text-[#1D1E20]',
        }}
        components={{
          IconNext: <Icon name="chevron-forward-outline" size={25} color="#AAAAAC" />,
          IconPrev: <Icon name="chevron-back-outline" size={25} color="#AAAAAC" />,
        }}
      />
    </View>
  )
}

export default DatePicker