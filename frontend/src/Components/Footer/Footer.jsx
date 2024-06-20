import "./style.css"
import zomato from "../../assets/zomato.avif"
import india from "../../assets/india.png"
import appstorelogo from "../../assets/appstore.webp"
import playstorelogo from "../../assets/googleplay.webp"
import { BsGlobe } from "react-icons/bs"

import {AiFillLinkedin } from "react-icons/ai"
import {AiFillTwitterCircle} from "react-icons/ai"
import {AiFillYoutube} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
import {FaInstagramSquare} from "react-icons/fa"

function Footer() {
    return (
        <>
            <footer>
                <div className="footer-heading">
                    <img className="zomato-logo" src={zomato} alt="Zomato image" />
                    <div className="button-parent">
                        <button className="button">
                            <img src={india} alt="" />
                            <div>India</div>
                            <select name="" id=""></select>
                        </button>
                        <button className="button">
                            <BsGlobe />
                            <div>English</div>
                            <select name="" id=""></select>
                        </button>
                    </div>
                </div>

                <div className="footer-main">
                    <div className="footer-link">
                        <span className="span-tag">ABOUT ZOMATO</span>
                        <a href="https://www.zomato.com/who-we-are">Who We Are</a>
                        <a href="https://blog.zomato.com/">Blog</a>
                        <a href="https://www.zomato.com/careers">Work With Us</a>
                        <a href="https://www.zomato.com/investor-relations">Investor Relations</a>
                        <a href="https://www.zomato.com/report-fraud">Report Fraud</a>
                        <a href="https://blog.zomato.com/press-kit">Press Kit</a>
                        <a href="https://www.zomato.com/contact">Contact Us</a>
                    </div>
                    <div className="footer-link">
                        <span className="span-tag">ZOMAVERSE</span>
                        <a href="https://www.zomato.com/">zomato</a>
                        <a href="https://blinkit.com/">Blinkit</a>
                        <a href="https://www.feedingindia.org/">Feeding India</a>
                        <a href="https://www.hyperpure.com/">Hyperpure</a>
                        <a href="https://www.zomato.com/zomaland">Zomaland</a>
                    </div>
                    <div className="footer-link">
                        <span className="span-tag">FOR RESTAURANTS</span>
                        <a href="https://www.zomato.com/partner-with-us">Partner With Us</a>
                        <a href="https://play.google.com/store/apps/details?id=com.application.services.partner&hl=en_IN&gl=US">Apps For You</a>
                        <span className="span-tag">FOR ENTERPRISES</span>
                        <a href="https://www.zomato.com/enterprise-solutions">Zomato For Interprise</a>
                    </div>
                    <div className="footer-link">
                        <span className="span-tag">LEARN MORE</span>
                        <a href="https://www.zomato.com/policies/privacy/">Privacy</a>
                        <a href="https://www.zomato.com/policies/security/">Security</a>
                        <a href="https://www.zomato.com/policies/terms-of-service/">Terms</a>
                        <a href="https://www.zomato.com/directory">Sitemap</a>
                    </div>
                    <div className="footer-link">
                        <span className="span-tag">SOCIAL LINKS</span>
                        <div className="img-logo">
                            <a href="https://www.linkedin.com/company/zomato/?originalSubdomain=in"><AiFillLinkedin/></a>
                            <a href="https://www.instagram.com/zomato/"><FaInstagramSquare/></a>
                            <a href="https://twitter.com/zomato"><AiFillTwitterCircle/></a>
                            <a href="https://www.youtube.com/zomato"><AiFillYoutube/></a>
                            <a href="https://www.facebook.com/zomato"><BsFacebook/></a>
                        </div>
                        <a href="https://apps.apple.com/in/app/zomato-food-delivery-dining/id434613896?_branch_match_id=1237417379119572142&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT8pL1ssp0U%2FJL8%2FLyU9M0a3Kz00sydfNzC8GAFKYbuoiAAAA"><img className="store" src={appstorelogo} alt="" /></a>
                        <a href="https://play.google.com/store/apps/details?id=com.application.zomato&_branch_match_id=1237417379119572142&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXT8pL1ssp0U%2FJL8%2FLyU9M0a3STcxLKcrPTAEABp6kzyEAAAA%3D"><img className="store" src={playstorelogo} alt="" /></a>
                    </div>
                </div>


                <hr style={{ margin: "1.5rem 0" }} />
                <span style={{ color: "grey", fontSize: "0.9rem" }}>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2023 © Zomato™ Ltd. All rights reserved.</span>

            </footer>
        </>
    )
}
export default Footer