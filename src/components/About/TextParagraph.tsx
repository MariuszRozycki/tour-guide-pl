import TextParagraphTypes from "../../types/TextParagraphTypes";

const TextParagraph = ({ text, className }: TextParagraphTypes) => {
  return (
    <>
      <div className={className}>
        <p>{text}</p>
      </div>
    </>
  );
};

export default TextParagraph;
