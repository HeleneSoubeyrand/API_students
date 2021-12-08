import Form from '../components/Form';
import List from '../components/List';


const Home = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-6">
          <List />
        </div>
        <div className="col-6">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Home;