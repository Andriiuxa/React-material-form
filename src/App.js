import React, { Component } from 'react';
import UserForm from './components/UserForm';

class App extends Component {
    render() {
        return (
            <div style = {{ 'text-align': 'center' }}>
                <UserForm />
            </div>
        );
    }
}

export default App;
