import gsap from 'gsap';

class IndexFx {
    static loading() {
        const start = () => {
            const timeline = gsap.timeline();
            timeline.to('.logo', { duration: 0, y: '-300%' });
            timeline.to('.logo', {
                duration: 2,
                y: '100%',
                ease: 'back',
                onComplete: () => {
                    timeline2.resume();
                },
            });
            const timeline2 = gsap.timeline({ paused: true });
            timeline2.to('.logo', {delay: .1, duration: 2, y: '0%', ease: 'circ' });
            timeline2.to('img.initialLogo', { duration: .5, opacity: 1, ease: 'circ' });
            timeline2.to('img.initialLogo', { delay: .2, duration: .5, position: 'relative', top: '-10%', ease: 'circ' });
        };

        const end = () => {};

        return {
            start,
            end,
        };
    }
}

export default IndexFx;
