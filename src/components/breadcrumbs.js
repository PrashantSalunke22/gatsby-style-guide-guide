import React from 'react';
import Link from "gatsby-link";

const Breadcrumbs = ({ group, subgroup }) => {
	return (
		<ol className="c-breadcrumbs">

			<li className="c-breadcrumbs__item">
				<Link className="c-breadcrumbs__link" to={ group }>{ group }</Link>
			</li>

			{subgroup ? <li className="c-breadcrumbs__item">
				<Link className="c-breadcrumbs__link" to={ subgroup }>{ subgroup }</Link>
			</li> : null}

			
		</ol>
	)
};

export default Breadcrumbs;