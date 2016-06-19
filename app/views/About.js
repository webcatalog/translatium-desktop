import React from 'react';

import openUri from '../openUri';
import i18n from '../i18n';

import Animation from './Animation';

const About = () => (
  <Animation name="enterPage">
    <div className="app-about-page">
      <div className="app-logo-container">
        <img src="/images/Square150x150.png" className="app-logo" role="presentation" />
      </div>
      <div className="app-info">
        <h4 className="win-h4" style={{ marginTop: 18 }}>
          {i18n('app-name')}
        </h4>
        <h5 className="win-h5">5.0.0</h5>
        <button
          className="win-button"
          onClick={() => openUri('https://moderntranslator.com')}
        >
          {i18n('website')}
        </button>
        <button
          className="win-button"
          onClick={() => openUri('ms-windows-store://pdp/?ProductId=9wzdncrcsg9k')}
        >
          {i18n('view-on-store')}
        </button>
        <button
          className="win-button"
          onClick={() => openUri('https://moderntranslator.com/changelog')}
        >
          {i18n('changelog')}
        </button>
        <h5 className="win-h5">
          A product of <a href="https://quanglam.me">Quang Lam</a>.
        </h5>
        <h5 className="win-h5">
          Made with <span style={{ color: '#F44336' }}>&hearts;</span>
          <span> in <strong>Vietnam</strong>.</span>
        </h5>
      </div>
      <div className="app-feedback">
        <h5 className="win-h5">
          {i18n('feedback-desc-1')}
        </h5>
        <h6 className="win-h6" style={{ marginBottom: 6 }}>
          {i18n('feedback-desc-2')}
        </h6>
        <button
          className="win-button"
          onClick={() => openUri('https://moderntranslator.com/support')}
        >
          FAQ
        </button>
        <button
          className="win-button"
          onClick={() => openUri('mailto:support@moderntranslator.com')}
        >
          {i18n('email-us')}
        </button>
        <button
          className="win-button"
          style={{ backgroundColor: '#55acee', color: '#fff' }}
          onClick={() => openUri('https://twitter.com/mdrtranslator')}
        >
          {i18n('follow-us')}
        </button>
      </div>
      <div className="app-feedback" style={{ marginBottom: 12 }}>
        <h5 className="win-h5">
          {i18n('love-our-app')}
        </h5>
        <button
          className="win-button"
          style={{ color: '#fff', marginTop: 6 }}
          onClick={() => openUri('ms-windows-store://review/?ProductId=9wzdncrcsg9k')}
        >
          {i18n('give-us-5-star')}
        </button>
      </div>
    </div>
  </Animation>
);

export default About;