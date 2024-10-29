import { Routes, Route } from 'react-router-dom';
import { Notes } from '../components/Notes';
import { Login } from '../components/LogIn';
import { ContentNote } from '../components/ContentNote';
import { SignUp } from '../components/SignUp';

export const AppRouter = () => {
    return(
        <Routes>
            <Route path='notesApp/' element={<SignUp/>}/>
            <Route path='notesApp/login' element={<Login/>}/>
            <Route path='notesApp/home' element={<Notes/>}/>
            <Route path='notesApp/content' element={<ContentNote/>}/>
        </Routes>
    )
}


export default AppRouter;