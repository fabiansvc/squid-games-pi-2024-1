"use strict";

import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase.config";
/**
 * Collection reference to the 'users' collection in Firestore.
 * @type {CollectionReference<DocumentData>}
 */
const usersRef = collection(db, "users");
/**
 * Creates a new user document in Firestore.
 * @param {Object} userData - The data of the user to be created.
 * @returns {Promise<DocumentReference>} A promise that resolves with the reference to the newly created user document.
 */
const createUser = async (userData) => {
    try {
        const res = await addDoc(usersRef, userData);
        return res;
    } catch (error) {
        return error;
    }
};
/**
 * Reads the data of a user from Firestore based on their email.
 * @param {string} userEmail - The email of the user to be read.
 * @returns {Promise<{ success: boolean, userData?: Object, message?: string }>} A promise that resolves with an object containing the success status, user data if found, and an optional message.
 */
const readUser = async (userEmail) => {
    try {
        const userSnapshot = await getDocs(query(usersRef, where("email", "==", userEmail)));

        if (userSnapshot.empty) {
            return { success: false, message: "User not found" };
        }

        const userData = userSnapshot.docs.map((doc) => doc.data());
        return { success: true, userData: userData };
    } catch (error) {
        return error;
    }
};
/**
 * Updates the data of a user in Firestore.
 * @param {string} userEmail - The email of the user to be updated.
 * @param {Object} userData - The updated data of the user.
 * @returns {Promise<{ success: boolean, message?: string }>} A promise that resolves with an object containing the success status and an optional message.
 */
const updateUser = async (userEmail, userData) => {
    try {
        const userSnapshot = await getDocs(query(usersRef, where("email", "==", userEmail)));

        const userDoc = userSnapshot.docs[0];
        await userDoc.ref.update(userData);
        return { success: true, message: "User updated successfully" };
    } catch (error) {
        return error;
    }
};

export { createUser, readUser, updateUser };
