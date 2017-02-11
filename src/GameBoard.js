import React from 'react';

export default class GameBoard extends React.Component {

  //if certain state, set that states image. I.e. mole, guac, hole
  constructor(props){
    super(props);

    this.state = {
      score: 0,
      curMoleIndex: -1,
      nodes: ["hole","hole","hole","hole","hole","hole"]
    };

    this.loadMole = this.loadMole.bind(this);
    this.moleClick = this.moleClick.bind(this);
  }

  loadMole() {
    var defaultNodes = ["hole","hole","hole","hole","hole","hole"];
    this.setState({nodes: defaultNodes});

    setTimeout(() => {
      var index = Math.floor(Math.random() * (6 - 0) + 0);
      this.setState({curMoleIndex: index});

      var newNodes = this.state.nodes;
      newNodes[index] = "mole";
      this.setState({nodes: newNodes});
    }, 2000);

  }

  moleClick(e) {
    console.log("Mole has been guac'd");

    var newScore = this.state.score;
    newScore+=1;
    this.setState({score: newScore});

    console.log(this.state.score);
    var newNodes = this.state.nodes;
    newNodes[this.state.curMoleIndex] = "guacamole";
    this.setState({nodes: newNodes});

  }

  componentDidMount(){
    this.intervalID = setInterval(() => this.loadMole(), 3000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalID);
  }

  render() {

    var holes = this.state.nodes.map( (node,index) => {
      let source = "/guacamole/"+node+".jpg";

      if (node === "mole") {
        return <img src={source} key={index} onClick={this.moleClick} alt="mole" width="100" height="100" />;
      }

      return <img src={source} key={index} alt="hole" width="100" height="100" />;
    });

    return (
      <div>
        {holes}
      </div>
    );
  }
}
