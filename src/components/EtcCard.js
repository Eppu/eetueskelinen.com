function EtcCard(props) {
  const imgPath = `url("${props.image}")`;
  return (
    <div className="wow project_item_container animate__animated fadeInUpSmall delay-250ms">
      <a href={props.url} target="_blank">
        <div className="label">{props.label}</div>
        <div className="old_project_item" id={props.id} style={{ backgroundImage: imgPath }}></div>
      </a>
    </div>
  );
}

export default EtcCard;
