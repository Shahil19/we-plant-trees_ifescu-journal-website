import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllContents } from '../../features/contents/contentSlice';

const Contents = () => {
    const contents = useSelector(selectAllContents)
    console.log(contents);
    
    return (
        <div>
            <h1 className="text-3xl">Contents</h1>
        </div>
    );
};

export default Contents;