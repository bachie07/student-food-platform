import { useState } from "react";
import SignUpForm from "./components/SignUpForm";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home"
import GroceriesPage from "./pages/Grocery";
import RecipePage from "./pages/Recipe";
import PlacesPage from "./pages/Place";
import Layout from "./components/Layout";
import LoginPage from "./pages/Auth/Login";
import SignUpPage from "./pages/Auth/Signup";
import BottomBar from "./components/BottomBar";
import PrivateRoute from "./components/PrivateRoute";
import SavedPage from "./pages/Saved";
import RecipeDetail from "./pages/Recipe/detail";


function App() {

    return (
      <div>

        <Routes>
          <Route path="/" element={<Layout/>}>

            <Route path="/" element={<HomePage/>}/>

            <Route path="/groceries" element={<GroceriesPage/>}/>

            <Route path="/recipes" element={<RecipePage/>}/>

            <Route path="/eats" element={<PlacesPage/>}/>

            <Route path="*" element={<h1>404 Not Found</h1>}/>

            <Route path="/recipes/:id" element={<RecipeDetail/>}/>

            <Route path="/saved" element={ <PrivateRoute><SavedPage/></PrivateRoute>}/>

          </Route>

          <Route path="/login" element={<LoginPage/>}/>

          <Route path="/signup" element={<SignUpPage/>}/>

        </Routes>

      </div>
    );
    }


    
export default App

