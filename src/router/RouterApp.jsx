import { Routes, Route } from 'react-router-dom';
import { Notes } from '../components/Notes';
import { Cards } from '../components/AllNotes';
import { Login } from '../components/LogIn';
import { ContentNote } from '../components/ContentNote';

export const AppRouter = () => {
    return(
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<Notes/>}/>
            <Route path='/cards' element={<Cards/>}/>
            <Route path='/content' element={<ContentNote/>}/>
        </Routes>
    )
}

export default AppRouter;