import React from 'react';

import PCHeader from "./pc_header.jsx"
import PCFooter from "./pc_footer.jsx"



export default class PCIndex extends React.Component {
    render() {
        return (

            <div>
                <PCHeader></PCHeader>
                <PCFooter></PCFooter>
            </div>
        )
    }
}