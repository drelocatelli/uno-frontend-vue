import gsap from 'gsap';

class IndexFx {
    static loading() {
        const start = () => {
            const timeline = gsap.timeline();
            timeline.to('.box', {  duration: 0, visibility: 'hidden', pointerEvents: 'none' });
            timeline.to('.logo', { duration: 0, position: 'relative', y: '-300%' });
            timeline.to('img.initialLogo', { duration: 0, position: 'absolute', bottom: '30%' });
            timeline.to('.logo', {
                duration: 2,
                y: '50%',
                ease: 'back',
                onComplete: () => {
                    timeline2.resume();
                },
            });
            const timeline2 = gsap.timeline({ paused: true });
            timeline2.to('img.initialLogo', { duration: .5, opacity: 1, ease: 'circ' });
            timeline2.to('.logo', { duration: 1, y: '0', ease: 'circ' });
        };

        const end = () => {
            const timeline = gsap.timeline();
            timeline.to('img.initialLogo', {duration: .3, opacity: 0, display: 'none'})
                timeline.fromTo('.box', {opacity: 0, scale: .5}, { duration: .6,  opacity: 1, scale: 1, visibility: 'visible', pointerEvents: 'all' })
        };

        return {
            start,
            end,
        };
    }
}

export default IndexFx;
