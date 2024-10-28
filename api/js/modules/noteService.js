import axios from 'axios';

export const saveNote = async (titulo, contenido) => {
    try {
        const response = await axios.post('http://localhost:3000/notes', {
            titulo,
            contenido
        });
        return response.data;
    } catch (error) {
        console.error('Error al guardar la nota:', error);
        throw error;
    }
};
