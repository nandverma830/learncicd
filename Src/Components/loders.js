import {Bubbles, DoubleBounce, Bars, Pulse} from 'react-native-loader';
import {View, Text,ActivityIndicator} from 'react-native';

export const BarsLoder = (color, size) => {
  return <Bars size={size} color={color} />;
};

export const BubblesLoder = (color, size) => {
  return <Bubbles size={size} color={color} />;
};

export const PulseLoder = (color, size) => {
  return <Pulse size={size} color={color} />;
};

export const DoubleBounceLoder = (color, size) => {
  return <DoubleBounce size={size} color={color} />;
};

export const ActivityIndicatorLoder = (color, size) => {
  return <ActivityIndicator size={size} color={color} />;
};

export const emptyLoader = (color) => {
    return (
      <ActivityIndicator
        size="large"
        color={color}
      />
    );
  };