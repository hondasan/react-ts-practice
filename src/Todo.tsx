import { TodoType } from "./typs/todo";

// Pickの逆はOmit　（使用しないものを記載する
export const Todo = (
  props: Pick<TodoType, "userId" | "title" | "completed">
) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};
