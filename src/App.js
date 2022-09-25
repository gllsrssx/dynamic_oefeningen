import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import {PRODUCTS_DATA} from "./data/data";
import {MenuCardPage} from  "./pages/MenuCardPage";
import {PicturesPage} from  "./pages/PicturesPage";


function App() {
    return (
        <Tabs>
            <TabList>
                <Tab>menu</Tab>
                <Tab>pics</Tab>
            </TabList>

            <TabPanel>
                <MenuCardPage products={PRODUCTS_DATA}/>
            </TabPanel>
            <TabPanel>
                <PicturesPage />
            </TabPanel>
        </Tabs>
    );
}

export default App;
