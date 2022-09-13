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

    const characteristicsOfTheSite = <>
        <div className="overflow-x-auto">
            <table className="table w-full">
                <tbody>
                    <tr className='hover'>
                        <td className='font-bold'>Topography:</td>
                        {currUserJournal.characteristicsOfTheSite ? <td>IsThere</td> : <td>Please Update</td>}
                        <td>{<PrefaceModal title="Slope" shortTitle="typography" action={genPlantationJourIncludes} />}</td>
                    </tr>
                    <tr className="hover">
                        <td className='font-bold'>Aspect:</td>
                        {currUserJournal.characteristicsOfTheSite ? <td>IsThere</td> : <td>Please Update</td>}
                        <td>{<PrefaceModal title="Slope" shortTitle="aspect" action={genPlantationJourIncludes} />}</td>
                    </tr>
                    <tr className="hover">
                        <td className='font-bold'>Slope:</td>
                        {currUserJournal.characteristicsOfTheSite ? <td>IsThere</td> : <td>Please Update</td>}
                        <td>{<PrefaceModal title="Slope" shortTitle="slope" action={genPlantationJourIncludes} />}</td>
                    </tr>
                    <tr className="hover">
                        <td className='font-bold'>Drainage:</td>
                        {currUserJournal.characteristicsOfTheSite ? <td>IsThere</td> : <td>Please Update</td>}
                        <td>{<PrefaceModal title="Drainage" shortTitle="drainage" action={genPlantationJourIncludes} />}</td>
                    </tr>
                    <tr className='hover'>
                        <td className='font-bold'>Soil Type:</td>
                        {currUserJournal.characteristicsOfTheSite ? <td>IsThere</td> : <td>Please Update</td>}
                        <td>{<PrefaceModal title="Soil Type:" shortTitle="soilType" action={genPlantationJourIncludes} />}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>




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

            {/* ----------------- Short description of plantation Site------------------- */}
            <div className='border-b-2'>
                <span className="text-xl font-semibold block px-8 text-center">Short description of plantation Site</span>
                <div className="flex border-b-2 border-dashed">
                    <div className="w-4/5 px-8 p-8">
                        <span className="text-base font-semibold block ">Location of the Site</span>
                        <span className="text-gray-600">{currUserJournal.genPlantationJourIncludes ? <ul>{renderGenPlantationJourIncludes}</ul> : <span className='text-red-500'>Please Update</span>}</span>
                    </div>
                    <div className="w-1/5 py-8">
                        {<PrefaceModal title="Generally plantation journal includes" shortTitle="genPlantationJourIncludes" action={genPlantationJourIncludes} />}
                    </div>
                </div>
                <div className="flex ">
                    <div className="w-full sm:px-8">
                        <span className="text-base font-semibold block mb-4 pt-8">Characteristics Of The Site</span>
                        <span className="text-gray-600">{characteristicsOfTheSite}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostAJournal;