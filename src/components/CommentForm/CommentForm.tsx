import { FC } from "react";
import { useForm } from "react-hook-form";
import css from "./CommentForm.module.css";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { commentsService } from "../../services/jsonplaceholder/commentsService";
import { IComment } from "../../types/Comment";

interface IFormData {
  name: string;
  email: string;
  body: string;
}

const POST_ID = 1;

const formSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    "string.base": "Name should be a type of 'text'",
    "string.empty": "Name cannot be an empty field",
    "string.min": "Name should have a minimum length of {#limit}",
    "string.max": "Name should have a maximum length of {#limit}",
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.base": "Email should be a type of 'text'",
      "string.empty": "Email cannot be an empty field",
    }),
  body: Joi.string().required().messages({
    "string.base": "Body should be a type of 'text'",
    "string.empty": "Body cannot be an empty field",
  }),
});

interface IProps {
  onSubmit: (data: IComment) => void;
}

const CommentForm: FC<IProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormData>({
    resolver: joiResolver(formSchema),
    mode: "onChange",
  });

  const onSuccessSubmit = async (data: IFormData) => {
    const { data: comment } = await commentsService.create({
      ...data,
      postId: POST_ID,
    });

    onSubmit(comment);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSuccessSubmit)}>
      <label htmlFor="name" className={css.formField}>
        <span>Name</span>
        <input type="text" id="name" {...register("name")} />
        <span className={css.error}>{errors.name?.message}</span>
      </label>

      <label htmlFor="email" className={css.formField}>
        <span>Email</span>
        <input type="email" id="email" {...register("email")} />
        <span className={css.error}>{errors.email?.message}</span>
      </label>

      <label htmlFor="body" className={css.formField}>
        <span>Body</span>
        <textarea id="body" {...register("body")} />
        <span className={css.error}>{errors.body?.message}</span>
      </label>

      <button className={css.submitButton} disabled={!isValid}>
        Submit
      </button>
    </form>
  );
};

export default CommentForm;
