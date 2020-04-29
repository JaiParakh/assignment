import React, {Component} from 'react';
import store from 'store';
import './Dashboard.css';
import EventCard from './../event-card/Event-card';
import Layout from './../layout/Layout';

const isLoggedIn = () => !!store.get('loggedIn');

class Dashboard extends Component{
    constructor(props){
        super();
        this.state = {
            events: []
        }
    }

    componentDidMount(){

    }

    render(){
        if (!isLoggedIn()) {
			return(<Redirect to="/login" />);	
		}
        return(
            <Layout>
                <div className="container" id="dash">
                    <EventCard title="Yolo" description="hjhjhjhjhjhj" date="5/6/2019" />
                    <EventCard title="Yolo" description="hjhjhjhjhjhj" date="5/6/2019" />
                    <EventCard title="Yolo" description="hjhjhjhjhjhj" date="5/6/2019" />
                </div>
            </Layout>
        )
    }
}

export default Dashboard;