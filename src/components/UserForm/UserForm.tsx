import { FC } from "react";
import Joi from "joi";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";

import css from "./UserForm.module.css";
import { usersService } from "../../services/jsonplaceholder/usersService";
import { IUser } from "../../types/User";

interface IFormData {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

const formSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    "string.base": "Name should be a type of 'text'",
    "string.empty": "Name cannot be an empty field",
    "string.min": "Name should have a minimum length of {#limit}",
    "string.max": "Name should have a maximum length of {#limit}",
  }),
  username: Joi.string().min(3).max(30).max(20).required(),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.base": "Email should be a type of 'text'",
      "string.empty": "Email cannot be an empty field",
    }),
  phone: Joi.string().required().messages({
    "string.base": "Phone should be a type of 'text'",
    "string.empty": "Phone cannot be an empty field",
  }),
  website: Joi.string().required().messages({
    "string.base": "Website should be a type of 'text'",
    "string.empty": "Website cannot be an empty field",
  }),
});

interface IProps {
  onSubmit: (data: IUser) => void;
}

const UserForm: FC<IProps> = ({ onSubmit }) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<IFormData>({
    resolver: joiResolver(formSchema),
    mode: "onChange",
  });

  const onSuccessSubmit = async (data: IFormData) => {
    const { data: user } = await usersService.create(data);
    onSubmit(user);
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSuccessSubmit)} className={css.form}>
        <label htmlFor="name" className={css.formField}>
          <span>Name</span>
          <input id="name" type="text" {...register("name")} />
          <span className={css.error}>{errors.name?.message}</span>
        </label>

        <label htmlFor="username" className={css.formField}>
          <span>Username</span>
          <input id="username" type="text" {...register("username")} />
          <span className={css.error}>{errors.username?.message}</span>
        </label>

        <label htmlFor="email" className={css.formField}>
          <span>Email</span>
          <input id="email" type="email" {...register("email")} />
          <span className={css.error}>{errors.email?.message}</span>
        </label>

        <label htmlFor="phone" className={css.formField}>
          <span>Phone</span>
          <input id="phone" type="text" {...register("phone")} />
          <span className={css.error}>{errors.phone?.message}</span>
        </label>

        <label htmlFor="website" className={css.formField}>
          <span>Website</span>
          <input id="website" type="text" {...register("website")} />
          <span className={css.error}>{errors.website?.message}</span>
        </label>

        <button className={css.submitButton} disabled={!isValid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
