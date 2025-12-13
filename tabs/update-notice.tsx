import iconImage from "data-base64:~assets/icon.png"
import showcaseImage from "data-base64:~assets/youtube-untranslated.webp"

function UpdateNotice() {
  const handleClose = () => {
    if (typeof window !== 'undefined') {
      window.close()
    }
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Extension Update Notice - No Google Search Translation</title>
        <style>
          {`
            :root {
              --text-color: #333;
              --bg-color: #fff;
            }
            @media (prefers-color-scheme: dark) {
              :root {
                --text-color: #e1e1e1;
                --bg-color: #1a1a1a;
              }
            }
            html {
              margin: 0;
              padding: 0;
              min-height: 100vh;
            }
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              font-size: 13px;
              line-height: 1.5;
              max-width: 600px;
              width: 90%;
              color: var(--text-color);
              background-color: var(--bg-color);
              margin: 0 auto;
              padding: 0;
              min-height: 100vh;
              display: flex;
              justify-content: center;
            }
            main {
              padding: 1rem;
              width: 100%;
            }
            h1 {
              margin: 0 0 1.5rem 0;
            }
            h2 {
              color: var(--text-color);
              margin-top: 1.5rem;
              margin-bottom: 0.75rem;
              font-size: 14px;
            }
            p {
              font-size: 14px;
              font-weight: 400;
              margin-bottom: 1rem;
            }
            .settings-section {
              margin: 0 0 1.5rem 0;
              padding: 0;
            }
            .feature-list {
              list-style-type: none;
              padding: 0;
              margin: 0.5rem 0;
            }
            .feature-list li {
              padding: 0.25rem 0;
            }
            .feature-list li::before {
              content: "•";
              color: var(--text-color);
              font-weight: normal;
              margin-right: 0.5rem;
            }
            .permission-explanation {
              padding: 1rem;
              margin: 1rem 0;
              border: 1px solid rgba(0, 0, 0, 0.1);
              border-radius: 4px;
            }
            @media (prefers-color-scheme: dark) {
              .permission-explanation {
                border-color: rgba(255, 255, 255, 0.1);
              }
            }
            .close {
              background-color: var(--text-color);
              color: var(--bg-color);
              border: none;
              padding: 0.75rem 1.5rem;
              border-radius: 4px;
              font-size: 1rem;
              cursor: pointer;
              margin-top: 2rem;
              display: block;
              margin-left: auto;
              margin-right: auto;
            }
            .close:hover {
              opacity: 0.8;
            }
            .header {
              display: flex;
              align-items: center;
              gap: 0.5rem;
              margin-bottom: 1.5rem;
            }
            .header-icon {
              width: 32px;
              height: 32px;
            }
            .header-title {
              margin: 0;
            }
            .showcase-image {
              width: 100%;
              max-width: 500px;
              height: auto;
              border-radius: 8px;
              margin: 1rem 0;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            }
            a {
              color: var(--text-color);
            }
          `}
        </style>
      </head>
      <body>
        <main>
          <div className="header">
            <img src={iconImage} alt="Extension Icon" className="header-icon" />
            <h1 className="header-title">No Google Search Translation</h1>
            <a href="https://github.com/lnoss/no-google-search-translation">Source code</a>
          </div>
          <p><strong>New version : 0.0.8</strong></p>

          <div>
            <h2>New feature: YouTube videos original titles</h2>
            <p>This update introduces a new feature that fetches and displays the original titles of YouTube videos instead of translated ones when they appear in Google Search results.</p>
            <img src={showcaseImage} alt="YouTube untranslated titles showcase" className="showcase-image" />
          </div>

          <div className="permission-explanation">
            <h2><strong>New permission to access YouTube.com</strong></h2>
            <p>To fetch the original video titles, the extension needs to make requests to YouTube.com's servers. This permission allows the extension to:</p>
            <ul>
              <li>Retrieve the authentic video titles in their original language</li>
              <li>Replace translated titles in Google Search results</li>
              <li>Display the actual video title as intended by the content creators</li>
            </ul>
            <p><strong>Privacy:</strong> The extension only request video metadata (title, author, thumbnail, etc.) and do not access your personal YouTube data.</p>
          </div>

          <div>
            <h2>Settings</h2>
            <p>You can enable or disable the YouTube original titles feature at any time:</p>
            <ol>
              <li>Click the extension icon in your browser (or <a href="/options.html">click here</a>)</li>
              <li>Toggle "Resolve YouTube videos titles" on or off</li>
            </ol>
            <p>On Chromium-based browsers (Google Chrome, Edge, Brave, Vivaldi, etc.), you can simply revoke the YouTube.com permission directly from your browser. The Firefox version still uses an old extension format, which doesn't support optional permissions, so you'll need to use the toggle in the extension itself instead.</p>
          </div>

          <button className="close" onClick={handleClose}>
            Close
          </button>
        </main>
      </body>
    </html>
  )
}

export default UpdateNotice;