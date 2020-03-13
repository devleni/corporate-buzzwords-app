import React, { Component } from "react";
import axios from "axios";

class BuzzwordList extends Component {
  static defaultProps = {
    numPhrasesToGet: 10
  };
  constructor(props) {
    super(props);
    this.state = { phrases: ["Loading..."] };
  }
  async componentDidMount() {
    let phrases = [];
    while(phrases.length < this.props.numPhrasesToGet) {
      let res = await axios.get("https://corporatebs-generator.sameerkumar.website/");
      phrases.push(res.data.phrase);  
    }
  this.setState({ phrases: phrases });
  }
  render() {
    return (
      <div className="BuzzwordList">
        <h1>Corporate Buzzwords</h1>
        <p>Use this bleeding-edge app to maximize your performance in corporate meetings.</p>
        <hr />
        <div className="BuzzwordList-phrases">
          {this.state.phrases.map(phrase => (
            <div>{phrase}</div>
          ))}
        </div>
      </div>
    )
  }
}

export default BuzzwordList;