import React, {Component} from 'react';
import './AddEvent.css';
import Layout from '../layout/Layout';
import store from 'store';

const isLoggedIn = () => !!store.get('loggedIn');

class AddEvent extends Component{
    constructor(props){
        super();

        this.state = {
            title: '',
            organizer: '',
            date: '',
            description: '',
            form_link: '',
            file: '',
            imagePreviewUrl: ''
        }
    }

    handleTitleChange = (e) => {
        this.setState({title: e.target.value});
    }

    handleOrganizerChange = (e) => {
        this.setState({organizer: e.target.value});
    }

    handleDateChange = (e) => {
        this.setState({date: e.target.value});
    }

    handleDescChange = (e) => {
        this.setState({description: e.target.value});
    }

    handleFormLinkChange = (e) => {
        this.setState({form_link: e.target.value});
    }
    
  handleSubmit(e) {
    e.preventDefault();
    console.log('handle uploading-', this.state.file);
  }
    handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
    
        reader.readAsDataURL(file)
      }

    submitData(e){
        e.preventDefault();
    }

    render(){

        if (!isLoggedIn()) {
			return(<Redirect to="/login" />);	
        }
        
        let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img src={this.state.imagePreviewUrl} alt="Event" />);
      } else {
        $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
      }
        return(
            <Layout>
                <div id="add" className="py-4">
                <form id="event-add" method="post" onSubmit={this.submitData} className="shadow">
                    <h2 className="text-center"><strong>Create</strong> Your Event.</h2>
                            
                    <div id="imgg" className="form-group">
                            <input className="fileInput" 
                            type="file" 
                            onChange={(e)=>this.handleImageChange(e)} />
                            <div className="imgPreview mx-5">
                                {$imagePreview}
                            </div>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="name" placeholder="Title" required onChange={this.handleTitleChange} value={this.state.title} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="organizer" placeholder="Organizer" required onChange={this.handleOrganizerChange} value={this.state.organizer}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="date" name="date" placeholder="Date" required onChange={this.handleDateChange} value={this.state.date} />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="description" placeholder="Description" required onChange={this.handleDescChange} value={this.state.description}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="formLink" placeholder="Form Link" required onChange={this.handleFormLinkChange} value={this.state.form_link} />
                    </div>
                    <div className="form-group">
                        <input className="btn btn-primary btn-block" value="Add Event" type="submit" />
                    </div>
                    
                </form>
            </div>
            </Layout>
        )
    }
}

export default AddEvent;