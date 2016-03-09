// Projects Model


var Projects = {
    qasis: {
        title: 'Quasis',
        start_date: new Date(2015,11,21),
        end_date: new Date(2015,11,22),
        role: 'Front-end Developer',
        summary: 'Qasis allows a user to search for movies based on a natural language query of the plot.',
        skills: ['webdev', 'machine-learning', 'scrapping', 'nlp'],
        header_img: '/img/quasis.jpg',
        logo_img: '/img/quasis.jpg',
        links: {
            github: 'https://github.com/kenumovies',
            site: 'http://qasis.herokuapp.com/',
        },
        steps: [
            {
                title: 'Inspiration',
                text: "Think of a time when you could describe something, but just couldn't figure out the name. For example, you could recite the plot of a movie but couldn't come up with the title. Other people are great at answering these kinds of questions, but existing search tools like IMDb aren't so great--you can only search by Title, Actors, etc. We wanted to create an application that could answer these kinds of questions, and provide an intuitive interface: one that a user can interact with as if they were describing the plot to another person.",
                img_left: null,
                img_right: null
            },
            {
                title: 'How We built it',
                text: "The top 1000 movies were scraped from IMDB using kimono lab's scraping tool and OMDB. These were then loaded into a Postres database and preprocessed (removed stopwords, stemmed, etc.). An information-retrieval algorithm then parsed keywords from the query, calculated Term-Frequency, Inverse-Document-Frequency scores for each of the movie synopses, and ranked by their relevance using python. A jQuery interface then rendered this data for the end user.",
                img_left: null,
                img_right: null
            },
            {
                title: 'Challenges we ran into',
                text: "We originally tried to build a React.js front-end but the learning curve was too steep for the time we had. Additionally IMBD does not publicly share movie posters so a work around had to be built with The Movie Database. Finally, computation speed was a bottleneck. For example, we were able to make marginal performance improvements to the scoring algorithm by including keyword synonyms/synset-lemmas (related words based on grammar hierarchies) but they came at a much greater speed cost, so in the interest of user experience we did not include that feature.",
                img_left: null,
                img_right: null
            }
        ]
    },
    barlift: {
        title: 'Barlift',
        start_date: new Date(2015,1,4),
        end_date: new Date(2015,6,18),
        role: 'Lead Web Developer',
        summary: 'Barlift was a daily deals app that allowed student to see local bar deals and where thier friends were going out.',
        skills: ['webdev', 'startups', 'marketing', 'product development'],
        header_img: '/img/barlift1.jpg',
        logo_img: '/img/barlift1.jpg',
        links: {
            github: 'https://github.com/nikhilpi/BarliftWeb/',
            site: 'http://barliftapp.com/',
        },
        steps: [
            {
                title: 'Problem',
                text: "Bars aren’t marketing savvy and they have a difficult time reaching potential customers. As a result, bars fail at an astonishingly high rate - 25% fail in their first year. Students and young professionals, on the other hand, love going out. They go to bars based on deals and where people are going, but they don’t have an easy way to see this information.",
                img_left: null,
                img_right: null
            },
            {
                title: 'Solution',
                text: "We believe we can solve these problems with BarLift. Our end-users can use our app to discover all bar deals and events going on around them. Instead of sending mass texts to round up a crew -, they can open BarLift to easily see who is going out, and send subtle push and possibly flirtatious notifications to those that aren’t. For bars, we offer a full-suite direct-to-consumer marketing platform, that reaches users that intend to go out, and allows them to send well-timed push-notifications to their community.",
                img_left: '/img/barlift2.jpg',
                img_right: null
            }
        ]
    },
    bifocal: {
        title: 'Bifocal',
        start_date: new Date(2015,1,4),
        end_date: new Date(2015,6,18),
        role: 'Web Developer',
        summary: 'Bifocal is a web plugin that provides the capability to add contextual information to any article.',
        skills: ['journalism', 'js', 'front-end', 'research'],
        header_img: '/img/bifocal.png',
        logo_img: '/img/bifocal.png',
        links: {
            github: 'https://github.com/nikhilpi/Bifocal',
            site: 'http://bifocal.herokuapp.com/',
        },
        steps: [
            {
                title: 'What it does',
                text: "Bifocal is a web plugin that provides the capability to add contextual information to any article. It is useful for readers who tend to do Wikipedia/Google searches while they are reading a web article to find more information about a certain topic contained within that article. With Bifocal, there’s no need to navigate away from the article because the relevant background information will be contained in a convenient, collapsible sidebar. Entities within the article are highlighted and upon click the sidebar opens with the corresponding contextual information. ",
                img_left: null,
                img_right: null
            },
            {
                title: 'How it works',
                text: "Bifocal is a JS plugin that inserts a side bar into the page. Context data is loaded via a JSON object containing the keywords, context snips and sources. The plugin will automatically tag the keyworks in the article and open the sidebar when one is clicked.  The data associated with that keyword will then be rendered into the sidebar using handlebars. In order to serve our demo page, an express app was made to serve a static page with the Bifocal script. Additionally, we created a endpoint for Bifocal to call to retrieve the JSON data.",
                img_left: null,
                img_right: null
            }
        ]
    },
    pulsar: {
        title: 'Pulsar',
        start_date: new Date(2014,1,4),
        end_date: new Date(2014,3,18),
        role: 'Project Manager',
        summary: 'The Pulsar is a mobile navigation device that provides 360 degrees of dynamic, haptic feedback by vibrating a wristband at an angle that corresponds to the location of upcoming turns.',
        skills: ['hardware', 'android', 'arduino', 'haptics'],
        header_img: '/img/pulsar.png',
        logo_img: '/img/pulsar.png',
        links: {
            github: 'https://github.com/nikhilpi/Bifocal',
            documentation: ''
        },
        steps: [
            {
                title: 'Problem',
                text: "Every smart phone offers GPS navigation, however the current implementations are only convenient when used in cars. Navigation apps use audio or visual cues to guide users, but when walking or biking this system becomes clumsy to use. These systems take the users’ attention away from their surroundings and require active participation from the user.",
                img_left: null,
                img_right: null
            },
            {
                title: 'Solution',
                text: "Traditionally, mobile navigation is done using visual and audio cues, which is inconvenient for users who are walking, biking, or visually or auditorily impaired. We want to remove the barriers imposed by interface, to provide a more intuitive, natural and holistic system to help people get to the important places in life. The Pulsar is a mobile navigation device that provides 360 degrees of dynamic, haptic feedback by vibrating a wristband at an angle that corresponds to the location of upcoming turns.",
                img_left: null,
                img_right: null
            }
        ]
    },
};

module.exports = Projects;

