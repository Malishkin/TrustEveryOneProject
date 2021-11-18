import React, { Fragment, useState} from 'react';
import SearchPerson from '../../searchPerson/SearchPerson';
import SearchProduct from '../../searchProduct/SearchProduct';
import SearchService from '../../searchService/SearchService';
import SearchCompany from '../../searchCompany/SearchCompany';
import SearchSocialMedia from '../../searchSocialMedia/SearchSocialMedia';
import SearchAndCountPersons from '../../searchPerson/SearchAndCountPersons';
import SearchAndCountCompanies from '../../searchCompany/SearchAndCountCompanies';
import SearchAndCountSocialMedia from '../../searchSocialMedia/SearchAndCountSocialMedia';
import SearchAndCountProduct from '../../searchProduct/SearchAndCountProduct';
import SearchAndCountService from '../../searchService/SearchAndCountService';
import CustomTab from './CustomTab';
import DisplayPersonsFromServer from '../../searchPerson/DisplayPersonsFromServer';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export const GetInformation = () => {
  
  const [countPersons, setCountPersons] = useState(0);
  const [searchText, setSearchText] = useState("");
  
  const myUpdateCountPersons = (countPersonsParam) => setCountPersons(countPersonsParam);
  const updateSearchText = (searchTextParam) => setSearchText(searchTextParam);

  return (
    <Fragment>
      <p className='lead'>
        <i className='fas fa-user'></i> Get Information
      </p>
      <Tabs>
        <TabList>
          <Tab>
            <CustomTab
              title='Person'
              popupMsg="Сlick Person on the button and enter the
                        person's name in the search box"
            />
          </Tab>

          <Tab>
            <CustomTab
              title='Company'
              popupMsg="Сlick Company on the button and enter the
                        company's name in the search box"
            />
          </Tab>
          <Tab>
            <CustomTab
              title='Social Media'
              popupMsg="Сlick Social Media on the button and enter the
                        media's name in the search box"
            />
          </Tab>
          <Tab>
            <CustomTab
              title='Product'
              popupMsg="Сlick Product on the button and enter the
                        product's name in the search box"
            />
          </Tab>
          <Tab>
            <CustomTab
              title='Service'
              popupMsg="Сlick Service on the button and enter the
                        service's name in the search box"
            />
          </Tab>
        </TabList>

        <TabPanel>
         
          <p>Simple search in all Person data (first name, last name ...)</p>
            {/* {<SearchAndCountPersons
              updateSearchText={updateSearchText}
              updateCountPersons={myUpdateCountPersons}
            ></SearchAndCountPersons>}
            <div style={{ backgroundColor: "cyan" }}>{countPersons}</div>
            {(countPersons < 7) &&
                <DisplayPersonsFromServer searchText={searchText}> </DisplayPersonsFromServer>
            } */}
            {<SearchPerson></SearchPerson>}
          
        </TabPanel>
        <TabPanel>
        
          <p>Simple search in all Company data (name, occupation, phone ...)</p>
          {<SearchCompany></SearchCompany>}
          
        </TabPanel>
        <TabPanel>
        <p>Simple search in all Social Media data (any info about ...)</p>
          {<SearchSocialMedia></SearchSocialMedia>}
        </TabPanel>
        <TabPanel>
        <p>Simple search in all Product data (name, brand, manufacturer, functionality...)</p>
          {<SearchProduct></SearchProduct>}
        </TabPanel>
        <TabPanel>
        <p>Simple search in all Service data (name, type of service ...)</p>
          {<SearchService></SearchService>}
        </TabPanel>
      </Tabs>
    </Fragment>
  );
};
