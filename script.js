<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio Website</title>
    <link rel="stylesheet" href="styles.css">
   <!-- Font Awesome Official CDN -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <div id="header">
        <div class="container">
            <nav>
                <img src="images/logo.png" class="logo">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                    <i class="fas fa-times"></i>
                </ul>
                <i class="fas fa-bars"></i>
            </nav>
            <div class="header-text">
                <p>Software Developer</p>
                <h1>Hi,I'm <span>Shyla</span> <br> Rotich from Kenya</h1>
            </div>

        </div>

    </div>
    <!----about section------->
    <div id="about">
        <div class="container">
            <div class="row">
                <div class="about-col-1">
                    <img src="images/user.png">
                </div>
                <div class="about-col-2">
                <h1 class="sub-title">About Me</h1>
                <p>I am a passionate Software Developer with a background in Mathematics & Computer Science. I have experience in software development, marketing, and customer service.
                I specialize in web and mobile app development, and I'm passionate about teaching coding. I also have hands-on experience in sales, customer relations, and IT support
                When I'm not coding, I enjoy teaching Sunday school and exploring business ideas.</p>

                <div class="tab-titles">
                    <p class="tab-links active-link" onclick="opentab('skills')">Skills</p>
                    <p class="tab-links" onclick="opentab('education')">Education</p>
                    <p class="tab-links" onclick="opentab('experience')">Experience</p>
                </div>
                <div class="tab-contents active-tab" id="skills">
                    <ul>
                        <li><span>UI/UX</span><BR>Designing Web/App Interfaces</BR></li>
                        <li><span>Web Development</span><BR>Developing Responsive Websites</BR></li>
                        <li><span>App Development</span><BR>Building Anroid/iOS apps</BR></li>
                    </ul>
                </div>
                <div class="tab-contents" id="education">
                    <ul>
                        <li><span>2005-2015</span><br>Chepkutung Primary School</br></li>
                        <li><span>2016-2019</span></br>Sosiot Girls High School</br></li>
                        <li><span>2021-2024</span></br>Kenya Methodist University</br></li>
                        </ul>
                </div>
                <div class="tab-contents" id="experience">
                    <ul>
                        <li><span>2021-2024</span></br>Vice President - Young Tech Kenya Computer Club</br></li>
                        <li><span>May-Aug 2024</span><br>Kericho Revenue Office (Attachment - 2024)</br></li>
                        <li><span>Oct-Dec 2024</span></br>Post Bank (Sales Department - Attachment)</br></li>
                        </ul>
                </div>
                </div>
            </div>
        </div>
    </div>
   <!-----------services------------>
   <div id="services">
    <div class="container">
        <h1 class="sub-title">My Services</h1>
        <div class="services-list">
            <div>
                <i class="fas fa-code"></i>
                <h2>Web Design</h2>
                <p>Creating visually appealing, user-friendly, and responsive websites tailored to client needs,
                 ensuring seamless functionality across all devices.</p>
                 <a href="#">Learn more</a>
            </div>
            <div>
                <i class="fas fa-crop-alt"></i>
                <h2>UI/UX Design</h2>
                <p>Building high-performance Android and iOS applications with intuitive UI/UX, 
                    ensuring seamless functionality and a great user experience.</p>
                    <a href="#">Learn more</a>
            </div>
            <div>
                <i class="fab fa-app-store"></i>
                <h2>App Design</h2>
                <p>Designing intuitive and visually appealing web and mobile interfaces, ensuring a seamless 
                    and engaging user experience.</p>
                    <a href="#">Learn more</a>
            </div>
        </div>
    </div>
   </div>
   <!------portfolio------>
<div id="portfolio">
    <div class="container">
        <h1 class="sub-title">My Projects</h1>
        <div class="work-list">
            <div class="work">
                <img src="images/work1.png">
                <div class="layer">
                    <h3>Lampshade App</h3>
                    <p>Services screen displaying the types of services offered by the company</p>
                    <a href="#"><i class="fas fa-external-link-alt"></i></a>
                </div>
            </div>
            <div class="work">
                <img src="images/work2.png">
                <div class="layer">
                    <h3>Lampshade App</h3>
                    <p>Event supervisor management screen with its rights</p>
                    <a href="#"><i class="fas fa-external-link-alt"></i></a>
                </div>
            </div>
            <div class="work">
                <img src="images/work3.png">
                <div class="layer">
                    <h3>Lampshade App</h3>
                    <p>Suplier management screen with its rights</p>
                    <a href="#"><i class="fas fa-external-link-alt"></i></a>
                </div>
            </div>
        </div>
        <a href="#" class="btn">See More</a>
    </div>
</div>
<!------contact----->
<div id="contact">
    <div class="container">
        <div class="row">
            <div class="contact-left">
                <h1 class="sub-title">Contact Me</h1>
                <p><i class="fas fa-paper-plane"></i>shilagift001@gmail.com</p>
                <p><i class="fas fa-phone-square-alt"></i>+254 708153127</p>
                <div class="social-icons">
                    <a href="https://facebook.com/shyla-gift"><i class="fab fa-facebook"></i></a>
                    <a href=""><i class="fab fa-twitter-square"></i></a>
                    <a href=""><i class="fab fa-instagram"></i></a>
                    <a href="https://fa-linkedin.com/Shyla-Gift"><i class="fab fa-linkedin"></i></a>
                </div>
                <a href="images/Sheila CV .pdf" download class="btn btn2">Download CV</a>
            </div>
            <div class="contact-right">
                <form>
                    <input type="text" name="Name" placeholder="Your Name" required>
                    <input type="email" name="email" placeholder="Your Email" required>
                    <textarea name="Message" rows="6" placeholder="Leave a Comment Here"></textarea>
                    <button type="submit" class="btn btn2">Submit</button>
                </form>
            </div>
        </div>
        <div class="copyright">
            <p>copyright &copy; 2025 Sheila Rotich <i class="fas fa-heart"></i> | Designed & Developed by Sheila <i class="fas fa-heart"></i>| All Rights Reserved</p>
        </div>
    </div>
</div>
    <script>
        var tablinks=document.getElementsByClassName("tab-links");
        var tabcontents=document.getElementsByClassName("tab-contents");

        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add('active-link');
            document.getElementById(tabname).classList.add("active-tab")
        }
    </script>
    
</body>
</html>