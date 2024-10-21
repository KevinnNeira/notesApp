import { Routes, Route } from 'react-router-dom';
import { Notes } from '../components/Notes';

export const AppRouter = () => {
    return(
        <Routes>
            <Route path='/' element={<Notes/>}/>
        </Routes>
    )
}

export default AppRouter;