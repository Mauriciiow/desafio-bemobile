import React from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Line} from 'react-native-svg';
import {Theme} from '../../styles/theme';

export const DashedBorderBottom = ({}) => (
  <View style={styles.container}>
    <Svg height="1" width="100%">
      <Line
        x1="0"
        y1="0"
        x2="100%"
        y2="0"
        stroke={Theme.colors.gray10}
        strokeWidth="2"
        strokeDasharray="4 4"
      />
    </Svg>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
