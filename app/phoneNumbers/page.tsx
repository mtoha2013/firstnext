type PhoneNumber = {
    id: number;
    type: string;
    number: string;
    username : string;  
};
import { type } from 'os';
import React from 'react'
import AddPhoneNumber from './addPhoneNumber';

async function getList() {
    const res = await fetch('http://localhost:5000/phoneNumber', {cache: "no-store"})
    return res.json();
}
export default async function phoneNumberList() {
    const list: PhoneNumber[] = await getList();
    return (
        <>

        <div className='py-10 px-10'>
<div className="py-2">
    <AddPhoneNumber></AddPhoneNumber>
</div>

            <table className='table w-full'>
                <thead >
                    <tr>
                        <th>#</th>
                        <th>Username </th>
                        <th>Type </th>
                        <th> No</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.username} </td>
                            <td>{item.type} </td>
                            <td>{item.number} </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div></>
    );
}
