import { useEffect, useRef, useState } from "react";
import Card from "./components/Card";
import Loading from "./components/Loading";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState([]);
  const [page, setPage] = useState(1);

  const target = useRef(null);

  const dataLoader = async(page) => {
    return await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`
    )
    .then((response ) => response.json())
    .then((data) => data);    
  };

  const createObserver = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLoading(true);
          dataLoader(page).then((newItem) => {
            setItem((prev) => [...prev, ...newItem]);
            setLoading(false);
            setPage((prev) => prev+1);
          });
        }
      });
    });
    return observer;
  };

  useEffect(() => {
    const observer = createObserver();
    observer.observe(target.current);
    return () => observer.disconnect();
  }, [page]);

  return (
    <div className="text-center m-8">
      <p className="text-3xl text-lime-300 font-semibold">
        Infinite Scroll Machine Coding Round{" "}
      </p>
      <div className="flex gap-5 justify-center items-center flex-wrap">
        {item.map((i, index) => (
          <Card
            key={index}
            id={i.id}
            user_id={i.userId}
            title={i.title}
            description={i.body}
          />
        ))}
      </div>
      {loading && <Loading />}
      <div ref={target} />
    </div>
  );
};

export default App;
