import React from "react";

function Footer(props) {
	return (
		<div className="footer">
			<div id="column-container">
				<div className="column">
					<h2>Disclosures</h2>
					<p>
						CacheMoney LLC and its affiliates offer banking products which are not
						insured by the FDIC or any other government agency. Deposit or other
						obligations are subject to investment risks. Possible loss of the
						principal amount deposited.
					</p>
				</div>
				<div className="column">
					<h2>Customer Service</h2>
					<li>Front Desk</li>
					<li>Development Team</li>
					<li>Request a New Card</li>
					<li>Report Fradulent Activity</li>
					<li>Order a Hotdog Pizza</li>
				</div>
				<div className="column">
					<h2>Partners</h2>
					<li>High Risk Moderate Reward Investing</li>
					<li>Blue Sky Inc.</li>
					<li>Illuminati Initiative</li>
					<li>Global Domination Timeline</li>
					<li>HotdogPizza Sandwich Associationd</li>
				</div>
			</div>
			<div id="footer-logo-container">
				<div id="footer-logo">
			</div>
		</div>
	</div>
	);
}
export default Footer;
