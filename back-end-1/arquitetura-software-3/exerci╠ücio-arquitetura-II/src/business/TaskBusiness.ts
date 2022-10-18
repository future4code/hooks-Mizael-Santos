import { TaskDatabase } from "../data/TaskDatabase";
import { CustomError } from "../error/CustomError";
import { InvalidRequest } from "../error/invalidRequest";
import { generateId } from "../services/generateId";
import { taskImputDTO } from "../types/taskDTO";

export class TaskBusiness {
  public createTask = async (input: taskImputDTO) => {
    try {
      const { title, description, deadline, authorId } = input;

      if (!title || !description || !deadline || !authorId) {
        throw new InvalidRequest()
      }

      const id: string = generateId()

      const taskDatabase = new TaskDatabase();

      await taskDatabase.insertTask({
        id,
        title,
        description,
        deadline,
        authorId,
      });
    } catch (error: any) {
      throw new CustomError(error.statusCode , error.message);
    }
  };
}
