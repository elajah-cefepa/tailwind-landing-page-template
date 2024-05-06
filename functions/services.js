import { 
    collection, addDoc} 
                     from 'firebase/firestore';
                     
import { firestore } from '../firebaseConfig';


/*********************  SIMPLE FUNCTIONS **********************/
export const uploadToPath = async (path, data) => {
    try {
      // Assuming 'path' is the name of your Firestore collection
      const docRef = await addDoc(collection(firestore, path), data);
      console.log(`Data uploaded successfully to ${path} with ID: ${docRef.id}`);
    } catch (error) {
      console.error('Error uploading data to Firestore:', error);
    }
  };
  