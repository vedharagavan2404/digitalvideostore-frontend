import React from 'react'

const Footer = () => {
  return (
    
      <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div id="leftbox" class="col-md-3 item">
            <h3>Watch</h3>
                <ul>
        <li><a href="#">Spotlight</a></li>
        <li><a href="#">Movies</a></li>
        <li><a href="#">TV</a></li>
    </ul>
</div>

<div id="midbox" class="col-md-3 item">
    <h3>My Account</h3>
    <ul>
        <li><a href="#">My Netflix</a></li>
        <li><a href="#">Account</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">Manage Devices</a></li>
    </ul>
</div>
<div id="rightbox" class="col-md-3 item">
    <h3>About</h3>
    <ul>
        <li><a href="#">Company</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Careers</a></li>
    </ul>
</div>
                    <div class="col item social"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-youtube"></i></a><a href="#"><i class="fa fa-instagram"></i></a><a href="#"><i class="fa fa-google"></i></a></div>
                </div>
                <p class="copyright">Digitalvideostore.com &copy; 2020</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer
