import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Header.styles'
import Heart from '../../../assets/icons/heart.svg'
import Send from '../../../assets/icons/send.svg'
import Stories from './stories/Stories'

const Header = () => {
	return (
		<>
			<View style={styles.header}>
				<Text style={styles.title}>Instagram</Text>
				<View style={styles.flexContainer}>
					<TouchableOpacity>
						<Heart
							width={24}
							height={24}
							fill={'#000'}
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<Send
							width={24}
							height={24}
							fill={'#000'}
						/>
					</TouchableOpacity>
				</View>
			</View>
			<Stories />
		</>
	)
}

export default Header
