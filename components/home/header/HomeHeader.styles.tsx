import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'row',
		marginBottom: 15,
		marginLeft: 16,
		marginRight: 16,
	},
	title: {
		fontSize: 20,
		fontWeight: '500',
	},
	icon: {
		width: 20,
		height: 20,
	},
	photo: {
		width: 60,
		height: 60,
		borderRadius: 50,
	},
	flexContainer: {
		display: 'flex',
		flexDirection: 'row',
		gap: 14,
	},
})

export default styles
