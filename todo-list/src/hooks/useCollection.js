import { useState, useEffect, useContext, useRef } from "react";
import { db } from "../firebase/config";

import LoadingContext from "../Contexts/LoadingContext";

//firebase imports
import { collection, onSnapshot, query, where, orderBy } from 'firebase/firestore';

export const useCollection = (collectionName, _query) => {
  const [documents, setDocuments] = useState(null);
  const setIsLoading = useContext(LoadingContext);
  //setup query
  const q = useRef(_query).current;

  useEffect(() => {
    let ref = collection(db, collectionName);

    if (q) {
      ref = query(ref, where(...q), orderBy('createdAt', 'asc'));
    }

    setIsLoading(true);
    const unsub = onSnapshot(ref, (snapshot) => {

      const results = [];
      snapshot.docs.forEach(doc => {
        results.push({ id: doc.id, ...doc.data() });
      })
      setDocuments(results);
      setIsLoading(false);
    })

    return () => {
      unsub();
    }

  }, [collectionName, setIsLoading, q]);

  return { documents };
}