import { NavBar } from '../NavBar/NavBar';

export const Header = () => {
  console.log('test');
  return (
    <div className="header__container">
      <h2>Garion Morgan</h2>
      <h2>Software Developer</h2>
      <h2>
        Building reliable systems and empowering teams through clarity,
        precision, and purpose.
      </h2>
      <button>View Projects</button>
      <button>Download Resume</button>
      <NavBar />
    </div>
  );
};
