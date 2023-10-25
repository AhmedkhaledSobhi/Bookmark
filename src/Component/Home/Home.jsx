import React ,{useState} from 'react';
import './Home.css';

import {getFirestore ,collection,addDoc} from 'firebase/firestore';
import {app} from '../../firebase';


export default function Home()
{
    const [bookName,setBookName]=useState();
    const [bookUrl , setBookUrl]=useState();

    const firestore = getFirestore(app);

    const  writeData = async (e)=>{
        e.preventDefault();
        const result = await addDoc(collection(firestore,`Bookmark`),{
             name:bookName,
             url:bookUrl,
         });
        setBookName('');
        setBookUrl('');
    };


    return(
        <>
            <form onSubmit={writeData} className='container w-75 mt-3'>
                <div className='d-flex flex-column my-3'>
                    <label htmlFor="Name" className='p-3 text-start'><i className="fa-solid fa-book-bookmark"></i> Site Name</label>
                    <input onChange={(e)=>{setBookName(e.target.value)}} value={bookName} className='my-2 form-control' id='Name' name='Name' placeholder='Bookmark Name' type='text' />
                </div>

                <div className='d-flex flex-column my-3'>
                    <label htmlFor="WebsiteUrl" className='p-3 text-start'><i className="fa-solid fa-link"></i> Website Url</label>
                    <input onChange={(e)=>{setBookUrl(e.target.value)}} value={bookUrl}  className='my-2 form-control' id='WebsiteUrl' name='WebsiteUrl' placeholder='Website Url' type='url'/>
                </div>

                <button type="submit" className='btn btn-outline-warning my-4 px-5'>Submit</button>
            </form>
        </>
    )
}

