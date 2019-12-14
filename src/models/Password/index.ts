export interface PasswordStateModel {
  show: Boolean;
};

export interface PasswordPropsModel {};

export interface PasswordModel {
  handleClick: (show: Boolean, cb: (show: Boolean) => void) => void;
};
