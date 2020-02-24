import React from 'react'
import { Link } from 'react-router-dom'

import { Button, Container, Content, Sidebar, Sidenav, Icon, Nav, Dropdown, DOMHelper} from 'rsuite'

import NavToggle from './NavToggle';

import style from './layout.module.css'

const { getHeight, on } = DOMHelper;

const navs = [
    {
      key: '1',
      icon: <Icon icon="dashboard" />,
      text: 'Dashboard',
      link: '/dashboard'
    },
    {
      key: '2',
      icon: <Icon icon="group" />,
      text: 'Members',
      link: '/list/members'
    },
    {
      key: '3',
      text: 'Errors',
      icon: <Icon icon="exclamation-triangle" />,
      children: [
        {
          key: '3-1',
          text: '404',
          link: '/error/404'
        },
        {
          key: '3-1',
          text: '500',
          link: '/error/500'
        }
      ]
    }
  ];
  

function Layout() {

    const [expand, setExpand] = React.useState(true)
    const [height, setHeight] = React.useState(window.innerHeight);

    React.useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    });

    const updateWidthAndHeight = () => {
        setHeight(window.innerHeight);
    };
   



    let navBodyStyle = {
        height: height-168
    };
    if (expand) {
        navBodyStyle = {
            height: height - 112,
            overflow: 'auto'
        }
    }

    const handleToggle = () => {
        setExpand(!expand)
    }

    const renderNavs = () => {
        return navs.map(item => {
            if (item.children) {
                return (
                    <Dropdown key={item.key} eventKey={item.key} placement='rightStart' trigger='hover' title='Errors' icon={item.icon} >
                        {item.children.map(child => {
                            return (
                                <Dropdown.Item key={child.key} eventKey={child.key} componentClass={Link} to={child.link} acticeclassname='nav-item-active' >{child.text}</Dropdown.Item>
                            )
                        })}
                    </Dropdown>
                )
            }
            return (
                <Nav.Item key={item.key} eventKey={item.key} icon={item.icon} componentClass={Link} to={item.link} acticeclassname='nav-item-active'>
                    {item.text}
                </Nav.Item>    
            )
        })
    }
        


    return (
        <Container>
        <Container className={style.frame}>
            <Sidebar style={{ display: 'flex', flexDirection: 'column' }} width={ expand ? 260 : 56} collapsible>
                <Sidenav.Header>
                    <div className={style.header}>
                    <Icon icon='logo-analytics' size='lg'  style={{verticalAlign: 0}}/>
                    <span style={{ marginLeft: 12}}> RSUITE ANALYTICS</span>
                    
                    </div>
                </Sidenav.Header>
                <Sidenav expanded={expand} defaultOpenKeys={['3']} activeKey={[]} appearance="subtle">
            <Sidenav.Body style={navBodyStyle}>
              <Nav>
                {renderNavs()}
                <Nav.Item
                  href="https://github.com/rsuite/rsuite-management-system"
                  icon={<Icon icon="github" />}
                  target="_blank"
                >
                  Github
                </Nav.Item>
              </Nav>
            </Sidenav.Body>
          </Sidenav>
          <NavToggle expand={expand} onChange={e=>handleToggle(e)} />
            </Sidebar>
        
        </Container>
        <Container>
           <Content><span>{height}</span></Content>
        </Container>
        </Container>
    )
}

export default Layout
