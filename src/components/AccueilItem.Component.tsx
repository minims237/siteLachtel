import "./styles/AccueilItem.styles.css";

const AccueilItem = (props: any) => {
  return (
    <div className="item">
      <div className="item_text">
        <div className="title">
          <h6>{props.title}</h6>
        </div>
        <div className="textcontent">
          <div className="part_value">
            <h6>{props.value}</h6>
          </div>
          <div className="time_remainder">
            <h6>{props.date}</h6>
          </div>
        </div>
      </div>
      <div className="item_icon">{props.children}</div>
    </div>
  );
};

export default AccueilItem;
