// const header = document.createElement('h1')
// header.innerText = `Hello My Friend !!`
// document.querySelector('body').appendChild(header)

// // React CODE


const header = React.createElement("h1",{id: "heading"}, `Hello from an React App!`)

console.log(`Page header element: `, header)


const parent = React.createElement(
    "div",
    {id: "parent"},
    [
        React.createElement(
            "div", 
            {id: "child1"}, 
            [
                React.createElement(
                    "h1", 
                    {}, 
                    "I am a H1 Tag"
                    ),
                React.createElement(
                    "h2", 
                    {}, 
                    "I am a H2 Tag"
                    )
            ]
        ),
        React.createElement(
            "div", 
            {id: "child2"}, 
            [
                React.createElement(
                    "h1", 
                    {}, 
                    "I am a H1 Tag"
                    ),
                React.createElement(
                    "h2", 
                    {}, 
                    "I am a H2 Tag"
                    )
            ]
        )
    ]
)

console.log(`Parent element: `, parent)

        
const root = ReactDOM.createRoot(document.querySelector("#root"))

console.log(`Root element: `, root)

root.render(parent)