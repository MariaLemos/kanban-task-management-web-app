const getTotalOfSubtasksConcluded = (task: Task) =>
  task.subtasks.filter((subtask) => subtask.isCompleted).length;

export const getSubtasksConcludedProportion = (
  task: Task
): [subtasksConcluded: number, totalOfSubtasks: number] => {
  const totalOfSubtasks = task.subtasks.length;
  const subtasksConcluded = getTotalOfSubtasksConcluded(task);

  return [subtasksConcluded, totalOfSubtasks];
};
