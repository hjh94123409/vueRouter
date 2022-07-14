import axios from 'axios'
export const initRouter = async (formInline) => {
    return await axios.get('http://localhost:9000/login', {
        params: formInline
    })
}