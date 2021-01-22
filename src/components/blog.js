import React from 'react';
import { NavLink } from 'react-router-dom';

import './blog.scss';

function Blog() {

    return(
        <div className="blog" style={{backgroundImage: `url('./assets/about-background.png')`}}>
            <div className="blog__header">blog</div>
            <div className="blog__content-outer">
                <div className="blog__content-inner">
                    <ul className="blog__items">
                        <li className="blog__item">
                            <a className="blog__link" href="https://heybillyott.wordpress.com/2020/12/03/css-units/" target="_blank" rel="noreferrer">CSS Units</a>
                            <p className="blog__prev-text">
                            Confession: I haven’t taken time to formally learn CSS. Styling my projects has been a force-it-and-see-what-happens situation each time. Unsurprisingly, this has led to some...
                            </p>
                        </li>
                        <li className="blog__item">
                            <a className="blog__link" href="https://heybillyott.wordpress.com/2020/11/08/im-kinda-into-brutalist-web-design/" target="_blank" rel="noreferrer">I’m Kinda Into Brutalist Web Design</a>
                            <p className="blog__prev-text">
                            I recently stumbled upon an extremely polarizing web design aesthetic – brutalism – and subsequently fell into a medium-deep internet rabbit hole to learn more. Gotta say, I’m kinda into it...
                            </p>
                        </li>
                        <li className="blog__item">
                            <a className="blog__link" href="https://heybillyott.wordpress.com/2020/10/18/creating-nested-structures-in-rails/" target="_blank" rel="noreferrer">Creating Nested Structures in Rails</a>
                            <p className="blog__prev-text">
                            In true Millennial fashion, I have a mild addiction to houseplants. In fact, I just counted over 20 of them in my immediate vicinity. While it used to be I couldn’t pass a plant shop without buying a new pilea or money tree, additions in recent years come from propagations, which has been a super good way to...
                            </p>
                        </li>
                        <li className="blog__item">
                            <a className="blog__link" href="https://heybillyott.wordpress.com/2020/09/25/deconstructing-an-advertising-bid-request/" target="_blank" rel="noreferrer">Deconstructing an advertising bid request</a>
                            <p className="blog__prev-text">
                            There’s a list of reasons I’m exploring software engineering as a profession; its wide application – both professional and personal – is high up there. Curious to see if I could apply my humble 1.5 weeks’ worth of skill-building (ok, we actually fit a lot in that time), I revisited a concept from my previous life...
                            </p>
                        </li>
                        <li className="blog__item">
                            <a className="blog__link" href="https://heybillyott.wordpress.com/2020/09/11/lets-do-our-best/" target="_blank" rel="noreferrer">let’s do our best</a>
                            <p className="blog__prev-text">
                            Many of the self-improvement books I’ve read have told me to share my goals with others. The accountability associated with a public declaration, they say, is a big motivator to achieve them. But putting yourself out there is awkward and scary. No one wants to be a flake or worse – a failure...
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <NavLink to="/main-menu" className="blog__back-button">GO BACK</NavLink>
        </div>
    )
}

export default Blog;