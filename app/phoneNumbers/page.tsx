type PhoneNumber = {
    id: number;
    type: string;
    number: string;
};
import { type } from 'os';
import React from 'react'

async function getList() {
    const res = await fetch('http://localhost:5000/phoneNumber')
    return res.json();
}
export default async function List() {
    const list: PhoneNumber[] = await getList();
    return (
        <div>
            {list.map((item, index) => (
            <p key={index}>{item.type}: ${item.number}</p>
        ))}
        </div>
    )
}
