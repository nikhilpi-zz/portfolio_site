// Homepage Model


var Home = {
    work_exp: [
        {
            name: "Slack",
            slug: "slack",
            img_src: "/img/slack.png",
            role: "Front-end Engineering Intern",
            start_date: new Date(2015,6,21),
            end_date: new Date(2015,9,11),
            summary: "Developed client side feature allowing for the creation of custom handles for a set of slack members. Assisted Product Manager in designing and specifying features for enterprise customers."
        },
        {
            name: "Groupon",
            slug: "groupon",
            img_src: "/img/groupon.png",
            role: "Homepage Software Engineering Intern",
            start_date: new Date(2015,11,21),
            end_date: new Date(2015,11,22),
            summary: "Redesigned homepage ‘hero deal’ and developed a “recently viewed” widget that generated $2 million in marginal monthly revenue."
        },
        {
            name: "Delta Lab",
            slug: "delta",
            img_src: "/img/delta.png",
            role: "Student Researcher",
            start_date: new Date(2015,11,21),
            end_date: new Date(2015,11,22),
            summary: "hink of a time when you could describe something, but just couldn't figure out the name. For example, you could recite the plot of a movie but couldn't come up with the title. Other people are great at answering these kinds of questions, but existing search tools like IMDb aren't so great--you can only search by Title, Actors, etc. We wanted to create an application that could answer these kinds of questions, and provide an intuitive interface: one that a user can interact with as if they were describing the plot to another person."
        },
        {
            name: "Knight Lab",
            slug: "knight",
            img_src: "/img/knightlab.png",
            role: "Student Technology Fellow",
            start_date: new Date(2015,11,21),
            end_date: new Date(2015,11,22),
            summary: "Developed a JS plugin to display a side bar containing context information for long form articles. Wrote quarterly blog posts about current technology trends in the journalism community."
        }
    ],
    skills: [
        {
            name: "Coding",
            icon: "fa-terminal",
            items: [
                "Javascript",
                "Python",
                "HTML/CSS",
                "Frameworks: Angular, Meteor, Express"
            ]
        },
        {
            name: "Hardware",
            icon: "fa-cog",
            items: [
                "Arduino",
                "Rasberry Pi",
                "CAD",
                "3D Printing",
                "CNC"
            ]
        },
        {
            name: "Design",
            icon: "fa-object-group",
            items: [
                "Adobe CS (Ai, PS, AF, Pr, iD)",
                "Sketch",
                "Wireframing",
                "Design Sketching",
                "Photography",
            ]
        },
        {
            name: "Entrepreneurship",
            icon: "fa-lightbulb-o",
            items: [
                "UI/UX",
                "Marketing Campaigns",
                "Product Design",
            ]
        }
    ]
};

module.exports = Home;

