import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native'


export function Button({onPress}) {
  return(
    <TouchableOpacity style={styles.button} 
    onPress={onPress}
    >
        <Text style={styles.buttonText}>Adicionar Skill</Text>
      </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  
  button: {
    backgroundColor: '#735CDD',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 15,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

