import { createContext, useContext, useState } from "react";
/**
 * Create a context to manage the avatar
 */
export const avatarContext = createContext();
/**
 * @returns The avatar context if exists avatarContext, otherwise return error
 */
export const useAvatar = () => {
    const context = useContext(avatarContext);
    if (!context) {
        console.error("Error creating avatar context");
        return;
    }
    return context;
}
/**
 * @param children 
 * @returns The avatar provider with the values avatar and setAvatar.
 */
export function AvatarProvider({ children }) {
    /**
     * State for the avatar's values.
     */
    const [avatar, setAvatar] = useState({
        animation: "Idle",
        avatarRef: null,
        rigidBodyAvatarRef: null
    })
    /**
     * Provider for the avatarContext.
     */
    return (
        <avatarContext.Provider value={{ avatar, setAvatar }}>
            {children}
        </avatarContext.Provider>
    )
}