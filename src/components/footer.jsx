import {FacebookFilled,InstagramFilled,TwitterOutlined,LinkedinFilled  } from '@ant-design/icons';
import './footer.css';

export const Footer=() =>{
  return (
    <div className="f-container">
        <div className="f-flex">
        <a><FacebookFilled /></a>
        <a><InstagramFilled /></a>
        <a><TwitterOutlined /></a>
        <a><LinkedinFilled /></a>
        </div>
        <span>Powered by w3.css</span>
    </div>
  );
}

