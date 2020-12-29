import './App.scss';

function App() {
	return (
		<div className="App">
			<header>
				<div className="columns">
					<div className="column logoAndSubtitle">
						<div className="logo">Aspen</div>
						<div className="subtitle">Cardano Stake Pool</div>
					</div>
					<div className="column">
						<div className="checkUsOutContainer">
							<div className="checkUsOut">
								<a href="https://pooltool.io/pool/05b8a25ec4f41956a6496555c233bcbe6fc06596553ae2d14df73e20" rel="noreferrer noopener" target="_blank">Check us out on PoolTool.io!</a>
							</div>
						</div>
					</div>
				</div>
			</header>

			<main>
				<div className="container">
					<div className="columns">
						<div className="column">
							<section>
								<h2>About Us</h2>

								<p>Our pool is run by two software engineers based in the United States working in the
									healthcare industry.</p>

								<p>The Aspen pool is configured with two relay nodes and a core node, and all of our
									servers are located in New York.</p>

								<div className="columns">
									<div className="column">
										<h3>Core Node</h3>
										<ul>
											<li>4 vCPUs</li>
											<li>8GB of RAM</li>
											<li>160GB SSD</li>
											<li>5TB transfer & 1Gbps bandwidth</li>
										</ul>
									</div>
									<div className="column">
										<h3>Relay Nodes</h3>
										<ul>
											<li>1 vCPUs</li>
											<li>4GB of RAM</li>
											<li>80GB SSD</li>
											<li>4TB transfer & 1Gbps bandwidth</li>
										</ul>
									</div>
								</div>
							</section>
						</div>

						<div className="column">
							<section>
								<h2>Pool Information</h2>

								<div className="poolInformation">
									<iframe width="500" height="400" frameBorder="0"
									        src="https://js.adapools.org/widget.html?pool=05b8a25ec4f41956a6496555c233bcbe6fc06596553ae2d14df73e20">
										<a href="https://adapools.org/pool/05b8a25ec4f41956a6496555c233bcbe6fc06596553ae2d14df73e20">Detail</a>
									</iframe>
								</div>
							</section>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
