import Cards from "./Cards";

function ProjectCard({ PortDatas }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
      {PortDatas.map((item) => <Cards key={item.id} items={item} />).reverse()}
    </div>
  );
}

export default ProjectCard;
