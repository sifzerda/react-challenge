import BucketList from '../components/BucketList';
import ProjectList from '../components/ProjectList';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      
      
      
      <p>
        Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
        Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
        dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus
        sodales volutpat et, hendrerit ut dolor. 
      </p>

      <BucketList />


<div className="project-list">
<h1>My Projects</h1>
      <ProjectList />

</div>


    </div>
  );
}
