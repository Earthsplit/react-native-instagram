import { Tabs } from 'expo-router'
import { home, explore, add, reels } from '../../assets/icons'
import { Image } from 'react-native'

export default () => {
	return (
		<Tabs screenOptions={{ tabBarShowLabel: false }}>
			<Tabs.Screen
				name='home'
				options={{
					headerShown: false,
					tabBarIcon: home,
					tabBarActiveTintColor: '#000',
				}}
			/>
			<Tabs.Screen
				name='explore'
				options={{
					headerShown: false,
					tabBarIcon: explore,
					tabBarActiveTintColor: '#000',
				}}
			/>
			<Tabs.Screen
				name='create'
				options={{
					headerShown: false,
					tabBarIcon: add,
					tabBarActiveTintColor: '#000',
				}}
			/>
			<Tabs.Screen
				name='reels'
				options={{
					headerShown: false,
					tabBarIcon: reels,
					tabBarActiveTintColor: '#000',
				}}
			/>
			<Tabs.Screen
				name='profile'
				options={{
					headerShown: false,
					tabBarIcon: () => {
						return (
							<Image
								source={require('../../assets/images/profilePics/profilePic.png')}
								style={{ width: 35, height: 35, borderRadius: 50 }}
							/>
						)
					},
				}}
			/>
		</Tabs>
	)
}
