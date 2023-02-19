export type addProps = {
  addTask: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  maxLength: number;
};

export type deleteProps = {
  removeTodo: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export type inputHandler =
  | React.KeyboardEvent<HTMLTextAreaElement>
  | React.KeyboardEvent<HTMLInputElement>;
