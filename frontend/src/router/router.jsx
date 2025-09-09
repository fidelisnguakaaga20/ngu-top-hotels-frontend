import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/home/Home";
import About from "../pages/miniPage/About.jsx";
import PrivacyPolicy from "../pages/miniPage/PrivacyPolicy.jsx";
import ContactUs from "../pages/miniPage/ContactUs.jsx";
import SingleBlog from "../pages/blogs/singleBlog/SingleBlog.jsx";
import Login from "../pages/user/Login.jsx";
import Register from "../pages/user/Register.jsx";
import AdminLayout from "../pages/Admin/AdminLayout.jsx";
import Dashboard from "../pages/admin/dashboard/Dashboard.jsx";
import AddPost from "../pages/admin/post/AddPost.jsx";
import ManagePosts from "../pages/admin/post/ManagePosts.jsx";
import ManageUser from "../pages/admin/user/ManageUser.jsx";
import PrivateRouter from "./PrivateRouter.jsx";
import UpdatePost from "../pages/admin/post/UpdatePost.jsx";


const router = createBrowserRouter([ 
        { 
            path:"/",
            element: <App/>,
            children: [
                { 
                    path: "/",
                    element: <Home/>
                },
                {
                    path: "/about-us",
                    element: <About/>
                },
                {
                    path: "/privacy-policy",
                    element: <PrivacyPolicy/>
                },
                {
                    path: "/contact-us",
                    element: <ContactUs/>
                },
                {
                    path: "blogs/:id",
                    element: <SingleBlog/>,
                },
                {
                    path: "/login",
                    element: <Login/>
                },
                {
                    path: "/register",
                    element: <Register/>,
                },
                { 
                    path: "/dashboard",
                    element: <PrivateRouter><AdminLayout/></PrivateRouter>, // it will be protected by admin: use Private Routes
                    children: [
                        {
                            path: '',
                            element: <Dashboard/>
                        },
                        {
                            path: "add-new-post",
                            element: <AddPost/>
                        },
                        {
                            path: "manage-items",
                            element: <ManagePosts/>
                        },
                        {
                            path: "users",
                            element: <ManageUser/>
                        },
                        {
                            path: "update-items/:id",
                            element: <UpdatePost/>
                        }
                    ]
                } 
            ]
        },
    ]);

export default router