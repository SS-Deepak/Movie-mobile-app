import React from 'react';
import { Text, TextInput, View } from 'react-native';

interface InputBoxProps {
  label?: string;
  preIcon?: React.ReactNode;
  postIcon?: React.ReactNode;
  onPostIconPress?: () => void;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoCorrect?: boolean;
  maxLength?: number;
  multiline?: boolean;
  numberOfLines?: number;
  inputClassName?: string;
  containerClassName?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}

const InputBox = (props: InputBoxProps) => {
  const leftPadding = props.preIcon ? 'pl-10' : 'pl-4';
  const rightPadding = props.postIcon ? 'pr-10' : 'pr-4';

  return (
    <View className='relative'>
      {props.label && <Text className="text-sm font-medium mb-1">{props.label}</Text>}

      <View className={`flex-row items-center ${props.containerClassName}`}>
        {props.preIcon && <View className={`absolute left-3 z-10`}>{props.preIcon}</View>}

        <TextInput
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.onChangeText}
          secureTextEntry={props.secureTextEntry}
          keyboardType={props.keyboardType}
          autoCapitalize={props.autoCapitalize}
          autoCorrect={props.autoCorrect}
          maxLength={props.maxLength}
          multiline={props.multiline}
          numberOfLines={props.numberOfLines}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          className={`border border-placeholder focus:border-teal w-full rounded-xl placeholder:text-placeholder py-5 ${rightPadding} ${leftPadding} ${props.inputClassName}`}
        />

        {props.postIcon && (
          <View className={`absolute right-3 z-10`} onTouchEnd={props.onPostIconPress}>
            {props.postIcon}
          </View>
        )}
      </View>

    </View>
  )
}

export default InputBox