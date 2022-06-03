# Customer Questions and Responses


## Question (1): 

Hello,

I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:

Records
Indexing

I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking."

Cheers, George

## Chris' Response to (1): 

Hello George,

Thank you for your message. We're glad to have you onboard and its great to hear you are looking to get up to speed with Algolia Search. Many of our customers who use Algolia for the first time need to ramp-up on search terminology, so you are not alone here. I'm happy to answer these questions and point you to our documentation for further learning.

Records are the core searchable object in the Algolia search experience. An Algolia index is a collection of records, like records in a database, or rows in an excel sheet. When you integrate with Algolia, you first format the data you wish to search through into JSON objects, and upload them by either copy-paste in the Web Dashboard or via our API. Algolia servers then take these uploaded objects and build a search index for you by storing these data objects as "records" within your newly-created search index.

Indexing is Algolia's term for organizing the JSON data you upload to Algolia's servers (either via the Web Dashboard or the API) and making it searchable. After you upload your data, your data objects are converted to records within an index to make it easy for you to configure searchable attributes and relevance settings. Indexing can happen either one-off or on a recurring basis as your application generates new user data. After an indexing operation completes, you can search through your data from the Web Dashboard or API, and begin integrating pre-built Algolia frontend UI components or custom API calls into your application. You can read a great general overview of how Algolia works [here](https://www.algolia.com/doc/guides/getting-started/how-algolia-works/).

Custom ranking is an essential part of creating relevant and useful search results. Your search indices in Algolia rely on a default ranking criteria first to ensure users find what they are looking for. After default ranking, custom ranking is applied to improve visibility and relevance of your results. Generally speaking, custom ranking is a way you can ensure the best and most popular items or products appear higher in your search results. Custom ranking can set up using information about your records such as number of likes, whether a product is a featured product, or user ratings and other business metrics like traffic or popularity. The important part is that the attributes are either numerical or boolean data types as this allows for comparison and ordering of results. The easiest was to apply these to an index and experiment with them is on the Web Dashboard under Configuration > Ranking and Sorting > + Add custom ranking attribute. You can read more about this in our docs [here](https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/).

For more general information and resources about Algolia, you can check out our docs [here](https://www.algolia.com/doc/).

Please do not hesitate to reach out with follow-up questions or any other questions you may have about Algolia Search. Enjoy integrating with Algolia!


Cheers,

Chris  
(insert Algolia email signature here)

## Question (2): 

Hello,

Sorry to give you the kind of feedback that I know you do not want to hear, but I really hate the new dashboard design. Clearing and deleting indexes are now several clicks away. I am needing to use these features while iterating, so this is inconvenient.

Regards, Matt

## Chris' Response to (2): 

Hello Matt,

Thank you for reaching out. Please do not be sorry about sharing your experience with us - we highly value the feedback of our clients and all forms of feedback are incredibly useful to us in making sure we keep up with our top priority of providing the best search experience possible. 

I'm sorry to hear that you are inconvenienced by the new dashboard design. I can imagine how a functional change like this could significantly impact your productivity, and I'm going to communicate this feedback to our product team to make sure they are aware of this and take this into consideration moving forward. In the interest of improving your current experience, I can offer a workaround that may improve your iteration time:

*(insert code snippet for a quick and easy local script to safely clear and/or delete indices via the API, also include quick instructions to accommodate different technical competencies - also provide a Web Dashboard shortcut or bookmark-based solution if applicable for non-technical clients)*

Please do not hesitate to reach out with any other issues, feedback or follow-up questions I can be of help with, and thank you for using Algolia!


Cheers,

Chris  
(insert Algolia email signature here)

## Question (3): 

Hi,

I'm looking to integrate Algolia in my website. Will this be a lot of development work for me? What's the high level process look like?

Regards, Leo

## Chris' Response to (3): 

Hi Leo,

Thanks for reaching out. I'm excited to hear about your interest in integrating with Algolia! At Algolia, we work hard to streamline the integration and development process to make it as quick and easy as possible for you and your users to realize the value of Algolia Search. While an initial integration should be a relatively small amount of development time and effort, your time to develop a solution will be proportional to the amount of customization and additional features you wish to include in your integration.

Here is what the high level process looks like: 

1. Identify which data sources you wish to include in your search experience and make searchable via an Algolia Index.
2. Transform and format this data into an array of JSON objects using as few attributes as necessary to support your search experience.
3. Upload it to a newly-created index by either copy-pasting the JSON into an index via the Web Dashboard or by uploading to an index programmatically via the Algolia API.
4. Configure your index with searchable attribute settings, custom ranking attributes, facets, and other useful relevance settings and optimizations.
4. Use one of our four InstantSearch frontend libraries with readymade, customizable widgets to build a UI for your search experience, or alternatively, use custom direct API calls to Algolia in your own frontend code.

If you're ready to get started, I recommend to start with the [Interactive Tutorial](https://www.algolia.com/doc/onboarding/#/pick-dataset), which is the easiest way learn how to develop and get up to speed with Algolia Search.


For more general information and resources, you can check out our docs [here](https://www.algolia.com/doc/).

Please do not hesitate to reach out with follow-up questions or any other questions you may have about your development process. Enjoy integrating with Algolia!


Cheers,

Chris  
(insert Algolia email signature here)


---
