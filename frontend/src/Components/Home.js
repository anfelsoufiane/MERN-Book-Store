import React from 'react'
import Books from './Books'
import Navbar from './Navbar'

function Home() {
  return (
    <>
      <Navbar/>
      <div className='hero'>
          <div className="card text-bg-dark border-0">
          <img src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/03/01/26048_BB_C_OMP_March_03-01.jpg" className="card-img" alt="..." height={"550px"}/>
          {/* <div className="card-img-overlay d-flex flex-column justify-content-center">
              <div className='container'>
                  <h5 className="card-title display-3 fw-bolder mb-0">NEW BOOK AVAILABLE</h5>
                  <p className="card-text lead fs-2">
                      Check all the books now.
                  </p>
              </div>
          </div> */}
          </div>
          {/* <Books/> */}
      </div>
    </>
  )
}

export default Home