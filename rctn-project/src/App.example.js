export default class App extends Component {
  constructor () {
    super();

    this.state = {
      peoples: [
        {
          name: 'Obi Wan',
          status: 'Jedi'
        },
        {
          name: 'Luke Skywalker',
          status: 'Padawan'
        }
      ],
    };
  };

  render() {
    return (
      <ListPeople people={this.state.peoples} />
    );
  };
};

export class ListPeople extends Component {
  constructor (props) {
    super(props);

    let nama = props.people.map((data) => {
      return data.name.toLowerCase();
    })

    let status = props.people.map((data) => {
      return data.status.toUpperCase();
    })

    this.state = {
      orang: props.people,
      nama: nama,
      status: status,
    };
  };

  renderChild() {
    return this.props.people.map((data, index) => {
      return (
        <ul key={index}>
          {data.name}
          {data.status}
        </ul>
      );
    });
  };

  // cara lain:
  // renderChild() {
  //   return this.props.people.map((data) => (
  //     <ul>
  //       {data.name}
  //     </ul>
  //   ));
  // };

  // this.props.people(p => <li>{name}</li>)

  render() {
    return this.renderChild();
  }
}

ListPeople.propTypes = {
  people: PropTypes.array
};
