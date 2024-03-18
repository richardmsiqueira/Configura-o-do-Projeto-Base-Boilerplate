import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Title from '../../components/Title';
import styles from './styles';
import { user } from '../../data/Profile';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home() {
const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Title title="Home" />

            <TouchableOpacity style={styles.button} 
            onPress={() => navigation.navigate("Profile", {user})}>
            <Title title="Go to Profile" />
            </TouchableOpacity>
               
        </View>
    );
}