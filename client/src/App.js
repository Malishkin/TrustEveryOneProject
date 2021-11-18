import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/main/Navbar';
import Landing from './components/main/Landing';
import { GetInformation } from './components/information/GetInformation';
import { ShareInformation } from './components/information/ShareInformation';
import { AboutPerson } from './components/about/AboutPerson';
import { AboutCompany } from './components/about/AboutCompany';
import { AboutProduct } from './components/about/AboutProduct';
import { AboutService } from './components/about/AboutService';
import { AboutSocialMedia } from './components/about/AboutSocialMedia';
import AddPerson from './components/add/AddPerson';
import AddCompany from './components/add/AddCompany';
import AddSocialMedia from './components/add/AddSocialMedia';
import AddProduct from './components/add/AddProduct';
import AddService from './components/add/AddService';
import Alert from './components/main/Alert';
import AlertState from './context/alert/AlertState';
import SearchPerson from './searchPerson/SearchPerson';
import SearchCompany from './searchCompany/SearchCompany';
import SearchSocialMedia from './searchSocialMedia/SearchSocialMedia';
import SearchProduct from './searchProduct/SearchProduct';
import SearchService from './searchService/SearchService';
import { CryptoWalletPerson } from './components/CryptoWalletPerson';
import { CryptoWalletCompany } from './components/CryptoWalletCompany';
import { CryptoWalletSocialMedia } from './components/CryptoWalletSocialMedia';
import { CryptoWalletProduct } from './components/CryptoWalletProduct';
import { CryptoWalletService } from './components/CryptoWalletService';
import './App.css';

function App() {
  return (
    <AlertState>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert />
            <Switch>
              <Route path='/shareinformation' component={ShareInformation} />
              <Route path='/getinformation' component={GetInformation} />
              <Route path='/aboutperson/:id' component={AboutPerson} />
              <Route path='/aboutcompany/:id' component={AboutCompany} />
              <Route path='/aboutproduct/:id' component={AboutProduct} />
              <Route path='/aboutservice/:id' component={AboutService} />
              <Route path='/aboutsocialmedia/:id' component={AboutSocialMedia} />
              <Route path='/addperson' component={AddPerson} />
              <Route path='/addcompany' component={AddCompany} />
              <Route path='/addsocialmedia' component={AddSocialMedia} />
              <Route path='/addproduct' component={AddProduct} />
              <Route path='/addservice' component={AddService} />
              <Route path='/searchperson' component={SearchPerson} />
              <Route path='/searchcompany' component={SearchCompany} />
              <Route path='/searchsocialmedia' component={SearchSocialMedia} />
              <Route path='/searchproduct' component={SearchProduct} />
              <Route path='/searchservice' component={SearchService} />
              <Route path='/cryptowalletperson' component={CryptoWalletPerson} />
              <Route path='/cryptowalletcompany' component={CryptoWalletCompany} />
              <Route path='/cryptowalletsocialmedia' component={CryptoWalletSocialMedia} />
              <Route path='/cryptowalletproduct' component={CryptoWalletProduct} />
              <Route path = '/cryptowalletservice' component = {CryptoWalletService}/>
            </Switch>
          </section>
        </Fragment>
      </Router>
    </AlertState>
  );
}

export default App;
