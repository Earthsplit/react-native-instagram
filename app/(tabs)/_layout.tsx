import { Tabs } from 'expo-router'

export default () => {
	return (
		<Tabs>
			<Tabs.Screen name='home' />
			<Tabs.Screen name='search' />
			<Tabs.Screen name='create' />
			<Tabs.Screen name='reels' />
			<Tabs.Screen name='profile' />
		</Tabs>
	)
}
