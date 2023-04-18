import Footer from '@/components/Footer'
import './globals.css'

export const metadata = {
	title: 'Google Clone',
	description: 'This is a Google clone website',
	icons: {
	  	icon: './favicon.svg',
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className='relative min-h-screen'>
				{children}
				<Footer />
			</body>
		</html>
	)
}
