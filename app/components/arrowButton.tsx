import { RxArrowRight } from "react-icons/rx";

type Props = {
  styleBtn: string;
  name: string;
  styleName: string;
  styleIcn?: string;
};

const ArrowButton = (props: Props) => {
  return (
    <button className={props.styleBtn}>
      <p className={props.styleName}>{props.name}</p>
      <RxArrowRight className={props.styleIcn} />
    </button>
  );
};

export default ArrowButton;
