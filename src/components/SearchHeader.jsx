import React, {useEffect, useState} from 'react';
import {BsSearch, BsYoutube} from "react-icons/bs";
import {useNavigate, Link, useParams} from "react-router-dom"

function SearchHeader(props) {
	const { keyword } = useParams();
	const navigate = useNavigate();
	const [text, setText] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`/videos/${text}`);
	}
	
	useEffect(()=>{
		setText(keyword || "");
	},[keyword])
	
	return (
		<header>
			<Link to="/">
				<BsYoutube/>
				<h1>Youtube</h1>
			</Link>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Search..."
					value={text}
					onChange={(e)=> setText(e.target.value)}
				/>
				<button>
					<BsSearch/>
				</button>
			</form>
		</header>
	);
}

export default SearchHeader;