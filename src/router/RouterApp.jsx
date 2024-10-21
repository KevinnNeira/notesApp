import { Routes, Route } from 'react-router-dom';
import { AppComponent } from '

export const AppRouter = () => {
    return(
        <Routes>
            <Route path='/' element={<Notes/>}/>
        </Routes>
    )
}

export default AppRouter;