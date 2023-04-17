import './globals.css'

export const metadata = {
	title: 'Google Clone',
	description: 'This is a Google clone website',
	icons: {
	  	icon: '/favicon.ico',
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
