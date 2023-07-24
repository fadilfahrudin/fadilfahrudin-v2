/* eslint-disable react/prop-types */

const ToolsStack = ({ icon, nameIcon }) => {
    return (
        <div className="tools-wrapp">
            <img src={icon} alt={nameIcon} className="tool" />
        </div>
    )
}

export default ToolsStack;