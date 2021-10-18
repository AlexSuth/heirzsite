import Footer from './Footer';
import NavBar from './NavBar';

const Layout = ({ children }) => {
  return (
    <div className=' bg-black'>
      <NavBar />
      <main className='md:container md:mx-auto'>{children}</main>
    </div>
  );
};

export default Layout;
