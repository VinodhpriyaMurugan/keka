const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light mainNav">
        <div className="container-fluid">
          <a className="navbar-brand logo-img" href="/">
            <img
              className="logoImage"
              src="https://tpfsoftware.com/assets/common/tsi-logo.png"
              alt=""
            />
          </a>
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </button>
          <div className="collapse navbar-collapse navPosition" id="navbar">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item dropdown navItemSpacing">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  id="productsDropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PRODUCTS
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="productsDropdownMenuButton"
                >
                  <li>
                    <a className="dropdown-item" href="/products/ztpf-gi">z/TPFGI</a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/products/alcs-gi">ALCS/GI</a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/products/z-rtf">z/RTF</a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/products/z-qdc">z/QDC</a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/products/z-ttfs">z/TTFS</a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/products/df-explorer"
                      >DF Explorer</a
                    >
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown navItemSpacing">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  id="servicesDropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SERVICES
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="servicesDropdownMenuButton"
                >
                  <li>
                    <a className="dropdown-item" href="/services/innovation-labs"
                      >Innovation Labs</a
                    >
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/services/dev-ops">DevOps</a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/services/it-solutions"
                      >IT Solutions</a
                    >
                  </li>
                </ul>
              </li>
              <li className="nav-item navItemSpacing">
                <a className="nav-link" href="/about">ABOUT US</a>
              </li>
              <li className="nav-item navItemSpacing">
                <a className="nav-link" href="/newsroom">NEWSROOM</a>
              </li>
              <li className="nav-item navItemSpacing">
                <a className="nav-link" href="/careers"
                  >CAREERS</a
                >
              </li>
              <li className="nav-item navItemSpacing">
                <a className="nav-link" href="/support">SUPPORT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;