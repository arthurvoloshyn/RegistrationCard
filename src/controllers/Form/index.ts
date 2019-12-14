import Alert from "react-s-alert";
import { FormModel } from "../../models/Form";
import UtilsController from "../Utils";

const { configAlert } = UtilsController;

const FormController: FormModel = {
  handleClick: (active: String, cb: (active: String) => void) => {
    const newActive: String = active === "registration" ? "signIn" : "registration";

    cb(newActive);
  },

  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    Alert.success("Success", configAlert);
  },
};

export default FormController;
