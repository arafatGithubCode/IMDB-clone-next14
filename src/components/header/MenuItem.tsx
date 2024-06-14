import Link from "next/link";

type Props = {
  title: string;
  address: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const MenuItem = ({ title, address, Icon }: Props) => {
  return (
    <Link
      href={address}
      className="hover:text-amber-500 hoverEffect p-2 rounded-full"
    >
      <Icon className="sm:hidden text-2xl" />
      <p className="hidden sm:inline text-sm uppercase font-semibold">
        {title}
      </p>
    </Link>
  );
};

export default MenuItem;
