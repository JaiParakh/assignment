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
        axios.get('/event/events').then(res => {
            this.setState({events: res.data})
        })
    }

    render(){
        if (!isLoggedIn()) {
			return(<Redirect to="/login" />);	
        }
        var events_list = this.state.events.map(per => {
			return (<EventCard title={per.title} description={per.description} date={per.date} form_link={per.form_link} />) 
        });
        return(
            <Layout>
                <div className="container" id="dash">
                    {
                        events_list
                    }
                </div>
            </Layout>
        )
    }
}

export default Dashboard;