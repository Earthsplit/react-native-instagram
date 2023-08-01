import { Stack, useRouter } from 'expo-router'

const StackLayout = () => {
	const router = useRouter()

	return (
		<Stack>
			<Stack.Screen
				name='(tabs)'
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name='modal'
				options={{
					presentation: 'modal',
					headerShown: false,
				}}
			/>
		</Stack>
	)
}

export default StackLayout
