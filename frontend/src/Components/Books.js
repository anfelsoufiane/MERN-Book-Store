import React, { useEffect, useState } from 'react'
import Skeleton from "react-loading-skeleton"
import { NavLink } from 'react-router-dom';
import Http from '../Services/Http-Comman';
import Navbar from './Navbar';

function Books() {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);

    const [Categories, setCategories] = useState([]);

    let componentMounted = true;

    useEffect(()=>{
        const getBooks = async () => {
            setLoading(true);

            const response = await Http.get("books");

            if(componentMounted){
                setData(await response.data);
                setFilter(await response.data);
                setLoading(false);
                //console.log(filter);
            }

            return () => {
                componentMounted = false;
            }
        }

        const getCategories = async () =>{
            const response = await Http.get("categories");
            setCategories(response.data);
        }
        getBooks();
        getCategories();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className='col-md-3'> <Skeleton height={350}/> </div>
                <div className='col-md-3'> <Skeleton height={350}/> </div>
                <div className='col-md-3'> <Skeleton height={350}/> </div>
                <div className='col-md-3'> <Skeleton height={350}/> </div>
            </>
        );
    };

    const filterBooks = (cat) => {
        const updatedList = data.filter((x)=>x.category._id === cat);
        setFilter(updatedList);
    }

    const ShowBooks = () => {
        return (
            <>
                <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                <button className='btn btn-outline-dark me-2' onClick={()=> setFilter(data)}>All</button>
                    {
                        Categories.map((cat)=>{
                            return (
                                <>
                                    <button className='btn btn-outline-dark me-2' onClick={()=> filterBooks(cat._id)}>{cat.name}</button>
                                </>
                            )
                        })
                    }
                </div>
                {filter.map((book)=>{
                    return (
                        <>
                            <div className='col-md-3 mb-4' >
                                <div className="card h-100 text-center p-4" key={book._id}>
                                    <img src={book.image} className="card-img-top" alt={book.name} height="250px"/>
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{book.name}</h5>
                                        <p className="card-text lead fw-bold">${book.price}</p>
                                        <NavLink to={`/books/${book._id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }

  return (
    <>
        <Navbar/>
        <div>
            <div className='container my-5 py-5'>
                <div className='row'>
                    <div className='col-12 mb-5'>
                        <h1 className='display-6 fw-bolder text-center'>Latest Books</h1>
                        <hr/>
                    </div>
                    <div className='row justify-content-center'>
                        {loading ? <Loading/> : <ShowBooks/>}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Books