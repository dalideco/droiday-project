import { FontAwesome } from "@expo/vector-icons"
import React from "react"
import { useThemeColor } from "./Themed"

export const LeftSVG = ({ style }: { style: any }) => {
    const color = useThemeColor({}, 'background')
    return (
        <FontAwesome name="arrow-right" color={color} style={style} size={15} />
    )
}