import Firebase from "../config/firebase";

export const addTodo = async (task) => {
  try {
    const docRef = Firebase.firestore().collection("todo").doc();

    await docRef.set({
      id: (await docRef.get()).id,
      task: task,
    });

    return {
      success: true,
      msg: "Todo added successfully",
      data: (await docRef.get()).data(),
    };
  } catch (err) {
    return { success: false, msg: err };
  }
};

export const getTodo = async (setTodoList) => {
  try{
    const collectionRef = Firebase.firestore().collection('todo');

    var unsubscribe = collectionRef.onSnapshot((snapshot) => {
      var todoList = [];
      const todos = snapshot.docs;

      for(var id in todos){
        let data = todos[id].data();
        todoList.push({id:data['id'], task:data['task']});
      }

      setTodoList(todoList);
   });

   return { success: true, msg: "Got Todo", unsubscribe:unsubscribe };
  } catch(err) {
    return { success: false, msg: err };
  }
}

export const deleteTodo = async (id) => {
  try {
    const docRef = Firebase.firestore().collection('todo').doc(id);

    await docRef.delete();

    return { success: true, msg: "Deleted the todo successfully", data:{id: id} };
  } catch(err) {
    return { success: false, msg: err };
  }
}