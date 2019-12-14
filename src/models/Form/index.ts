export interface FormStateModel {
  active: String;
};

export interface FormPropsModel {};

export interface FormModel {
  handleClick: (active: String, cb: (active: String) => void) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};
