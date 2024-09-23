import ContentWrapper from "./ContentWrapper";
import ImageWrapper from "./ImageWrapper";
import TextParagraph from "./TextParagraph";
import { textAbout } from "./textAbout";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h1>O mnie!</h1>
        <div className="about-wrapper">
          <ContentWrapper className="ContentWrapper-first">
            <ImageWrapper
              className="img-wrapper img-wrapper-odd img-wrapper-first"
              picture="../../../public/pictures/tomek-zdunek.jpg"
              alt="Tour Guide - Tomasz Zdunek"
              imgElement="img-first"
            />
            <TextParagraph text={textAbout.first} className="text-paragraph text-paragraph-first text-odd" />
          </ContentWrapper>

          <ContentWrapper className="ContentWrapper-second">
            <ImageWrapper
              className="img-wrapper img-wrapper-even img-wrapper-second"
              picture="../../../public/pictures/tomek-about-1.jpg"
              alt="Tour Guide - Tomasz Zdunek"
              imgElement="img-second"
            />
            <TextParagraph text={textAbout.second} className="text-paragraph text-paragraph-second text-even" />
          </ContentWrapper>

          <ContentWrapper className="ContentWrapper-third">
            <ImageWrapper
              className="img-wrapper img-wrapper-odd img-wrapper-third"
              picture="../../../public/pictures/tomek-about-2.jpg"
              alt="Tour Guide - Tomasz Zdunek"
              imgElement="img-third"
            />
            <TextParagraph text={textAbout.third} className="text-paragraph text-paragraph-third text-odd" />
          </ContentWrapper>

          <ContentWrapper className="ContentWrapper-fourth">
            <ImageWrapper
              className="img-wrapper img-wrapper-even img-wrapper-fourth"
              picture="../../../public/pictures/tomek-about-3.jpg"
              alt="Tour Guide - Tomasz Zdunek"
              imgElement="img-fourth"
            />
            <TextParagraph text={textAbout.fourth} className="text-paragraph text-paragraph-fourth text-even" />
          </ContentWrapper>
        </div>
      </div>
    </section>
  );
};

export default About;
