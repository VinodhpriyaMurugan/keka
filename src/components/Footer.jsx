const Footer = () => {
    return (
    <>
    <footer className="uk-section mainFooterBody">
        <div className="uk-container txtClr">
          <div className="uk-grid uk-child-width-expand uk-grid-large" data-uk-grid>
            <div className="uk-text-center">
              <a href="/">
                <img src="https://tpfsoftware.com/assets/common/tsi-logo.png" className="footerLogo" alt="Footer Logo" />
              </a>
            </div>
            <div className="uk-width-1-6@m">
              <h5 className="ftrTitles">Sitemap</h5>
              <ul className="uk-list">
                <li className="footerOptions">
                  <a href="/" style={{textDecoration: 'none !important'}}>Home</a>
                </li>
                <li className="footerOptions">
                  <a href="/about" style={{textDecoration: 'none'}}>About TSI</a>
                </li>
                <li className="footerOptions">
                  <a href="/newsroom" style={{textDecoration: 'none'}}>Newsroom</a>
                </li>
                <li className="footerOptions">
                  <a href="/careers" style={{textDecoration: 'none'}}>Careers</a>
                </li>
                <li className="footerOptions">
                  <a href="/support" style={{textDecoration: 'none'}}>Support</a>
                </li>
              </ul>
            </div>
            <div className="uk-width-1-6@m">
              <a href="/services">
                <h5 className="ftrTitles">TSI Digital Services</h5>
              </a>
              <ul className="uk-list">
                <li className="footerOptions">
                  <a href="/services/innovation-labs" style={{textDecoration: 'none'}}>Innovation Labs</a>
                </li>
                <li className="footerOptions">
                  <a href="/services/dev-ops" style={{textDecoration: 'none'}}>DevOps</a>
                </li>
                <li className="footerOptions">
                  <a href="/services/it-solutions" style={{textDecoration: 'none'}}>IT Solutions</a>
                </li>
              </ul>
            </div>
            <div className="uk-width-1-6@m">
              <a href="/products">
                <h5 className="ftrTitles">TPF Products</h5>
              </a>
              <ul className="uk-list">
                <li className="footerOptions">
                  <a href="/products/ztpf-gi" style={{textDecoration: 'none'}}>z/TPFGI</a>
                </li>
                <li className="footerOptions">
                  <a href="/products/z-rtf" style={{textDecoration: 'none'}}>z/RTF</a>
                </li>
                <li className="footerOptions">
                  <a href="/products/z-qdc" style={{textDecoration: 'none'}}>z/QDC</a>
                </li>
                <li className="footerOptions">
                  <a href="/products/z-ttfs" style={{textDecoration: 'none'}}>z/TTFS</a>
                </li>
                <li className="footerOptions">
                  <a href="/products/alcs-gi" style={{textDecoration: 'none'}}>ALCS/GI</a>
                </li>
                <li className="footerOptions">
                  <a href="/products/df-explorer" style={{textDecoration: 'none'}}>DF Explorer</a>
                </li>
              </ul>
            </div>
            <div className="uk-width-1-3@m">
              <h5 className="ftrTitles">Stay connected with us</h5>
              <div className="uk-text-left">
                <a href="https://www.linkedin.com/company/tpfsoftware" className="uk-icon-button uk-margin-small-right" data-uk-icon="linkedin" style={{color: 'black'}} />
                <a href="https://www.instagram.com/tpfsoftware" className="uk-icon-button uk-margin-small-right" data-uk-icon="instagram" style={{color: 'black'}} />
                <a href="https://www.facebook.com/tpfsoftware" className="uk-icon-button uk-margin-small-right" data-uk-icon="facebook" style={{color: 'black'}} />
                <a href="https://www.youtube.com/tpfsoftware" className="uk-icon-button uk-margin-small-right" style={{color: 'black'}} data-uk-icon="youtube" />
                <a href="https://twitter.com/TPFSoftware" className="uk-icon-button" style={{color: 'black'}} data-uk-icon="twitter" />
              </div>
            </div>
          </div>
        </div>
        <div className="uk-text-center uk-margin-medium-top uk-padding uk-padding-remove-right uk-padding-remove-vertical">
          <span className="uk-text-small" style={{color: 'black'}}>© TPF Software Inc. 2023 | All
            Rights Reserved.Site designed and built by <a href="https://ecstasycreatives.com/" target="_blank">Ecstasy Creatives</a>
          </span>
        </div>
      </footer>
    </>
    )
}

export default Footer;