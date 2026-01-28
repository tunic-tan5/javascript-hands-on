//given data
const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];
// MODULE 2: COURSE CATALOG ENGINE
//   -> Get published courses
//   -> Sort courses by price (high → low)
//   -> Extract { title, price } only
//   -> Calculate total value of published courses
//   -> Add a new course immutably
// the above tasks should be implemented in this module

//1.Get published courses
  let publishedCourses=courses.filter(course => course.published===true);
  console.log("Published courses are:",publishedCourses);

//2. Sort courses by price (high → low)
  let sortedCourses=courses.sort((First,second)=>second.price-First.price);
  console.log(sortedCourses)

//3.Extract { title, price } only
  let titleAndPrice=courses.map(({title,price})=>({title,price}))
  console.log(titleAndPrice)

//4.Calculate total value of published courses
  let totalValueofPublishedCourses=courses.reduce((acc,course)=>(course.published===true)?acc+course.price:acc,0);
  console.log("total value of published course:",totalValueofPublishedCourses)  
// 5.Add a new course immutably
// create a new course
  let newCourse={
    id: 104, title: "HTML", price: 1599, published: true
  }
  //adding all the courses using spread operator and adding new course pushing into updatedCourse
  let updatedCourses=[...courses,newCourse]
  console.log(updatedCourses)

  export {courses};
  