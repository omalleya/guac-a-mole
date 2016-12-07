import React from 'react';
import Mole from './Nodes/Mole.js';

export default class GameBoard extends React.Component {

  //if certain state, set that states image. I.e. mole, guac, hole
  constructor(props){
    super(props);
    this.state = {
      curMoleIndex: -1,
      nodes: ["hole","hole","hole","hole","hole","hole"]
    };

    this.loadMole = this.loadMole.bind(this);
    this.moleClick = this.moleClick.bind(this);
  }

  loadMole() {
    setTimeout(() => {
      var defaultNodes = ["hole","hole","hole","hole","hole","hole"];
      this.setState({nodes: defaultNodes});
    }, 3000)

    setTimeout(() => {
      var index = Math.floor(Math.random() * (6 - 0) + 0);
      this.setState({curMoleIndex: index});

      var newNodes = this.state.nodes;
      newNodes[index] = "mole";
      this.setState({nodes: newNodes});
    }, 3000)

  }

  moleClick(e) {
    console.log("Mole has been guac'd");
    var newNodes = this.state.nodes;
    newNodes[this.state.curMoleIndex] = "guacamole";
    this.setState({nodes: newNodes});

  }

  componentDidMount(){
    this.intervalID = setInterval(() => this.loadMole(), 3000);
  }

  render() {

    var holes = this.state.nodes.map( (node,index) => {
      let source = "/"+node+".jpg";

      if (node === "mole") {
        return <img src={source} key={index} onClick={this.moleClick} alt="mole" width="100" height="100" />;
      }

      return <img src={source} key={index} alt="hole" width="100" height="100" />;
    });

    return (
      <div>
        <Mole src='/mole.jpg' key="5" onClick={this.moleClick}/>
        {holes}
      </div>
    );
  }
}
