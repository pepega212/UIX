import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, liveUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={liveUrl} target='_blank'>
        <div className="proj-imgbx" type="link">
          <img src={imgUrl} alt={title}/>
          <div className="proj-txtx">
            <h4 className="text-white">{title}</h4>
            <span className="text-white">{description}</span>
          </div>
        </div>
      </a>
    </Col>
  )
}
