type Props = {
  setname: (value: string) => void;
  names: string;
};
export default function Example({ setname, names }: Props) {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setname(e.target.value)}
        value={names}
      />
    </div>
  );
}
