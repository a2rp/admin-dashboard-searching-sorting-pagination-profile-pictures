import { FiCodepen, FiFacebook, FiGithub, FiGlobe, FiHeart, FiLinkedin, FiMail, FiYoutube } from "react-icons/fi";
import styles from "./styles.module.scss";

const links = [
    ["Portfolio", "https://www.ashishranjan.net", FiGlobe],
    ["GitHub", "https://github.com/a2rp", FiGithub],
    ["CodePen", "https://codepen.io/ash1198", FiCodepen],
    ["LinkedIn", "https://www.linkedin.com/in/aashishranjan", FiLinkedin],
    ["Facebook", "https://www.facebook.com/theash.ashish/", FiFacebook],
    ["YouTube", "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", FiYoutube],
    ["Email", "mailto:ash.ranjan09@gmail.com", FiMail],
];

const support = [["Support", "https://a2rp-donation-page.netlify.app/"], ["Buy Me A Coffee", "https://buymeacoffee.com/a2rp"], ["Patreon", "https://patreon.com/a2rp"]];

const Footer = () => {
    const year = new Date().getFullYear();
    return <footer className={styles.footer}>
        <div className={styles.inner}>
            <div><span className={styles.kicker}><FiHeart /> Admin workspace</span><h2>Simple tools for better account management.</h2><p>Built with care by Ashish Ranjan.</p></div>
            <div className={styles.columns}><div><h3>Links</h3>{links.map(([label, href, Icon]) => <a key={label} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}><Icon />{label}</a>)}</div><div><h3>Support</h3>{support.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer"><FiHeart />{label}</a>)}</div></div>
        </div>
        <div className={styles.bottom}>Copyright &copy; {year} <a href="https://www.ashishranjan.net" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></div>
    </footer>;
};

export default Footer;
