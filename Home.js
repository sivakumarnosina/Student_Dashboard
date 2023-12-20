// Home.js
import React from 'react';
import Nav from './Nav';
import Infosys from './Infosys.png';
import Pepsico from './Pepsico.png';
import Google from './Google.png';
import Fluper from './Fluper.png';
import Chart from "react-apexcharts";
import './style.css';

function Home() {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const state = {
    series: [
      {
        name: 'Bar Series',
        data: [50, 117, 20, 3, 86,'',27]
      },
    ],
  };

  const options = {
    chart: {
      width: '100%',
      height: 400,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '80%',
      },
    },
    xaxis: {
      categories: daysOfWeek,
    },
  };

  return (
    <div className='container-fluid'>
      <Nav />

      <div className='row '>
        <div className='col-md-5 bg-white ms-3'>
          <div className='p-3 mt-3 shadow-sm d-flex justify-content-around align-items-center rounded' id='box'>
            <h7 className='fs-2'>200</h7>
            <h1 className='fs-5'>Total Visitor</h1>
            <i className='bi bi-people fs-2 me-2' id='icon'></i>
          </div>
          <div className='p-3 mt-3 shadow-sm d-flex justify-content-around align-items-center rounded' id='box'>
            <h7 className='fs-2'>575</h7>
            <h1 className='fs-5'>Shortlisted</h1>
            <i className='bi bi-check-circle fs-2 me-2' id='icon'></i>
          </div>
          <div className='p-3 mt-3 shadow-sm d-flex justify-content-around align-items-center rounded' id='box'>
            <h7 className='fs-2'>75</h7>
            <h1 className='fs-5'>Job Views</h1>
            <i className='bi bi-eye fs-2 me-2' id='icon'></i>
          </div>
          <br />

          <div className='p-3 shadow-sm d-flex justify-content-around align-items-center rounded' id='box'>
            <h3 className='fs-2'>75</h3>
            <h1 className='fs-5'>Applied Job</h1>
            <i className='bi bi-pencil-square fs-2 me-2' id='icon'></i>
          </div>
          <br />
        </div>
        

        <div className='col-md-6'>
        <div className='col-xl-10 p-3 card '>
              <div className='card-header text-center'>
                <h3>Recent Applied Job</h3>
              </div>
              <div className='card-body fs-4 text-center'>
              <table className="table table- table-hover">
                        <tbody>
                        <tr>
                          <td><img src={Infosys} width={'70px'} height={'35px'}></img></td>
                          <td>Data Analist</td>
                          <td>
                          <div class="dropdown-center dropdown bg-white">
                              <button class="btn btn- dropdown- " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <h4> ... </h4>
                              </button>
                              <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">View Job</a></li>
                                <li><a class="dropdown-item" href="#">Archive</a></li>
                                <li><a class="dropdown-item" href="#">Delete</a></li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td><img src={Pepsico} width={'60px'} height={'60px'}></img></td>
                          <td>Developer</td>
                          <td>
                          <div class="dropdown-center dropdown bg-white">
                              <button class="btn btn- dropdown- " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <h4> ... </h4>
                              </button>
                              <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">View Job</a></li>
                                <li><a class="dropdown-item" href="#">Archive</a></li>
                                <li><a class="dropdown-item" href="#">Delete</a></li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td><img src={Google} width={'40px'} height={'40px'}></img></td>
                          <td>Fronted Developer</td>
                          <td>
                          <div class="dropdown-center dropdown bg-white">
                              <button class="btn btn- dropdown- " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <h4> ... </h4>
                              </button>
                              <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">View Job</a></li>
                                <li><a class="dropdown-item" href="#">Archive</a></li>
                                <li><a class="dropdown-item" href="#">Delete</a></li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td><img src={Fluper} width={'45px'} height={'45px'}></img></td>
                          <td>UI & UX Designer</td>
                          <td>
                          <div class="dropdown-center dropdown bg-white">
                              <button class="btn btn- dropdown- " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <h4> ... </h4>
                              </button>
                              <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">View Job</a></li>
                                <li><a class="dropdown-item" href="#">Archive</a></li>
                                <li><a class="dropdown-item" href="#">Delete</a></li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        </tbody>
                      </table>
              </div>
            </div>
        </div>
      </div>

      <div className='row g-5 my-3' style={{ marginLeft: '170px' }}>

        <div className='col-md-10 bg-white'>
          <div className="row justify-content-end">
          <div className="Graph">
            <Chart
              options={options}
              series={state.series}
              type="bar"
            />
          </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
