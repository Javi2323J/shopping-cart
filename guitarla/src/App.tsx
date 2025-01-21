import React from 'react'

function App(): React.JSX.Element {
  return (
    <>
      <header className="py-5 header">
        <div className="container-xl">
          <div className="row justify-content-center justify-content-md-between">
            <div className="col-8 col-md-3">
              <a href="index.html">
                <img className="img-fluid" src="logo.svg" alt="imagen logo" />
              </a>
            </div>
            <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
              <div className="carrito">
                <img className="img-fluid" src="carrito.png" alt="imagen carrito" />

                <div id="carrito" className="bg-white p-3">
                  <p className="text-center">El carrito esta vacio</p>
                  <table className="w-100 table">
                    <thead>
                      <tr>
                        <th>Imagen</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img className="img-fluid" src="guitarra_02.jpg"
                            alt="imagen guitarra" />
                        </td>
                        <td>SRV</td>
                        <td className="fw-bold">
                          $299
                        </td>
                        <td className="flex align-items-start gap-4">
                          <button type="button" className="btn btn-dark">
                            -
                          </button>
                          1
                          <button type="button" className="btn btn-dark">
                            +
                          </button>
                        </td>
                        <td>
                          <button className="btn btn-danger" type="button">
                            X
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <p className="text-end">Total pagar: <span className="fw-bold">$899</span></p>
                  <button className="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
              <img className="img-fluid" src="guitarra_01.jpg" alt="imagen guitarra" />
            </div>
            <div className="col-8">
              <h3 className="text-black fs-4 fw-bold text-uppercase">Lukather</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem
                nesciunt, amet deserunt</p>
              <p className="fw-black text-primary fs-3">$299</p>
              <button type="button" className="btn btn-dark w-100">Agregar al Carrito</button>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
              <img className="img-fluid" src="guitarra_02.jpg" alt="imagen guitarra" />
            </div>
            <div className="col-8">
              <h3 className="text-black fs-4 fw-bold text-uppercase">SRV</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem
                nesciunt, amet deserunt</p>
              <p className="fw-black text-primary fs-3">$299</p>
              <button type="button" className="btn btn-dark w-100 ">Agregar al Carrito</button>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
              <img className="img-fluid" src="guitarra_03.jpg" alt="imagen guitarra" />
            </div>
            <div className="col-8">
              <h3 className="text-black fs-4 fw-bold text-uppercase">Borland</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem
                nesciunt, amet deserunt</p>
              <p className="fw-black text-primary fs-3">$299</p>
              <button type="button" className="btn btn-dark w-100 ">Agregar al Carrito</button>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
              <img className="img-fluid" src="guitarra_04.jpg" alt="imagen guitarra" />
            </div>
            <div className="col-8">
              <h3 className="text-black fs-4 fw-bold text-uppercase">Vai</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem
                nesciunt, amet deserunt</p>
              <p className="fw-black text-primary fs-3">$299</p>
              <button type="button" className="btn btn-dark w-100 ">Agregar al Carrito</button>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
              <img className="img-fluid" src="guitarra_05.jpg" alt="imagen guitarra" />
            </div>
            <div className="col-8">
              <h3 className="text-black fs-4 fw-bold text-uppercase">Thompson</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem
                nesciunt, amet deserunt</p>
              <p className="fw-black text-primary fs-3">$299</p>
              <button type="button" className="btn btn-dark w-100 ">Agregar al Carrito</button>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
              <img className="img-fluid" src="guitarra_06.jpg" alt="imagen guitarra" />
            </div>
            <div className="col-8">
              <h3 className="text-black fs-4 fw-bold text-uppercase">White</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem
                nesciunt, amet deserunt</p>
              <p className="fw-black text-primary fs-3">$299</p>
              <button type="button" className="btn btn-dark w-100 ">Agregar al Carrito</button>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
              <img className="img-fluid" src="guitarra_07.jpg" alt="imagen guitarra" />
            </div>
            <div className="col-8">
              <h3 className="text-black fs-4 fw-bold text-uppercase">Cobain</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem
                nesciunt, amet deserunt</p>
              <p className="fw-black text-primary fs-3">$299</p>
              <button type="button" className="btn btn-dark w-100 ">Agregar al Carrito</button>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
              <img className="img-fluid" src="guitarra_08.jpg" alt="imagen guitarra" />
            </div>
            <div className="col-8">
              <h3 className="text-black fs-4 fw-bold text-uppercase">Dale</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem
                nesciunt, amet deserunt</p>
              <p className="fw-black text-primary fs-3">$299</p>
              <button type="button" className="btn btn-dark w-100 ">Agregar al Carrito</button>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
              <img className="img-fluid" src="guitarra_09.jpg" alt="imagen guitarra" />
            </div>
            <div className="col-8">
              <h3 className="text-black fs-4 fw-bold text-uppercase">Krieger</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem
                nesciunt, amet deserunt</p>
              <p className="fw-black text-primary fs-3">$299</p>
              <button type="button" className="btn btn-dark w-100 ">Agregar al Carrito</button>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
              <img className="img-fluid" src="guitarra_10.jpg" alt="imagen guitarra" />
            </div>
            <div className="col-8">
              <h3 className="text-black fs-4 fw-bold text-uppercase">Campbell</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem
                nesciunt, amet deserunt</p>
              <p className="fw-black text-primary fs-3">$299</p>
              <button type="button" className="btn btn-dark w-100 ">Agregar al Carrito</button>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
              <img className="img-fluid" src="guitarra_11.jpg" alt="imagen guitarra" />
            </div>
            <div className="col-8">
              <h3 className="text-black fs-4 fw-bold text-uppercase">Reed</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem
                nesciunt, amet deserunt</p>
              <p className="fw-black text-primary fs-3">$299</p>
              <button type="button" className="btn btn-dark w-100 ">Agregar al Carrito</button>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
              <img className="img-fluid" src="guitarra_12.jpg" alt="imagen guitarra" />
            </div>
            <div className="col-8">
              <h3 className="text-black fs-4 fw-bold text-uppercase">Hazel</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem
                nesciunt, amet deserunt</p>
              <p className="fw-black text-primary fs-3">$299</p>
              <button type="button" className="btn btn-dark w-100 ">Agregar al Carrito</button>
            </div>
          </div>
        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App