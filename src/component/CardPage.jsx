import { useParams ,useNavigate } from "react-router-dom";
import  {cardPageData} from "../data/data";

import "./CardPage.css"; // <-- you’ll add styles here

const CardPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = cardPageData.find((item) => item.id.toString() === id);

  if (!course) return <div className="not-found">Course not found</div>;

  return (
    <div className="card-container">
         <button className="back-btn" onClick={() => navigate("/course")}>
        ← Back to Courses
      </button>
      <div className="card-header">
        <img src={course.cover} alt={course.coursesName} className="card-image" />
        <div className="card-info">
          <h1>{course.coursesName}</h1>
          <p><strong>Instructor:</strong> {course.courTeacher[0].name}</p>
          <p><strong>Total Time:</strong> {course.courTeacher[0].totalTime}</p>
          <p><strong>Duration:</strong> {course.duration}</p>
          <p><strong>Eligibility:</strong> {course.eligibility}</p>
          <p><strong>Pricing:</strong> {course.priceAll} | {course.pricePer}</p>
        </div>
      </div>

      <div className="card-section">
        <h2>Course Overview</h2>
        <p>{course.overview}</p>
      </div>

      <div className="card-section">
        <h2>Key Features</h2>
        <ul>
          {course.features.map((f, i) => (
            <li key={i}>✔️ {f}</li>
          ))}
        </ul>
      </div>

      <div className="card-section video-section">
        <h2>Course Preview</h2>
        <iframe
          width="100%"
          height="400"
          src={course.videoLink.replace("watch?v=", "embed/")}
          title="Course Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="card-actions">
        {course.buttons.map((btn, i) => (
          <a href={btn.link} key={i}>
            <button className="cta-btn">{btn.label}</button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CardPage;
