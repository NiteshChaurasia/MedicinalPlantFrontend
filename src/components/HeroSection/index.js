import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyle'
import MainImg from '../../images/main-img.png'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Welcome to<br /> {Bio.name}</Title>
                        <TextLoop>
                            We use
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton  href={Bio.resume} target='display'>Visiualize Map</ResumeButton> 
                    </HeroLeftContainer>
                    <HeroRightContainer id="Right">
                        <Img src={MainImg} alt="main-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection