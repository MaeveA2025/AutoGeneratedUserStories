import "bootstrap/dist/css/bootstrap.min.css"; // Correct import for Bootstrap CSS
import { Story } from "../models/story";
import React from "react";
import CardModal from "./CardModal";
interface StoryCardProps {
  story: Story;
}
interface StoryCardState {
  showModal: boolean;
}
class StoryCard extends React.Component<StoryCardProps, StoryCardState> {
  constructor(props: StoryCardProps) {
    super(props);
    this.state = {
      showModal: false,
    };
  }
  openModal = () => {
    this.setState({ showModal: true });
  };
  closeModal = () => {
    this.setState({ showModal: false });
  };
  handleSave = (updatedStory: Story) => {
    console.log("Updated story:", updatedStory);
    this.props.story.acceptanceCriteria = updatedStory.acceptanceCriteria;
    this.props.story.description = updatedStory.description;
    this.props.story.name = updatedStory.name;
    this.closeModal();
  };
  render() {
    const { story } = this.props;
    const { showModal } = this.state;
    return (
      <div>
        <div
          className="card"
          style={{
            width: "56rem",
            padding: "0.5rem",
            margin: "0.5rem",
            boxShadow: "0.20rem 0.15rem 0.10rem #888888",
          }}
        >
          <div className="card-body">
            <h5 className="card-title">
              <a onClick={this.openModal} style={{ cursor: "pointer" }}>
                {story.name}
              </a>
            </h5>
            <p className="card-text">{story.description}</p>
          </div>
        </div>
        {showModal && (
          <CardModal story={story} onClose={this.closeModal} onSave={this.handleSave} />
        )}
      </div>
    );
  }
}
export default StoryCard;
