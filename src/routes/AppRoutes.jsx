import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import PageNotFound from "../pages/PageNotFound";

import CopaLayout from "../layouts/CopaLayout";
import Jogos from "../pages/Jogos";
import Tabela from "../pages/Tabela";
// import Chaveamento from "../pages/Chaveamento";
import LoginLayout from "../layouts/LoginLayout";
import LoginEscolha from "../pages/LoginEscolha";
import LoginAtleta from "../pages/LoginAtleta";
import LoginTime from "../pages/LoginTime";
import ApoiadoresLayout from "../layouts/ApoiadoresLayout";
import Apoiadores from "../pages/Apoiadores";
import LandingLayout from "../layouts/LandingLayout";
import CadastrarLayout from "../layouts/CadastrarLayout";
import CadastrarEscolha from "../pages/CadastrarEscolha";
import CadastrarAtleta from "../pages/CadastrarAtleta";
import CadastrarTime from "../pages/CadastrarTime";
import DashboardAtleta from "../pages/DashboardAtleta";
import DashboardTimes from "../pages/DashboardTimes";
import DashboardLayout from "../layouts/DashboardLayout";
import ContaAtleta from "../pages/ContaAtleta";
import TimesAtleta from "../pages/TimesAtleta";
import ContaTime from "../pages/ContaTime";
import JogadorasTime from "../pages/JogadorasTime";
import CandidatasTime from "../pages/CandidatasTime";
import PostagensLayout from "../layouts/PostagensLayout";
import Postagens from "../pages/Postagens";
import LoginAdm from "../pages/LoginAdm";
import CodigoUnico from "@/pages/CodigoUnico";
import DashboardAdm from "@/layouts/DashboardAdm";
import PainelPrincipal from "@/adm/PainelPrincipal";
import JogadorasAdm from "@/adm/JogadorasAdm";
import TimesAdm from "@/adm/TimesAdm";
import Exportar from "@/adm/Exportar";
import JogosAdm from "@/adm/JogosAdm";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        errorElement: <PageNotFound/>,
        children: [
            {
                index: true,
                element: <LandingLayout/>,
            },
            {
                path: "*",
                element: <PageNotFound/>,
            },
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
                    // {
                    //     path: 'chaveamento',
                    //     element: <Chaveamento/>
                    // },
                    {
                        path: "*",
                        element: <PageNotFound/>,
                    },
                ],
            },
            {
                path: 'dashboard',
                element: <DashboardLayout/>,
                errorElement: <PageNotFound/>,
                children: [
                    {
                        path: 'jogadora',
                        element: <DashboardAtleta/>,
                        children: [
                            {
                                index: true,
                                element: <ContaAtleta/>,
                            },
                            {
                                path: 'times',
                                element: <TimesAtleta/>,
                            },
                            {
                                path: "*",
                                element: <PageNotFound/>,
                            },
                        ],
                    },
                    {
                        path: 'clube',
                        element: <DashboardTimes/>,
                        children: [
                            {
                                index: true,
                                element: <ContaTime/>,
                            },
                            {
                                path: 'jogadoras',
                                element: <JogadorasTime/>,
                            },
                            {
                                path: 'candidatas',
                                element: <CandidatasTime/>,
                            },
                            {
                                path: "*",
                                element: <PageNotFound/>,
                            },
                        ],
                    },
                    {
                        path: "*",
                        element: <PageNotFound/>,
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
            {
                path: 'postagens',
                element: <PostagensLayout/>,
                errorElement: <PageNotFound/>,
                children: [
                    {
                        index: true,
                        element: <Postagens/>,
                    },
                    {
                        path: "*",
                        element: <PageNotFound/>,
                    },
                ],
            },
            {
                path: "*",
                element: <PageNotFound/>,
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
                element: <LoginTime/>,
            },
            {
                path: 'adm',
                element: <LoginAdm/>,
            },
            {
                path: "*",
                element: <PageNotFound/>,
            },
        ],
    },
    {
        path: 'codigo',
        element: <CodigoUnico/>,
        errorElement: <PageNotFound/>,
    },
    {
        path: 'dashboardADM',
        element: <DashboardAdm/>,
        errorElement: <PageNotFound/>,
        children: [
            {
                index:true,
                element: <PainelPrincipal/>,
                errorElement: <PageNotFound/>,
            },
            {
                path: 'jogosADM',
                element: <JogosAdm/>,
            },
            {
                path: 'jogadorasADM',
                element: <JogadorasAdm/>,
            },
            {
                path: 'timesADM',
                element: <TimesAdm/>,
            },
            {
                path: 'exportar',
                element: <Exportar/>,
            },
        ],
    },
    {
        path: 'cadastrar',
        element: <CadastrarLayout/>,
        errorElement: <PageNotFound/>,
        children: [
            {
                index: true,
                element: <CadastrarEscolha/>,
            },
            {
                path: 'atleta',
                element: <CadastrarAtleta/>,
            },
            {
                path: 'time',
                element: <CadastrarTime/>
            },
            {
                path: "*",
                element: <PageNotFound/>,
            },
        ],
    },
    {
        path: "*",
        element: <PageNotFound/>,
    },
])