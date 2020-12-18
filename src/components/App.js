import React from "react";
import Signup from "./Signup/Signup";
import Signin from "./Signin/Signin";
import classes from './App.module.css';

const app = () => (<div className={classes.Background}><Signin /></div>);

export default app;
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       speed: 0
//     }
//   }

//   componentDidMount() {
//     const rootRef = firebase.database().ref();
//     const speedRef = rootRef.child('speed');
//     speedRef.on('value', snap => {
//       this.setState({ speed: snap.val() });
//     });
//   }
//   render() {
//     return (
//       <div className="App">
//         <h1>{this.state.speed}</h1>
//       </div>
//     );
//   }
// }