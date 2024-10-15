interface ElementProperties {
  title: string;
}

function Element({ title }: ElementProperties) {
  return (
    <div
      className="
        m-[0.5rem]
        p-[1rem]
        rounded-[1.75rem]
        bg-[#3b3b3b]
        text-center
      "
    >
      <p>{title}</p>
    </div>
  );
}

export default Element;