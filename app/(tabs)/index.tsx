import { Button, Pressable, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import { Link } from "expo-router";
import { useTheme } from '../../utils/context/ThemeContext';

export default function HealthScreen() {
  const {theme, toggleTheme} = useTheme()

  return (
    <View style={{...styles.container, backgroundColor: theme.colors.primary}}>
      <Text style={styles.title}>Health Screen</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Link href="/modal"><Text>Click me</Text></Link>
      <Pressable onPress={toggleTheme}><Text>Hey</Text></Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
