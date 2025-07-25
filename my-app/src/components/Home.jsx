const Home = ({ name }) => {
  return (
    <div className="text-center">
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#b74bccff' }}>
        {name}
      </h1>
      <p className="lead">Aspiring MERN Stack Developer</p>
    </div>
  );
};

export default Home;
