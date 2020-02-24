import React from 'react'

import { Navbar, Nav, Dropdown, Icon } from 'rsuite'

const style= {
    icon: {
        width: 56,
        height: 56,
        lineHeight: '56px',
        textAlign: 'center'
    },
    navItem: {
        width: 56,
        textAlign: 'center'
    }
}



export const NavToggle = ({ expand, onChange }) => {
    return (
        <Navbar appearance='subtle' className='nav-toggle'>
            <Navbar.Body>
                <Nav>
                    <Dropdown 
                        placement={expand ? 'topStart' : 'rightEnd'} 
                        trigger='click'
                        renderTitle={children => {
                            return <Icon style={style.icon} icon='cog' />
                        }}
                    >
                        <Dropdown.Item>Help</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>    
                </Nav>
                <Nav pullRight>
                    <Nav.Item onClick={onChange} style={style.navItem}>
                        <Icon icon={ expand ? 'angle-left' : 'angle-right'} />
                    </Nav.Item>
                </Nav>
            </Navbar.Body>
        </Navbar>
    )
}

export default NavToggle
