import React from "react";
import './tasks.scss'

// imports related to DND
import { Droppable, Draggable } from "react-beautiful-dnd";

export function Tasks({ data, dailyTask, weeklyTask }) {
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
              {data.map((content, index) => (
                <Draggable
                  key={index}
                  draggableId={`${content}${index}`}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <li
                      key={index}
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
              {weeklyTask.map((data, index) => (
                <Draggable
                  key={data}
                  draggableId={`${data}${index}`}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <li
                      key={index}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {data}
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
  );
}
