import { useState, useEffect } from "react"
import { Storage } from "@plasmohq/storage"
import iconImage from "data-base64:~assets/icon.png"

function IndexOptions() {
  const [fetchYouTubeOriginalTitles, setFetchYouTubeOriginalTitles] = useState<boolean>(true)
  const storage = new Storage({ area: "sync" })

  useEffect(() => {
    storage.get<boolean>("fetchYouTubeOriginalTitles").then(saved => {
      if (saved !== null) {
        setFetchYouTubeOriginalTitles(saved)
      }
    })
  }, [])

  const handleCheckboxChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked: boolean = event.target.checked
    setFetchYouTubeOriginalTitles(checked)
    await storage.set("fetchYouTubeOriginalTitles", checked)
  }

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>No Google Search Translation - Settings</title>
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
              padding: 1rem 2rem;
              width: 100%;
            }
            h1 {
              margin-bottom: 1rem;
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
          `}
        </style>
      </head>
      <body>
        <main>
          <div className="header">
            <img src={iconImage} alt="Extension icon" className="header-icon" />
            <h1 className="header-title">No Google Search Translation</h1>
          </div>
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
                Enable to retrieve and display the original titles of YouTube videos instead of translated ones. <small>For each video found in Google Search results, a request is made to YouTube.com</small>.
              </label>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}

export default IndexOptions