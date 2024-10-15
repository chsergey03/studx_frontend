interface MainContentProperties {
  headerTitle: string;
  content: React.ReactNode;
  isSectionFlex?: boolean;
}

function MainContent({ headerTitle, content, isSectionFlex = false }: MainContentProperties) {
  return (
    <main>
      <div
        className="
          m-[1rem]
          p-[1rem]
          rounded-[2.75rem]
          bg-[#222222]
        "
      >
        <h1 className="text-center">{headerTitle}</h1>

        <section
          className={`
            ${isSectionFlex ? 'flex flex-wrap' : ''}
            mx-[-0.5rem]
          `}
        >
          {content}
        </section>
      </div>
    </main>
  );
}

export default MainContent;