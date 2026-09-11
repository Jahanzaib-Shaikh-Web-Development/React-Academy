import "./App.css";

function Header() {
  return (
    <header className="header">
      <div className="container nav">
        <div className="logo">
          <span className="logo-icon">🎓</span>
          <span>React Academy</span>
        </div>

        <nav>
          <a href="#home" className="active">Home</a>
          <a href="#courses">Courses</a>
          <a href="#students">Students</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <h1>Welcome to React Academy</h1>

        <p>
          Learn React.js step by step with simple, beginner-friendly lessons
          designed to take you from zero to your first app.
        </p>

        <a href="#courses" className="primary-btn">
          Explore Courses <span>→</span>
        </a>
      </div>
    </section>
  );
}

const courses = [
  {
    icon: "</>",
    title: "React.js Basics",
    description:
      "Learn the fundamentals of React.js including components, props, state, and hooks.",
  },
  {
    icon: "▱",
    title: "JavaScript Fundamentals",
    description:
      "Master variables, functions, arrays, objects, and modern ES6+ JavaScript syntax.",
  },
  {
    icon: "◎",
    title: "Web Development",
    description:
      "Build responsive websites with HTML, CSS, and the core tools every developer needs.",
  },
];

function Courses() {
  return (
    <section id="courses" className="section">
      <div className="container">
        <div className="section-heading">
          <div className="section-icon">▣</div>
          <h2>Our Courses</h2>
          <p>Pick a course and start learning today.</p>
        </div>

        <div className="cards">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <div className="card-icon">{course.icon}</div>

              <h3>{course.title}</h3>

              <p>{course.description}</p>

              <button className="secondary-btn">
                View Course
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const students = [
  {
    name: "Ali",
    course: "React.js",
    letter: "A",
  },
  {
    name: "Sara",
    course: "JavaScript",
    letter: "S",
  },
  {
    name: "Ahmed",
    course: "Web Development",
    letter: "A",
  },
];

function Students() {
  return (
    <section id="students" className="section students-section">
      <div className="container">
        <div className="section-heading">
          <div className="section-icon">♧</div>
          <h2>Our Students</h2>
          <p>Meet students currently learning with us.</p>
        </div>

        <div className="students">
          {students.map((student, index) => (
            <div className="student-card" key={index}>
              <div className="avatar">{student.letter}</div>

              <div>
                <h3>{student.name}</h3>
                <p>{student.course}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-box">
          <div className="contact-icon">✉</div>

          <h2>Get in Touch</h2>

          <p>
            Have questions about our courses? Contact us and we will be happy
            to help.
          </p>

          <button className="contact-btn">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2026 React Academy. All rights reserved.</p>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Courses />
        <Students />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;