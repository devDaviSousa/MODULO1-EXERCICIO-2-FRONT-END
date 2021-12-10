import React from "react";


export default class List extends React.Component {
  render() {

    const { leituras } = this.props;

    return (
      <div>
        {
          leituras.map((item, index) => (
            <div key={index}>
              <h3> {item.author}</h3>
              <p> {item.title}</p>
              <a href={item.url}> {item.url}</a>
            </div>
          ))
        }
      </div>


    )


  }

}













