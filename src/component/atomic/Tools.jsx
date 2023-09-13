/* eslint-disable react/prop-types */

import onLoadData from "../../utils/skeleton";

const ToolsStack = ({ icon, nameIcon, width, height }) => {
    return (
        <div className="tools-loading loading">
            <div className="tools-wrapp">
                <img src={icon} alt={nameIcon} className="tool" width={width} height={height} onLoad={() => onLoadData()} />
            </div>
        </div>
    )
}

export default ToolsStack;