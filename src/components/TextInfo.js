import React from 'react';

export default function TextInfo({ isMobile, label, value, token, img, isDropDown }) {
	return (
		<tr>
			<th className="has-text-left">
				<span className={isMobile ? 'subtitle is-6' : 'subtitle is-5'}>{label}</span>
			</th>
			{isDropDown ? (
				<td>
					<div className="level-right">
						<div className="select">
							<select>
								<option>Select dropdown</option>
								<option>With options</option>
							</select>
						</div>
					</div>
				</td>
			) : (
				<td>
					<nav className="level is-mobile">
						<div className="level-left">
							<div />
						</div>
						<div className="level-right">
							<div className="level-item">
								<h5 className={isMobile ? 'subtitle is-6' : 'subtitle is-5'}>{value}</h5>
							</div>

							<div className="level-item">
								<figure className="image is-24x24 is-inline-block">
									<img src={img} alt="" />
								</figure>
							</div>
							{isMobile ? null : (
								<div className="level-item">
									<h5 className={isMobile ? 'subtitle is-6' : 'subtitle is-5'}>{token}</h5>
								</div>
							)}
						</div>
					</nav>
				</td>
			)}
		</tr>
	);
}
