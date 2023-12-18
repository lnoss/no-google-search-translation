function IndexPopup() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>No Google Search Auto Translation</title>
        <style>
          {`
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              font-size: 14px;
              line-height: 1.5;
              margin: 6px;
              max-width: 320px;
            }
            h1 {
              font-size: 24px;
              font-weight: 600;
            }
            p {
              font-size: 16px;
              font-weight: 400;
            }
          `}
        </style>
      </head>
      <body>
        <h1>No Google Search Translation</h1>
        <p>This extension disables the auto translation feature of Google Search results. It also auto redirect to the original website if the Google Translate proxy is detected.</p>

        <p>Any request, feedback or bug report can be shared on <a href="https://github.com/lnoss/no-google-search-translation/">GitHub</a>.</p>
      </body>
    </html>
  )
}

export default IndexPopup;