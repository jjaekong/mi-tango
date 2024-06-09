import React, { createContext, useContext, useState, useEffect } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const MilongaContext = createContext();

export const MilongaProvider = ({ children }) => {

    const { milongaId } = useParams();

    const [milonga, setMilonga] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMilonga();
    }, [milongaId])

    const fetchMilonga = async () => { 
        const db = getFirestore();
        const docRef = doc(db, `${process.env.NODE_ENV}.milongas`, milongaId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setMilonga(docSnap.data());
        } else {
            console.log('No such milonga!');
        }

        setLoading(false);
    };

    return (
        <MilongaContext.Provider value={milonga}>
            {loading ? <>Loading</> :
                milonga ? children : <>No such milonga</>}
        </MilongaContext.Provider>
    );
};

export const useMilonga = () => useContext(MilongaContext);
