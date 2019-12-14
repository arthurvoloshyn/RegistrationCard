import { PasswordModel } from "../../models/Password";

const PasswordController: PasswordModel = {
  handleClick: (show: Boolean, cb: (show: Boolean) => void) => {
    const changeShow: Boolean = (show === true) ? (show = false) : (show = true);

    cb(changeShow);
  },
};

export default PasswordController;
