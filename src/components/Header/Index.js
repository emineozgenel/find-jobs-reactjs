import { useContext } from 'react'
import logo from '../../logo.png';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Parse from "parse";
import {JobContext} from "../../context/JobContext";

const Header = () => {  
  const {currentUser, setCurrentUser} = useContext(JobContext);

  const handleLogout = () => {
    Parse.User.logOut().then(() => {
      setCurrentUser([]);
    });
  }

  return (
    <header className="py-4">
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/"><img src={logo} className="logo" alt="logo" /></Link>
          <div className="d-flex align-items-center" >
            <Link className={`mr-3 base-color ${Object.keys(currentUser).length > 0 ? "d-none": ""}`} to="/login">Giriş Yap</Link>
            <Link className={`px-4 py-1 btn btn-primary ${Object.keys(currentUser).length > 0  ? "d-none": ""}`} to="/register">Kayıt Ol</Link>
            <div className={`mr-3 base-color ${Object.keys(currentUser).length > 0 ? "d-block" : "d-none"}`} role="button" onClick={handleLogout}>Çıkış Yap</div>
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;