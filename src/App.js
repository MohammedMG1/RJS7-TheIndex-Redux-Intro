import React, { Component } from "react";
import * as actionCreators from "./store/actions";
import { connect } from "react-redux";

// Data
// import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";

class App extends Component {
  // state = {
  //   authors: authors,
  //   newAuthorId: 5
  // };

  // addAuthor = () => {
  //   const newAuthor = {
  //     id: this.state.newAuthorId,
  //     first_name: "Author",
  //     last_name: "McAuthorFace",
  //     imageUrl:
  //       "https://www.netz.de/images/2016-11-21-firefox-focus-header-58cfedd908c25_500_300.jpg",
  //     books: [
  //       {
  //         title: "Anonymous book",
  //         color: "mysterious color"
  //       }
  //     ]
  //   };
  //   this.setState({
  //     authors: this.state.authors.concat(newAuthor),
  //     newAuthorId: this.state.newAuthorId + 1
  //   });
  // };

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar addAuthorHandler={this.props.onAdd_Author} />
          </div>
          <div className="content col-10">
            <AuthorsList authors={this.props.auths} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auths: state.authors
  }
};
const mapDispatchToProps = dispatch => {
  return {
    onAdd_Author: () => dispatch(actionCreators.add_author()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
