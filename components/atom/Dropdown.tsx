import Icon from '@/constants/icons';
import React, { useCallback, useRef } from 'react';
import { Animated, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native';

type Option = { label: string, value: string | number };

interface DropdownProps {
  placeholder: string;
  options: Option[];
  onSelect: (option: Option) => void;
  selectedOption?: Option;
  className?: string;
}

const Dropdown = ({
  placeholder,
  options = [],
  onSelect,
  selectedOption,
}: DropdownProps) => {
  const [open, setOpen] = React.useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleDropdown = useCallback(() => {
    Animated.timing(animation, {
      toValue: open ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    }).start();

    setOpen(!open);
  }, [open, animation]);

  const Item = useCallback(({ data, seperator = true }: { data: Option, seperator?: boolean }) => {
    return (
      <TouchableOpacity onPress={() => {
        toggleDropdown();
        onSelect(data);
      }}>
        <Text
          className={`bg-transparent mx-4 py-4 ${seperator ? 'border-b border-gray-100' : ''}`}
        >{data.label}</Text>
      </TouchableOpacity>
    )
  }, [onSelect, toggleDropdown]);


  const minHeight = 50;
  const maxHeight = options.length * minHeight;

  const height = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, maxHeight > 200 ? 200 : maxHeight || minHeight],
  });

  return (
    <View className='relative px-4 '>
      <Pressable onPress={toggleDropdown}>
        <View className='h-16 px-4 flex-row items-center justify-between bg-white border border-gray-100 rounded-xl shadow-sm'      >
          <Text className={`${!selectedOption ? 'text-placeholder' : ''} text-lg`}>{selectedOption?.label ?? placeholder ?? 'Select'}</Text>
          <Icon name={`chevron-${!open ? 'down' : 'up'}-outline`} size={20} color="#AAAAAC" />
        </View>
      </Pressable>
      <Animated.View
        style={{ height }}
        className={`overflow-hidden bg-[#f5f5f542] rounded-xl  ${open ? 'border border-t-0 border-gray-100' : ''}`}
      >
        <ScrollView>
          {
            options?.length
              ? options.map((o, i) => (
                <Item key={i} data={o} seperator={options?.length - 1 !== i} />
              ))
              : <Text className='text-center text-placeholder py-4'>No options available</Text>
          }
        </ScrollView>
      </Animated.View>
    </View>
  )
}

export default Dropdown