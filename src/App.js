import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import {PRODUCTS_DATA, NUMBER_DATA, CAR_DATA, PERSON_DATA} from "./data/data";

import {MenuCardPage} from "./pages/MenuCardPage";
import {PicturesPage} from "./pages/PicturesPage";
import {NumbersPage} from "./pages/NumbersPage";
import {CarsPage} from "./pages/CarsPage";
import {PersonsPage} from "./pages/PersonsPage";

function App() {
    return (
        <Tabs>
            <TabList>
                <Tab>menu</Tab>
                <Tab>pics</Tab>
                <Tab>numbers</Tab>
                <Tab>cars</Tab>
                <Tab>persons</Tab>
            </TabList>

            <TabPanel>
                <MenuCardPage products={PRODUCTS_DATA}/>
            </TabPanel>
            <TabPanel>
                <PicturesPage/>
            </TabPanel>
            <TabPanel>
                <NumbersPage numbers={NUMBER_DATA}/>
            </TabPanel>
            <TabPanel>
                <CarsPage cars={CAR_DATA}/>
            </TabPanel>
            <TabPanel>
                <PersonsPage persons={PERSON_DATA}/>
            </TabPanel>
        </Tabs>
    );
}

export default App;
