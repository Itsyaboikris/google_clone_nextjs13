import Footer from '@/components/Footer'
import SearchHeader from '@/components/SearchHeader'
import "./../globals.css"

export const metadata = {
	title: 'Google Clone',
	description: 'This is a Google clone website',
	icons: {
	  	icon: './favicon.svg',
	},
}

export default function SearchLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<SearchHeader/>
				{children}
				<Footer />
			</body>
		</html>
	)
}
