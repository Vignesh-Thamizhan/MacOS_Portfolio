import useWindowStore from "../store/window";

export const Windows = () => {
    const { windows, closeWindow } = useWindowStore();

    const renderWindowContent = (windowKey) => {
        switch (windowKey) {
            case "finder":
                return (
                    <div className="window-content">
                        <div className="text-center p-8">
                            <h2 className="text-2xl font-bold">Portfolio</h2>
                            <p className="text-gray-600 mt-2">Welcome to my portfolio</p>
                        </div>
                    </div>
                );
            case "safari":
                return (
                    <div className="window-content">
                        <div className="text-center p-8">
                            <h2 className="text-2xl font-bold">Articles</h2>
                            <p className="text-gray-600 mt-2">My articles and blog posts</p>
                        </div>
                    </div>
                );
            case "photos":
                return (
                    <div className="window-content">
                        <div className="text-center p-8">
                            <h2 className="text-2xl font-bold">Gallery</h2>
                            <p className="text-gray-600 mt-2">My photography and designs</p>
                        </div>
                    </div>
                );
            case "contact":
                return (
                    <div className="window-content">
                        <div className="text-center p-8">
                            <h2 className="text-2xl font-bold">Contact</h2>
                            <p className="text-gray-600 mt-2">Get in touch with me</p>
                        </div>
                    </div>
                );
            case "terminal":
                return (
                    <div className="window-content">
                        <div className="text-center p-8">
                            <h2 className="text-2xl font-bold">Skills</h2>
                            <p className="text-gray-600 mt-2">My technical skills</p>
                        </div>
                    </div>
                );
            default:
                return <div className="window-content p-8">Window content</div>;
        }
    };

    return (
        <div className="windows-container">
            {Object.entries(windows).map(([windowKey, window]) => (
                window.isOpen && (
                    <div
                        key={windowKey}
                        className="window"
                        style={{ zIndex: window.zIndex }}
                    >
                        <div className="window-header">
                            <h3 className="window-title">{windowKey}</h3>
                            <button
                                className="window-close"
                                onClick={() => closeWindow(windowKey)}
                            >
                                ✕
                            </button>
                        </div>
                        {renderWindowContent(windowKey)}
                    </div>
                )
            ))}
        </div>
    );
};
