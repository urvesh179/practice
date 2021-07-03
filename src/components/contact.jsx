import { MonitorOutlined,PhoneOutlined,MailOutlined } from '@ant-design/icons';
import {Button} from 'antd'
 import './contact.css';

export const Contact=() =>{
  return (
    <div className="contact-container" id="contact">
     <div className="c-title">
        <h1>CONTACT</h1>
        <span>Fan? Drop a note!</span>
     </div>
     <div className="c-content">
      
        <div className="c-left">
        <div>
          <div  className="c-data"><MonitorOutlined /><span>Chicago, US</span></div>
          <div className="c-data"><PhoneOutlined /><span>Phone: +00 151515</span></div>
          <div className="c-data" ><MailOutlined /><span>Email: mail@mail.com</span></div>
          </div>
        </div>
        <div className="c-right">
          <div className="c-flex">
          <div className="c-input-d">
            <input type="text" placeholder="name"/>
            <input type="text" placeholder="Email"/>
          </div>
          <div className="c-message">
            <input type="text" placeholder="Message"/>
          </div>
          <Button>SEND</Button>
          </div>
        </div>
     </div>
    </div>
  );
}
