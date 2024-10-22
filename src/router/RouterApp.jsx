import { Routes, Route } from 'react-router-dom';
import { Notes } from '../components/Notes';
import { Cards } from '../components/AllNotes';
import { Login } from '../components/LogIn';

export const AppRouter = () => {
    return(
        <Routes>
            <Route path='/home' element={<Notes/>}/>
            <Route path='/cards' element={<Cards/>}/>
            <Route path='/' element={<Login/>}/>
        </Routes>
    )
}

export default AppRouter;