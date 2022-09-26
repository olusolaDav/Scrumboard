import { useState, useEffect } from "react";
import "./tasks.scss";
//import {taskList2} from '../static/task'

// imports related to DND
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export function Tasks({ daily, weekly, deleteTask}) {
 

  const [dailyTask, setDailyTask] = useState(daily);
  const [weeklyTask, setWeeklyTask] = useState(weekly);

  useEffect(() => {
    setDailyTask(daily);
    setWeeklyTask(weekly);
  }, [daily, weekly]);

  // Function for deleting items from list using index
  // const deleteItem = (list, index) => {
  //   return list.splice(index, 1);
  // };

  // Function called when Drag Ends
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    if (result.source?.droppableId === "daily") {
      const items = Array.from(dailyTask);
      const [reorderedItems] = items.splice(result.source.index, 1);
      setDailyTask(items);
      setWeeklyTask([...weeklyTask, reorderedItems]);
    } else if (result.source?.droppableId === "weekly") {
      const items = Array.from(weeklyTask);
      const [reorderedItems] = items.splice(result.source.index, 1);
      setWeeklyTask(items);
      setDailyTask([...dailyTask, reorderedItems]);
    }
  };

  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "drakgray" : "transparent",
    width: "50%",
    margin: "auto",
    marginTop: "4rem",
    boxShadow: `iinset 5px 5px 5px rgba(236, 159, 16, 0.2),
    inset -5px -5px 15px rgba(252, 233, 150, 0.1),
    5px 5px 15px rgba(236, 223, 223, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1)`,
    marginRight: "3rem",
  });

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",

    // change background colour if dragging
    background: isDragging
      ? "rgba(236, 159, 16, 0.4)"
      : "rgba(255, 255, 255, .9)",
    color: isDragging ? "rgba(255, 255, 255, .9)" : "black",
    padding: isDragging ? "0%" : "2%",
    boxShadow: "5px 5px 15px rgba(255, 255, 255)",
    margin: "0%",
    fontSize: "17px",
    borderBottom: "0.5px solid gray",

    // styles we need to apply on draggables
    ...draggableStyle,
  });

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div style={{ width: "100%", display: "flex" }}>
        <Droppable droppableId="daily">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              <ul
                style={{
                  listStyleType: "none",
                  textAlign: "left",
                  padding: "1%",
                  boxShadow: `iinset 5px 5px 5px rgba(236, 159, 16, 0.2),
                 inset -5px -5px 15px rgba(252, 233, 150, 0.1),
                5px 5px 15px rgba(236, 223, 223, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1)`,
                  background: "#2196f3",
                  width: "100%",
                }}
              >
                <h3
                  style={{
                    padding: "2%",
                    background: "#022949",
                    textAlign: "center",
                  }}
                >
                  DAILY TASKS
                </h3>
                {dailyTask.map(({ id, content }, index) => (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided, snapshot) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                        onClick={() => deleteTask(id)}
                      >
                        {content}
                      </li>
                    )}
                  </Draggable>
                ))}
              </ul>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="weekly">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              <ul
                style={{
                  listStyleType: "none",
                  textAlign: "left",
                  padding: "1%",
                  background: "#e91e63",
                  width: "100%",
                }}
              >
                <h3
                  style={{
                    padding: "2%",
                    background: "#880934",
                    textAlign: "center",
                  }}
                >
                  WEEKLY TASKS
                </h3>
                {weeklyTask.map(({ id, content }, index) => (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided, snapshot) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                        onClick={() => deleteTask(`${id}`)}
                      >
                        {content}
                      </li>
                    )}
                  </Draggable>
                ))}
              </ul>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}
