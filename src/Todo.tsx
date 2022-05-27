import { FC } from "react";
import { TodoType } from "./typs/todo";

// Pickの逆はOmit　（使用しないものを記載する
export const Todo: FC<Pick<TodoType, "userId" | "title" | "completed">> = (
  props
) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};
