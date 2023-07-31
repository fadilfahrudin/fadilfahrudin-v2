/* eslint-disable react/prop-types */

const ToolsStack = ({ icon, nameIcon, width, height }) => {
    return (
        <div className="tools-wrapp">
            <img src={icon} alt={nameIcon} className="tool" width={width} height={height} />
        </div>
    )
}

export default ToolsStack;