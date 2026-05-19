'use client';

import { useState, useEffect } from 'react';

const TIERS = ['$25 Supporter', '$100 Champion', '$500 Benefactor', 'Custom'];
const CRYPTO_WALLET = 'TYjtZvpLhAttttQG6opzk8Ye8mjsBFdmec';

export default function Donate() {
  const [activeTier, setActiveTier] = useState('$100 Champion');
  const [copied, setCopied] = useState(false);
  const [donateHref, setDonateHref] = useState('#');

  useEffect(() => {
    // Reconstruct client-side so the address never appears as a literal in static HTML
    const addr = 'brahamsfoundation2' + '@' + 'gmail' + '.com';
    setDonateHref('mailto:' + addr + '?subject=Donation%20Enquiry');
  }, []);

  const copyWallet = () => {
    navigator.clipboard.writeText(CRYPTO_WALLET);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="donate" id="donate">
      <div className="container">
        <div className="donate-header">
          <span className="section-label">Support Our Mission</span>
          <h2 className="donate-title">Your Generosity<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Transforms Lives</em></h2>
          <p className="donate-sub">
            Every contribution, big or small, funds programmes that uplift communities,
            educate children, and build a better future for all.
          </p>

          <div className="donate-tiers">
            {TIERS.map((t) => (
              <button
                key={t}
                className={`donate-tier${activeTier === t ? ' active' : ''}`}
                onClick={() => setActiveTier(t)}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="donate-ctas">
            <a href={donateHref} className="btn-primary">
              Donate Now →
            </a>
            <a
              href="https://youtube.com/@brahamsfoundationmedia2131"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              ▶ Watch Our Story
            </a>
          </div>
        </div>

        <div className="donate-cards">
          {/* KCB Local */}
          <div className="donate-card">
            <span className="donate-card-badge">Local · M-Pesa</span>
            <h3 className="donate-card-title">KCB Paybill (Kenya)</h3>
            <div className="donate-card-row">
              <span className="donate-card-key">Paybill Number</span>
              <span className="donate-card-val">522533</span>
            </div>
            <div className="donate-card-row">
              <span className="donate-card-key">Account Number</span>
              <span className="donate-card-val">8047774</span>
            </div>
            <div className="donate-card-steps">
              <ol>
                <li>Open M-Pesa on your phone</li>
                <li>Select <strong>Lipa na M-Pesa</strong></li>
                <li>Select <strong>Pay Bill</strong></li>
                <li>Enter Business No: <strong>522533</strong></li>
                <li>Enter Account No: <strong>8047774</strong></li>
                <li>Enter amount &amp; confirm with PIN</li>
              </ol>
            </div>
          </div>

          {/* KCB International (Featured) */}
          <div className="donate-card featured">
            <span className="donate-card-badge">International · Bank Wire</span>
            <h3 className="donate-card-title">KCB International Transfer</h3>
            <div className="donate-card-row">
              <span className="donate-card-key">Paybill</span>
              <span className="donate-card-val">522522</span>
            </div>
            <div className="donate-card-row">
              <span className="donate-card-key">Account No.</span>
              <span className="donate-card-val">1346992304</span>
            </div>
            <div className="donate-card-row">
              <span className="donate-card-key">Account Name</span>
              <span className="donate-card-val">Brahams Foundation</span>
            </div>
            <div className="donate-card-row">
              <span className="donate-card-key">SWIFT / BIC</span>
              <span className="donate-card-val">KCBLKENX</span>
            </div>
            <div className="donate-card-row">
              <span className="donate-card-key">Bank</span>
              <span className="donate-card-val">KCB Bank Kenya Ltd</span>
            </div>
            <div className="donate-card-row">
              <span className="donate-card-key">Branch</span>
              <span className="donate-card-val">Ugenya, Siaya, Kenya</span>
            </div>
            <div className="donate-card-steps">
              <ol>
                <li>Log in to your bank&apos;s international transfer portal</li>
                <li>Enter the SWIFT code: <strong>KCBLKENX</strong></li>
                <li>Enter account number: <strong>1346992304</strong></li>
                <li>Beneficiary: <strong>Brahams Foundation</strong></li>
                <li>Include your name &amp; purpose in reference</li>
                <li>Submit and keep your transfer receipt</li>
              </ol>
            </div>
          </div>

          {/* Crypto */}
          <div className="donate-card">
            <span className="donate-card-badge">Crypto · USDT TRC20</span>
            <h3 className="donate-card-title">Cryptocurrency Donation</h3>
            <div className="donate-card-row">
              <span className="donate-card-key">Network</span>
              <span className="donate-card-val">TRON (TRC20)</span>
            </div>
            <div className="donate-card-row">
              <span className="donate-card-key">Token</span>
              <span className="donate-card-val">USDT</span>
            </div>
            <div className="donate-wallet">
              <span style={{ fontSize: '11px', wordBreak: 'break-all', fontFamily: 'var(--font-outfit)' }}>
                {CRYPTO_WALLET}
              </span>
              <button className="donate-copy-btn" onClick={copyWallet}>
                {copied ? '✓ Copied' : 'Copy'}
              </button>
            </div>
            <div className="donate-card-steps" style={{ marginTop: '16px' }}>
              <ol>
                <li>Open your crypto wallet (Trust Wallet, etc.)</li>
                <li>Select <strong>Send</strong> then choose <strong>USDT</strong></li>
                <li>Select <strong>TRC20</strong> network</li>
                <li>Paste the wallet address above</li>
                <li>Enter amount &amp; confirm transaction</li>
              </ol>
            </div>
            <div className="donate-warning">
              ⚠️ Only send USDT on the <strong>TRC20 network</strong>. Sending on other networks will result in permanent loss of funds.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
