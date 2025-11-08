import { createBrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Inicio from './Inicio';
import ListParticipantes from './ListParticipantes';
import Registro from './Registro';
import Gafet from './Gafet';

export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Inicio />,
                index: true
            },
            {
                path: "/participantes",
                element: <ListParticipantes />,
            },
            {
                path: "/registro",
                element: <Registro />,
            },
            {
                path: "/gafete/:id",
                element: <Gafet />,
            }
        ]
    }
])

export default router
