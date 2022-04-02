import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import './header.css';

const Header = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
      pageCompleted: true,
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
      pageCompleted: false,
    },
  ];

  return (
    <header>
      <div className="navbar">
        <h2>Bookstore CMS</h2>
        <nav>
          {links.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              className="upper"
              style={{
                opacity: link.pageCompleted ? '1' : '0.5',
              }}
            >
              {link.text}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="user-icon-container">
        <FaUser style={{
          color: '#0290ff',
          width: '1.063rem',
        }}
        />
      </div>
    </header>
  );
};

export default Header;
