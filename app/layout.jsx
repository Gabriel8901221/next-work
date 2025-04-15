import "./globals.css"; 

export default function RootLayout({ children }) {
  return (
    <html className="bg-gray-950 scroll-smooth"lang="en">
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      <title>NextWork</title>
      <body>
        {children}
      </body>
    </html>
  );
}
