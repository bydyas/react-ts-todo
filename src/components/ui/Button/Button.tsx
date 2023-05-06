import './Button.scss';

type ButtonProps = {
  label: string;
  modifier: 'save' | 'delete';
};

export function Button({ label, modifier }: ButtonProps): JSX.Element {
  return (
    <button className={`button button--${modifier}`} type='button'>
      <span className='button__label'>{label}</span>
    </button>
  );
}
