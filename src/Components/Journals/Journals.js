import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllJournals } from '../../features/journals/journalsSlice';

const Journals = () => {
    const journals = useSelector(selectAllJournals)
    console.log(journals);

    return (
        <div>
            <h1 className='text-3xl'>Journal</h1>
        </div>
    );
};

export default Journals;