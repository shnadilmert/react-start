import 'bootstrap/dist/css/bootstrap.min.css';
import { Button , Tabs, Tab} from "react-bootstrap";


function Bootstrap(){
    return(
        <>
        <div>
            <h3>Bootstrap Komponentleri</h3>
            <Button variant="success">Button</Button>
        </div>
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="home" title="Home">
            <div>Home</div>
        </Tab>
        <Tab eventKey="profile" title="Home">
            <div>Profile</div>
        </Tab>        
        <Tab eventKey="contact" title="Home">
            <div>Contact</div>
        </Tab>
        </Tabs>
        </>

    )
}

export default Bootstrap