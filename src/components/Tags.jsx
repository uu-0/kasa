import React from 'react'

import '../styles/css/tags.css'

function Tags({ tags }) {
    return (
        <div className="tags-bloc">
                {tags.map((tag, index) => (
                    <div className='tag' key={index}>{tag}</div>
                ))}
        </div>
    );
}

export default Tags;
