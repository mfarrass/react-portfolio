import "./topbar.scss";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            mf.
          </a>
          <div className="itemContainer">
            <WhatsAppIcon className="icon" />
            <a className="link" href="https://api.whatsapp.com/send?phone=6289662601141&text=Halo" target="blank">
            <span>62+ 896-6260-1141</span>
            </a>
          </div>
          <div className="itemContainer">
            <MailOutlineIcon className="icon" />
            <a className="link" href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcRwRPzQvHmDLqnjMGPCMMghwbWxLlWHXLbgzGBKxzmqfnpkmDTTLnDFLxBPplGTfkQMwXrQd" target="blank">
            <span>mfarras196@gmail.com</span>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={ () => setMenuOpen(!menuOpen)}>
            <span className="line1"> </span>
            <span className="line2"> </span>
            <span className="line3"> </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
