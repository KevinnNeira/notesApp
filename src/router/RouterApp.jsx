import { Routes, Route } from 'react-router-dom';
import { Notes } from '../components/Notes';
import { Login } from '../components/LogIn';
import { ContentNote } from '../components/ContentNote';
import { SignUp } from '../components/SignUp';

export const AppRouter = () => {
    return(
        <Routes>
            <Route path='/' element={<SignUp/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/home' element={<Notes/>}/>
            <Route path='/content' element={<ContentNote/>}/>
        </Routes>
    )
}

export default AppRouter;