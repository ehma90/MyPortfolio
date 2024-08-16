import { techStack } from "@/data/resume";
import Image from "next/image";

const TechStack = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:justify-items-center gap-7">
      <ul>
        <h4 className="font-bold text-xl">Languages</h4>
        {techStack[0].languages.map((item, index) => (
          <li key={index} className="mt-5">
            <div className="flex items-center gap-3">
              <Image
                src={item.image}
                width={40}
                height={40}
                alt={item.language}
                className=" pointer-events-none w-8 h-8 object-cover"
              />
              <p className="font-medium">{item.language}</p>
            </div>
          </li>
        ))}
      </ul>
      <ul>
        <h4 className="font-bold text-xl">Libraries & Frameworks</h4>
        {techStack[0].framework.map((item, index) => (
          <li key={index} className="mt-5">
            <div className="flex items-center gap-3">
              <Image
                src={item.image}
                width={40}
                height={40}
                alt={item.language}
                className=" pointer-events-none w-8 h-8 object-cover"
              />
              <p className="font-medium">{item.language}</p>
            </div>
          </li>
        ))}
      </ul>
      <ul>
        <h4 className="font-bold text-xl">Tools & Platforms</h4>
        {techStack[0].tools.map((item, index) => (
          <li key={index} className="mt-5">
            <div className="flex items-center gap-3">
              <Image
                src={item.image}
                width={40}
                height={40}
                alt={item.language}
                className=" pointer-events-none w-8 h-8 object-cover"
              />
              <p className="font-medium">{item.language}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TechStack;
