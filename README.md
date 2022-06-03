# Chris Livingston's Take-Home Assignment for Algolia

Hey Algolia team, thanks for taking the time to check out my demo and for considering me for the SE role. I had a great time learning Algolia's API and development tools, and I must say I'm extremely impressed with how effortless and smooth building this demo out was for me. Minimal headache, incredible docs, and a well-supported react framework that made coding this up a breeze. I admit I'm no CSS expert by any means, so please excuse the lack of best practices when styling certain components/elements. Enjoy playing with my demo!

## Overview
The general motivation for this project was to demonstrate my abilities as a strong candidate for the SE role. At a high level, my aim was to pick an interesting dataset, index it using Algolia, configure a great relevance setup, and code up a fun UI to show off the search functionality, result filtering, and both as-you-type + autocomplete functionality.

I went with the Best Buy E-Commerce dataset for this project provided in the Algolia Datasets repo. After considering other fun ones, this seemed like a no-brainer as it is readily-tunable and has an attribute set that allows me to make good all-around use of Algolia's capabilities. It is also a strong option because of the blend of real-world relevance and applications that I might apply on the job someday for a prospective customer.

## Search Index Upload, Settings, and Optimizations
I transformed the dataset slightly and deleted one attribute (`hierachical_categories`) to keep things focused, then pushed 10k records to my index `clivingston_ecommerce` using the JS library + API. I then made an account and dove into the searchable attributes and relevance settings. Here is my rationale for the settings I added:

- Searchable attributes include name, category, type, description and brand (in priority order). After running some test queries, I decided that my personal search intent was driven by item name, category, and abstract type of item more than anything else, as these are short, relevant strings that map to the majority of results. Order matching within each attribute is important here, because I found it awkward (and therefore less likely) for me to search for category or item name with words in reverse order. Item descriptions are hard for a customer to predict or recall when searching, and brand names are generally unique and hard to clash on, so I listed those as lowest searchable priority and left them unordered.
- For ranking and sorting essentials, I kept the recommended defaults and added three customs: rating, a proprietary business metric called popularity, and free_shipping in desc order (higher is better for both attributes). Rating should take precedence over the popularity metric because I believe it hurts trust with the search engine / store to see the company recommend low-rated items first, even if they more are popular. After, I used popularity to increase likelihood of conversion, then free shipping as a low-end tie breaker (a nice-to-have).
- I left typo defaults alone as they look sensible to me, set Language to English as this is an English-only dataset, and I removed English stop words from each query. I added a few one-way synonyms for words like PC, Laptop, and Computer, which did wonders for hit relevance when searching for those. The only other setting I tweaked was word proximity, as I noticed a distance of 1 was not enough to capture large relevant result sets from the name attribute (which takes highest precedence), so I set that to 2 to give slightly more flexibility there.
- For facet attributes, the facets are namely on category, price, user rating, type, brand, shipping. I generally chose to use attributes like brand, rating and price which are furtherest from initial search intent in my opinion. These are useful for narrowing results, but not a good starting point. I ordered the facets by count so the customers can generally know what to expect when searching further so they do not waste time searching for items with very few options.

## User Interface Motivations
The UI itself was built using React Instantsearch and the command line generator tool. I like React  and the out-of-the-box component support was too hard to pass up. My goal was to create a simple, streamlined search experience with strong hit relevance and minimal filtering. The UI has a header, a left panel with importance-ordered filters (inspired by Best Buy), a right panel with a toggle-able search bar for switching between as-you-type vs. autocomplete and recent search functionality, stats, and an infinite hit result list. For each hit, I include the relevant title, description and price attributes (again, inspired by Best Buy), and also provide item image. The bottom has a "Load More" button for expanded results. Personally, I think large pagination page numbers are not very popular or useful, and typically are indicative of bad relevance and filtering if used at all.

## Notes for Project Improvement and Feedback
Some general notes on my implementation:

- If I had more time, I would add a grid view for showing more results in a compact manner and allowing the user to toggle between the two views.
- I'd make the search bar larger, but had trouble styling and resizing that `ais-` element in particular.
- This page is not mobile-optimized, which I see as *highly* important, but not feasible for the time allotted to this.
- I would center each product image so the UI results have a nice uniform view, I had trouble with this and needed more time to debug.
- I would add more records to my account to accommodate my Autocomplete query suggestion index.

Some feedback for Algolia team:

- The https://www.algolia.com/query-suggestions link on https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/query-suggestions/js/ is 404-ing at the time of writing this (6/3/22).
- The docs are amazing, but I often found myself overwhelmed with options and not knowing which would be best for me to chose during my onboarding. The general tone is "We have 2-3 amazing options and associated docs for this thing you want to do" and I found myself needing to read all of the options before proceeding with one of them, which helped me understand Algolia but slowed me down for my single use case implementation. The most prominent example for this was the options for https://www.algolia.com/doc/guides/getting-started/quick-start/#sign-up-for-an-algolia-account.
- The distinction between a How-To and a Tutorial on the sidebar was slightly confusing to me.


I appreciate the hard work the Algolia team puts into Algolia and the documentation - I was really impressed, and I had a blast on this project. Thanks for taking the time to read this write-up and thank you for consider me for this role!

-
Chris Livingston