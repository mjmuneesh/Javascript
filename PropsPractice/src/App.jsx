import Card from './components/card.jsx'
import Button from './components/Button.jsx'


function App() {

  const users = [
    {
      name: "Muneesh Sharma",
      age: 28,
      designation: "Frontend Lead",
      profileImage: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      name: "Ashima Gupta",
      age: 26,
      designation: "UI/UX Designer",
      profileImage: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      name: "Aashi Verma",
      age: 24,
      designation: "React Developer",
      profileImage: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
      name: "Shristi Sharma",
      age: 25,
      designation: "QA Engineer",
      profileImage: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
      name: "Rahul Singh",
      age: 30,
      designation: "Backend Developer",
      profileImage: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
      name: "Priya Kapoor",
      age: 27,
      designation: "Project Manager",
      profileImage: "https://randomuser.me/api/portraits/women/6.jpg"
    },
    {
      name: "Aman Khanna",
      age: 29,
      designation: "DevOps Engineer",
      profileImage: "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
      name: "Neha Sharma",
      age: 23,
      designation: "Business Analyst",
      profileImage: "https://randomuser.me/api/portraits/women/8.jpg"
    },
    {
      name: "Karan Malhotra",
      age: 31,
      designation: "Tech Lead",
      profileImage: "https://randomuser.me/api/portraits/men/9.jpg"
    },
    {
      name: "Ritika Arora",
      age: 28,
      designation: "Full Stack Developer",
      profileImage: "https://randomuser.me/api/portraits/women/10.jpg"
    }
  ];

  return (
    <div className='min-h-screen bg-zinc-900 p-8 flex flex-wrap justify-center items-center gap-6'>
      {users.map((elem) => {
        return (
          <Card
            key={elem.name}
            name={elem.name}
            age={elem.age}
            designation={elem.designation}
            profileImage={elem.profileImage}
          />
        )
      })}
    </div>
  )
}

export default App
