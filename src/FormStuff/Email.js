import React from 'react'

class Email extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: this.props.email
        }
    }
    render() {
        return (
            <div>
                <input
                    name="email"
                    type="email"
                    placeholder="email@email.com"
                    required
                    onChange={this.myFunc}
                />
            </div>
        )
    }
}

export default Email