const Footer = () => {
    return (
        <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Christian's Portfolio</p>
                <p>|</p>
                <p>Connect With Me</p>
            </div>

            <div className="flex gap-3">
                <a href='https://github.com/cjgarcia12' className="social-icon" target='_blank' rel='noreferrer'>
                    <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
                </a>
                <a href='https://www.linkedin.com/in/cjgarca/' className="social-icon" target='_blank' rel='noreferrer'>
                    <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
                </a>
                {/*<div className="social-icon">*/}
                {/*    <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />*/}
                {/*</div>*/}
            </div>

            <p className="text-white-500">© 2024 Christian Garcia. All rights reserved.</p>
        </footer>
    );
};

export default Footer;