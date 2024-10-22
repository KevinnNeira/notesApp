import { Routes, Route } from 'react-router-dom';
import { Notes } from '../components/Notes';
import { Cards } from '../components/AllNotes';

export const AppRouter = () => {
    return(
        <Routes>
            <Route path='/' element={<Notes/>}/>
            <Route path='/cards' element={<Cards/>}/>
        </Routes>
    )
}

export default AppRouter;