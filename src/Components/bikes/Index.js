import React from 'react';
import queryString from 'query-string';
import DefaultLayout from '../layouts/Default'
import API from '../../helpers/API'
import BikeCard from './BikeCard'
import SearchAndFilter from './SearchAndFilter'
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const PaginationButtons = props => {
    const next = props.currentPage + 1
    const prev = props.currentPage - 1
    return (
      <div className="row justify-content-center">
        <Pagination aria-label="Page navigation bikes">
          {
            props.currentPage > 1 &&
            <PaginationItem>
              <PaginationLink previous href="#" onClick={() => props.goToPage(prev)} />
            </PaginationItem>
          }
          {
            [...Array(props.pages).keys()].map(page => (
              <PaginationItem key={`page-${page}`} active={page === props.currentPage}>
                <PaginationLink href="#" onClick={() => props.goToPage(page)}>
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))
          }
          {
            props.currentPage < props.pages &&
            <PaginationItem>
              <PaginationLink next href="#" onClick={() => props.goToPage(next)} />
            </PaginationItem>
          }
        </Pagination>
      </div>
    );
}

export default class BikeIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bikes: [], page: 1, searchParams: {} }
  }

  componentDidMount() {
    const searchParams = queryString.parse(this.props.location.search)
    this.setState({ searchParams }, this.fetchBikes)
  }

  fetchBikes() {
    console.log('fetch page of bikes', this.state.page)
    API.get('bikes', { page: this.state.page, ...this.state.searchParams }).then(res => {
      console.log(res)
      this.setState({ bikes: res.data.data, page: res.data.current_page, pages: res.data.last_page })
    })
  }

  goToPage = num => {
    this.setState({ page: num }, this.fetchBikes)
  }

  updateBikeParams = (newParams) => {
    this.setState({
      searchParams: {
        ...this.state.searchParams,
        ...newParams
      }
    }, this.fetchBikes)
  }

  render() {
    return (
      <DefaultLayout>
        <div className="row">
          <div className="col-md-3">
            <SearchAndFilter updateSearchParams={this.updateBikeParams} />
          </div>

          <div className="col-md-9">
            <div className="row">
              {
                this.state.bikes.map(bike => {
                  return <BikeCard key={bike.BikeLabel} bike={bike} />
                })
              }
            </div>
          </div>
        </div>
        <PaginationButtons pages={this.state.pages} goToPage={this.goToPage} currentPage={this.state.page} />
      </DefaultLayout>
    );
  }
}