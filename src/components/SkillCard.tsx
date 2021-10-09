import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet,
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({ skill, ...rest }: SkillCardProps) {
  return (
    <TouchableOpacity style={styles.buttonSkill} {...rest}>
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
