import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import PageNotFound from "../pages/PageNotFound";

import CopaLayout from "../layouts/CopaLayout";
import Jogos from "../pages/Jogos";
import Tabela from "../pages/Tabela";
import Chaveamento from "../pages/Chaveamento";
import InscricaoLayout from "../layouts/InscricaoLayout";
import InscricaoEscolha from "../pages/InscricaoEscolha";
import InscricaoAtleta from "../pages/InscricaoAtleta";
import InscricaoTime from "../pages/InscricaoTime";
import LoginLayout from "../layouts/LoginLayout";
import LoginEscolha from "../pages/LoginEscolha";
import LoginAtleta from "../pages/LoginAtleta";
import LoginTime from "../pages/LoginTime";
import ApoiadoresLayout from "../layouts/ApoiadoresLayout";
import Apoiadores from "../pages/Apoiadores";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <PageNotFound/>,
        children: [
            {
                path: 'copa',
                element: <CopaLayout/>,
                errorElement: <PageNotFound/>,
                children: [
                    {
                        index: true,
                        element: <Jogos/>,
                    },
                    {
                        path: 'jogos',
                        element: <Jogos/>,
                    },
                    {
                        path: 'tabela',
                        element: <Tabela/>,
                    },
                    {
                        path: 'chaveamento',
                        element: <Chaveamento/>
                    },
                ],
            },
            {
                path: 'inscricao',
                element: <InscricaoLayout/>,
                errorElement: <PageNotFound/>,
                children: [
                    {
                        index: true,
                        element: <InscricaoEscolha/>,
                    },
                    {
                        path: 'atleta',
                        element: <InscricaoAtleta/>,
                    },
                    {
                        path: 'time',
                        element: <InscricaoTime/>,
                    },
                ],
            },
            {
                path: 'login',
                element: <LoginLayout/>,
                errorElement: <PageNotFound/>,
                children: [
                    {
                        index: true,
                        element: <LoginEscolha/>,
                    },
                    {
                        path: 'atleta',
                        element: <LoginAtleta/>,
                    },
                    {
                        path: 'time',
                        element: <LoginTime/>
                    },
                ],
            },
            {
                path: 'apoiadores',
                element: <ApoiadoresLayout/>,
                errorElement: <PageNotFound/>,
                children: [
                    {
                        index: true,
                        element: <Apoiadores/>,
                    },
                ],
            },
        ],
    },
])