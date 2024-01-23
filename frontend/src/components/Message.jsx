import { Alert } from "react-bootstrap";


const Message = ({Variant,children}) => {
  return (
    <Alert variant={Variant}>
        {children}
    </Alert>
  )
}
Message.defaultProps = {
    variant: 'info',
};
export default Message