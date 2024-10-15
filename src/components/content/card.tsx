import { Link } from "react-router-dom";

interface CardProperties {
  title: string;
  id: number;
  coverPath: string;
}

function Card({ title, id, coverPath }: CardProperties) {
  return (
    <div
      className="
        w-full
        sm:w-1/2
        md:w-1/3
        lg:w-1/4
        px-[0.5rem]
      "
    >
      <div
        className="
          flex-col
          box-border
          mt-[1rem]
          p-[1rem]
          rounded-[1.75rem]
          overflow-hidden
          bg-[#3b3b3b]
          will-change-transform
          transition-transform
          hover:-translate-y-1
          duration-300
          ease-in-out
          group
        "
      >
        <img
          className="
            object-cover
            w-full
            h-[7.5rem]
            rounded-[0.75rem]
          "
          src={coverPath}
        />

        <div
          className="
            flex
            justify-between
            h-[3.875rem]
            mt-[1rem]
          "
        >
          <span>{title}</span>

          <Link
            to={`course/${id}`}
            className="
              p-[1rem]
              rounded-[0.75rem]
            bg-blue-600
              hover:bg-blue-700
              opacity-0
              group-hover:opacity-100
              will-change-opacity
              transition-opacity
              duration-300
              ease-in-out
            "
          >
            Зайти
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;