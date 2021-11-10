import React from "react";


/*
- Complex UI components
- Requires complex state logic to render UI
*/
class ClassBasedComp extends React.Component {

    // Optional
    constructor(props) {
        super(props);

        // Optional
        this.state = {};
    }

    render() {
        return (
            <h2>Class Based component</h2>
        );
    }
}

export default ClassBasedComp;