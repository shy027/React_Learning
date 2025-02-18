import React from "react";

class Mission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { id: 101, name: "张三", score: 99 },
        { id: 102, name: "李四", score: 88 },
        { id: 103, name: "王五", score: 92 },
        { id: 104, name: "赵六", score: 55 },
        { id: 105, name: "孙七", score: 65 },
        { id: 106, name: "周八", score: 78 },
        { id: 107, name: "吴九", score: 45 },
      ],
      displayedStudents: [], // 用于存储当前显示的学生列表
    };
  }

  componentDidMount() {
    // 初始时显示所有学生
    this.setState({ displayedStudents: this.state.students });
  }

  filterStudents = (range) => {
    const { students } = this.state;
    let filteredStudents = [];
    filteredStudents = students.filter((student) => student.score >= range);
    this.setState({ displayedStudents: filteredStudents });
  };
  
 
  render() {
    const { displayedStudents } = this.state;
  
    return (
      <div>
        <h2>学生信息列表</h2>
        <button onClick={() => this.filterStudents(90)}>90分以上</button>
        <button onClick={() => this.filterStudents(80)}>80分以上</button>
        <button onClick={() => this.filterStudents(60)}>60分以上</button>
        <button onClick={() => this.filterStudents(0)}>显示全部</button>
        <ul>
          {displayedStudents.map((student) => (
            <li key={student.id}>
              {student.name} - {student.score}分
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Mission;
