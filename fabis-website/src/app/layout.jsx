import '../index.css';


export const metadata = {
  title: 'Fabian Jaskotka',
  description: 'Full-time optimist from Hamburg, Germany. I am currently a Senior Evaluation Product lead at Apple. Passion for technology and sales.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  ) 
}