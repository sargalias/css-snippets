import React from 'react'
import './footer.scss';

export default () => (
  <footer className="footer">
    <div className="footer__container">
      <address className="footer__attribution">
        <p>
          By <cite>
            <a
              href="https://sargalias.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spyros Argalias
            </a>
          </cite>
        </p>
      </address>

      <div className="footer__code">
        <p><a
          href="https://github.com/sargalias/100-days-css"
          target="_blank"
          rel="noopener noreferrer"
        >
          View code
        </a></p>
      </div>
    </div>
  </footer>
);
