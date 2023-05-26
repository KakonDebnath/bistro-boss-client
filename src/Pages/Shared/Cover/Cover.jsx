import { Parallax } from 'react-parallax';

const Cover = ({ coverImg, coverTitle, coverDetails, style, bgStyle }) => {
    return (
        <Parallax
            blur={{ min: -45, max: 45 }}
            bgImage={coverImg}
            bgImageAlt="the menu"
            strength={-200}
        >
            {/* Blur transition from min to max */}
            <div className="hero h-[700px]" >
                {/* <div className="hero-overlay bg-opacity-60"></div> */}
                <div style={bgStyle} className="hero-content text-center text-neutral-content w-3/4 py-20 px-20">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{coverTitle}</h1>
                        <p style={style} className="mb-5">{coverDetails}</p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;