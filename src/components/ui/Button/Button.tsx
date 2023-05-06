import './Button.scss';

type ButtonProps = {
  label: string;
};

export function Button({ label }: ButtonProps): JSX.Element {
  return (
    <button className='button' type='button'>
      <span className='button__label'>{label}</span>
    </button>
  );
}
