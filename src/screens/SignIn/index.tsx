import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image,
  StatusBar 
} from 'react-native';

import IlustrationImg from '../../assets/illustration.png';

import { styles } from './styles';

export function SignIn(){
  return(
    <View style={styles.container}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image 
        source={IlustrationImg} 
        style={styles.image}
        resizeMode='stretch'
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {`\n`}
          e organize suas {`\n`}
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{`\n`}
          favoritos com seus amigos
        </Text>

      </View>
    </View>
  )
}