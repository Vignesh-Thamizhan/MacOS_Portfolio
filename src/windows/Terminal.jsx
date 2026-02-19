import { Check } from "lucide-react";
import WindowWrapper from "../hoc/WindowWrapper.jsx";
import { techStack } from "../constants/index.js";

const Terminal = () => {
  return <>
    <div id="window-header">
        <p>Window Control</p>
        <h2>Tech Stack</h2>
    </div>

    <div className="techstack">
        <p>
            <span>@vignesh % </span>
            show tech stack
        </p>

        <div className="label">
            <p>Category</p>
            <p>Technologies</p>
        </div>

        <ul className="content">
            {techStack.map(({category, items}) => (
                <li key={category}>
                    <Check className="check" size={16}/>
                    <div className="flex gap-4 flex-1">
                        <h3>{category}</h3>
                        <ul className="flex flex-wrap">
                            {items.map((item, i) => (
                                <li key={i}>{item}{i < items.length - 1 ? ', ' : ''}</li>
                            ))}
                        </ul>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  </>
};

const TerminalWindow= WindowWrapper(Terminal, "terminal");

export default TerminalWindow;