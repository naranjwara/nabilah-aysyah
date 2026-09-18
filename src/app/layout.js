import './globals.css';

export const metadata = {
  title: 'Nabilah Najwa Aysyah | Portfolio',
  description: 'Software QA Engineer, Project Manager, and Fullstack Web Developer portfolio'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
