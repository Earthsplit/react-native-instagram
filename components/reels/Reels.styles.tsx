import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	textTitle: {
		fontSize: 24,
		fontWeight: '500',
		color: '#fff',
	},
	flexContainer: {
		position: 'absolute',
		top: '6%',
		left: '2%',
		right: '2%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		zIndex: 1,
		padding: 10,
	},
	container: {
		backgroundColor: '#000',
		flex: 1,
	},
})

export default styles
