import * as React from 'react';
import {Text, TextProps} from 'react-native';
import {FC} from 'react';
import {heightPercentageToDP} from '../layout';

export const h1 = 6;
export const h2 = 5;
export const h3 = 4;
export const h4 = 3;
export const h5 = 2;
export const h6 = 1.8;
export const p = 1.5;

interface FontProps extends TextProps{
  size: number;
  color?: string;
  style?: object;
}
const Font: FC<FontProps> = ({
  size,
  color = '#484848',
  style,
  children,
  ...props
}) => (
  <Text
    {...props}
    style={[{fontSize: heightPercentageToDP(size), color}, style]}>
    {children}
  </Text>
);

export default Font;
