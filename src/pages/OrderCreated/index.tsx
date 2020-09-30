import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Container, Text } from './styles';

const OrderCreated: React.FC = () => {
  const { reset } = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      reset({
        routes: [{ name: 'MainBottom' }],
        index: 0,
      });
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [reset]);

  return (
    <Container>
      <Icon name="thumbs-up" size={80} color="#39B100" />

      <Text>Pedido confirmado!</Text>
    </Container>
  );
};

export default OrderCreated;
