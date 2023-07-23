

const useLocalStorage = () => {
    const setItem = (itemName, data) => {
        if (typeof window !== 'undefined') {

            return localStorage?.setItem(itemName, JSON.stringify(data))
        }
    }
    const getItem = (itemName) => {
        if (typeof window !== 'undefined') {
            return JSON.parse(localStorage?.getItem(itemName))
        }
    }

    return { setItem, getItem }
}


export default useLocalStorage