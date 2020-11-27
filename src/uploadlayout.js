import React, { useState } from "react";
import ImageUploader from "react-images-upload";



class Imageupload extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pictures :[],
            file:null
        };
        this.onDrop = this.onDrop.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onDrop(picture){
        this.setState({
            pictures:this.state.pictures.concat(picture),
        });
    }
    handleChange(event){
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        })
    }

    render(){
        return( 
            <div>
                <input type="file" onChange={this.handleChange} />
                <img src={this.state.file} withIcon={true}
            />

            {/* <ImageUploader
            type="file"
            withIcon={true}
            buttonText='Choose Images'            
            onChange={this.handleChange}
            imgExtensions={['.jpg', '.png', '.gif']}
            maxFilesize={5242880}
        /> */}
         </div>
        );
    }

}

export default Imageupload;


