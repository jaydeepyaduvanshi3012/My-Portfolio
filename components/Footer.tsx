const Footer = () => {
    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    id="contact-email"
                    href="mailto:jaydeepyaduvanshi8@gmail.com"
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline transition-all duration-300"
                >
                    jaydeepyaduvanshi8@gmail.com
                </a>
                <div className="mt-4 text-lg">
                    <span id="contact-phone" className="transition-all duration-300">
                        Phone: +91 7007794612
                    </span>
                </div>
                <div className="">
                    <a
                        href="https://github.com/JAYDEEPYADUVANSHI"
                        target="_blank"
                        className="leading-none text-muted-foreground hover:underline hover:text-white"
                    >
                        Design & built by JAYDEEP YADUVANSHI
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
