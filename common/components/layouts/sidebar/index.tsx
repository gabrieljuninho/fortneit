import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="fixed left-auto top-0 bg-white-500">
      <div className="w-60 py-10 pl-2 pr-3">
        <nav className="flex flex-col gap-3">
          <Link
            href="/"
            className="block rounded-md bg-black-500 px-3 py-2 transition-colors hover:bg-accent/90"
          >
            <span className="text-base font-semibold text-white-500">Home</span>
          </Link>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
