import { Box, Button, Grommet } from 'grommet/components';
import React, { Component } from 'react';

import './Navbar.css';

const theme = {
    global : {
        colors: {
            brand: '#ff6666'
        }
    }
}


class Navbar extends Component {
    render() {
        return (
            <Grommet theme={theme}>
                <nav>
                    <h1>Our Hand-made Cinnamon Rolls 🫓</h1>
                    <Box direction='row' align='end'gap='50px'>
                        <Button 
                            secondary 
                            size='large'
                            label='Products'
                        />

                        <Button 
                            primary 
                            size='large'
                            label='Cart'
                            onClick={this.props.toggleCart}
                        />
                    </Box>


                </nav>
            </Grommet>

        );
    }
}

export default Navbar;