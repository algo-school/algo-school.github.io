
// import { MendableFloatingButton } from '@mendable/search'

// const style = {darkMode: true, accentColor: "#8559F4"}
// const floatingButtonStyle = {backgroundColor: "#8559F4", color: "#ffffff"}

// <MendableFloatingButton
//     style={style}
//     floatingButtonStyle={floatingButtonStyle}
//     placeholder="چطوری تو کلاس ثبت نام کنم؟"
//     showSimpleSearch={true}
//     dialogPlaceholder="دنبال چی میگردی؟"
//     anon_key={"70c47b61-f58d-4b6e-82d2-6ee6ad58cc7c"} 
// />



import { MendableFloatingButton } from "@mendable/search"
import React from 'react'

const style = { darkMode: false, accentColor: "#123456" }

const floatingButtonStyle = {
    color: "#fff",
    backgroundColor: "#123456"
}

const icon = <img src="https://www.mendable.ai/images/logo.svg" />

export default function App() {
    return (
        <MendableFloatingButton
            style={style}
            floatingButtonStyle={floatingButtonStyle}
            // placeholder="How do I sign up for a class?"
            showSimpleSearch={true}
            dialogPlaceholder="What are you looking for?"
            anon_key="70c47b61-f58d-4b6e-82d2-6ee6ad58cc7c"
            icon={icon}
        />
    )
}
// """

// # import { MendableFloatingButton } from"

// <MendableFloatingButton icon={icon} anon_key='YOUR_ANON_KEY' style={style} floatingButtonStyle={floatingButtonStyle} />
