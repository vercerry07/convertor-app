import React, { Component } from 'react'
import '../App.css'
class Forms1 extends Component {


    constructor(props) {
        super(props)

        this.state = {
            select_input: 'meter',
            select_output: 'meter',
            input_val: 0,
            output_val: ''
        }
    }

    handleInput = (e) => {
        this.setState({
            select_input: e.target.value
        })
    }
    handleOutput = (e) => {

        this.setState({
            select_output: e.target.value
        })
    }
    handleIpval = (e) => {
        this.setState({
            input_val: e.target.value
        })
    }
    handleSubmit = (e) => {
        let {select_input, select_output, input_val} = this.state;
        e.preventDefault();
        //alert(this.state.select_input+" "+this.state.select_output+" "+this.state.input_val)
        if (this.state.input_val === 0) {
            alert('Please enter value')
        }
        else {
             if(select_input === select_output){
                this.setState({
                    output_val: input_val
                })
             }
             else if (this.state.select_input === "meter" && this.state.select_output === "centimeter") {
                this.setState((prevst) => {
                    return {
                        output_val: Number(prevst.input_val) * 100
                    }
                })
            }
            else if(select_input === "centimeter" && select_output === "meter"){
                this.setState((prevst) => {
                    return {
                        output_val: Number(prevst.input_val) / 100
                    }
                })  
            } 
            else if(select_input === "foot" && select_output === "meter"){
                this.setState((prevst) => {
                    return {
                        output_val: (Number(prevst.input_val) / 3.281)
                    }
                })  
            } 
            else if(select_input === "meter" && select_output === "foot"){
                this.setState((prevst) => {
                    return {
                        output_val: (Number(prevst.input_val) * 3.281)
                    }
                })  
            } 
            else if(select_input === "centimeter" && select_output === "foot"){
                this.setState((prevst) => {
                    return {
                        output_val: (Number(prevst.input_val) / 30.48)
                    }
                })  
            } 
 
            else if(select_input === "foot" && select_output === "centimeter"){
                this.setState((prevst) => {
                    return {
                        output_val: (Number(prevst.input_val) * 30.48)
                    }
                })  
            }  
        }
    }
    handleClear = ()=>{
      this.setState({
        select_input: 'meter',
        select_output: 'meter',
        input_val: '',
        output_val: ''
      })
    }
    render() {
        return (
            <div className="container mt-5">
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-sm-4">
                            <select onChange={this.handleInput} value={this.state.select_input} className="card12 custom-select custom-select-lg mb-3">
                                <option value="meter">Meter</option>
                                <option value="centimeter">centimeter</option>
                                <option value="foot">foot</option>
                            </select>
                        </div>
                        <div className="col-sm-4">

                            {/* <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left-right card12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" />
                        </svg> */}
                        </div>
                        <div className="col-sm-4">
                            <select onChange={this.handleOutput} value={this.state.select_output} className="card12 custom-select custom-select-lg mb-3">
                                <option value="meter">Meter</option>
                                <option value="centimeter">centimeter</option>
                                <option value="foot">foot</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">

                            <div className="form-group">
                                <input type="number" onChange={this.handleIpval} value={this.state.input_val} className="form-control" step="0.01" style={{ height: '10rem', width: '18rem' }}  />
                            </div>

                        </div>
                        <div className="col-sm-4">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left-right card12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z" />
                            </svg>
                        </div>

                        <div className="col-sm-4">

                            <div className="form-group">
                                <input className="form-control" value={this.state.output_val} style={{ height: '10rem', width: '18rem' }} type="number" disabled/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <button type="submit" className="btn btn-secondary btn-lg">convert</button>
                        </div>
                    </div>
                    <br />
                    <button onClick={this.handleClear} className="btn btn-outline-secondary btn-block">clear</button>
                </form>
            </div>
        )
    }
}

export default Forms1
