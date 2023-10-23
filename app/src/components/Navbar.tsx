import React from 'react';

export const NavBar: React.FC = () => {
  return (
    <div className="navbar bg-base-100 w-auto">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" href="/document/index">
          Adão App
        </a>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/work">Dispositivos</a>
          </li>
          <li tabIndex={0}>
            <a>
              Opções

              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 bg-base-100">
              <li>
                <a href="/work">Relatório</a>
              </li>
              <li>
                <a>Testes</a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://avatars.githubusercontent.com/u/44006588?v=4.jpg" alt="User Avatar" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Perfil
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Configurações</a>
            </li>
            <li>
              <a>Sair</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
