import "./globals.css"; 

export default function RootLayout({ children }) {
  return (
    <html className="bg-gray-950 scroll-smooth"lang="en">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      <title>NextWork</title>
      <body>
        {children}
      </body>
    </html>
  );
}
