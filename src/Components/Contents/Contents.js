import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllContents } from '../../features/contents/contentSlice';

const Contents = () => {
    const { contents } = useSelector(selectAllContents)

    const tableRows = contents.map(content => (
        <tr key={content.id} className="py-9">
            <th>{content.id}</th>
            <td>{content.name}</td>
            <td>
                {
                    content.subContents?.length > 0 ? <ul className='list-disc list-inside'>
                        {
                            content.subContents.map((sub, index) => (
                                <li key={index}>{sub}</li>
                            ))
                        }
                    </ul> : ''
                }
            </td>
        </tr>

    ))

    return (
        <>
            <section className="overflow-x-auto container mx-auto mt-4 max-w-3xl">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Sub Groups</th>
                        </tr>
                    </thead>
                    <tbody className="text-xl divide-y divide-gray-100">
                        {tableRows}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Sub Groups</th>
                        </tr>
                    </tfoot>
                </table>
            </section>
        </>
    );
};

export default Contents;