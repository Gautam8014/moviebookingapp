
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import YouTubeIcon from '@mui/icons-material/YouTube';


export const Footer = () => {

   


   



  return (

    <div className="footer">

        <h3>Manjhi The Bharat Ratna</h3>
        
        <div className="footSeconf">
        © 2023 Manjhi The Bharat Ratna. All rights reserved.
        </div>

        {/* <div className="footIcon">
            <div><FacebookIcon/></div>
            <div><InstagramIcon/></div>
            <div><YouTubeIcon/></div>
            <div><AddLocationAltIcon/></div>
            

        </div> */}

<div className="footIcon">
        <a href="https://www.facebook.com">
          <FacebookIcon />
        </a>
        <a href="https://www.instagram.com">
          <InstagramIcon />
        </a>
        <a href="https://www.youtube.com/watch?v=fFoNuX-Diuo">
          <YouTubeIcon />
        </a>
        <a href="https://www.example.com">
          <AddLocationAltIcon />
        </a>
      </div>

        <div className="CreatedBy">
          <h3>Website developed by Kalyan Tech❤️</h3>
        </div>


        



    </div>
  )
}