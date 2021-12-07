interface PlayerDataProp {
    name: string;
    value: string | number;
    suffix?: string;
}
const PlayerData = ({name, value, suffix }: PlayerDataProp) => (
  <li>
    {name} :{" "}
    <strong>
      {`${value}`}
      {suffix && ` ${suffix}`}
    </strong>
  </li>
);

export default PlayerData;
