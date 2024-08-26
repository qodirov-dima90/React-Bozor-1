import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">KATTABOZOR</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/telefony">Телефоны</Link>
        </li>
        <li>
          <Link to="/planshety">Планшеты</Link>
        </li>
        <li>
          <Link to="/televizory">Телевизоры</Link>
        </li>
        <li>
          <Link to="/noutbuki">Ноутбуки</Link>
        </li>
        <li>
          <Link to="/smart-chasy">Смарт-часы</Link>
        </li>
        <li>
          <Link to="/konditsionery">Кондиционеры</Link>
        </li>
        <li>
          <Link to="/kholodilniki">Холодильники</Link>
        </li>
        <li>
          <Link to="/monitory">Мониторы</Link>
        </li>
      </ul>
      <div className="navbar-right">
        <input type="text" placeholder="Поиск" className="navbar-search" />
        <button className="navbar-login">Вход</button>
      </div>
    </nav>
  );
};

export default Navbar;
