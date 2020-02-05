import {LOCAL_STORAGE_TTL} from "../constants/config";

export const saveState = (state) => {
    const now = new Date();
    try {
        const item = {
            'value': state,
            'expiry': now.getTime() + LOCAL_STORAGE_TTL
        };
        localStorage.setItem('state', JSON.stringify(item));
    } catch {
        // ignore write errors
    }
};

export const loadState = () => {
    try {
        const serializedItem = localStorage.getItem('state');
        if (serializedItem === null) {
            return undefined;
        }
        const unserializedItem = JSON.parse(serializedItem);

        const now = new Date();
        if (now.getTime() > unserializedItem.expiry) {
            localStorage.removeItem('state');
            return undefined;
        }

        return unserializedItem.value;
    } catch (err) {
        return undefined;
    }
};