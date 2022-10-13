import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'react-tabs/style/react-tabs.css';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {CAR_DATA, NUMBER_DATA, PERSON_DATA, PRODUCTS_DATA} from "./data/data"
import {MenuCardPage} from "./pages/MenuCardPage";
import {PicturesPage} from "./pages/PicturesPage";
import {NumbersPage} from "./pages/NumbersPage";
import {CarsPage} from "./pages/CarsPage";
import {PersonsPage} from "./pages/PersonsPage";
import {EventsAndStatePage} from "./pages/EventsAndStatePage";

function App() {
    return (
        <Tabs>
            <TabList>
                <Tab>menu</Tab>
                <Tab>pics</Tab>
                <Tab>numbers</Tab>
                <Tab>cars</Tab>
                <Tab>persons</Tab>
                <Tab>events&state</Tab>
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
            <TabPanel>
                <EventsAndStatePage />
            </TabPanel>
        </Tabs>
    );
}

export default App;
