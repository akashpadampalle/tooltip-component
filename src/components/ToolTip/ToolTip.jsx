import "./tooltip.css"

const ToolTip = ({ position, comment, children }) => {
  return (
    <div className={`tooltip-wrapper tooltip-position-${position}`}>
        <div className={`tooltip-comment`}>
            {comment}
        </div>
        <div className="tooltip-children">
            {children}
        </div>
    </div>
  )
}

export default ToolTip