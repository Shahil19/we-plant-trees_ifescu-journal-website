import React from 'react';
import { useSelector } from 'react-redux';
import { genPlantationJourIncludes, objectivesAdded, plantationJournalAdded, prefaceAdded, selectAllJournals } from '../../features/journals/journalsSlice';
import PrefaceModal from '../Modals/SingleParagraphModal';

const PostAJournal = () => {
    const journals = useSelector(selectAllJournals)
    const currUserJournal = journals.find(journal => journal.userId === 1)

    // render objectives
    const renderObjectives = currUserJournal.objectives?.map((obj, i) => (
        <li
            className='list-decimal'
            key={i}>{obj}</li>
    ))

    const renderGenPlantationJourIncludes = currUserJournal.genPlantationJourIncludes?.map((li, i) => (
        <li
            className='list-decimal'
            key={i}>{li}</li>
    ))


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
            <div className="flex border-b-2">
                <div className="w-4/5 p-8">
                    <span className="text-xl font-semibold block">Plantation Journal</span>
                    <span className="text-gray-600">{currUserJournal.plantationJournal ? currUserJournal.plantationJournal : <span className='text-red-500'>Please Update</span>}</span>
                </div>
                <div className="w-1/5 py-8">
                    {<PrefaceModal title="Plantation Journal" shortTitle="plantJour" action={plantationJournalAdded} />}
                </div>
            </div>


            {/* ----------------- Objectives ------------------- */}
            <div className="flex border-b-2">
                <div className="w-4/5 p-8">
                    <span className="text-xl font-semibold block">Objectives</span>
                    <span className="text-gray-600">{currUserJournal.objectives ? <ul>{renderObjectives}</ul> : <span className='text-red-500'>Please Update</span>}</span>
                </div>
                <div className="w-1/5 py-8">
                    {<PrefaceModal title="Objectives" shortTitle="objectives" action={objectivesAdded} />}
                </div>
            </div>

            {/* ----------------- Generally plantation journal includes shown------------------- */}
            <div className="flex border-b-2">
                <div className="w-4/5 p-8">
                    <span className="text-xl font-semibold block">Generally plantation journal includes</span>
                    <span className="text-gray-600">{currUserJournal.genPlantationJourIncludes ? <ul>{renderGenPlantationJourIncludes}</ul> : <span className='text-red-500'>Please Update</span>}</span>
                </div>
                <div className="w-1/5 py-8">
                    {<PrefaceModal title="Generally plantation journal includes" shortTitle="genPlantationJourIncludes" action={genPlantationJourIncludes} />}
                </div>
            </div>
        </div>
    );
};

export default PostAJournal;