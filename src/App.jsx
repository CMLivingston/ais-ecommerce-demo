import React, { useState } from "react";
import algoliasearch from 'algoliasearch/lite';
import qs from 'qs';
import {
  connectSearchBox,
  InstantSearch,
  SearchBox,
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
import { createLocalStorageRecentSearchesPlugin } from '@algolia/autocomplete-plugin-recent-searches';
import { createQuerySuggestionsPlugin } from '@algolia/autocomplete-plugin-query-suggestions';
import './App.css';
import { Autocomplete } from './Autocomplete';

  
const searchClient = algoliasearch(
  'SH0NKE8PPD',
  '679cf268e681d383f7f7e2e6483d7b24'
);


const VirtualSearchBox = connectSearchBox(() => null);

function createURL(searchState) {
  return qs.stringify(searchState, { addQueryPrefix: true });
}

function searchStateToUrl({ location }, searchState) {
  if (Object.keys(searchState).length === 0) {
    return '';
  }

  return `${location.pathname}${createURL(searchState)}`;
}

function urlToSearchState({ search }) {
  return qs.parse(search.slice(1));
}


function App() {

    const [checkAutocomplete, setCheckAutocomplete] = useState(false);

    const [searchState, setSearchState] = React.useState(() =>
      urlToSearchState(window.location)
    );
    const timerRef = React.useRef(null);

    React.useEffect(() => {
      clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        window.history.pushState(
          searchState,
          null,
          searchStateToUrl({ location: window.location }, searchState)
        );
      }, 400);
    }, [searchState]);


    const onSubmit = React.useCallback(({ state }) => {
      setSearchState((searchState) => ({
        ...searchState,
        query: state.query,
      }));
    }, []);

    const onReset = React.useCallback(() => {
      setSearchState((searchState) => ({
        ...searchState,
        query: '',
      }));
    }, []);

    const plugins = React.useMemo(() => {
      const recentSearchesPlugin = createLocalStorageRecentSearchesPlugin({
        key: 'search',
        limit: 3,
        transformSource({ source }) {
          return {
            ...source,
            onSelect({ item }) {
              setSearchState((searchState) => ({
                ...searchState,
                query: item.label,
              }));
            },
          };
        },
      });

      
      const querySuggestionsPlugin = createQuerySuggestionsPlugin({
        searchClient,
        indexName: 'clivingston_ecommerce_query_suggestions',
        getSearchParams() {
          return recentSearchesPlugin.data.getAlgoliaSearchParams({
            hitsPerPage: 6,
          });
        },
        transformSource({ source }) {
          return {
            ...source,
            onSelect({ item }) {
              setSearchState((searchState) => ({
                ...searchState,
                query: item.query,
              }));
            },
          };
        },
      });

      return [
        recentSearchesPlugin,
        querySuggestionsPlugin
      ];
    }, []);

    return (
      <div className="ais-InstantSearch">
        <header className="header">
          <a href="https://cmlivingston.github.io/ais-ecommerce-demo"><img src="https://i.ibb.co/7YyS5tY/Full-Logo-Transparent-No-Buffer.png" alt="Full-Logo-Transparent-No-Buffer" border="0" /></a>
        </header>
        
        <InstantSearch
          searchClient={searchClient}
          indexName="clivingston_ecommerce"
          searchState={searchState}
          onSearchStateChange={setSearchState}
          createURL={createURL}
        >
          {/* Search Configuration */}
          <VirtualSearchBox />
          <Configure hitsPerPage={8} />

        {/* Search filters */}
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

        {/* Search input and results */}
          <div className="right-panel">
            { checkAutocomplete 
              ? 
              <Autocomplete
                placeholder="Search Algobuy..."
                detachedMediaQuery="none"
                initialState={{
                  query: searchState.query,
                }}
                openOnFocus={true}
                onSubmit={onSubmit}
                onReset={onReset}
                plugins={plugins}
              />
              : 
              <SearchBox
                className="ais-" 
                searchAsYouType={true}
                translations={{
                  placeholder: 'Search Algobuy...',
                }}
              />      
            }
            
            {/* Stats and autocomplete toggle */}
            <div className="stats-and-switch-group">
              <div className="switch-group">
                Autocomplete&nbsp;
                <label  class="switch">
                  <input onClick={() => setCheckAutocomplete((prevCheck) => !prevCheck)} type="checkbox" />
                  <span class="slider round"></span>
                </label>
                </div>
              <Stats />
            </div>
      
            <InfiniteHits hitComponent={Hit} />
            <PoweredBy />
            <p className="made-with-love">Made with <span>&hearts;</span> by <a href="https://www.linkedin.com/in/chris-livingston-7a6492123/">Chris Livingston</a></p>
          </div>
        </InstantSearch>
      </div>
    );
}



function Hit(props) {
  return (
    <article>
      <img className="hit-img" src={props.hit.image} align="left" alt={props.hit.name} />
      <div className="hit-text-content">
        <h1 className="hit-name">
          <a href={props.hit.url}>
            <Highlight attribute="name" hit={props.hit} />
          </a>
        </h1>
        <p className="hit-description">
          <Highlight attribute="description" hit={props.hit} />
        </p>
        <p className="hit-price">${props.hit.price}<span className="hit-shipping">{props.hit.free_shipping ? "Free Shipping!": null}</span></p>
        <p><strong>Brand: </strong>{props.hit.brand} - <span><strong>Categories: </strong>{props.hit.categories.join(" | ")}</span></p>
      </div>
    </article>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
