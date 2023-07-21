import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'white',
	},
	searchBarContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 10,
		marginLeft: 6,
		gap: 2,
	},
	image: {
		height: height / 6.5,
		width: width / 3,
		borderWidth: 0.5,
		borderColor: '#333',
	},
	icon: {
		marginLeft: 'auto',
	},
})

export default styles
