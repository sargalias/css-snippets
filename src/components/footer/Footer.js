import React from 'react'
import './footer.scss';

export default () => (
  <footer className="footer">
    <div className="footer__container">
      <address className="footer__attribution">
        By <cite>
          <a
            href="https://sargalias.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spyros Argalias
          </a>
        </cite>
      </address>

      <p className="footer__code">
        <a
          href="https://github.com/sargalias/100-days-css"
          target="_blank"
          rel="noopener noreferrer"
        >
          View code
        </a>
      </p>
    </div>
  </footer>
);
