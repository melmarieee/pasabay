import React from 'react'
import './../css/home.css'
import HomeCar from '../assets/carpoollogo.png'
import NavBar from './common/navbar'
import Footer from './common/footer'
import { MDBIcon } from 'mdb-react-ui-kit';
import ratingImportOne from '../../src/assets/PatHenson.jpg';
import ratingImportTwo from '../../src/assets/PauloAvelino.jpeg';
import ratingImportThree from '../../src/assets/JuanKarlos.jpg';


const Home = () => {                            
  return (
    <>
      <NavBar/>
      <div className='container-fluid px-5'>
        <div className='row pt-5'>
          <div className='col-lg-5 pt-5 font-example'>
            <h1 className='h1-home mb-4 pt-5'>Travel Together, Save Together with Pasabay.</h1>
            <p class="text-home home-font-style">Pasabay is a carpooling website that connects drivers and passengers for convenient and cost-effective rides. With just a few taps on your website, you can easily join a carpool or offer a ride to others going your way.</p>
            <div class="row text-center">
              <div class="col-lg-6 px-4 py-3">
              <a href="/carpool"><button type="button" class="btn-lg rounded button-find-ride">Find Rides</button></a>
              </div>
              <div class="col-lg-6 px-4 py-3">
                <a href="/form"><button type="button" class="btn-lg rounded button-create-ride border-white">Create Ride</button></a>
              </div>
            </div>
          </div>
          <div className='col-lg-7 text-center p-5'>
            <img src={HomeCar} class="img-fluid image-home" alt="Home Car"/>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-4 p-5'>
            <div class="text-center">
              <MDBIcon className="py-3 px-3" size="3x" fas icon="hand-holding-usd"/>
            </div>
            <h3 className='text-center'>
              Less hussle and rides at low prices
            </h3>
            <p className='text-center'>
            Where ever you are going find rides at low prices and less hussle. find the perfect ride from our wide range of destinations.
            </p>
          </div>
          <div className='col-lg-4 p-5'>
          <div class="text-center">
            <MDBIcon className="py-3 px-3" size="3x" fas icon="taxi" />
          </div>
          <h3 className='text-center'>Feel safe on your travel</h3>
          <p className='text-center'>
          We take the time to get to know each of our members and bus partners. We check reviews, profiles and IDs, so you know who you’re travelling with and can book your ride at ease on our secure platform.
          </p>
          </div>
          <div className='col-lg-4 p-5'>
          <div class="text-center">
            <MDBIcon className="py-3 px-3" size="3x" fas icon="search-location" />
          </div>
          <h3 className='text-center'>Search, Click and go!</h3>
          <div>
            <p className='text-center'>
              Booking is easier! Thanks to our application where you can find rides in a minute. Thanks to our simple app powered by great technology, you can book a ride close to you in just minutes.
            </p>
          </div>
          </div>
        </div>
      </div>
      <section className='bg-light p-5'>
        <div class="row d-flex justify-content-center">
          <div class="col-md-10 col-xl-8 text-center">
            <h3 class="mb-4">Testimonials</h3>
            <p class="mb-4 pb-2 mb-md-5 pb-md-0">
              Customer Feedbacks
            </p>
          </div>
        </div>
        <div class="row text-center d-flex align-items-stretch">
          <div class="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
            <div class="card testimonial-card">
              <div class="card-up card-color-1"></div>
              <div class="avatar mx-auto bg-white">
                <img src={ratingImportOne}
                  class="rounded-circle img-fluid" />
              </div>
              <div class="card-body">
                <h4 class="mb-4">Patricia Henson</h4>
                <p>"⭐⭐⭐⭐⭐"</p>
                <hr class="width-100"/>
                <p class="dark-grey-text mt-4">
                  <i class="fas fa-quote-left pe-2"></i> I've been carpooling with Psabay for a few months now, and it's been a fantastic experience. They are always punctual, and our daily commute is so much more enjoyable. Highly recommended!
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
            <div class="card testimonial-card">
              <div class="card-up card-color-2"></div>
              <div class="avatar mx-auto bg-white">
                <img src={ratingImportTwo}
                  class="rounded-circle img-fluid" />
              </div>
              <div class="card-body">
                <h4 class="mb-4">Paulo Avelino</h4>
                <p>"⭐⭐⭐⭐⭐"</p>
                <hr class="width-100" />
                <p class="dark-grey-text mt-4">
                  <i class="fas fa-quote-left pe-2"></i>I appreciate the safety measures in place with this carpool service. Pasabay maintains a clean and well-maintained vehicle, making every ride a comfortable and secure experience.
                  repudi mollitia architecto.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-0 d-flex align-items-stretch">
            <div class="card testimonial-card">
              <div class="card-up card-color-3"></div>
              <div class="avatar mx-auto bg-white">
                <img src={ratingImportThree}
                  class="rounded-circle img-fluid" />
              </div>
              <div class="card-body">
                <h4 class="mb-4">Juan Karlos</h4>
                <p>"⭐⭐⭐⭐⭐"</p>
                <hr class="width-100"/>
                <p class="dark-grey-text mt-4">
                  <i class="fas fa-quote-left pe-2"></i>I've saved a lot on gas and reduced my carbon footprint by carpooling with Pasabay. The carpool service matched us perfectly, and I couldn't be happier with the arrangement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='p-5'>
        <h3 class="mb-4 text-center">Where do you want a ride to?</h3>
        <div className='row'>
          <div className='col-lg-4 p-5'>
            <div className='row bg-light shadow py-4  rounded-3'>
              <div className='col-md-5 pt-1 text-center'>
                <h5>Manila</h5>
              </div>
              <div className='col-md-2 text-center'>
                <MDBIcon size="2x" fas icon="long-arrow-alt-right" />
              </div>
              <div className='col-md-5 pt-1'>
                <h5>Batangas</h5>
              </div>
            </div>
          </div>
          <div className='col-lg-4 p-5'>
            <div className='row bg-light shadow py-4 rounded-3'>
              <div className='col-md-5 pt-1 text-center'>
                <h5>Manila</h5>
              </div>
              <div className='col-md-2 text-center'>
                <MDBIcon size="2x" fas icon="long-arrow-alt-right" />
              </div>
              <div className='col-md-5 pt-1'>
                <h5>Ilocos</h5>
              </div>
            </div>
          </div>
          <div className='col-lg-4 p-5'>
            <div className='row bg-light py-4 shadow rounded-3'>
              <div className='col-md-5 pt-1 text-center'>
                <h5>Manila</h5>
              </div>
              <div className='col-md-2 text-center'>
                <MDBIcon size="2x" fas icon="long-arrow-alt-right" />
              </div>
              <div className='col-md-5 pt-1'>
                <h5>Isabela</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default Home;