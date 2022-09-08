import Image from "next/image";

function EtcCard(props) {
  const imgPath = `url("${props.image}")`;
  return (
    <div className="project_item_container animate__animated fadeInUpSmall delay-250ms">
      <a href={props.url} target="_blank">
        <div className="label">{props.label}</div>
        <div className="old_project_item" id={props.id}>
          <Image
            src={props.image}
            alt={props.label}
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: "10px" }}
            placeholder="blur"
            blurDataURL={props.image}
          />
        </div>
      </a>
    </div>
  );
}

export default EtcCard;
