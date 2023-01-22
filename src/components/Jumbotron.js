import { Button } from "react-bootstrap";

// it is  the heavy bold text which
// has a heading and some description along with a button

function Jumbotron() {
  return (
    <div className="jumbo-container">
      <h1 className="jumbo-heading">Double the hires, half the effort</h1>
      <p className="jumbo-text">
        Open conversations and nurture relationships at scale and be the first
        choice when your ideal candidate is ready to explore.
      </p>
      <Button
        variant="light"
        style={{
          padding: "12px 22px",
          borderRadius: "10px",
          fontWeight: "700",
          fontFamily: "GtwalsheimproMed",
        }}
      >
        View Kula Outreach
      </Button>
    </div>
  );
}
export default Jumbotron;
