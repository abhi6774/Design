# string = """Our design space is based on a chosen corpus of 83 dashboards. We qualitatively analysed and coded this collection of dashboards to derive an initial design space. The corpus of images and sources is available in the supplemental material.  
# Each author collected his or her own set of visual displays that could qualify as dashboards, with the intent to capture breadth of both domains and visual design. The resulting broad sample was intentionally eclectic, to capture the current state of dashboards in the wild. We sourced example dashboards from (1) Tableau Public’s “Featured Dashboards,” (2) documentation from tools advertising “dashboarding” features, (3) displays advertised on Twitter and elsewhere as “dashboards,” (4) Google image search results for the terms “data dashboard” and “visual dashboard,” and (5) research papers in the domain review. (For example, we chose to display the Strava user interface after noting that Strava refers to their interface as a “dashboard.”) Our corpus of dashboard examples evolved throughout the analysis. During our analysis, we realized that our initial corpus lacked representation of typical “business” dashboards, likely because these are usually confidential. We therefore intentionally sought documented examples of business dashboards to add to our collection. Additionally, we realized that we needed specific dashboard examples; for tools and multi-dashboard collections, we chose a specific example, or removed them if no such example was available. Our final coding scheme focused on the visual design alone: we therefore excluded several kits or frameworks where no small set of representative images could be collected. The dimensions in our design space were developed through an iterative process that involved collaboratively open coding and sorting the dashboards themselves, as well as reviewing the literature. In our open coding process, we generated terms and categories that could describe the variation within our corpus of dashboards, adding new terms as we observed new design variations. We limited our codes to facets of the dashboard that could be revealed through superficial inspection of the representative images. This precluded analysis of other components of dashboard design, such as the types of computation or the internal architecture. While these components are important to dashboard design, we chose instead to focus on codes which would allow categorization of all samples (even those for which we had very little information) and which would highlight key design differences between visual and functional dashboard genres. Towards the end of our open-coding process, two of the authors independently coded all of the dashboards using a preliminary set of design dimensions. They met over three sessions to review the evolving coding scheme and arrive at a mutual understanding with sufficient operationalization. They then completed coding the corpus of dashboard examples and checked how closely their coding matched. They then discussed all the mismatches until they came to an agreement, revising the categories, codes, and definitions as needed to reach 100% consensus. After deriving the design space categories and codes, we used these factors to identify clusters in our corpus that highlight differences between the dashboards we encountered, as well as functional and visual commonalities. These diverse clusters reinforce the existence of ongoing shifts in how dashboards are conceptualized and designed, and point towards areas in need of additional research and guidance. We organize the 15 distinguishing factors into categories: purpose, audience, visual & interactive features, and data semantics. We describe these aspects of dashboards in the following four sections.  
# """

string = """A dashboard is a vital tool for monitoring the daily health of your organization. From a  
single interface, decision makers have access to key performance indicators (KPIs)— 
actionable information that can be used to actively guide business performance. A dash- 
board is like an executive intranet, a site where everything of interest to you is displayed  
in logical groupings. At a high level, it may seem relatively easy to build one. Companies  
that have a good handle on what performance indicators are of strategic importance to  
the organization, may feel collecting and summarizing supporting data and putting it  
in one place shouldn’t be that difficult. However, such oversimplification can lead to a  
failed project before it ever gets off the ground.  
The successful implementation of a dashboard is complex and requires a step-by-step  
process—a methodology that considers all aspects of the project life cycle. This docu- 
ment outlines the process necessary to effectively plan, design, build and deploy a  
dashboard. The tasks (and their order) will be similar, regardless of the technology that is  
chosen or the vendor providing that technology.  
All of these steps must be completed to ensure a successful dashboard implementation  
and deployment. When comparing proposals from multiple vendors (or the cost of a  
“do-it-yourself” project), it’s important to ensure that all of these steps are included.  
Correctly designed and implemented, a dashboard has the potential to bring immediate  
ROI to your organization. """

print(string.replace("\n", " "))