import React from "react";

const DiscoverPic = (props) => {
	return(
		<div>
			<button className="btn" onClick={props.left}>NO</button>
			<img src={props.pic} className="discoverImage"/>
			<button className="btn" onClick={props.right}>YES</button>
	    <p>
	    	DOG MATCHES: {props.numFriends}
	    </p>
	  </div>);
};

export default DiscoverPic;