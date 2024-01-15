import { SafeAreaView, StyleSheet } from 'react-native';

import { Text, View } from '../../../components/Themed';
import { ScrollView } from 'react-native-gesture-handler';
import { useTheme } from '../../../utils/context/ThemeContext';


export default function ProfileScreen() {
  const {theme} = useTheme()
  
  return (
    <SafeAreaView style={{...styles.mainContainer, backgroundColor: theme.colors.primary}}>
      {/* <ScrollView style={}>
        <View style={styles.profileContainer}>
          <Text>Henlo</Text>
        </View>
        <View style={styles.profileContainer}>
          <Text>Henlo</Text>
        </View>
        <View style={styles.profileContainer}>
          <Text>Henlo</Text>
        </View>
        <View style={styles.profileContainer}>
          <Text>Henlo</Text>
        </View>
        <View style={styles.profileContainer}>
          <Text>Henlo</Text>
        </View>
        <View style={styles.profileContainer}>
          <Text>Henlo</Text>
        </View>
        <View style={styles.profileContainer}>
          <Text>Henlo</Text>
        </View>
      </ScrollView> */}
      </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  mainContainer: {
    height: "auto",
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  profileContainer: {
    width: '100%',
    height: 200,
    borderRadius: 20
  },
});
