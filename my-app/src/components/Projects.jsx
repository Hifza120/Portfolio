const Projects = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4" style={{ color: 'black' }}>
        My Projects
      </h2>

      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '10px', marginBottom: '20px' }}>
        <h5 style={{ fontWeight: 'bold' }}>
          Emirates Website Clone (React-based Form Manipulation)
        </h5>
        <a href="https://github.com/Hifza120/Emirates-React-Project.git"  style={{ color: '#007bff', textDecoration: 'none' }}>
          View on GitHub
        </a>
        <p style={{ marginTop: '10px' }}>
          This is a front-end clone of the Emirates Airlines website
           focusing on form manipulation using React.
        </p>
      </div>

      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '10px' }}>
        <h5 style={{ fontWeight: 'bold' }}>SQL Project</h5>
        <h6 style={{ color: 'gray' }}>Neighborhood-Community-Issue-Management-System</h6>
        <a href="https://github.com/Hifza120/-Neighborhood-Community-Issue-Management-System-" target="_blank" rel="noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>
          View on GitHub
        </a>
        <p style={{ marginTop: '10px' }}>
          Database project including entities like Resident, Event, Notification, Comment, Issue, Authorities, and more.
        </p>
      </div>
    </div>
  );
};

export default Projects;
