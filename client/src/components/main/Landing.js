import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div>
      <section className='landing'>
        <div className='dark-overlay'>
          <div className='landing-inner'>
            <h1 className='x-medium'>Trust Connector</h1>
            <p className='text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et
              sem risus. Proin hendrerit elit a nibh dapibus aliquam. Vestibulum
              dictum euismod tellus at vestibulum. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Maecenas eget quam non nulla gravida
              rhoncus. Pellentesque sit amet diam facilisis, efficitur nisl in,
              scelerisque metus. Aenean dictum mollis lacus, ac convallis nunc
              placerat id. Phasellus arcu sapien, tempus ut est ac, fermentum
              maximus dolor. Fusce tincidunt lacinia massa, sed porttitor libero
              pellentesque nec. In id lacinia lacus. Etiam elementum euismod
              est. Aenean vel euismod quam. Mauris rutrum justo ut nunc
              imperdiet, tincidunt cursus dolor tempor. Suspendisse potenti.
              Mauris sed elit cursus, ullamcorper justo quis, sagittis ligula.
              Proin ante tortor, ultrices quis sagittis quis, viverra eleifend
              arcu. Aenean convallis suscipit hendrerit. Nam quam nisi, vehicula
              placerat urna non, volutpat convallis ligula. Mauris in congue
              purus. Nam non diam placerat, feugiat urna et, fringilla libero.
              Ut malesuada nulla sit amet enim feugiat eleifend. Integer in
              ullamcorper ex, id gravida neque. Vestibulum eget mattis magna.
              Morbi lorem mauris, tristique ut libero quis, ornare finibus orci.
              Nunc consequat, purus eu interdum semper, turpis felis varius
              nisi, eu mattis sem tellus nec elit. Maecenas fringilla ultrices
              odio at lobortis. Nulla nibh magna, volutpat ac est quis, lacinia
              porttitor lectus. Aenean porta sagittis ipsum at faucibus. Sed ut
              tellus nec urna maximus aliquam. Nulla ut mauris elementum,
              consequat elit sed, feugiat justo. 
            </p><br/>
            <div className='buttons'>
              <Link to='/shareinformation' className='btn btn-primary'>
                Share Information
              </Link>
              <Link to='/getinformation' className='btn btn-light'>
                Get Information
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
