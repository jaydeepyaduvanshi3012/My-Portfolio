import { GENERAL_INFO } from '@/lib/data';
import { GitFork, Star } from 'lucide-react';

interface RepoStats {
    stargazers_count: number;
    forks_count: number;
}

const Footer = async () => {
    const repoStats = await fetch(
        'https://api.github.com/repos/tajmirul/portfolio-2.0',
        {
            next: {
                revalidate: 60 * 60, // 1 hour
            },
        },
    );

    const { stargazers_count, forks_count } =
        (await repoStats.json()) as RepoStats;

    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href="mailto:jaydeepyaduvanshi8@gmail.com"
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    jaydeepyaduvanshi8@gmail.com
                </a>
                <div className="mt-4 text-lg">
                    <span>Phone: +91 7007794612</span>
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
