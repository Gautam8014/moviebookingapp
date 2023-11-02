
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';



export const Footer = () => {

   


   



  return (

    <div className="footer">

        <h3>Manjhi The Bharat Ratna</h3>
        
        <div className="footSeconf">
        © 2023 Manjhi The Bharat Ratna. All rights reserved.
        </div>

        <div className="footIcon">
            <div><FacebookIcon/></div>
            <div><InstagramIcon/></div>
            <div><AddLocationAltIcon/></div>
            

        </div>

        <div className="CreatedBy">
          <h3>Website created by :- Kalyan Tech</h3>
        </div>


        



    </div>
  )
}