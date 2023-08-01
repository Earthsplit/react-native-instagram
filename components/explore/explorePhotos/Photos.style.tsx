import { Dimensions, StyleSheet } from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
	image: {
		height: height / 6.5,
		width: width / 3,
		borderWidth: 0.5,
		borderColor: '#333',
	},
})

export default styles
