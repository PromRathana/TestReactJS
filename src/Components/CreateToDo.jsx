const CreateToDo = () => {
  const task = 20;
  //   const getTask = () => {
  //     if (task) {
  //       return task;
  //     } else {
  //       return "No Task";
  //     }
  //   };
  const getTask = () => (task ? task : "No Task");
  return (
    <>
      <p>Tasks : {getTask()}</p>
      <button>Add task</button>
    </>
  );
};

export default CreateToDo;
