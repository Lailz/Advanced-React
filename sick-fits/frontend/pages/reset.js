import Reset from "../components/Reset";

const ResetPassword = props => (
  <div>
    <p>Reset Your Password</p>
    <Reset resetToken={props.query.resetToken} />
  </div>
);

export default ResetPassword;
