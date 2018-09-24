import React, { Component } from 'react';

class JSONView extends Component {
    state = {  }
    render() { 
        return (
            <div className={this.props.className+" jsonview"}>
                <textarea style={{ width: '80%', minHeight: 200, height: '70%'}} className="block m-2" value={this.state.value} onChange={this.handleChange} />
                <button className="btn btn-primary block m-2" onClick={this.doJSONFormt}>Format</button>
            </div>
        );
    }
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.doJSONFormt = this.doJSONFormt.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    doJSONFormt(event) {
        const parsedJson = this.IsJsonString(this.state.value);
        if (!parsedJson) {
            alert("Invalid JSON String");
            return;
        }
        this.setState({ value: JSON.stringify(parsedJson, null, 4) });
        console.log(parsedJson);
    }

    IsJsonString(str) {
        let jsonStr;
        try {
            jsonStr = JSON.parse(str);
        } catch (e) {
            return false;
        }
        return jsonStr;
    }
}
 
export default JSONView;