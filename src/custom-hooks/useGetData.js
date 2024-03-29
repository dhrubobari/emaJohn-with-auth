import React, { useEffect, useState } from 'react'
import { db } from '../firebase.init'
import { collection, getDocs } from 'firebase/firestore'

const useGetData = (collectionName) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const collectionRef = collection(db, collectionName);

    useEffect(() => {
        const getData = async() => {
            // firebase firestore realtime data update
            const data = await getDocs(collectionRef);
            setData(data.docs.map(doc=>({...doc.data(), id: doc.id})))
            setLoading(false)
        };
        getData();
    }, []);

  return { data, loading };
}

export default useGetData