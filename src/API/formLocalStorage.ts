export const getDataLocalStorageForm = (name : string) => {
    const data = window.localStorage.getItem(name);
    return data === null ? null : JSON.parse(data);
};

export const setDataLocalStorageForm = (name: string, data: { userEmail: string; username: string }) => {
    const dataJSON = JSON.stringify(data);
    window.localStorage.setItem(name, dataJSON);
};

export const removeDataLocalStorageForm = (name : string) => {
    return window.localStorage.removeItem(name);
};