import React,{useState} from 'react'
import style from './header.module.less'
import { Menu, Dropdown } from 'antd';
import { DownOutlined,SearchOutlined,MenuOutlined } from '@ant-design/icons';
import {Link} from 'react-scroll'
import './header.css'
export const Header=()=>{
    const [mbmenu,setmbmenu]=useState(false)
    console.log(mbmenu)
    const menu = (
        <Menu>
          <Menu.Item>
            <a href="#">
              Merchandies
            </a>
          </Menu.Item>
          <Menu.Item>
            <a href="#">
              Extra
            </a>
          </Menu.Item>
          <Menu.Item>
            <a href="#">
              Media
            </a> 
          </Menu.Item>
        </Menu>
      );
    return <>
    <div className="header-container" style={mbmenu?{height:'auto'}:{height:'48px'}}>
        <div className={mbmenu?`links ${'mbdesign'}`:"links"}>
            <ul className="ul">
                <li><a href="#caro"><Link activeClass="active" to="caro" spy={true} smooth={true}>Home</Link></a></li>
                <li><a href="#brand"><Link  to="brand" spy={true} smooth={true}>BAND</Link></a></li>
                <li><a href="#tour"><Link  to="tour" spy={true} smooth={true}>TOUR</Link></a></li>
                <li><a href="#contact"><Link  to="contact" spy={true} smooth={true}>CONTACT</Link></a></li>
                <li>
                <Dropdown overlay={menu} className='drp'>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    MORE <DownOutlined  />
                    </a>
                </Dropdown>
                </li>
            </ul>
        </div>
        <div className="logs">
            <div className="inne-logo" ></div>
                <div className="search">
                <SearchOutlined  style={{ fontSize: '20px', color: 'white',fontWeight:'700' }}/>
                </div>
               <div className="menu" onClick={()=>{
                   setmbmenu(!mbmenu)
               }} > <MenuOutlined  style={{ fontSize: '20px', color: 'white',fontWeight:'700' }}/></div>
            </div>
    </div>
    </>
}
// style={{ fontSize: '20px', color: 'white',fontWeight:'700' }}