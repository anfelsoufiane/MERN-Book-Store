import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../Redux/Action';
import Skeleton from 'react-loading-skeleton';
import { NavLink, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Http from '../Services/Http-Comman';

function Book() {

    const {id} = useParams();
    const [book, setBook] = useState([]);
    const [loading, setLoading] = useState(false);

    const [category, setCategory] = useState({});

    const dispatch = useDispatch();
    const addBook = (book) => {
        dispatch(addCart(book));
    }

    useEffect(()=>{
        const getBook = async()=>{
            setLoading(true);
            const response = await Http.get(`/books/${id}`);
            setBook(await response.data);
            setLoading(false);
        }
        getBook();
    },[])

    useEffect(() => {
        const getCategory = async () => {
          const response = await Http.get(`/categories/${book.category}`);
          setCategory(response.data);
        };
        getCategory();
      }, [book.category]);

      
    const Loading = () => {
        return (
            <>
                <div className='col-md-6'> <Skeleton height={400}/> </div>
                <div className='col-md-6' style={{lineHeight:2}}> 
                    <Skeleton height={50} width={300}/> 
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150}/>
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100}/>
                    <Skeleton height={50} width={100} style={{marginLeft:6}}/>
                </div>
            </>
        );
    };


    const ShowBook = () => {
        return (
            <>
                <div className='col-md-6'>
                    <img src={book.image} alt={book.name} height="400px" width="400px"></img>
                </div>
                <div className='col-md-6'>
                    <h4 className='text-uppercase text-black-50'>{category.name}</h4>
                    <h1 className='display-5'>{book.name}</h1>
                    <p className='lead fw-bolder'>
                        Auteur : {book.auteur} <br/>
                        Editeur : {book.editeur}
                    </p>
                    <h3 className='display-6 fw-bold my-4'>${book.price}</h3>
                    <h5>Published at {book.dateEdition}</h5>
                    <p className='lead'>{book.description}</p>
                    <button className='btn btn-outline-dark px-4 py-2' onClick={()=>addBook(book)}>Add to Cart</button>
                    <NavLink to="/cart" className='btn btn-dark ms-2 px-3 py-2'>Go to Cart</NavLink>
                </div>
            </>
        );
    };

  return (
    <>
        <Navbar/>
        <div>
            <div className='container py-5'>
                <div className='row py-5'>
                    {loading ? <Loading/> : <ShowBook/>}
                </div>
            </div>
        </div>
    </>
  )
}

export default Book