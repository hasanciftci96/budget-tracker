import React from "react"
import ReactDOM from "react-dom"
import { SpeechProvider } from "@speechly/react-client"
import "./index.css"
import App from "./App"
import { Provider } from "./context/context"

ReactDOM.render(
    <SpeechProvider appId="352da1b7-e1e4-4fdc-a7df-cdfc4c8c3037" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById("root")
)
