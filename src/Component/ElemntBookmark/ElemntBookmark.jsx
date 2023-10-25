import React, {useState,useEffect} from 'react';

import './ElemntBookmark.css';

import { getFirestore, doc, query, collection, getDocs, updateDoc, deleteDoc} from 'firebase/firestore';
import {app} from '../../firebase'; 


export default function ElemntBookmark()
{
    const [items,setItems]=useState([ ]);
    const firestore = getFirestore(app);
    const [bookName , setBookName] =useState();
    const [bookUrl ,setBookUrl] = useState();
    const [bookId , setBookId] = useState();
    const [isModalVisible, setModalVisible] = useState(false);

    const getDocumentsByQuery = async () => {
        console.log("Ahmed (getDocumentsByQuery) ");
        const collectionRef = collection(firestore,'Bookmark');
        const q = query(collectionRef);
        const snapShot = await getDocs(q);
    
        const dataWithIds = snapShot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
        }));
        console.log(dataWithIds);
        setItems(dataWithIds);

        console.log("Ahmed end getDocumentsByQuery");

    };

    console.log(items);

    console.log("ahmed oute getDocumentsByQuery");

// ================= { update Element } ===============================

   const update =async (e)=>{
        e.preventDefault();
        const docRef=doc(firestore,"Bookmark",bookId);
        await updateDoc(docRef,{
            url:bookUrl,
            name:bookName,
        });

        setBookName(' ');
        setBookUrl(' ');
        setBookId(' ');
        setModalVisible(false);
   };


   const displayDataUpdate=(elementItem)=>
   {
        setModalVisible(true);
        setBookId(elementItem.id);
        setBookName(elementItem.data.name);
        setBookUrl(elementItem.data.url);
   }

//================ { Delete } ========================

   const deleteDocument = async (documentId) => {
    const documentRef = doc(firestore, 'Bookmark', documentId);
    try {
      await deleteDoc(documentRef);
    //   alert('Document successfully deleted!')
    } catch (error) {
      alert('Error deleting document: ', error);
    }
  };

// ========================================================

   useEffect(()=>{

        // console.log("ahmed effect 1 ");
        getDocumentsByQuery();

    return()=>{
        // getDocumentsByQuery();

        // console.log(" ahmed effect 2 ");
    }
   },[deleteDocument])


    return(
        <>
            <div className='table-responsive'>
                <table className='table table-striped'>
                    <thead className='mb-5'>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Name Site</th>
                            <th scope='col'>View</th>
                            <th scope='col'>Update </th>
                            <th scope='col'>delete</th>
                        </tr>
                    </thead>

                    <tbody className='table-hover'>
                        {items.map((item,i)=> <tr key={i}>
                            <th scope='row'>{i+1}</th>
                            <td>{item.data.name}</td>
                            <td><a href={item.data.url} target='_blank' className='btn btn-outline-success'><i className="fa-regular fa-eye pe-1"></i>View</a></td>
                            <td>
                                <button onClick={()=>{displayDataUpdate(item)}} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button>
                            </td>
                            <td>
                                <button onClick={() => deleteDocument(item.id)} className='btn btn-outline-danger'><i className="fa-solid fa-trash"></i> Delete</button>
                            </td>
                        </tr> )}                 
                    </tbody>
                </table>
            </div>


            <div className={`modal fad${isModalVisible ? 'show':''}`} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden={!isModalVisible}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Update Element </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body by-5">
                            <form onSubmit={update}>
                             
                                <div className='m-3'>
                                    <label htmlFor="name">Site Name</label>
                                    <input id='name' value={bookName} onChange={(e)=>{setBookName(e.target.value)}} className="form-control my-2" type='text' />
                                </div>
                                <div className='m-3'>
                                    <label htmlFor='url' >Website Url</label>
                                    <input id="url" value={bookUrl} onChange={(e)=>{setBookUrl(e.target.value)}} className="form-control my-2" type='url' />
                                </div>
                                <button type="submit" className="btn btn-primary">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}