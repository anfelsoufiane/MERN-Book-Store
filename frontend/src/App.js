import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {Routes, Route} from "react-router-dom";
import Books from './Components/Books';
import Book from './Components/Book';
import Cart from './Components/Cart';
import CategoryList from './Components/Administration/CategoryList';
import BookList from './Components/Administration/BookList';
import AddCategory from './Components/Administration/AddCategory';
import EditCategory from './Components/Administration/EditCategory';
import AddBook from './Components/Administration/AddBook';
import EditBook from './Components/Administration/EditBook';
import UserList from './Components/Administration/UserList';
import AddUser from './Components/Administration/AddUser';
import EditUser from './Components/Administration/EditUser';

function App() {
  return (
    <>
      <Routes>
        <Route path={'/admin'} element={<BookList/>}/>
        <Route exact path={'/admin/books'} element={<BookList/>}/>
        <Route exact path={'/admin/books/add'} element={<AddBook/>}/>
        <Route exact path={'/admin/books/edit/:id'} element={<EditBook/>}/>
        <Route exact path={'/admin/categories'} element={<CategoryList/>}/>
        <Route exact path={'/admin/categories/add'} element={<AddCategory/>}/>
        <Route exact path={'/admin/categories/edit/:id'} element={<EditCategory/>}/>
        <Route exact path={'/admin/users'} element={<UserList/>}/>
        <Route exact path={'/admin/users/add'} element={<AddUser/>}/>
        <Route exact path={'/admin/users/edit/:id'} element={<EditUser/>}/>
        
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/books' element={<Books/>}/>
        <Route exact path='/books/:id' element={<Book/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  );
}

export default App;
