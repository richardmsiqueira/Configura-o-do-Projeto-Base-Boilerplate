import { View } from 'react-native';
import Title from '../../components/Title';
import styles from './styles';


export default function Profile({ route }) {

    const { user } = route.params;

    return (
        <View style={styles.container}>
            <Title title= "Profile" />
            <Title title={`Name: ${user.name}`} />
            <Title title={`Age: ${user.age}`} />
            <Title title={`Email: ${user.email}`} />
        </View>
    );
}