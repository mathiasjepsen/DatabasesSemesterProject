import React from "react"

// const api = require("axios").create({ baseURL: "http://localhost:8000/api" })

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    // onSubmitButtonClicked = () => {
    //     api.get(onLogin ? "/login" : "/signup", {
    //         params: onLogin ? loginParams : signupParams
    //     })
    //         .then(response => {
    //             this.setState({ successfullySubmitted: response.data, didSubmit: true })
    //         })
    // }

    render() {
        const rowsDummy = [
            { city: "Copenhagen", title: "The Necronomicon", author: "Lovro Biljeskovic", geolocation: "64.127573, -21.903975" },
            { city: "Copenhagen", title: "The Necronomicon", author: "Lovro Biljeskovic", geolocation: "64.127573, -21.903975" },
            { city: "Copenhagen", title: "The Necronomicon", author: "Lovro Biljeskovic", geolocation: "64.127573, -21.903975" }
        ]

        return (
            <div style={{ display: "flex", flexDirection: "column", width: "100%", height: "100%" }}>
                <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 80 }}>
                        <label>MySQL</label>
                        <input type="radio" defaultChecked />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 80 }}>
                        <label>MongoDB</label>
                        <input type="radio" />
                    </div>
                </div>
                <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: 10 }}>
                    <div style={styles.headerRowContainer}>
                        <label>City</label>
                        <input style={styles.inputField} type="text" />
                    </div>
                    <div style={styles.headerRowContainer}>
                        <label>Book title</label>
                        <input style={styles.inputField} type="text" />
                    </div>
                    <div style={styles.headerRowContainer}>
                        <label>Author</label>
                        <input style={styles.inputField} type="text" />
                    </div>
                    <div style={styles.headerRowContainer}>
                        <label>Geolocation</label>
                        <input style={styles.inputField} type="text" />
                    </div>
                </div>
                <table style={{ borderCollapse: "collapse", marginTop: 18, marginRight: 10, marginLeft: 10 }} border="1">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Book title</th>
                            <th>Author</th>
                            <th>Geolocation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {buildTableBody(rowsDummy)}
                    </tbody>
                </table>
            </div>
        )
    }
}

const buildTableBody = (rows) => {
    return rows.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.city}</td>
                <td>{row.title}</td>
                <td>{row.author}</td>
                <td>{row.geolocation}</td>
            </tr>
        )
    })
}

const styles = {
    inputField: {
        width: 200,
        height: 24,
        marginTop: 2
    },
    headerRowContainer: {
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        fontFamily: "helvetica"
    }
}

//                <iframe src="../test-map.html" height="500" width="500"></iframe>

// const MessageBox = (props) => {
//     const { onLogin, successfullySubmitted } = props

//     return (
//         <div id="messageBox" style={{ marginTop: "8px", display: "flex", width: "100%", height: "48px", boxShadow: "inset -1px -1px 3px 0px rgba(0,0,0,0.3)", background: successfullySubmitted ? "lightgreen" : "crimson", justifyContent: "center", alignItems: "center" }}>
//             <h4 id="messageBoxText" style={{ color: successfullySubmitted ? "honeydew" : "black" }}>
//             {onLogin
//                 ? (successfullySubmitted ? "Successfully logged in" : "Failed to log in")
//                 : (successfullySubmitted ? "Successfully signed up" : "Failed to sign up")
//             }
//             </h4>
//         </div>
//     )
// }

// const SubmitButtons = (props) => {
//     const { onChangeComponentButtonClicked, onSubmitButtonClicked, onLogin } = props

//     return (
//         <table style={{ width: "100%" }}>
//             <tbody style={{ display: "flex", justifyContent: "space-between" }}>
//                 <tr>
//                     <td style={{ padding: "0px" }}>
//                         <button
//                             id="changeComponentButton"
//                             style={{ width: "80px", height: "36px" }}
//                             onClick={onChangeComponentButtonClicked}>{onLogin ? "Signup" : "Login"}</button>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td style={{ padding: "0px" }}>
//                         <button
//                             id="submitButton"
//                             style={{ width: "80px", height: "36px" }}
//                             onClick={onSubmitButtonClicked}>Submit</button>
//                     </td>
//                 </tr>
//             </tbody>
//         </table>
//     )
// }