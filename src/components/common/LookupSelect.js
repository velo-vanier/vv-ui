import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem, Input } from 'reactstrap';
import { labels } from '../../helpers/localization';
import API from '../../helpers/API';

class LookupSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: null,
      selectedItem: null,
      loading: false,
      showDropDown: false,
      selectedText: ''
    }
  }

  searchTimeoutHandler = null;

  searchItem = (e) => {
    const txt = e.target.value;

    this.setState({
      selectedText: txt
    });

    if (this.searchTimeoutHandler)
      clearTimeout(this.searchTimeoutHandler);

    this.searchTimeoutHandler = setTimeout(() => {

      this.setState({
        loading: true
      });

      //search from api
      API.get(this.props.entity, { ...this.props.apiParams, search: txt }).then(res => {
        const newList = res.data.data;

        this.setState({
          items: newList,
          selectedItem: null,
          loading: false,
          showDropDown: true
        });
      });
    }, 300);
  }

  selectItem = (item) => {
    this.setState({
      selectedItem: item,
      showDropDown: false,
      selectedText: ''
    });

    this.props.onSelect(item);
  }

  clickInput = () => {
    if (this.state.selectedItem !== null) {
      const prevState = this.state;
      this.setState({
        ...prevState,
        selectedItem: null,
        selectedText: ''
      });
    }
  }

  render() {
    const { items } = this.state;

    const listOutput = items === null ? "" : <div className={`dropDown ${this.state.showDropDown ? "show" : ''}`}>
      <ListGroup>
        {
          items.length === 0 ?
            labels.noItemFound :
            items.map((item, index) => <ListGroupItem
              key={index}
              onClick={() => this.selectItem(item)}>
              {this.props.renderItem(item)}
            </ListGroupItem>)
        }
      </ListGroup>
    </div>;

    return (
      <div className="dropDown-container">
        <Input
          type="text"
          placeholder={this.props.placeholder}
          onChange={e => this.searchItem(e)}
          onClick={e => this.clickInput(e)}
          value={this.state.selectedText}>
        </Input>
        {this.state.loading ? <div className="loading">{labels.loading}</div> : listOutput}
      </div >
    );
  }
}

LookupSelect.propTypes = {
  entity: PropTypes.string.isRequired,
  apiParams: PropTypes.object,
  placeholder: PropTypes.string,
  renderItem: PropTypes.func.isRequired,
  onSelect: PropTypes.func
}

export default LookupSelect;
