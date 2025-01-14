/**
 * Created by Sumit-Yadav on 06-10-2017.
 */
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Button, Container, Dropdown, Divider, Icon, Menu, Responsive, Grid, Segment } from 'semantic-ui-react';
import * as actions from '../../store/actions'

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        event.preventDefault();
        this.props.dispatch(actions.authLogout());
    }

    render() {
        this.avatar = (
            <span>
               {this.props.userName}
            </span>
        );
        let is_dashboard = false;
        if (window.location.href.indexOf('admin') > 0) {
            is_dashboard = true;
        }
        return (
            <React.Fragment>
                <Responsive as={Segment} inverted maxWidth={768} className='mobile-navbar'>
                    <Menu size='large' inverted secondary>
                        <Menu.Item as={Link} to='/' className='logo' replace>
                            <img
                                src={require('../../../images/theme/logo.png')} alt='infoTiq' />
                        </Menu.Item>
                        <Menu.Menu position='right'>
                            <Menu.Item>
                                <Dropdown icon='bars' className='collapsible-menu'>
                                    <Dropdown.Menu className='bounceIn animated'>
                                        {this.props.isAdmin && this.props.isAuthenticated
                                            ?
                                            <Dropdown.Item as={NavLink} to='/dashboard' text='Dashboard'/>
                                            : ''
                                        }
                                        {this.props.isAuthenticated
                                            ?                                            
                                            <Dropdown.Item onClick={this.handleLogout} text='logout' icon='sign out'
                                                key='logout' />
                                            :
                                            <div>
                                                <Dropdown.Item as={NavLink} to='/login' text='login' />
                                                <Divider />
                                                <Dropdown.Item as={NavLink} to='/register' text='register' />
                                            </div>
                                        }
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                </Responsive>
                <Responsive as={Segment} style={{ margin: 0, borderRadius: '0', padding: 0, border: 0 }}
                    className='navbar' minWidth={769}>
                    <Menu pointing secondary size='large'>
                        <Container className='custom-col-6'>
                            {this.props.isAdmin && this.props.isAuthenticated && is_dashboard ? 
                                <Menu.Item as={Link} to='/' className='logo' replace style={{margin: 0, paddingTop: 10, paddingRight: 20, paddingBottom: 0, paddingLeft: 0}}>
                                    <img src={require('../../../images/theme/logo.png')} /></Menu.Item> 
                                : 
                                <React.Fragment>
                                    <Menu.Item as={Link} to='/' className='logo' replace style={{margin: 0, padding: 0, paddingRight: 20}}>
                                        <img src={require('../../../images/theme/logo.png')} /></Menu.Item>
                                    <Dropdown text='Services' className='collapsible-menu nav-color services'>
                                            <Dropdown.Menu className='bounceIn animated custom-col-6'>
                                                <div className='custom-box'>
                                                    <Container className='custom-col-6'>
                                                        <Grid padded='horizontally'>
                                                            <Grid.Row columns={6} className='custom-row'>
                                                                <Grid.Column className='custom-dropdown' as={Link} to='/service-web'>
                                                                    <div className='custom-dropdown-item'>
                                                                        <div className='avatar-item desktop'>
                                                                            <img src={require('../../../images/theme/desktop.png')} />
                                                                            <Icon name='arrow right' className='icon-right-arrow'/>
                                                                        </div>
                                                                        <div className='text-item'>
                                                                            <p>Web Development</p>
                                                                        </div>
                                                                    </div>
                                                                </Grid.Column>
                                                                <Grid.Column className='custom-dropdown' as={Link} to='/service-mobile'>
                                                                    <div className='custom-dropdown-item mobile'>
                                                                        <div className='avatar-item mobile'>
                                                                            <img src={require('../../../images/theme/mobile.png')} />
                                                                            <Icon name='arrow right' className='icon-right-arrow'/>
                                                                        </div>
                                                                        <div className='text-item'>
                                                                            <p>Mobile Development</p>
                                                                        </div>
                                                                        <div className='description'>
                                                                            <p>Lorem ipsum dolor sit amet constatur ipsum</p>
                                                                        </div>
                                                                    </div>
                                                                </Grid.Column>
                                                                <Grid.Column className='custom-dropdown' as={Link} to='/service-ui'>
                                                                    <div className='custom-dropdown-item'>
                                                                        <div className='avatar-item ui'>
                                                                            <img src={require('../../../images/theme/ui.png')} />
                                                                            <Icon name='arrow right' className='icon-right-arrow'/>
                                                                        </div>
                                                                        <div className='text-item'>
                                                                            <p>UI & UX Design</p>
                                                                        </div>
                                                                    </div>
                                                                </Grid.Column>
                                                                <Grid.Column className='custom-dropdown' as={Link} to='/service-branding'>
                                                                    <div className='custom-dropdown-item'>
                                                                        <div className='avatar-item branding'>
                                                                            <img src={require('../../../images/theme/branding.png')} />
                                                                            <Icon name='arrow right' className='icon-right-arrow'/>
                                                                        </div>
                                                                        <div className='text-item'>
                                                                            <p>Branding</p>
                                                                        </div>
                                                                    </div>
                                                                </Grid.Column>
                                                                <Grid.Column className='custom-dropdown' as={Link} to='/service-illustration'>
                                                                    <div className='custom-dropdown-item'>
                                                                        <div className='avatar-item illustration'>
                                                                            <img src={require('../../../images/theme/illustration.png')} />
                                                                            <Icon name='arrow right' className='icon-right-arrow'/>
                                                                        </div>
                                                                        <div className='text-item'>
                                                                            <p>Illustration</p>
                                                                        </div>
                                                                    </div>
                                                                </Grid.Column>
                                                                <Grid.Column className='custom-dropdown' as={Link} to='/service-marketing'>
                                                                    <div className='custom-dropdown-item'>
                                                                        <div className='avatar-item marketing'>
                                                                            <img src={require('../../../images/theme/marketing.png')} />
                                                                            <Icon name='arrow right' className='icon-right-arrow'/>
                                                                        </div>
                                                                        <div className='text-item'>
                                                                            <p>Marketing</p>
                                                                        </div>
                                                                    </div>
                                                                </Grid.Column>
                                                            </Grid.Row>
                                                        </Grid>
                                                    </Container>
                                                </div>
                                            </Dropdown.Menu>
                                    </Dropdown>
                                    <Menu.Item as={NavLink} to='/portfolio' className='nav-color portfolio'>Portfolio</Menu.Item>
                                    <Menu.Item as={NavLink} to='/features' className='nav-color features'>Features</Menu.Item>
                                    <Menu.Item as={NavLink} to='/about' className='nav-color about'>About</Menu.Item>
                                    <Menu.Item as={NavLink} to='/blog' className='nav-color blog'>Blog</Menu.Item>
                                    <Menu.Item as={NavLink} to='/contact' className='nav-color contact'>Contact</Menu.Item>
                                </React.Fragment>
                            }
                            <Menu.Menu position='right' className='right-menu-width'>
                                {this.props.isAuthenticated
                                    ? 
                                    <Dropdown text={this.props.userName} pointing='top right' className='user-dropdown' style={{paddingTop: 22, color: '#9aa2bf'}}>
                                        <Dropdown.Menu className='bounceIn animated'>
                                            <Dropdown.Item
                                                text={'Signed in as ' + this.props.userName}
                                                disabled key='user' />
                                            {this.props.isAdmin ?
                                                <Dropdown.Item as={NavLink} to='/admin/dashboard' text='Dashboard'/>
                                                : ''
                                            }
                                            <Dropdown.Item onClick={this.handleLogout} text='logout' icon='sign out'
                                                key='logout' />
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    : <Button.Group>
                                        <Button as={Link} to='/login' replace positive compact
                                            className='login'>Login</Button>
                                        <div className="register">
                                        <Button as={Link} to='/register' replace compact
                                            className='primary-button'>Craft Enterprise</Button>
                                        </div>
                                    </Button.Group>
                                }
                            </Menu.Menu>
                        </Container>
                    </Menu>
                </Responsive>
            </React.Fragment>
        );
    }
}

Page.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default Page;