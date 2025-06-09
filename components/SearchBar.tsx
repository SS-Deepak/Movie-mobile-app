import { icons } from '@/constants/icons';
import React from 'react';
import { Image, TextInput, View } from 'react-native';

interface SearchBarProps {
  onPress?: () => void;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

const SearchBar = ({ onChangeText, onPress, value, placeholder }: SearchBarProps) => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
      <Image
        source={icons.search}
        className='size-5'
        resizeMode='contain'
        tintColor='#Ab8bff'
      />

      <TextInput
        placeholder={placeholder || 'Search...'}
        placeholderTextColor='#A8B5DB'
        value={value}
        onChangeText={onChangeText}
        onPress={onPress}
        className='flex-1 ml-3 text-white'
      />
    </View>
  )
}

export default SearchBar