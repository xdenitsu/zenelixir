import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
    return (
        <SafeAreaView>
            
        </SafeAreaView>
    )
  
}



const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  profileContainer: {
    width: '100%',
    height: 200,
    marginTop: 10,
    borderRadius: 20
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
