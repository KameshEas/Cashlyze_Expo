
import React, { useEffect } from 'react';
import { Animated, Text, StyleSheet } from 'react-native';

const Toast = ({ visible, message, onHide }) => {
  const opacity = new Animated.Value(0);

  useEffect(() => {
    if (visible) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => {
          Animated.timing(opacity, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }).start(onHide);
        }, 2000);
      });
    }
  }, [visible]);

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <Text style={styles.message}>{message}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    left: 0,
    right: 0,
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  message: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Toast;
