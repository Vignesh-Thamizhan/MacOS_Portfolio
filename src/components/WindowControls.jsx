import useWindowStore from "../store/window.js";

const WindowControls = ({target}) => {
    const { closeWindow} = useWindowStore();
  return (
    <div id="window-controls">
      <div className="close" onclick={() => closeWindow(target)}/>
      <div className="minimize" onclick={() => closeWindow(target)}/>
        <div className="maximize" onclick={() => closeWindow(target)}/>
    </div>
  )
}

export default WindowControls;