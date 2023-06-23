

export const metadata = {
	title: 'Blog App',
	description: 'Say What you want freely',
}

export default function PortfolioLayout({ children }) {
	return (
		<div className=''>
		<h1 className="my-5 text-7xl font-bold">Our Works</h1>
			{children}
		</div>
	)
}
