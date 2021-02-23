import React, {Component} from 'react';

class SettingsForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
           active: true, 
        }
        this.cancel = this.cancel.bind(this)
    }

    render() {
        
        var activeClass = this.state.active ? "is-active" : ""

        return (
            <div className={"modal " + activeClass }>
            <div class="modal-background"></div>
              <div class="modal-content">
            <div class="box">
                <form onSubmit={this.submitForm}>
                    <input name="budget" 
                          class="input" type="number" step=".01"
                                      placeholder="10000.00"
                    />
                    <button class="button is-primary">Save Settings</button>
                    <button class="button is-danger" onClick={this.cancel}>Cancel</button>
                </form>
            </div>
            </div>
            </div>
        );

    }

    cancel() {
        this.setState({
            active: false,
        })
    }

    
    
    

};

export default SettingsForm;
