import React from 'react';
import elmo from 'images/elmo.jpeg';
interface Props {
  id: string;
  title: string;
  text: string;
}

export class ElmoPage extends React.Component<Props> {
  render() {
    return (
      <div className="row">
        <h3>{this.props.title}</h3>
        <div className="column">
          <img src={elmo} style={{ maxWidth: '500px' }} alt={'Elmo Say'} />
        </div>
        <div className="column">
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}
