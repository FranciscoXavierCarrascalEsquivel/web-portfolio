type ButtonProps = {
  label: string;
};

export default function Button({ label }: ButtonProps) {
  return (
    <>
      <a
        href="#"
        className="group relative inline-block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
      >
        <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-green-500 transition-transform group-hover:translate-x-0 group-hover:translate-y-0" />
        <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold tracking-widest text-white uppercase">
          {label}
        </span>
      </a>
    </>
  );
}
