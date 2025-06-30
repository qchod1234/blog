import { useEffect } from 'react';
import './ScrollLine.css';

const ScrollLine = () => {
    useEffect(() => {
        const scrollLine = document.querySelector('.scroll-line');

        const fillScrollLine = () => {
            const windowHeight = window.innerHeight;
            const fullHeight = document.body.scrollHeight;
            const scrolled = window.scrollY;
            const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;
            scrollLine.style.width = percentScrolled + '%';
        };

        window.addEventListener('scroll', fillScrollLine);
        return () => window.removeEventListener('scroll', fillScrollLine);
    }, []);

    return <div className="scroll-line" style={{ width: '0%' }}></div>;
};

export default ScrollLine;
