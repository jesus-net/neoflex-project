import { nanoid } from "nanoid";

import "@components/Table/Table.scss";

const Table = () => {
  let data = [
    {
      id: nanoid(),
      title: "Figma smart web system for to build",
      created: "12/04/2021",
      type: "hardware",
      status: "declined",
      actions: "browse",
    },
    {
      id: nanoid(),
      title: "Figma smart web system for to build",
      created: "13/04/2021",
      type: "software",
      status: "new",
      actions: "browse",
    },
    {
      id: nanoid(),
      title: "Figma smart web system for to build",
      created: "14/04/2021",
      type: "troubleshooting",
      status: "in progress",
      actions: "browse",
    },
    {
      id: nanoid(),
      title: "Figma smart web system for to build",
      created: "14/04/2021",
      type: "troubleshooting",
      status: "in progress",
      actions: "browse",
    },
    {
      id: nanoid(),
      title: "Figma smart web system for to build",
      created: "14/04/2021",
      type: "troubleshooting",
      status: "in progress",
      actions: "browse",
    },
    {
      id: nanoid(),
      title: "Figma smart web system for to build",
      created: "14/04/2021",
      type: "troubleshooting",
      status: "in progress",
      actions: "browse",
    },
    {
      id: nanoid(),
      title: "Figma smart web system for to build",
      created: "14/04/2021",
      type: "troubleshooting",
      status: "in progress",
      actions: "browse",
    },
    {
      id: nanoid(),
      title: "Figma smart web system for to build",
      created: "14/04/2021",
      type: "troubleshooting",
      status: "in progress",
      actions: "browse",
    },
    {
      id: nanoid(),
      title: "Figma smart web system for to build",
      created: "14/04/2021",
      type: "troubleshooting",
      status: "in progress",
      actions: "browse",
    },
    {
      id: nanoid(),
      title: "Figma smart web system for to build",
      created: "14/04/2021",
      type: "troubleshooting",
      status: "in progress",
      actions: "browse",
    }
  ];
  return (
    <table className="table">
      <thead className="table__head">
        <tr>
          <th>Title</th>
          <th>Created</th>
          <th>Type</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      {data.map((value) => (
        <tbody className="table__body" key={value.id}>
          <tr className="table__title">
            <td>Created</td>
            <td>Type</td>
            <td>Status</td>
          </tr>
          <tr className="table__data">
            <td className="table__question">{value.title}</td>
            <td className="table__created">{value.created}</td>
            <td>
              <p className={"table__type " + value.type}>{value.type}</p>{" "}
            </td>
            <td>
              {" "}
              <div
                className={"table__status " + value.status.split(" ").join("")}
              >
                {value.status}
              </div>
            </td>
            <td>
              <a href="#" className="table__link">
                {value.actions}
              </a>
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

export default Table;
