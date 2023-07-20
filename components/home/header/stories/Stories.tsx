import { View, Text, Image, FlatList } from 'react-native'
import React, { FC } from 'react'
import styles from './Stories.styles'

const DATA = [
	{
		id: '1',
		url: 'https://instagram.fprg4-1.fna.fbcdn.net/v/t51.2885-19/361108659_955064245758406_9081756197448639950_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fprg4-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=me6NZQOJ96sAX-YHZwE&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAjwEzRhx4BXewgnHKNuJSQ4qMgb7as6NnVZ2CZOzhRFg&oe=64BE53D0&_nc_sid=8b3546',
		title: 'pozorbrno',
	},
	{
		id: '2',
		url: 'https://instagram.fprg4-1.fna.fbcdn.net/v/t51.2885-19/312162754_2783092025157728_428709372056906420_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fprg4-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=YB48DX8X3scAX8JsojT&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBdcTGfnWTfhep6dSJK26xTGSsQJh382eXQXTNyC-g-Aw&oe=64BEAA42&_nc_sid=8b3546',
		title: 'zelenskiy_official',
	},
	{
		id: '3',
		url: 'https://instagram.fprg4-1.fna.fbcdn.net/v/t51.2885-19/295787340_777317236734128_1459214343252967581_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fprg4-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=WzbIx6jj1KEAX-gUXVV&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfC4Yz0aVc5lTdjA5q2Ouj-MGnx3QKyDiSfr89vsbEwaEQ&oe=64BE6A35&_nc_sid=8b3546',
		title: 'takashiifromjap...',
	},
	{
		id: '4',
		url: 'https://instagram.fprg4-1.fna.fbcdn.net/v/t51.2885-19/316122249_1489035311621168_4219869813027253555_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fprg4-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=Bpf3fQpwiA0AX_tBkKZ&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCGwzL_Mc9T4Pwz7YOa-54Z010phE1U7okhFcyK8l5COw&oe=64BE85CB&_nc_sid=8b3546',
		title: 'plaaaato',
	},
	{
		id: '5',
		url: 'https://instagram.fprg4-1.fna.fbcdn.net/v/t51.2885-19/74569610_3471242912886613_3955677270596648960_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fprg4-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=qYqgyTXC2v4AX_eCAAr&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBEFUbp8gpE9br4w76joQPykzbcm9-DCwgVDpSBTXXT6g&oe=64BE989B&_nc_sid=8b3546',
		title: 'lego',
	},
	{
		id: '6',
		url: 'https://instagram.fprg4-1.fna.fbcdn.net/v/t51.2885-19/177024702_295600142006254_3611478019353660801_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fprg4-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=YmIhG_8ZFGYAX-opV9_&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDQ9JFhryJhhMd78IrrxdT3d5FntSiI-tz_om7l286MaA&oe=64BE9226&_nc_sid=8b3546',
		title: 'letstalkaboutm...',
	},
]

interface ItemProps {
	url: string
	title: string
}

const Item = ({ url, title }: ItemProps) => (
	<View style={styles.storyContainer}>
		<View style={styles.storyBorder}>
			<Image
				source={{
					uri: url,
				}}
				style={styles.photo}
			/>
		</View>
		<Text style={styles.storyTitle}>{title}</Text>
	</View>
)

const Stories = () => {
	return (
		<FlatList
			data={DATA}
			renderItem={({ item }) => (
				<Item
					url={item.url}
					title={item.title}
				/>
			)}
			keyExtractor={item => item.id}
			horizontal
			showsVerticalScrollIndicator={false}
			style={styles.container}
		/>
	)
}

export default Stories
