'use client'

import { useRouter } from 'next/navigation';
import React from 'react'
import { SyntheticEvent, useState } from 'react'

export default function AddPhoneNumber() {

    const [modal, setModal] = useState(false);
    const [username, setUsername] = useState("");
    const [type, setType] = useState("");
    const [phone, setPhone] = useState("");
    const [IsMutating, setIsMutating] = useState(false);


    const router = useRouter();

    async function handleSubmit(e: SyntheticEvent) {
        e.preventDefault();

        setIsMutating(true);

        //Validation
        console.log(username, phone, type);
        if(username.trim() === "" || phone.trim() ==="")
        {
            const sMessage = 'username, phone number is required';
            console.log(sMessage);
            alert(sMessage);
            setIsMutating(false);
            return;
        }

        await fetch('http://localhost:5000/phoneNumber', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({
                username: username,
                type: type,
                number: phone
            })

        });

        setUsername("");
        setPhone("");
        setType("")


        router.refresh();
        setIsMutating(false);
        setModal(false);
    }

    function handleChange() {
        setModal(!modal);
    }

    return (
        <>
            <div>
                <br />
                <button className='btn' onClick={handleChange}> Add New</button>
                <input type="checkbox" name="" id="" checked={modal} onChange={handleChange} className='modal-toggle' />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">
                            Add New Data
                        </h3>

                        <form>
                            <div className="form-control">
                                <label htmlFor="username" className="label font-bold"></label>
                                <input type="text" id="username" className="input w-full input-bordered" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' />
                            </div>

                            <div className="form-control">
                                <label htmlFor="type" className="label font-bold"></label>
                                <input type="text" id="type" className="input w-full input-bordered" placeholder='Type' value={type} onChange={(e) => setType(e.target.value)} />
                            </div>

                            <div className="form-control">
                                <label htmlFor="phone" className="label font-bold"></label>
                                <input type="text" id="phone" className="input w-full input-bordered" placeholder='Number' value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                        </form>

                        <div className="modal-action">
                            <button type="button" className="btn" onClick={handleChange}>Close</button>
                            {IsMutating ? (
                                <button type="button" className="btn loading">Processing...</button>

                            ) : (
                                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Send</button>
                            )
                            }
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
