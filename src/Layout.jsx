import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

function Layout() {
  return (
    <div className="wrapper">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default Layout
