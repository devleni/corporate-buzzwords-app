import React, { Component } from "react";
import axios from "axios";
import "./BuzzwordList.css";

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
        {/* <img src="https://image.flaticon.com/icons/svg/475/475048.svg" alt="logo"></img> */}
        <h1>Corporate Buzzwords</h1>
        <p>Use phrases below to maximize your performance in corporate social situations.</p>
        {/* <button className="BuzzwordListNewPhrases">New Phrases</button> */}
        <div className="BuzzwordListDisplay">
          {this.state.phrases.map(phrase => (
            <div className="BuzzwordListPhrase">{phrase}</div>
          ))}
        </div>
      </div>
    )
  }
}

export default BuzzwordList;