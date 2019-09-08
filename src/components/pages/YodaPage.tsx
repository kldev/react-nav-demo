import React from 'react';
import yoda from 'images/yoda.jpeg';
interface Props {
  id: string;
  title: string;
  text: string;
}

export class YodaPage extends React.Component<Props> {
  render() {
    return (
      <div className="row">
        <h3>{this.props.title}</h3>
        <div className="column">
          <img src={yoda} style={{ maxWidth: '500px' }} alt={'Yoda Say'} />
        </div>
        <div className="column">
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}
