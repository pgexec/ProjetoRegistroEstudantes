
import '../Style/Message.css'

function Message({children,...props})
{
    return(
        <div {...props}>
            <h4>{children}</h4>
        </div>
    )
}

export default Message;