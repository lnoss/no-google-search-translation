import { useState, useEffect } from "react"
import { Storage } from "@plasmohq/storage"

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
              padding: 1rem 2rem;
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
          `}
        </style>
      </head>
      <body>
        <main>
          <h1>Settings</h1>
          <div className="settings-section">
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="fetchYouTubeOriginalTitles"
                checked={fetchYouTubeOriginalTitles}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="fetchYouTubeOriginalTitles" className="checkbox-label">
                <strong>Fetch YouTube Original Titles</strong><br />
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