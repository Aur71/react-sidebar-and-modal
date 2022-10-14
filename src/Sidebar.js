import React from 'react';
import { MdClose } from 'react-icons/md';
import { links, social } from './data';

const Sidebar = ({ showSidebar, closeSidebar }) => {
  return (
    <aside className={`${showSidebar && 'showSidebar'}`}>
      <div className="header">
        <h2>
          LO<span>GO</span>
        </h2>
        <MdClose className="close-btn" onClick={closeSidebar} />
      </div>

      <ul>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.path}>
                <span>{link.icon}</span>
                {link.name}
              </a>
            </li>
          );
        })}
      </ul>

      <ol>
        {social.map((social) => {
          return (
            <li key={social.id}>
              <a className="icon" href={social.path}>
                {social.icon}
              </a>
            </li>
          );
        })}
      </ol>
    </aside>
  );
};

export default Sidebar;
