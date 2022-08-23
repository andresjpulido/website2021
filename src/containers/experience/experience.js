import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Timeline from "../../components/timeline";
import "./experience.scss";

export default function Experience() {
	return (
		<section id="experience" className="anchor">
			<div className="page-container">
				<div className="section-header">
					<h2 className="light">Experience</h2>
					<FontAwesomeIcon icon={["fas", "globe"]} className="section-logo" />
				</div>

				<p>
					Software developement is great! I have participated in projects with
					many people from different cultures, interesting technologies and many
					interesting topics.{" "}
				</p>
				<br />
				<Timeline />
				<br />
				<br />
				<br />
			</div>
		</section>
	);
}
