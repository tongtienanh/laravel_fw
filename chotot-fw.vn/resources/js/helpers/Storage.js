var Storage = {
    getStorage(name, data = [])
    {
        return JSON.parse(localStorage.getItem(name)) || data;
    },
    setStorage(name, data = [])
    {
        localStorage.setItem(name, JSON.stringify(data));
    },
    delStorage(name)
    {
        localStorage.removeItem(name);
    }
};
export default Storage;
