import { useState, useEffect } from "react";
import "./tasks.scss";
import {taskList2} from '../static/task'

// imports related to DND
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export function Tasks({ data}) {

  // const deleteModal = (data) => {
  //   data.map(item => delete item.isOpen)
  //     return data;  
  // }

  // const daily = deleteModal(data)

  const [dailyTask, setDailyTask] = useState(data);
  const [weeklyTask, setWeeklyTask] = useState(taskList2);

  useEffect(() => {
    setDailyTask(data);
    setWeeklyTask(taskList2);
  }, [data]);

  // Function for deleting items from list using index
  const deleteItem = (list, index) => {
    return list.splice(index, 1);
  };

  // Function called when Drag Ends
  const onDragEnd = (result) => {
    // getting the source and destination object
    const { source, destination } = result;
    if (!destination) return;

    if (source.droppableId === destination.droppableId) {
      if (source.droppableId === "daily") {
        let tempdailyTask = Array.from(dailyTask);
        const removed = deleteItem(tempdailyTask, source.index);
        tempdailyTask.splice(destination.index, 0, removed);
        setDailyTask(tempdailyTask);
      } else {
        let tempweeklyTask = weeklyTask;
        const removed = deleteItem(tempweeklyTask, source.index);
        tempweeklyTask.splice(destination.index, 0, removed);
        setWeeklyTask(tempweeklyTask);
      }
    } else {
      let tempdailyTask = Array.from(dailyTask);
      let tempweeklyTask = weeklyTask;
      if (source.droppableId === "daily") {
        const removed = deleteItem(tempdailyTask, source.index);
        tempweeklyTask.splice(destination.index, 0, removed);
        setDailyTask(tempdailyTask);
        setWeeklyTask(tempweeklyTask);
      } else {
        const removed = deleteItem(tempweeklyTask, source.index);
        tempdailyTask.splice(destination.index, 0, removed);
        setDailyTask(tempdailyTask);
        setWeeklyTask(tempweeklyTask);
      }
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
    <DragDropContext onDragEnd={onDragEnd}>
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
                {dailyTask.map(({ content, id }, index) => (
                  <Draggable
                    key={index}
                    draggableId={`${content}${id} ${index}`}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <li
                        key={`${id} ${index}`}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        {content}
                      </li>
                    )}
                  </Draggable>
                ))}
              </ul>
              {/* {provided.placeholder} */}
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
                {weeklyTask.map(({ content, id }, index) => (
                  <Draggable
                    key={index}
                    draggableId={`${content}${id}${index}`}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <li
                        key={`${id} ${index}`}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
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
