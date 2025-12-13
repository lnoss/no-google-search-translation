import { useState, useEffect } from "react"
import { Storage } from "@plasmohq/storage"

function IndexPopup() {
  const [fetchYouTubeOriginalTitles, setFetchYouTubeOriginalTitles] = useState<boolean>(true);
  const storage = new Storage({ area: "sync" });

  useEffect(() => {
    storage.get<boolean>("fetchYouTubeOriginalTitles").then(saved => {
      if (saved !== null && saved !== undefined) {
        setFetchYouTubeOriginalTitles(saved);
      }
    }).catch(error => {
      console.warn("Failed to load saved settings:", error);
    })
  }, [])

  const handleCheckboxChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked: boolean = event.target.checked;
    setFetchYouTubeOriginalTitles(checked);
    await storage.set("fetchYouTubeOriginalTitles", checked);
  }



  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>No Google Search Auto Translation</title>
        <style>
          {`
            :root {
              --text-color: #333;
              --bg-color: #fff;
              width: 340px;
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
            }
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              font-size: 13px;
              line-height: 1.5;
              width: 340px;
              color: var(--text-color);
              background-color: var(--bg-color);
              margin: 0;
              padding: 0;
            }
            main {
              padding: 1rem;
            }
            h1 {
              margin: 0 0 1rem 0;
            }
            p {
              font-size: 14px;
              font-weight: 400;
              margin-bottom: 1rem;
            }
            .settings-section {
              margin: 0;
              padding: 1rem;
              border: 1px solid #ddd;
              border-radius: 6px;
              background-color: rgba(0, 0, 0, 0.02);
            }
            @media (prefers-color-scheme: dark) {
              .settings-section {
                border-color: #444;
                background-color: rgba(255, 255, 255, 0.02);
              }
            }
            .checkbox-container {
              display: flex;
              align-items: flex-start;
              gap: 0.5rem;
            }
            .checkbox-label {
              font-size: 14px;
              line-height: 1.4;
              cursor: pointer;
            }
            a {
              color: #0066cc;
            }
            @media (prefers-color-scheme: dark) {
              a {
                color: #4dabff;
              }
            }
          `}
        </style>
      </head>
      <body>
        <main>
          <h1>No Google Search Translation</h1>
          <p>This extension disables the auto translation feature of Google Search results and redirects from Google Translate proxy pages to the original URLs.</p>
          <p>If not working, please check that you've approved the necessary permissions in your browser's extension settings. <small>Check help pages for <a href="https://support.mozilla.org/en-US/kb/manage-optional-permissions-extensions">Firefox</a> and <a href="https://support.google.com/chrome_webstore/answer/2664769">Chrome</a></small>.</p>
          <p>Any requests, feedback, or bug reports can be shared on <a href="https://github.com/lnoss/no-google-search-translation/">GitHub</a>.</p>

          <h2>Settings</h2>
          <div className="settings-section">
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="fetchYouTubeOriginalTitles"
                checked={fetchYouTubeOriginalTitles}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="fetchYouTubeOriginalTitles" className="checkbox-label">
                <strong>Resolve YouTube videos titles</strong><br />
                Enable to retrieve and display the original titles of YouTube videos instead of translated ones. <small>For each video found in Google Search results, a request is made to YouTube.com.</small>
              </label>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}

export default IndexPopup;