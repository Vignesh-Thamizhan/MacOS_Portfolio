import WindowWrapper from "../hoc/WindowWrapper.jsx";
import { WindowControls } from "../components";
import { PanelLeft, ChevronLeft, ChevronRight, ShieldHalf, Search, Share, Plus, Copy, MoveRight } from "lucide-react";
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

        <div className="blog p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">My Developer Blog</h2>

            <div className="space-y-6">
                {blogPosts.map(({id, image, title, date, link}) => (
                    <div key={id} className="blog-post flex gap-4 pb-6 border-b border-gray-200 last:border-b-0">
                        <div className="shrink-0">
                            <img src={image} alt={title} className="w-24 h-24 object-cover rounded" />
                        </div>

                        <div className="content flex-1">
                            <p className="text-xs text-gray-500 mb-1">{date}</p>
                            <h3 className="text-sm font-semibold text-gray-800 mb-2">{title}</h3>
                            <a href="{link}" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-xs font-medium flex items-center gap-1 transition-colors"> 
                                Check out the full post <MoveRight size={14} className="icon-hover" />
                            </a>
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