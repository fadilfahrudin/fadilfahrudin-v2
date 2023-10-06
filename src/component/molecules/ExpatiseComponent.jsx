import { useEffect, useState } from "react";
import onLoadData from "../../utils/skeleton";
import ToolsStack from "../atomic/Tools";
import APIConfig from "../../config/APIConfig";

const ExpatiseComponent = () => {
    window.addEventListener('load', () => {
        onLoadData();
    })
    const [stack, setStack] = useState([])
    const stacksFav = {
        react: '',
        js: '',
        sass: '',
        figma: '',
        redux: ''
    }
    useEffect(() => {
        async function stacks() {
            try {
                const response = await fetch(`${APIConfig.baseUrl}/techstacks`)
                const data = await response.json()
                setStack(data.result)
            } catch (error) {
                console.log(error)
            }
        }
        stacks()
    }, [])

    stack.forEach(item => {
        switch (item.name) {
            case 'react':
                stacksFav.react = item.iconUrl
                break;
            case 'js':
                stacksFav.js = item.iconUrl
                break;
            case 'redux':
                stacksFav.redux = item.iconUrl
                break;
            case 'sass':
                stacksFav.sass = item.iconUrl
                break;
            case 'figma':
                stacksFav.figma = item.iconUrl
                break;
            default:
                break;
        }
    }
    )

    return (
        <section className="expartise">
            <h4>My favorite tech stack:</h4>
            <div className="tools-stack">
                <ToolsStack icon={stacksFav.js} nameIcon={'Javascript'} height={30} width={30} />
                <ToolsStack icon={stacksFav.react} nameIcon={'React'} height={30} width={30} />
                <ToolsStack icon={stacksFav.redux} nameIcon={'Redux'} height={30} width={30} />
                <ToolsStack icon={stacksFav.sass} nameIcon={'Sass'} height={30} width={30} />
                <ToolsStack icon={stacksFav.figma} nameIcon={'Figma'} height={30} width={30} />
            </div>
        </section>
    )
}

export default ExpatiseComponent;