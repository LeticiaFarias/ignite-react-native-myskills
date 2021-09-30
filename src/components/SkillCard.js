import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export function SkillCard({skill}) {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#6369D1',
    alignItems: 'center',
    padding: 12,
    borderRadius: 20,
    marginTop: 15,
  },
  textSkill: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
