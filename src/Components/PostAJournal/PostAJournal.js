import React from 'react';
import { useSelector } from 'react-redux';
import { plantationJournalAdded, prefaceAdded, selectAllJournals } from '../../features/journals/journalsSlice';
import PrefaceModal from '../Modals/SingleParagraphModal';

const PostAJournal = () => {
    const journals = useSelector(selectAllJournals)
    const currUserJournal = journals.find(journal => journal.userId === 1)

    return (
        <div style={{ backgroundColor: "#F4F5F7" }} className="h-full">
            {/* ----------------- preface ------------------- */}
            <div className="flex border-b-2">
                <div className="w-4/5 p-8">
                    <span className="text-xl font-semibold block">Preface</span>
                    <span className="text-gray-600">{currUserJournal.preface ? currUserJournal.preface : <span className='text-red-500'>Please Update</span>}</span>
                </div>
                <div className="w-1/5 py-8">
                    {<PrefaceModal title='Preface' shortTitle="preface" action={prefaceAdded} />}
                </div>
            </div>

            {/* ----------------- Plantation Journal ------------------- */}
            <div className="flex">
                <div className="w-4/5 p-8">
                    <span className="text-xl font-semibold block">Plantation Journal</span>
                    <span className="text-gray-600">{currUserJournal.plantationJournal ? currUserJournal.plantationJournal : <span className='text-red-500'>Please Update</span>}</span>
                </div>
                <div className="w-1/5 py-8">
                    <div className="rounded py-6">
                        {<PrefaceModal title="Plantation Journal" shortTitle="plantJour" action={plantationJournalAdded} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostAJournal;