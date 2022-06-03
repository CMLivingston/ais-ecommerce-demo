import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  InfiniteHits,
  Menu,
  RatingMenu,
  NumericMenu,
  ToggleRefinement,
  PoweredBy,
  Stats,
  Configure,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './App.css';

const searchClient = algoliasearch(
  'SH0NKE8PPD',
  '679cf268e681d383f7f7e2e6483d7b24'
);

class App extends React.Component {
  render() {
    return (
      <div className="ais-InstantSearch">
      
        <header className="header">
          <a href="https://cmlivingston.github.io"><img src="https://i.ibb.co/7YyS5tY/Full-Logo-Transparent-No-Buffer.png" alt="Full-Logo-Transparent-No-Buffer" border="0" /></a> 
        </header>
        
        <InstantSearch indexName="clivingston_ecommerce" searchClient={searchClient}>
          <Configure hitsPerPage={8} />
          <div className="left-panel">
            <h3>Browse and filter</h3>
            <ClearRefinements />
            <h2>Category</h2>
            <Menu attribute="categories" showMore showMoreLimit={30}  />
            <h2>Price</h2>
            <NumericMenu
              attribute="price"
              items={[
                { label: 'Less than $10', end: 10 },
                { label: '$10 - $100', start: 10, end: 100 },
                { label: '$100 - $500', start: 100, end: 500 },
                { label: 'Over $500', start: 500 },
              ]}
            />
            <ToggleRefinement
              attribute="free_shipping"
              label="Free Shipping"
              value={true}
            />
            <h2>Rating</h2>
            <RatingMenu attribute="rating" />
            <h2>Brand</h2>
            <RefinementList attribute="brand" showMore showMoreLimit={30} />
          </div>
          <div className="right-panel">
            <SearchBox 
              searchAsYouType={true}
              translations={{
                placeholder: 'Search Algobuy...',
              }} />
            <Stats />
            <InfiniteHits hitComponent={Hit} />
            <PoweredBy />
            <p className="made-with-love">Made with <span>&hearts;</span> by Chris Livingston</p>
          </div>
        </InstantSearch>
      </div>
    );
  }
}



class Hit extends React.Component {
  render() {
    return (
      <article>
        <img className="hit-img" src={this.props.hit.image} align="left" alt={this.props.hit.name} />
        <div className="hit-text-content">
        <h1 className="hit-name">
          <a href={this.props.hit.url}>
            <Highlight attribute="name" hit={this.props.hit} />
          </a>
        </h1>
        <p className="hit-description">
          <Highlight attribute="description" hit={this.props.hit} />
        </p>
        <p className="hit-price">${this.props.hit.price}<span class="hit-shipping">{this.props.hit.free_shipping ? "Free Shipping!": null}</span></p>
        </div>
      </article>
    );
  }
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
