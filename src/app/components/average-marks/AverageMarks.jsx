import SingleAverageMark from "../single-average-mark/SingleAverageMark";
import "./average-marks.css";

const AverageMarks = ({ text1, text2, type }) => {
  return (
    <div className="average-marks">
      <div className="average-title">
        <p className="average">{text1}</p>
        <p className="decend">{text2}</p>
      </div>
      <SingleAverageMark />
      <SingleAverageMark />
      <SingleAverageMark />
      <SingleAverageMark />
      <SingleAverageMark />
      <SingleAverageMark />
      <SingleAverageMark />
      <SingleAverageMark />
      <SingleAverageMark />
      <SingleAverageMark />
      <SingleAverageMark />
      <SingleAverageMark />
      <SingleAverageMark />
      <SingleAverageMark />
      <SingleAverageMark />
      <SingleAverageMark />
      <SingleAverageMark />
      <SingleAverageMark />
    </div>
  );
};

export default AverageMarks;
