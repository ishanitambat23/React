export const Practices = () => {
  const students = [5];
  console.log(Boolean(students.length));
  console.log(students.length);
  return (
    <>
      {/* <p>{students.length && "No student found"}</p> */}

      {/* 1 */}
      {/* <p>{students.length === 0 && "No student found"}</p> */}

      {/* 2 */}
      {/* <p>{!students.length  && "No student found"}</p> */}

      {/* 3 */}
      <p>{Boolean(!students.length)  && "No student found"}</p>

      <p>Number of students: {students.length}</p>
    </>
  );
};
