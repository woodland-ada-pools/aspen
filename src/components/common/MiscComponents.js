export function ExternalLink({href, children}) {
	return (
		<span className="externalLink">
			<a href={href} rel="noreferrer noopener" target="_blank">
				{children}
			</a>
		</span>
	)
}

export function Card({children}) {
	return (
		<div className="card">
			<div className="card-content">
				{children}
			</div>
		</div>
	)
}

export function Bullet() {
	return (
		<img className="bullet" src="img/bullet.png"/>
	)
}

