import * as React from "react";
import Link from "next/link";
import "../../../styles/error.scss";

const Error: React.SFC = () => (
  <div className="error">
		<div className="bg" />

		<div className="text">
			<h1>Oops, Something went wrong.</h1>
			<p>Try <Link href="/"><a>going back</a></Link>.</p>
		</div>
	</div>
);

export default Error;
