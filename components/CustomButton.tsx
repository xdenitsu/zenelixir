import React from 'react';
import { Text, TouchableRipple } from 'react-native-paper';
import Icon from './Icon';
import { View } from './Themed';
import { IconProps } from '../types/components/Icon';

export interface CustomButtonProps {
    label: string | undefined;
    icon: IconProps;
    onPress: () => void;
  }
  

export default function CustomButton ({ label, icon, onPress } : CustomButtonProps) {
  return (
    <TouchableRipple onPress={onPress} rippleColor="rgba(0, 0, 0, 0.2)">
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
        <Icon library={icon.library} name={icon.name} size={24} color="blue" />
        <Text style={{ color: 'blue', fontSize: 16 }}>{label}</Text>
      </View>
    </TouchableRipple>
  );
};