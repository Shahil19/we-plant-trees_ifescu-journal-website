import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllContents } from '../../features/contents/contentSlice';

const Contents = () => {
    const { contents } = useSelector(selectAllContents)

    const tableRows = contents.map(content => (
        <tr key={content.id}>
            {console.log(content)}
            <th>{content.id}</th>
            <td>{content.name}</td>
            <td>
                {
                    content.subContents?.length > 0 ? <ul className='list-disc list-inside'>
                        {
                            content.subContents.map((sub) => (
                                <li>{sub}</li>
                            ))
                        }
                    </ul> : ''
                }
            </td>
        </tr>

    ))

    return (
        <div className="overflow-x-auto container mx-auto mt-5">
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Sub Groups</th>
                    </tr>
                </thead>
                <tbody>
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
        </div>
    );
};

export default Contents;