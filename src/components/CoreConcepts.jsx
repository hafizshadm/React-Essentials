// While adding props there must be passing 1 value, we destructure single object here
export default function CoreConcepts({ image, title, description }) {
    return (
      <li>
        <img src={image} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }
  