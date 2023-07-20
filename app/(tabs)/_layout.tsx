import { Tabs } from 'expo-router'
import { home, search, add, reels } from '../../assets/icons'
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
				name='search'
				options={{
					headerShown: false,
					tabBarIcon: search,
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
								source={{
									uri: 'https://instagram.fprg4-1.fna.fbcdn.net/v/t51.2885-19/313275952_1208736029674905_7578388477210151345_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fprg4-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=OjPuk_RtNkgAX_Cz8HW&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAKCXHFQlULuUatLVokgoc2TGw6SxJunO34F5J0oeUr-w&oe=64BEC5F5&_nc_sid=8b3546',
								}}
								style={{ width: 35, height: 35, borderRadius: 50 }}
							/>
						)
					},
				}}
			/>
		</Tabs>
	)
}
