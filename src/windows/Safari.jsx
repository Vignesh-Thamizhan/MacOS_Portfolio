import WindowWrapper from "../hoc/WindowWrapper.jsx";
import { WindowControls } from "../components";
import { PanelLeft, ChevronLeft, ChevronRight, ShieldHalf, Search, Share, Plus, Copy } from "lucide-react";
import { blogPosts } from "../constants";

const Safari = () => {
  return (
    <>
        <div id="window-header">
            <div className="flex items-center gap-3">
                <WindowControls target="safari" />
                <PanelLeft className="icon" />

                <div className="flex items-center gap-1">
                    <ChevronLeft className="icon" />
                    <ChevronRight className="icon" />
                </div>

                <ShieldHalf className="icon" />
            </div>

            <div className="search flex items-center gap-2 px-3 py-1.5">
                <Search className="icon" size={18} />
                <input type="text" 
                    placeholder="search or enter a website"
                    className="flex-1 bg-transparent text-sm" />
            </div>

            <div className="flex items-center gap-2">
                <Share className="icon" />
                <Plus className="icon" />
                <Copy className="icon" />
            </div>
        </div>

        <div className="blog">
            <h2>My Blog</h2>

            <div className="space-y-8">
                {blogPosts.map(({id, image, title, date, link}) => (
                    <div key={id} className="blog-post">
                        <div className="col-span-2">
                            <img src={image} alt={title} />
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, 'safari');

export default SafariWindow;