import React from "react";
import "./styles/styles.css"

export default class Folder extends React.Component {
    constructor() {
        super();
        this.state = {
            showFiles : false
        }
    }
    handleToggle = () => {
        this.setState({
            showFiles : !this.state.showFiles
        })
    }
    render() {
        if(!this.state.showFiles){
            return(
                <div align="center">
                    <Typography variant="h5">Home</Typography>
                    <button onClick={this.handleToggle}>toggle</button>
                </div>
            ) 
        }
        else{
            return(
                <div align="center">
                    <Typography variant="h5">Home</Typography>
                    <ul>
                        <li>File 1</li>
                        <li>File 2</li>
                        <li>File 3</li>
                    </ul><br/>
                    <button onClick={this.handleToggle}>toggle</button>   
                </div>
            );
        }
        
    }

}