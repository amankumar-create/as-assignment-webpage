//it is  text on the left side of the section shown in the image and video
//it displays heading , subheading and description which were
//fetched from provided api link

function FeatureText(props){
    const {heading, subHeading, description } = props.text;
    console.log(heading)
    return(
        <div style={{width:"30vw", paddingRight:"10px", marginBottom:"200px"}}>
            <h1  className="heading">{heading}</h1>
            <h1 className="sub-heading">{subHeading}</h1>
            <p className="description">{description}</p>
        </div>
    )
}
export default FeatureText;

