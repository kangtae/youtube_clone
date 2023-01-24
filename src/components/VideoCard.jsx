import React from 'react';

function VideoCard({video}) {
	return (
		<li>
			{video.snippet.title}
		</li>
	);
}

export default VideoCard;