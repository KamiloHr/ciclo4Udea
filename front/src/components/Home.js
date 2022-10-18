import React, { Fragment } from 'react'

const Home = () => {
  return (
    <Fragment>
        <h1 id="encabezado_producto">Ultimos Productos</h1>
        <section id="productos" className='container mt-5'>
            <div className='row'>
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/foto_2.jpg' alt="Nutra gold"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'>Nutra Gold Holistic Gatos</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opiniones"> 5 reviews</span>
                            </div>
                            <p className='card-text'>$72.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                Ver detalle
                            </a>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/foto_3.jpg' alt="Nutra gold"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'>Adapa</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opiniones"> 2 reviews</span>
                            </div>
                            <p className='card-text'>$52.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                Ver detalle
                            </a>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/foto_4.jpg' alt="Nutra gold"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'>Nutrion cachorros</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opiniones"> 5 reviews</span>
                            </div>
                            <p className='card-text'>$80.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                Ver detalle
                            </a>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/foto_3.webp' alt="Nutra gold"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'>Chunky Gatos</a></h5>
                            <div className='rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="No_de_opiniones"> 5 reviews</span>
                            </div>
                            <p className='card-text'>$80.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                Ver detalle
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </Fragment>
  )
}

export default Home