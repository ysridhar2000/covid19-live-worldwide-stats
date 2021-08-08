import React, { Component } from 'react';

class Sample extends Component {
  render() {
    var heading = ['Name', 'City', 'Course'];
    var body =
      [['Kapil', 'Jaipur', 'MCA'],
      ['Aakash', 'Hisar', 'Btech'],
      ['Mani', 'Ranchi', 'MSc'],
      ['Yash', 'Udaipur', 'Mtech']
      ];
    return (
      <div >
        <Table heading={heading} body={body} />,
      </div>
    );
  }
}

class Table extends Component {
  render() {
    var heading = this.props.heading;
    var body = this.props.body;
    return (
      <table style={{ width: 500 }}>
        <thead>
          <tr>
            {heading.map(head => <th>{head}</th>)}
          </tr>
        </thead>
        <tbody>
          {body.map(row => <TableRow row={row} />)}
        </tbody>
      </table>
    );
  }
}

class TableRow extends Component {
  render() {
    var row = this.props.row;
    return (
      <tr>
        {row.map(val => <td>{val}</td>)}
      </tr>
    )
  }
}

export default Sample;
