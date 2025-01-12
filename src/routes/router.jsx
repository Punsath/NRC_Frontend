import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components/layouts/MainLayout";
import { AboutUs } from "../pages/about-us/AboutUs";
import { Home } from "../pages/home/Home";
import { News } from "../pages/news/News";
import { SiteMap } from "../pages/services/SiteMap";
import { ContactUs } from "../pages/contact-us/ContactUs";
import { Wildlife } from "../pages/main-event/Wildlife";
import { Content1 } from "../pages/news/Content1";
import { Content2 } from "../pages/news/Content2";
import { Content3 } from "../pages/news/Content3";
import { Content4 } from "../pages/news/Content4";
import Dashboard from '../pages/Admin/Dashboard'
import AdminHome from '../pages/Admin/AdminHome'
import NewsAdmin from '../pages/Admin/NewsAdmin'
import Category from '../pages/Admin/Category'
import Profile from '../pages/Admin/Profile'
import AddCategory from '../pages/Admin/AddCategory'
import AddEmployee from '../pages/Admin/AddNews'
import EditEmployee from '../pages/Admin/EditNews'
import Start from '../pages/Admin/Start'
import EmployeeLogin from '../pages/Admin/EmployeeLogin'
import EmployeeDetail from '../pages/Admin/EmployeeDetail'
import Login from '../pages/Admin/Login'
import { GeneralTipsAndTricks } from "../pages/products/GeneralTipsAndTricks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/products",
        element: <GeneralTipsAndTricks />,
      },
      {
        path: "/services",
        element: <SiteMap />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/main-events",
        element: <Wildlife />,
      },
      
    
      {
        path: "/news-contentone",
        element: <Content1 />,
      },
      {
        path: "/news-contenttwo",
        element: <Content2 />,
      },
      {
        path: "/news-contentthree",
        element: <Content3 />,
      },
      {
        path: "/news-contentfour",
        element: <Content4 />,
      },
    
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "adminhome", element: <AdminHome/> },
      { path: "employee", element: <NewsAdmin /> },
      // { path: "category", element: <Category /> },
      // { path: "profile", element: <Profile /> },
      // { path: "add_category", element: <AddCategory /> },
      { path: "add_employee", element: <AddEmployee /> },
      { path: "edit_employee/:id", element: <EditEmployee /> },
    ],
  },
  {
    path: "/start",
    element: <Start />,
  },
  // {
  //   path: "/employee_login",
  //   element: <EmployeeLogin />,
  // },
  {
    path: "/adminlogin",
    element: <Login />,
  },
  // {
  //   path: "/employee_detail/:id",
  //   element: <EmployeeDetail />,
  // },


]);

export default router;
